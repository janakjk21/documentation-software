// user.js

// Define initial state
const initialState = {
	user: null,
	tokens: null,
};

// Define the login reducer
function loginReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			// Store user data and tokens in session storage
			sessionStorage.setItem('user', JSON.stringify(action.payload.userData));
			sessionStorage.setItem('tokens', JSON.stringify(action.payload.tokens));
			return {
				...state,
				user: action.payload.userData,
				tokens: action.payload.tokens,
			};
		case 'LOGIN_FAILURE':
			// Clear session storage
			sessionStorage.removeItem('user');
			sessionStorage.removeItem('tokens');
			return {
				...state,
				user: null,
				tokens: null,
			};
		default:
			return state;
	}
}

// Export the login reducer
export default loginReducer;
