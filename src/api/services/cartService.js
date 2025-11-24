import axios from 'axios'

export const cartService = {
  async addToCart(productId, quantity = 1) {
    const response = await axios.post('/cart/add', {
      productid: productId,
      quantity
    })
    return response
  },

  async getCart() {
    const response = await axios.get('/cart/get')
    return response
  },

  async removeFromCart(productId) {
    const response = await axios.post('/cart/remove', {
      productid: productId
    })
    return response
  }
}