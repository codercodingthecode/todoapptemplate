import axios from 'axios';

const get = (url = '') => {
    console.log('GET API CALLED ')
    return axios.get(url);
}

const post = (url = '', data = {}) => {
    console.log('POST API CALLED ', { title: data })
    return axios.post(url, { title: data });
}

const put = (url = '', data = '') => {
    return axios.put(`${url}/${data}`);
}

const deleteApi = (url = '', data = '') => {
    return axios.delete(`${url}/${data}`);
}

export const ApiCall = {
    get,
    put,
    deleteApi,
    post,
}

// export const GET_TODOS = "GET_TODOS";***
// export const POST_TODOS = "POST_TODOS";***
// export const PATCH_TODOS = "PATCH_TODOS";
// export const DELETE_TODOS = "DELETE_TODOS";
// export const PUT_TODOS = "PUT_TODOS";