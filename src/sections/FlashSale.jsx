import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { productService } from '../api/services/index.js'

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 10,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getAllProducts()
        setProducts(response.productss?.slice(0, 4) || [])
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Flash Sale Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center space-x-2">
              <span className="text-lg">⚡</span>
              <span className="font-bold">Flash Sale</span>
            </div>
            <div className="flex space-x-2">
              <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-red-500 font-bold">:</span>
              <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-red-500 font-bold">:</span>
              <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
          <button className="text-orange-500 hover:text-orange-600 font-medium">
            See All →
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
            ))
          ) : (
            products.map((product) => (
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
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    Flash Sale
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-500">Rp{product.price?.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">★★★★★ 5.0 Sale</div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default FlashSale