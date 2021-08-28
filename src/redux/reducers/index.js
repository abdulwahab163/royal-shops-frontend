import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';

const appReducer = combineReducers({
	auth: authReducer,
	category: categoryReducer,
	product: productReducer
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
