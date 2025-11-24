import React from 'react'
import { Link } from 'react-router-dom'

const CategorySection = () => {
  const categories = [
    { name: 'T-shirt', icon: '👕', path: '/category/tshirt' },
    { name: 'Jacket', icon: '🧥', path: '/category/jacket' },
    { name: 'Shirt', icon: '👔', path: '/category/shirt' },
    { name: 'Jeans', icon: '👖', path: '/category/jeans' },
    { name: 'Bag', icon: '👜', path: '/category/bag' },
    { name: 'Shoes', icon: '👟', path: '/category/shoes' },
    { name: 'Watches', icon: '⌚', path: '/category/watches' },
    { name: 'Cap', icon: '🧢', path: '/category/cap' },
    { name: 'All Category', icon: '📱', path: '/category/all' }
  ]

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center space-x-8">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.path}
              className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-2 hover:bg-orange-100">
                {category.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategorySection