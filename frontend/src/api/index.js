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

export const postNew = (payload) => {
    updateToken()
    return axiosInstance.post(`/post/new`, payload)
}

export const postList = () => {
    updateToken()
    return axiosInstance.get(`/post/list`)
}

export const auth = (payload) => {
    return axiosInstance.post(`/auth`, payload)
}

const apis = {
    postNew: postNew,
    postList: postList,
    auth: auth,
}

export default apis