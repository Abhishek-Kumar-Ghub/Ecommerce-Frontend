import React, { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { orderService } from '../api/services/index.js'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cart, removeFromCart } = useCart()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRemoveItem = async (productId) => {
    try {
      await removeFromCart(productId)
    } catch (error) {
      alert('Failed to remove item')
    }
  }

  const handlePlaceOrder = async () => {
    setLoading(true)
    try {
      await orderService.placeOrder()
      alert('Order placed successfully!')
      navigate('/profile')
    } catch (error) {
      alert('Failed to place order')
    } finally {
      setLoading(false)
    }
  }

  const totalAmount = cart?.items?.reduce((sum, item) => 
    sum + (item.product?.price || 0) * item.quantity, 0) || 0

  if (!cart || cart.items?.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600">Add some products to get started!</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="space-y-4">
        {cart.items.map((item) => (
          <div key={item.product._id} className="flex items-center space-x-4 p-4 border rounded-lg">
            <img 
              src={item.product.images?.[0] || '/Jacket.avif'} 
              alt={item.product.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.product.title}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="font-bold">Rp{(item.product.price * item.quantity).toLocaleString()}</p>
            </div>
            <button 
              onClick={() => handleRemoveItem(item.product._id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">Total: Rp{totalAmount.toLocaleString()}</span>
        </div>
        <button 
          onClick={handlePlaceOrder}
          disabled={loading}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </div>
  )
}

export default Cart