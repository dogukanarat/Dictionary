import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
})

const updateToken = async () => {
    const token = localStorage.getItem('token')
    
    if(token != null)
    {
        axiosInstance.defaults.headers.common['Authorization'] = `${token}`
    }

    return token
}

export const postNew = async (payload) => {
    updateToken()
    return axiosInstance.post(`/post/new`, payload)
}

export const postList = async () => {
    updateToken()
    return axiosInstance.get(`/post/list`)
}

export const auth = async (payload) => {
    return axiosInstance.post(`/auth`, payload)
}

export const register = async (payload) => {
    return axiosInstance.post(`/user/register`, payload)
}

const apis = {
    postNew: postNew,
    postList: postList,
    auth: auth,
    register: register
}

export default apis