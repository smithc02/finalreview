import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../ducks/reducer';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			passwrd: ''
		};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.signup(this.state.username, this.state.password);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.username}
						type="username"
						name="username"
						placeholder=" username"
						onChange={this.handleChange}
					/>
					<input
						value={this.state.username}
						type="password"
						name="password"
						placeholder=" password"
						onChange={this.handleChange}
					/>

					<button>Sign up</button>
				</form>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps, { signup: signup })(Signup);
