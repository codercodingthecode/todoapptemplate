import { ApiCall } from './api';

const URL = 'https://practiceapi.devmountain.com/api/tasks'

const getTodo = () => {
    return ApiCall.get(URL);
}

const putTodo = (data) => {
    return ApiCall.put(URL, data);
}

const deleteTodo = (data) => {
    return ApiCall.deleteApi(URL, data)
}

const postTodo = (data) => {
    return ApiCall.post(URL, data)
}

export const Api = {
    getTodo,
    putTodo,
    deleteTodo,
    postTodo,
}

