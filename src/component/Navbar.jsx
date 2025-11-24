import React, { useState } from 'react'
import { Heart, Search, ShoppingCart, User, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useCart } from '../context/CartContext.jsx'

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth()
  const { cartCount } = useCart()
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
  }

  return (
    <div className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-100 px-4 py-1 text-xs text-gray-600 text-center">
        Download BeliBeli App • More BeliBeli • About BeliBeli • BeliBeli Care • Photos
      </div>
      
      {/* Main navbar */}
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-orange-500">🛍️ BeliBeli.com</span>
        </Link>

        {/* Categories */}
        <div className="flex gap-8 text-sm font-medium">
          <Link to="/products" className="hover:text-orange-500">All Products</Link>
          <Link to="/category/all" className="hover:text-orange-500">Categories ▼</Link>
        </div>

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-96">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search product or brand here..." 
            className="bg-transparent outline-none flex-1 text-sm"
          />
        </div>

        {/* User actions */}
        <div className="flex items-center gap-6">
          {isAuthenticated ? (
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
              >
                <User className="w-5 h-5" />
                <span className="text-sm">{user?.name}</span>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Profile
                    </Link>
                    {user?.role === 'admin' && (
                      <>
                        <Link
                          to="/admin/products"
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Add Product
                        </Link>
                        <Link
                          to="/admin/orders"
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Manage Orders
                        </Link>
                      </>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-sm font-medium hover:text-orange-500">
                Login
              </Link>
              <Link to="/signup" className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-600">
                Sign Up
              </Link>
            </div>
          )}
          
          <button className="p-2 hover:bg-gray-100 rounded">
            <Heart className="w-5 h-5" />
          </button>
          <Link to="/cart" className="p-2 hover:bg-gray-100 rounded relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
