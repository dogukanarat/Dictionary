import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const insertTodo = payload => api.post(`/newtodo`, payload)
export const getAllTodo = () => api.get(`/listtodo`)

const apis = {
    insertTodo,
    getAllTodo,
}

export default apis