import { authConstants } from './../actionTypes/index';
import { toastMessage } from './../../components/Toastify'

const initialState = {
	user: null,
	isAuthenticated: false,
	error: null
};

const authReducer = (state = initialState, action) => {

	const { type, payload } = action;
	switch (type) {
		//Register
		case authConstants.REGISTER_USER_REQUEST: {
			return {
				...state,
				isAuthenticated: false,
				loading: true,
				error: null,
			};
		}

		case authConstants.REGISTER_USER_SUCCESS: {
			toastMessage("Registered Successfully", 'success')
			return {
				...state,
				user: payload,
				isAuthenticated: false,
				loadingStatus: true,
				error: null,
			};
		}

		case authConstants.REGISTER_USER_FAIL: {
			toastMessage("Registered UnSuccessfull", 'error')
			return {
				...state,
				isAuthenticated: false,
				loadingStatus: false,
				error: payload,
			};
		}

		//SIGN-IN
		case authConstants.SIGNIN_REQUEST: {
			return {
				...state,
				isAuthenticated: false,
				loadingStatus: true,
				error: null,
			};
		}

		case authConstants.SIGNIN_SUCCESS: {
			toastMessage("LoggedIn Successfully", 'success')
			return {
				...state,
				user: payload,
				isAuthenticated: true,
				loadingStatus: false,
				error: null,
			};
		}

		case authConstants.SIGNIN_FAIL: {
			toastMessage("SignIn UnSuccessfull", 'error')
			return {
				...state,
				isAuthenticated: false,
				loadingStatus: false,
				error: payload,
			};
		}

		case authConstants.RESET_AUTH: {
			return {
				...state,
				user: null,
				credentials: null,
				userRegistered: false,
				isAuthenticated: false,
				isLoggedIn: false,
				loadingStatus: null,
				error: null,
			};
		}

		case authConstants.LOGOUT: {
			return {
				...state,
				user: null,
				isAuthenticated: false,
				error: null
			};
		}
		default:
			return state;
	}
};
export default authReducer;
