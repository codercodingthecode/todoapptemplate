import { GET_TODOS, PUT_TODOS, DELETE_TODOS, POST_TODOS } from './actionsType';
import { Api } from '../../Api'

export const getTodosAction = (dispach) => {
    return (dispach) => {
        return Api.getTodo().then(response => {
            return dispach({
                type: GET_TODOS,
                payload: response.data
            })
        })
    }
}

export const putTodosAction = (id) => {
    return (dispach) => {
        return Api.putTodo(id).then(response => {
            return dispach({
                type: PUT_TODOS,
                payload: response.data
            })
        })
    }
}

export const deleteTodosAction = (id) => {
    return (dispach) => {
        return Api.deleteTodo(id).then(response => {
            return dispach({
                type: DELETE_TODOS,
                payload: response.data
            })
        })
    }
}

export const postTodosAction = (title) => {
    return (dispach) => {
        return Api.postTodo(title).then(response => {
            return dispach({
                type: POST_TODOS,
                payload: response.data
            })
        })
    }
}