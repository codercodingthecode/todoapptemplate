import { combineReducers } from 'redux';

import {
    getTodosReducer,
    putTodoRecuder,
    deleteTodoRecuder,
    postTodoRecuder
} from './todoReducer';

const RootReducer = combineReducers({
    getTodos: getTodosReducer,
    putTodos: putTodoRecuder,
    deleteTodo: deleteTodoRecuder,
    postTodo: postTodoRecuder,
})

export default RootReducer;