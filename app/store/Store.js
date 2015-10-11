var reducers = require('../reducers/index');
var Redux = require('redux');
var createLogger = require('redux-logger');
var thunkMiddleware = require('redux-thunk');

var {
	createStore,
	applyMiddleware,
	combineReducers
} = Redux;

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware
)(createStore);

let store = createStoreWithMiddleware(combineReducers(reducers));
module.exports = store;
