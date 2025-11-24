import React, { createContext, useContext, useState, useEffect } from 'react'
import { authService } from '../api/services/index.js'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const currentUser = authService.getCurrentUser()
    const token = authService.getToken()
    
    if (token && currentUser) {
      // Validate token before setting user
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        const currentTime = Date.now() / 1000
        if (payload.exp > currentTime) {
          setUser(currentUser)
        } else {
          // Token expired, clear it
          authService.logout()
          setUser(null)
        }
      } catch (error) {
        // Invalid token, clear it
        authService.logout()
        setUser(null)
      }
    }
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials)
      setUser(response.user)
      return response
    } catch (error) {
      // Clear any invalid tokens
      authService.logout()
      setUser(null)
      throw error
    }
  }

  const signup = async (userData) => {
    try {
      const response = await authService.signup(userData)
      return response
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    authService.logout()
    setUser(null)
  }

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}