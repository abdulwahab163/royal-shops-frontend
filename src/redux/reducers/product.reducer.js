import { productConstants } from './../actionTypes/index';
import { toastMessage } from './../../components/Toastify'

const initialState = {
    singleProduct: '',
    productList: [],
    loading: false,
    error: null
};

const productReducer = (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {

        case productConstants.GET_ALL_PRODUCTS_REQUEST: {
            return {
                ...state,
                productList: [],
                loading: true,
                error: null
            };
        }
        case productConstants.GET_ALL_PRODUCTS_SUCCESS: {
            return {
                ...state,
                productList: payload,
                loading: false,
                error: null
            };
        }
        case productConstants.GET_ALL_PRODUCTS_FAIL: {
            return {
                ...state,
                productList: [],
                loading: false,
                error: payload
            };
        }
        case productConstants.GET_PRODUCT_REQUEST: {
            return {
                ...state,
                singleProduct: '',
                loading: false,
                error: null
            };
        }
        case productConstants.GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                singleProduct: payload,
                loading: false,
                error: null
            };
        }
        case productConstants.GET_PRODUCT_FAIL: {
            return {
                ...state,
                singleProduct: '',
                loading: false,
                error: payload,
            };
        }
        case productConstants.ADD_PRODUCT_REQUEST: {
            return {
                ...state,
                singleProduct: '',
                loading: true,
                error: null,

            };
        }
        case productConstants.ADD_PRODUCT_SUCCESS: {
            toastMessage("Product Added", "success")
            return {
                ...state,
                singleProduct: payload,
                productList: [...state.productList, payload],
                loading: false,
                error: null
            };
        }
        case productConstants.ADD_PRODUCT_FAIL: {
            toastMessage(payload, "error")
            return {
                ...state,
                singleProduct: '',
                loading: false,
                error: payload
            };
        }
        case productConstants.UPDATE_PRODUCT_REQUEST: {
            return {
                ...state,
                singleProduct: '',
                loading: true,
                error: null
            };
        }
        case productConstants.UPDATE_PRODUCT_SUCCESS: {
            toastMessage("Product Updated", success)
            return {
                ...state,
                singleProduct: payload,
                loading: false,
                error: null
            };
        }
        case productConstants.UPDATE_PRODUCT_FAIL: {
            toastMessage(payload, "error")
            return {
                ...state,
                singleProduct: '',
                loading: false,
                error: payload
            };
        }
        case productConstants.DELETE_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: false,
                error: null
            };
        }
        case productConstants.DELETE_PRODUCT_SUCCESS: {
            toastMessage("Product Deleted", success)
            return {
                ...state,
                productList: state.productList.filter(product => product.id !== payload.id),
                loading: false,
                error: null
            };
        }
        case productConstants.DELETE_PRODUCT_FAIL: {
            toastMessage(payload, "error")
            return {
                ...state,
                singleProduct: payload,
                loading: false,
                error: null
            };
        }
        default:
            return state;
    }
};
export default productReducer;
