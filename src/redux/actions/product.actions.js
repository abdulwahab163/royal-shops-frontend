import { productConstants } from './../actionTypes/index';
import { ProductApis } from '../../services';

const product = new ProductApis();

export const getAllProducts = () => async (disptach) => {

    disptach({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });

    try {
        const res = await product.getAllProducts();
        if (res?.success) {
            disptach({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload: res?.user?.data,
            });
        } else {
            disptach({
                type: productConstants.GET_ALL_PRODUCTS_FAIL,
                payload: res.message,
            });
        }
    } catch (e) {
        disptach({
            type: productConstants.GET_ALL_PRODUCTS_FAIL,
            payload: "Something Went Wrong",
        });
    }
};

export const addProduct = (product) => async (disptach) => {

    disptach({ type: productConstants.ADD_PRODUCT_REQUEST });

    try {
        const res = await product.addProduct(product);
        if (res?.success) {
            disptach({
                type: productConstants.ADD_PRODUCT_SUCCESS,
                payload: res?.user?.data,
            });
        } else {
            disptach({
                type: productConstants.ADD_PRODUCT_FAIL,
                payload: res.message,
            });
        }
    } catch (e) {
        disptach({
            type: productConstants.ADD_PRODUCT_FAIL,
            payload: "Something Went Wrong",
        });
    }
};

export const getProduct = (id) => async (disptach) => {

    disptach({ type: productConstants.GET_PRODUCT_REQUEST });

    try {
        const res = await product.getProduct(id);
        if (res?.success) {
            disptach({
                type: productConstants.GET_PRODUCT_SUCCESS,
                payload: res?.user?.data,
            });
        } else {
            disptach({
                type: productConstants.GET_PRODUCT_FAIL,
                payload: res.message,
            });
        }
    } catch (e) {
        disptach({
            type: productConstants.GET_PRODUCT_FAIL,
            payload: "Something Went Wrong",
        });
    }
};

export const updateProduct = (id, product) => async (disptach) => {

    disptach({ type: productConstants.UPDATE_PRODUCT_REQUEST });

    try {
        const res = await product.updateProduct(id, product);
        if (res?.success) {
            disptach({
                type: productConstants.UPDATE_PRODUCT_SUCCESS,
                payload: res?.user?.data,
            });
        } else {
            disptach({
                type: productConstants.UPDATE_PRODUCT_FAIL,
                payload: res.message,
            });
        }
    } catch (e) {
        disptach({
            type: productConstants.UPDATE_PRODUCT_FAIL,
            payload: "Something Went Wrong",
        });
    }

    export const deleteProduct = (id) => async (disptach) => {

        disptach({ type: productConstants.UPDATE_PRODUCT_REQUEST });

        try {
            const res = await product.deleteProduct(id);
            if (res?.success) {
                disptach({
                    type: productConstants.UPDATE_PRODUCT_SUCCESS,
                    payload: res?.user?.data,
                });
            } else {
                disptach({
                    type: productConstants.UPDATE_PRODUCT_FAIL,
                    payload: res.message,
                });
            }
        } catch (e) {
            disptach({
                type: productConstants.UPDATE_PRODUCT_FAIL,
                payload: "Something Went Wrong",
            });
        }
    };
}