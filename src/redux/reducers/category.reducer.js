import { categoryConstants } from './../actionTypes/index';
import { toastMessage } from './../../components/Toastify'

const initialState = {
    name: '',
    loading: false
};

const categoryReducer = (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {

        case categoryConstants.GET_ALL_CATEGORIES_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        default:
            return state;
    }
};
export default categoryReducer;
