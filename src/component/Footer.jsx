import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light italic">"Let's Shop Beyond Boundaries"</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">🛒 BeliBeli.com</span>
            </div>
            <p className="text-sm text-gray-400">"Let's Shop Beyond Boundaries"</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">BeliBeli</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About BeliBeli</li>
              <li>Career</li>
              <li>Mitra Blog</li>
              <li>B2B Digital</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Buy</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Bill & Top Up</li>
              <li>BeliBeli COD</li>
              <li>Mitra Blog</li>
              <li>Register Official Store</li>
              <li>Promo</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Guide and Help</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>BeliBeli Care</li>
              <li>Term and Condition</li>
              <li>Privacy</li>
              <li>Mitra</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2001 - 2024 BeliBeli.com
        </div>
      </div>
    </footer>
  )
}

export default Footer