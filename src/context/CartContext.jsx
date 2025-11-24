import React, { createContext, useContext, useState, useEffect } from 'react'
import { cartService } from '../api/services/index.js'
import { useAuth } from './AuthContext.jsx'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null)
  const [cartCount, setCartCount] = useState(0)
  const { isAuthenticated } = useAuth()

  const fetchCart = async () => {
    if (!isAuthenticated) {
      setCart(null)
      setCartCount(0)
      return
    }
    try {
      const response = await cartService.getCart()
      setCart(response.cartss)
      setCartCount(response.cartss?.items?.length || 0)
    } catch (error) {
      console.error('Failed to fetch cart:', error)
      setCart(null)
      setCartCount(0)
    }
  }

  const addToCart = async (productId, quantity = 1) => {
    try {
      await cartService.addToCart(productId, quantity)
      await fetchCart()
    } catch (error) {
      throw error
    }
  }

  const removeFromCart = async (productId) => {
    try {
      await cartService.removeFromCart(productId)
      await fetchCart()
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchCart()
  }, [isAuthenticated])

  const value = {
    cart,
    cartCount,
    addToCart,
    removeFromCart,
    fetchCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}