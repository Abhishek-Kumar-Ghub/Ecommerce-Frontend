import axios from 'axios'
import { API_ENDPOINTS } from '../config.js'

export const authService = {
  async signup(userData) {
    const response = await axios.post(API_ENDPOINTS.SIGNUP, userData)
    return response
  },

  async login(credentials) {
    const response = await axios.post(API_ENDPOINTS.LOGIN, credentials)
    if (response.token) {
      sessionStorage.setItem('token', response.token)
      sessionStorage.setItem('user', JSON.stringify(response.user))
    }
    return response
  },

  logout() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  getCurrentUser() {
    const user = sessionStorage.getItem('user') || localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  getToken() {
    return sessionStorage.getItem('token') || localStorage.getItem('token')
  },

  isAuthenticated() {
    return !!this.getToken()
  }
}