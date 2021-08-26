import { categoryConstants } from './../actionTypes/index';
import { AuthApis } from '../../services';

const auth = new AuthApis();

export const getAllCategories = () => async (disptach) => {

    disptach({ type: categoryConstants.GET_ALL_CATEGORIES });

    try {

    } catch (e) {
    }
};

