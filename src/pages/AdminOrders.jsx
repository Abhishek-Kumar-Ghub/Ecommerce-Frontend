import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { orderService } from '../api/services/index.js'

const AdminOrders = () => {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderService.getAllOrders()
        setOrders(response.orders)
      } catch (error) {
        console.error('Failed to fetch orders:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      await orderService.updateOrderStatus(orderId, newStatus)
      setOrders(orders.map(order => 
        order._id === orderId ? { ...order, status: newStatus } : order
      ))
    } catch (error) {
      alert('Failed to update order status')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'processing': return 'bg-blue-100 text-blue-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (user?.role !== 'admin') {
    return <div className="text-center py-8">Access denied. Admin only.</div>
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      
      {loading ? (
        <div className="text-center py-8">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="text-center py-8 text-gray-600">No orders found</div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-white p-4 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="font-medium">Order #{order._id.slice(-8)}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Customer</p>
                  <p className="text-sm text-gray-600">{order.user?.name}</p>
                  <p className="text-sm text-gray-600">{order.user?.email}</p>
                </div>
                <div>
                  <p className="font-medium">Total</p>
                  <p className="text-sm">Rp{order.totalAmount?.toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Status</p>
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                    className={`px-2 py-1 rounded text-sm border ${getStatusColor(order.status)}`}
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </div>
              </div>
              
              <div className="border-t pt-3">
                <p className="font-medium mb-2">Items:</p>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img 
                        src={item.product?.images?.[0] || '/Jacket.avif'} 
                        alt={item.product?.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.product?.title}</p>
                        <p className="text-xs text-gray-600">Qty: {item.quantity} × Rp{item.product?.price?.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminOrders