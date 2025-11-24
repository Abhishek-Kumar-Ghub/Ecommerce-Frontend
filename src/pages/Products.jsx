import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { productService } from '../api/services/index.js'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getAllProducts()
        setProducts(response.productss || [])
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            key={product._id}
            to={`/product/${product._id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="relative">
              <img 
                src={product.images?.[0] || '/Jacket.avif'} 
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-50">
                <Heart className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.title}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-red-500">Rp{product.price?.toLocaleString()}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">★★★★★ 5.0</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products