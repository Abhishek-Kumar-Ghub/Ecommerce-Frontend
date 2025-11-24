export const isTokenValid = () => {
  const token = localStorage.getItem('token')
  if (!token) return false
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Date.now() / 1000
    return payload.exp > currentTime
  } catch (error) {
    return false
  }
}

export const clearInvalidToken = () => {
  if (!isTokenValid()) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return true
  }
  return false
}