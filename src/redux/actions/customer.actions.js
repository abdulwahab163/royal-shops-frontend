import { customerConstants } from '../actionTypes/index';
import { CustomerApis } from '../../services';

const customer = new CustomerApis();

export const getAllCustomers = () => async (disptach) => {

    disptach({ type: customerConstants.GET_ALL_CUSTOMERS_REQUEST });

    const res = await customer.getAllCustomers();
    if (res?.success) {
        disptach({
            type: customerConstants.GET_ALL_CUSTOMERS_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: customerConstants.GET_ALL_CUSTOMERS_FAIL,
            payload: res.message,
        });
    }
};

export const addCustomer = (customerData) => async (disptach) => {

    disptach({ type: customerConstants.ADD_CUSTOMER_REQUEST });

    const res = await customer.addCustomer(customerData);
    if (res?.success) {
        disptach({
            type: customerConstants.ADD_CUSTOMER_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: customerConstants.ADD_CUSTOMER_FAIL,
            payload: res.message,
        });
    }

};

export const getCustomer = (id) => async (disptach) => {

    disptach({ type: customerConstants.GET_CUSTOMER_REQUEST });

    const res = await customer.getCustomer(id);
    if (res?.success) {
        disptach({
            type: customerConstants.GET_CUSTOMER_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: customerConstants.GET_CUSTOMER_FAIL,
            payload: res.message,
        });
    }

};

export const updateCustomer = (id, customer) => async (disptach) => {

    disptach({ type: customerConstants.UPDATE_CUSTOMER_REQUEST });

    const res = await customer.updateCustomer(id, customer);
    if (res?.success) {
        disptach({
            type: customerConstants.UPDATE_CUSTOMER_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: customerConstants.UPDATE_CUSTOMER_FAIL,
            payload: res.message,
        });
    }

}
export const deleteCustomer = (id) => async (disptach) => {

    disptach({ type: customerConstants.DELETE_CUSTOMER_REQUEST });

    const res = await customer.deleteCustomer(id);
    if (res?.success) {
        disptach({
            type: customerConstants.DELETE_CUSTOMER_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: customerConstants.DELETE_CUSTOMER_FAIL,
            payload: res.message,
        });
    }
};

