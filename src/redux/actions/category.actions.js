import { categoryConstants } from './../actionTypes/index';
import { CategoryApis } from '../../services';

const category = new CategoryApis();

export const getAllCategories = () => async (disptach) => {

    disptach({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
    const res = await category.getAllCategories();
    if (res?.success) {
        disptach({
            type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: categoryConstants.GET_ALL_CATEGORIES_FAIL,
            payload: res.message,
        });
    }

};

export const addCategory = (userData) => async (disptach) => {

    disptach({ type: categoryConstants.ADD_CATEGORY_REQUEST });

    const res = await category.addCategory(userData);
    if (res?.success) {
        disptach({
            type: categoryConstants.ADD_CATEGORY_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: categoryConstants.ADD_CATEGORY_FAIL,
            payload: res.message,
        });
    }

};

export const getCategory = (id) => async (disptach) => {

    disptach({ type: categoryConstants.GET_CATEGORY_REQUEST });

    const res = await category.getCategory(id);
    if (res?.success) {
        disptach({
            type: categoryConstants.GET_CATEGORY_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: categoryConstants.GET_CATEGORY_FAIL,
            payload: res.message,
        });
    }

};

export const updateCategory = (id) => async (disptach) => {

    disptach({ type: categoryConstants.UPDATE_CATEGORY_REQUEST });

    const res = await category.updateCategory(id);
    if (res?.success) {
        disptach({
            type: categoryConstants.UPDATE_CATEGORY_SUCCESS,
            payload: res?.data,
        });
    } else {
        disptach({
            type: categoryConstants.UPDATE_CATEGORY_FAIL,
            payload: res.message,
        });
    }

};

