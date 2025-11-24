import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, ShoppingCart, Star, Minus, Plus } from 'lucide-react'
import { productService } from '../api/services/index.js'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Black')
  const [loading, setLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const { addToCart } = useCart()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productService.getProductById(id)
        setProduct(response.singleProduct)
      } catch (error) {
        console.error('Failed to fetch product:', error)
        // Try to find in static data as fallback
        const staticProduct = products.find(p => p.id === id)
        if (staticProduct) {
          setProduct({
            _id: staticProduct.id,
            title: staticProduct.title,
            price: parseInt(staticProduct.price.replace(/[^0-9]/g, '')),
            description: staticProduct.description,
            images: [staticProduct.image],
            category: staticProduct.category
          })
        } else {
          setProduct(null)
        }
      } finally {
        setPageLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(0)
    }
  }, [product])

  if (pageLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="text-gray-600 mt-2">The product you're looking for doesn't exist.</p>
        <button 
          onClick={() => window.history.back()}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Go Back
        </button>
      </div>
    )
  }

  const images = product.images || ["/Jacket.avif"]

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart')
      return
    }
    setLoading(true)
    try {
      await addToCart(product._id, quantity)
      alert('Added to cart successfully!')
    } catch (error) {
      console.error('Add to cart error:', error)
      alert('Failed to add to cart: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={images[selectedImage]} 
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">(5.0 reviews)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-red-500">Rp{product.price?.toLocaleString()}</span>
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-3">Size</h3>
            <div className="flex space-x-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size 
                      ? 'border-orange-500 bg-orange-50 text-orange-500' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold mb-3">Color</h3>
            <div className="flex space-x-2">
              {['Black', 'Navy', 'Gray'].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedColor === color 
                      ? 'border-orange-500 bg-orange-50 text-orange-500' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button 
                  onClick={() => handleQuantityChange('decrease')}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange('increase')}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-600">In Stock</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button 
              onClick={handleAddToCart}
              disabled={loading}
              className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{loading ? 'Adding...' : 'Add to Cart'}</span>
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Product Description */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-3">Description</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="text-sm text-gray-600">
              <p><strong>Category:</strong> {product.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail