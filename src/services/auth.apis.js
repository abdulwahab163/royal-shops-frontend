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
	signIn = async (payload) => {
		const signUpResponse = await http.post('auth/login', payload);
		if (signUpResponse && signUpResponse?.data?.success) {
			return {
				user: signUpResponse?.data,
				success: true,
			};
		} else {
			return {
				success: false,
				status: signUpResponse?.data?.status,
				message: signUpResponse?.data?.message,
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

	getAgentBySlug = async (slug) => {
		try {
			const agentInfo = await http.get(`agent/get-info/${slug}`);
			if (agentInfo && agentInfo?.data?.success) {
				return agentInfo?.data.results;
			} else {
				return null;
			}
		} catch (error) {
			return null;
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
