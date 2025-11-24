import axios from 'axios'

export const orderService = {
  async placeOrder() {
    const response = await axios.post('/order/placeorder')
    return response
  },

  async getUserOrders() {
    const response = await axios.get('/order/get')
    return response
  },

  async getAllOrders() {
    const response = await axios.get('/order/admin/all')
    return response
  },

  async updateOrderStatus(orderId, status) {
    const response = await axios.put(`/order/admin/${orderId}`, { status })
    return response
  }
}