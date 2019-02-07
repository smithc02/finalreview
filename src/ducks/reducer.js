import axios from 'axios';
const initialState = {
	user: {},
	error: ''
};

// action types
const SIGN_UP = 'SIGN_UP';
const LOGIN = 'LOGIN';
const GET_USER = 'GET_USER';

//action creators

export function signup(username, password) {
	return {
		type: SIGN_UP,
		payload: axios.post('/auth/signup', { username, password })
	};
}

export function login(username, password) {
	return {
		type: LOGIN,
		payload: axios.post('/auth/login', { username, password })
	};
}
export function get_user() {
	return {
		type: GET_USER,
		payload: axios.get('/auth/user')
	};
}

//export default function of each action type/creators
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case `${SIGN_UP}_FULFILLED`:
			return { ...state, user: action.payload.data };

		case `${LOGIN}_FULFILLED`:
			return { ...state, user: action.payload.data };
		case `${LOGIN}_REJECTED`:
			return { ...state, error: 'Username or password is incorrect ' };
		case `${GET_USER}_FULFILLED`:
			return { ...state, user: action.payload.data };
		default:
			return state;
	}
}
