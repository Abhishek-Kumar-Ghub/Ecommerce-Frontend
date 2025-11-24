// Secure storage utility to mitigate XSS risks
export const secureStorage = {
  setItem: (key, value) => {
    try {
      // In production, consider using secure HTTP-only cookies instead
      sessionStorage.setItem(key, value)
    } catch (error) {
      console.error('Storage error:', error)
    }
  },
  
  getItem: (key) => {
    try {
      return sessionStorage.getItem(key)
    } catch (error) {
      console.error('Storage error:', error)
      return null
    }
  },
  
  removeItem: (key) => {
    try {
      sessionStorage.removeItem(key)
    } catch (error) {
      console.error('Storage error:', error)
    }
  }
}