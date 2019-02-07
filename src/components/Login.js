import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../ducks/reducer';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
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
		this.props.login(this.state.username, this.state.password);
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

					<button>Login</button>
				</form>
				<Link to="/signup">Sign Up!</Link>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps, { login: login })(Login);
