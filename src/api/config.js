const API_BASE_URL = 'http://localhost:5000'

export const API_ENDPOINTS = {
  // Auth endpoints
  SIGNUP: `${API_BASE_URL}/user/signup`,
  LOGIN: `${API_BASE_URL}/user/login`,
  
  // Product endpoints
  PRODUCTS: `${API_BASE_URL}/product`,
  PRODUCT_BY_ID: (id) => `${API_BASE_URL}/product/${id}`,
  
  // Cart endpoints
  CART: `${API_BASE_URL}/cart`,
  ADD_TO_CART: `${API_BASE_URL}/cart/add`,
  
  // Order endpoints
  ORDERS: `${API_BASE_URL}/order`,
  CREATE_ORDER: `${API_BASE_URL}/order/create`
}

export default API_BASE_URL