import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { orderService } from '../api/services/index.js'

const Profile = () => {
  const { user } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderService.getUserOrders()
        setOrders(response.orders)
      } catch (error) {
        console.error('Failed to fetch orders:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'processing': return 'bg-blue-100 text-blue-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Profile</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">My Orders</h2>
        {loading ? (
          <div className="text-center py-8">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="text-center py-8 text-gray-600">No orders found</div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order._id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-medium">Order #{order._id.slice(-8)}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="space-y-2 mb-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img 
                        src={item.product?.images?.[0] || '/Jacket.avif'} 
                        alt={item.product?.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.product?.title}</p>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-2">
                  <p className="font-bold text-right">Total: Rp{order.totalAmount?.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile