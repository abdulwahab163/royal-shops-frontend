import { productConstants } from './../actionTypes/index';
import { ProductApis } from '../../services';

const product = new ProductApis();

export const getAllProducts = () => async (disptach) => {

    disptach({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });

    const res = await product.getAllProducts();
    if (res?.success) {
        disptach({
            type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: productConstants.GET_ALL_PRODUCTS_FAIL,
            payload: res.message,
        });
    }
};

export const addProduct = (productData) => async (disptach) => {

    disptach({ type: productConstants.ADD_PRODUCT_REQUEST });

    const res = await product.addProduct(productData);
    if (res?.success) {
        disptach({
            type: productConstants.ADD_PRODUCT_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: productConstants.ADD_PRODUCT_FAIL,
            payload: res.message,
        });
    }

};

export const getProduct = (id) => async (disptach) => {

    disptach({ type: productConstants.GET_PRODUCT_REQUEST });

    const res = await product.getProduct(id);
    if (res?.success) {
        disptach({
            type: productConstants.GET_PRODUCT_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: productConstants.GET_PRODUCT_FAIL,
            payload: res.message,
        });
    }

};

export const updateProduct = (id, product) => async (disptach) => {

    disptach({ type: productConstants.UPDATE_PRODUCT_REQUEST });

    const res = await product.updateProduct(id, product);
    if (res?.success) {
        disptach({
            type: productConstants.UPDATE_PRODUCT_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: productConstants.UPDATE_PRODUCT_FAIL,
            payload: res.message,
        });
    }

}
export const deleteProduct = (id) => async (disptach) => {

    disptach({ type: productConstants.DELETE_PRODUCT_REQUEST });

    const res = await product.deleteProduct(id);
    if (res?.success) {
        disptach({
            type: productConstants.DELETE_PRODUCT_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: productConstants.DELETE_PRODUCT_FAIL,
            payload: res.message,
        });
    }
};

