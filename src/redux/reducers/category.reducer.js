import { categoryConstants } from './../actionTypes/index';
import { toastMessage } from './../../components/Toastify'

const initialState = {
    singleCategory: '',
    categoryList: [],
    loading: false,
    error: null
};

const categoryReducer = (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {

        case categoryConstants.GET_ALL_CATEGORIES_REQUEST: {
            return {
                ...state,
                singleCategory: '',
                categoryList: [],
                loading: true,
                error: null,
            };
        }
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS: {
            return {
                ...state,
                singleCategory: '',
                loading: false,
                categoryList: payload,
                error: null,
            };
        }
        case categoryConstants.GET_ALL_CATEGORIES_FAIL: {
            return {
                ...state,
                singleCategory: '',
                loading: false,
                categoryList: [],
                error: payload,
            };
        }
        case categoryConstants.GET_CATEGORY_REQUEST: {
            return {
                ...state,
                singleCategory: '',
                categoryList: [],
                loading: true,
                error: null,
            };
        }
        case categoryConstants.GET_CATEGORY_SUCCESS: {
            return {
                ...state,
                singleCategory: payload,
                categoryList: [],
                loading: false,
                error: null,
            };
        }
        case categoryConstants.GET_CATEGORY_FAIL: {
            return {
                ...state,
                singleCategory: '',
                categoryList: [],
                loading: false,
                error: payload,
            };
        }
        case categoryConstants.ADD_CATEGORY_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case categoryConstants.ADD_CATEGORY_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
            };
        }
        case categoryConstants.ADD_CATEGORY_FAIL: {
            toastMessage(payload, "error")
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case categoryConstants.UPDATE_CATEGORY_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case categoryConstants.UPDATE_CATEGORY_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
            };
        }
        case categoryConstants.UPDATE_CATEGORY_FAIL: {
            toastMessage(payload, "error")
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case categoryConstants.DELETE_CATEGORY_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case categoryConstants.DELETE_CATEGORY_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
            };
        }
        case categoryConstants.DELETE_CATEGORY_FAIL: {
            toastMessage(payload, "error")
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        default:
            return state;
    }
};
export default categoryReducer;
