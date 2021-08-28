import axios from 'axios';

import { authConstants } from '../redux/actionTypes/index';
/**
 * 
 * @type {AxiosInstance}
 */

const apiWrapper = axios.create({
    baseURL: 'http://localhost:5000/api/v1/auth',
    headers: {
        withCredentials: true,
        'Content-Type': 'application/json',
        responseType: 'json',

    },
});

apiWrapper.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem(authConstants.AUTH_TOKEN);
        if (token) {
            config.headers['Authorization'] = "Bearer " + token;
        }
        return Promise.resolve(config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiWrapper;

