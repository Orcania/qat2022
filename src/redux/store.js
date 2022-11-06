import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import modalReducer from './reducers/modalReducer';
import homeReducer from './reducers/homeReducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    modalReducer,
    homeReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
