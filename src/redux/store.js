import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import modalReducer from './reducers/modalReducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    modalReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
