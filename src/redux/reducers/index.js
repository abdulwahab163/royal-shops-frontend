import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import categoryReducer from './category.reducer';

const appReducer = combineReducers({
	auth: authReducer,
	category: categoryReducer,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
