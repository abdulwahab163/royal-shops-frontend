import { authConstants } from './../actionTypes/index';
import { AuthApis } from '../../services';

const auth = new AuthApis();

export const registerUser = (userData) => async (disptach) => {

	disptach({ type: authConstants.REGISTER_USER_REQUEST });

	try {
		const registeredResponce = await auth.registerUser(userData);
		if (registeredResponce?.success) {
			disptach({
				type: authConstants.REGISTER_USER_SUCCESS,
				payload: registeredResponce?.user?.data,
			});
		} else {
			disptach({
				type: authConstants.REGISTER_USER_FAIL,
				payload: registeredResponce.message,
			});
		}
	} catch (e) {
		disptach({
			type: authConstants.REGISTER_USER_FAIL,
			payload: "Sign in Failed",
		});
	}
};

export const signIn = (loginData) => async (disptach) => {
	disptach({ type: authConstants.SIGNIN_REQUEST });
	try {
		const signInResponse = await auth.signIn(loginData);

		if (signInResponse.success) {
			localStorage.setItem(
				authConstants.AUTH_TOKEN,
				JSON.stringify(signInResponse?.user?.tokenInfo)
			);
			localStorage.setItem(
				authConstants.USER,
				JSON.stringify(signInResponse?.user?.userInfo)
			);
			disptach({
				type: authConstants.SIGNIN_SUCCESS,
				payload: signInResponse.user?.userInfo,
			});
		} else {
			disptach({
				type: authConstants.SIGNIN_FAIL,
				payload: signInResponse.message,
			});
		}
	} catch (e) {
		disptach({
			type: authConstants.SIGNIN_FAIL,
			payload: "Sign in Failed",
		});
	}
};

export const logout = () => (disptach) => {
	localStorage.removeItem(authConstants.AUTH_TOKEN);
	localStorage.removeItem(authConstants.USER);
	disptach({ type: authConstants.LOGOUT, payload: "Logged Out Successfully" });
};

export const setUserAndToken = (token, userInfo) => async (disptach) => {
	disptach({ type: authConstants.SET_USER_AND_TOKEN, payload: { token, userInfo } });
}

export const getUserInfo = () => async (disptach) => {
	try {
		const userInfoResponse = await auth.getUserInfo();
		if (userInfoResponse?.user?.results?.meta) {
			setItem(
				'homeOwner_id',
				userInfoResponse?.user?.results?.meta?.homeowner?._id
			);
			disptach({
				type: authConstants.SET_USER_META,
				payload: userInfoResponse?.user?.results?.meta,
			});

			disptach({
				type: authConstants.SIGNIN_SUCCESS,
				payload: userInfoResponse.user?.data,
			});
			// SET AGENT ID
			disptach({
				type: authConstants.SET_AGENT_ID,
				payload: userInfoResponse?.user?.results?.meta?.agent?._id,
			});
		} else {
			disptach({
				type: authConstants.SIGNIN_FAIL,
				payload: null,
			});
		}
	} catch (e) {
		removeItem(AUTH_TOKEN);
		disptach({ type: authConstants.SIGNIN_FAIL, payload: null });
	}
};

export const resetAuth = () => (disptach) => {
	disptach({ type: authConstants.RESET_AUTH });
};

export const checkAuth = ({ token }) => async (disptach, getState) => {
	disptach({ type: authConstants.CHECK_AUTH_REQUEST });

	try {
		const checkAuthResponse = await auth.checkAuth({ token });
		if (checkAuthResponse?.success) {
			disptach({
				type: authConstants.CHECK_AUTH_RESPONSE,
				success: true,
			});
		} else {
			disptach({
				type: authConstants.CHECK_AUTH_RESPONSE,
				success: false,
			});
		}
	} catch (e) {
		disptach({
			type: authConstants.SIGNIN_FAIL,
			payload: getApiExceptionError(e),
		});
	}
};
