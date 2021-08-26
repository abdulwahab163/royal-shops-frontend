import http from './ApiWrapper';

export default class Auth {
	/**
	 * User SignUp
	 * @returns {Promise <T> | never>}
	 */
	registerUser = async (payload) => {
		const registeredResponce = await http.post('/register-account', payload);
		if (registeredResponce && registeredResponce?.data?.success) {
			return {
				user: signInResponse?.data,
				success: true,
			};
		} else {
			return {
				success: false,
				status: signInResponse?.data?.status,
				message: signInResponse?.data?.message,
			};
		}

	};

	/**
	 * User signIn
	 * @returns {Promise <T> | never>}
	 */
	signIn = async ({ email, password }) => {
		const signInResponse = await http.post('/login', { email, password });

		if (signInResponse && signInResponse?.data?.userData?.tokenInfo) {
			return {
				user: signInResponse?.data?.userData,
				success: true,
			};
		} else {
			return {
				success: false,
				status: signInResponse?.status,
				message: signInResponse?.statusText,
			};
		}
	};

	getUserInfo = async () => {
		const userInfo = await http.get('user/user-info');
		if (userInfo && userInfo?.data?.success) {
			return {
				user: userInfo?.data,
				success: true,
			};
		} else {
			return {
				success: false,
				status: userInfo?.data?.status,
				message: userInfo?.data?.message,
			};
		}
	};


	/**
	 * User Authentication
	 * @returns {Promise <T> | never>}
	 */
	checkAuth = async (payload) => {
		// const authResponse = await http.post('auth/authenticate', payload);
		// if (signUpResponse && signUpResponse?.data?.success) {
		//   return {
		//     user: signUpResponse?.data,
		//     success: true,
		//   };
		// } else {
		//   return {
		//     success: false,
		//     status: signUpResponse?.data?.status,
		//     message: signUpResponse?.data?.message,
		//   };
	};
}
