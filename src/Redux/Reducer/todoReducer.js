import { combineReducers } from 'redux';
import { GET_TODOS, PUT_TODOS, DELETE_TODOS, POST_TODOS } from '../Actions/actionsType';
import axios from 'axios';
const initialState = [];

export const getTodosReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_TODOS:
            console.log('REDUCER GET TODOS CALLED', action.payload)
            return [...action.payload]

        default:
            // console.log('DEFAULT REDUCER CALLED get');
            return state
    }
}

export const putTodoRecuder = (state = initialState, action) => {
    switch (action.type) {
        case PUT_TODOS:
            console.log('REDUCER PUT TODOS CALLED', action.payload)
            return Object.assign([], state, action.payload)

        default:
            // console.log('DEFAULT REDUCER CALLED put');
            return state
    }
}

export const deleteTodoRecuder = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TODOS:
            console.log('REDUCER DELETE TODOS CALLED', action.payload)
            return Object.assign([], state, action.payload)

        default:
            // console.log('DEFAULT REDUCER CALLED delete');
            return state
    }
}

export const postTodoRecuder = (state = initialState, action) => {
    switch (action.type) {
        case POST_TODOS:
            console.log('REDUCER POST TODOS CALLED', action.payload)
            return Object.assign([], state, action.payload)

        default:
            // console.log('DEFAULT REDUCER CALLED post');
            return state
    }
}
