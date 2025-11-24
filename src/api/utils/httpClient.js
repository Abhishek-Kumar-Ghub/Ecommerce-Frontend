import axios from 'axios'
import API_BASE_URL from '../config.js'

// Configure axios defaults
axios.defaults.baseURL = API_BASE_URL
axios.defaults.headers.common['Content-Type'] = 'application/json'

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token') || localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    const message = error.response?.data?.message || error.message || 'Request failed'
    return Promise.reject(new Error(message))
  }
)

export default axios