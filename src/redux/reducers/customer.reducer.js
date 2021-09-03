import { customerConstants } from '../actionTypes/index';
import { toastMessage } from '../../components/Toastify'

const initialState = {
    singleCustomer: '',
    customerList: [],
    loading: false,
    error: null
};

const customerReducer = (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {

        case customerConstants.GET_ALL_CUSTOMERS_REQUEST: {
            return {
                ...state,
                customerList: [],
                loading: true,
                error: null
            };
        }
        case customerConstants.GET_ALL_CUSTOMERS_SUCCESS: {
            return {
                ...state,
                customerList: payload,
                loading: false,
                error: null
            };
        }
        case customerConstants.GET_ALL_CUSTOMERS_FAIL: {
            return {
                ...state,
                customerList: [],
                loading: false,
                error: payload
            };
        }
        case customerConstants.GET_CUSTOMER_REQUEST: {
            return {
                ...state,
                singleCustomer: '',
                loading: false,
                error: null
            };
        }
        case customerConstants.GET_CUSTOMER_SUCCESS: {
            return {
                ...state,
                singleCustomer: payload,
                loading: false,
                error: null
            };
        }
        case customerConstants.GET_CUSTOMER_FAIL: {
            return {
                ...state,
                singleCustomer: '',
                loading: false,
                error: payload,
            };
        }
        case customerConstants.ADD_CUSTOMER_REQUEST: {
            return {
                ...state,
                singleCustomer: '',
                loading: true,
                error: null,

            };
        }
        case customerConstants.ADD_CUSTOMER_SUCCESS: {
            toastMessage("CUSTOMER Added", "success")
            return {
                ...state,
                singleCustomer: payload,
                customerList: [...state.customerList, payload],
                loading: false,
                error: null
            };
        }
        case customerConstants.ADD_CUSTOMER_FAIL: {
            toastMessage(payload, "error")
            return {
                ...state,
                singleCustomer: '',
                loading: false,
                error: payload
            };
        }
        case customerConstants.UPDATE_CUSTOMER_REQUEST: {
            return {
                ...state,
                singleCustomer: '',
                loading: true,
                error: null
            };
        }
        case customerConstants.UPDATE_CUSTOMER_SUCCESS: {
            toastMessage("CUSTOMER Updated", success)
            return {
                ...state,
                singleCustomer: payload,
                loading: false,
                error: null
            };
        }
        case customerConstants.UPDATE_CUSTOMER_FAIL: {
            toastMessage(payload, "error")
            return {
                ...state,
                singleCustomer: '',
                loading: false,
                error: payload
            };
        }
        case customerConstants.DELETE_CUSTOMER_REQUEST: {
            return {
                ...state,
                loading: false,
                error: null
            };
        }
        case customerConstants.DELETE_CUSTOMER_SUCCESS: {
            toastMessage("CUSTOMER Deleted", success)
            return {
                ...state,
                customerList: state.customerList.filter(customer => customer.id !== payload.id),
                loading: false,
                error: null
            };
        }
        case customerConstants.DELETE_CUSTOMER_FAIL: {
            toastMessage(payload, "error")
            return {
                ...state,
                singleCustomer: payload,
                loading: false,
                error: null
            };
        }
        default:
            return state;
    }
};
export default customerReducer;
