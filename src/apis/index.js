import axios from 'axios'
const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
export const fetchGetData = async () => {
    return await API.get('/users')
}
export const fetchGetTodoData = async () => {
    return await API.get('/comments')
}

export const fetchGetTodoCheck = async () => {
    return await API.get('/comments')
}