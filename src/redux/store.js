import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

// Redux Debugger
let composeEnhancer = compose;
composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
