import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, Filter } from 'lucide-react'
import { products } from '../data/products.js'

const Category = () => {
  const { category } = useParams()
  const [sortBy, setSortBy] = useState('popular')
  const [priceRange, setPriceRange] = useState([0, 1000000])

  const allProducts = [
    ...products,
    { id: 6, title: "Cloudy Chic Grey Peep Toe Sandals", image: "/shoes.avif", price: "Rp270.000", originalPrice: "Rp540.000", category: "shoes", rating: 4.4 },
    { id: 7, title: "ChronoMaster Steel Watch", image: "/watches.avif", price: "Rp199.000", originalPrice: "Rp350.000", category: "watches", rating: 4.8 },
    { id: 8, title: "Premium Gray Hat", image: "/cap.avif", price: "Rp99.000", originalPrice: "Rp199.000", category: "cap", rating: 4.3 }
  ]

  const filteredProducts = category === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === category)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''))
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''))
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const categoryTitle = category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{categoryTitle}</h1>
          <p className="text-gray-600 mt-1">{sortedProducts.length} products found</p>
        </div>
        
        {/* Sort and Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-1 text-sm"
            >
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-50">
                <Heart className="w-4 h-4" />
              </button>
              {product.originalPrice && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  {Math.round((1 - parseInt(product.price.replace(/[^0-9]/g, '')) / parseInt(product.originalPrice.replace(/[^0-9]/g, ''))) * 100)}% OFF
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.title}</h3>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-lg font-bold text-gray-800">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-500">({product.rating})</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
          <Link to="/" className="text-orange-500 hover:text-orange-600 mt-2 inline-block">
            Browse all products →
          </Link>
        </div>
      )}
    </div>
  )
}

export default Category