import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';

// Redux Debugger
let composeEnhancer = compose;
composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddlleware = createLogger();
const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(thunk, loggerMiddlleware))
);

export default store;
