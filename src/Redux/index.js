import { createStore, applyMiddleware } from 'redux';
import { } from 'redux-saga'; // to complete
import RootReducer from './Reducer';
import thunkMiddleware from 'redux-thunk';

const configureStore = (initialState = {}) => {
    return createStore(RootReducer, initialState, applyMiddleware(thunkMiddleware));
}

export default configureStore;