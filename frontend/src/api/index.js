import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const postNew = (payload)=> api.post(`/post/new`, payload)
export const postList = () => api.get(`/post/list`)

const apis = {
    postNew: postNew,
    postList: postList,
}

export default apis