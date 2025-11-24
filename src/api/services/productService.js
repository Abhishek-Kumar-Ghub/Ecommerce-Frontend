import axios from 'axios'
import { API_ENDPOINTS } from '../config.js'

export const productService = {
  async getAllProducts() {
    const response = await axios.get(API_ENDPOINTS.PRODUCTS)
    return response
  },

  async getProductById(id) {
    const response = await axios.get(API_ENDPOINTS.PRODUCT_BY_ID(id))
    return response
  }
}