import http from './ApiWrapper';

export default class Auth {
	/**
	 * User SignUp
	 * @returns {Promise <T> | never>}
	 */
	registerUser = async (payload) => {
		const res = await http.post('/register-account', { values: payload });
		if (res && res?.data?.success) {
			return {
				user: res?.data?.result,
				success: true,
			};
		} else {
			return {
				success: false,
				status: res?.data?.status,
				message: res?.data?.msg,
			};
		}

	};

	/**
	 * User signIn
	 * @returns {Promise <T> | never>}
	 */
	signIn = async ({ email, password }) => {
		const res = await http.post('/login', { email, password });

		if (res && res?.data?.userData?.tokenInfo) {
			return {
				user: res?.data?.userData,
				success: true,
			};
		} else {
			return {
				success: false,
				status: res?.status,
				message: res?.statusText,
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
