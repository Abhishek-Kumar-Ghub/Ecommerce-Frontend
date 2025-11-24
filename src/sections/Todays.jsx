import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

const Todays = () => {
  const [activeFilter, setActiveFilter] = useState('Best Seller')
  
  const filters = ['Best Seller', 'Keep Stylish', 'Special Discount', 'Official Store', 'Coveted Product']
  
  const items = [
    { id: 5, title: "UrbanEdge Men's Jeans Collection", img: "/jeans.avif", price: "Rp253.000", oldPrice: "Rp379.000" },
    { id: 6, title: "Essentials Men's Long-Sleeve Oxford Shirt", img: "/Shirt.avif", price: "Rp179.000", oldPrice: "Rp299.000" },
    { id: 7, title: "StyleHaven Men's Fashionable Brogues", img: "/shoes.avif", price: "Rp199.000", oldPrice: "Rp319.000" },
    { id: 8, title: "Essential Long-Sleeve Crewneck Shirt for Men", img: "/Tshirt.avif", price: "Rp120.000", oldPrice: "Rp200.000" },
    { id: 9, title: "ClassicGent Men's Formal Shoes", img: "/shoes.avif", price: "Rp199.000", oldPrice: "Rp350.000" },
    { id: 10, title: "UrbanFlex Men's Short Pants Collection", img: "/jeans.avif", price: "Rp162.000", oldPrice: "Rp270.000" },
    { id: 11, title: "ChicCarry - Elegant Women's Tote Collection", img: "/Bag.avif", price: "Rp650.000", oldPrice: "Rp1.200.000" },
    { id: 12, title: "Sophisticated Women's Parka Line", img: "/Jacket.avif", price: "Rp324.000", oldPrice: "Rp540.000" }
  ]

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with filters */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Todays For You!</h2>
          <div className="flex space-x-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-50">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm mb-2 line-clamp-2">{item.title}</h3>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-lg font-bold text-gray-800">{item.price}</span>
                  <span className="text-sm text-gray-500 line-through">{item.oldPrice}</span>
                </div>
                <div className="text-xs text-gray-500">★★★★★ 4.8</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todays
