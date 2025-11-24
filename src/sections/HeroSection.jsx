import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-8">
            <div className="flex-1">
              <div className="text-sm text-gray-600 mb-2"># Big Fashion Sale</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Limited Time Offer!<br />
                Up to <span className="text-5xl font-black">50%</span> OFF!
              </h1>
              <p className="text-gray-600 mb-6">Redefine Your Everyday Style</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="relative">
                <img 
                  src="/Tshirt.avif" 
                  alt="Fashion Items" 
                  className="w-80 h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
