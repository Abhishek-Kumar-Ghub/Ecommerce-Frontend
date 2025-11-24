import React from 'react'

const BestSelling = () => {
  const malls = [
    {
      name: "Nike Sae Mall",
      subtitle: "The Lifestyle Store",
      logo: "🏪",
      products: [
        { name: "Nike Shoes", price: "Rp500.000", image: "/shoes.avif" },
        { name: "Sports Wear", price: "Rp270.000", image: "/Tshirt.avif" },
        { name: "Cap Collection", price: "Rp99.000", image: "/cap.avif" }
      ]
    },
    {
      name: "Barudak Disaster Mall",
      subtitle: "Ultimate Streetwear",
      logo: "🏬",
      products: [
        { name: "Street Jacket", price: "Rp334.000", image: "/Jacket.avif" },
        { name: "Urban Shoes", price: "Rp199.000", image: "/shoes.avif" },
        { name: "Casual Tee", price: "Rp150.000", image: "/Tshirt.avif" }
      ]
    },
    {
      name: "Galaxy Galleria Mall",
      subtitle: "Hi-Tech Shopping",
      logo: "🌟",
      products: [
        { name: "Tech Bag", price: "Rp179.000", image: "/Bag.avif" },
        { name: "Smart Watch", price: "Rp199.000", image: "/watches.avif" },
        { name: "Premium Shirt", price: "Rp253.000", image: "/Shirt.avif" }
      ]
    },
    {
      name: "Aurora West Mall",
      subtitle: "Chic Style Collection",
      logo: "✨",
      products: [
        { name: "Designer Bag", price: "Rp250.000", image: "/Bag.avif" },
        { name: "Fashion Shoes", price: "Rp162.000", image: "/shoes.avif" },
        { name: "Trendy Jacket", price: "Rp255.000", image: "/Jacket.avif" }
      ]
    }
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Best Selling Store</h2>
        
        <div className="flex gap-8">
          {/* Left side - Mall showcase */}
          <div className="w-1/3">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl h-96 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <h1 className="text-white text-4xl font-bold mb-4">
                  BeliBeli Mall
                </h1>
                <p className="text-white text-lg opacity-90">
                  Shop, Explore, Delight and Experience Mall Magic!!
                </p>
              </div>
              <img 
                src="/ShoppingBagg.avif" 
                alt="Shopping" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </div>

          {/* Right side - Mall grid */}
          <div className="w-2/3 grid grid-cols-2 gap-6">
            {malls.map((mall, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{mall.logo}</span>
                  <div>
                    <h3 className="font-bold text-lg">{mall.name}</h3>
                    <p className="text-sm text-gray-600">{mall.subtitle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {mall.products.map((product, idx) => (
                    <div key={idx} className="text-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg mx-auto mb-1"
                      />
                      <p className="text-xs font-medium">{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSelling
