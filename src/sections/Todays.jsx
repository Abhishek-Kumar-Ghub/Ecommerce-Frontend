import React from 'react'

const Todays = () => {

  const items = [
    { title: "EliteShield Performance Men's Jackets", img: "/Tshirt.avif", price: "Rp255.000", oldPrice: "Rp525.000" },
    { title: "JacUrbanShield Winter Jacket", img: "/Jacket.avif", price: "Rp255.000", oldPrice: "Rp525.000" },
    { title: "ClassicFit Cotton Shirt", img: "/Shirt.avif", price: "Rp255.000", oldPrice: "Rp525.000" },
    { title: "DenimPro Slim-Fit Jeans", img: "/jeans.avif", price: "Rp255.000", oldPrice: "Rp525.000" },
    { title: "OptiZoom Camera Shoulder Bag", img: "/Bag.avif", price: "Rp255.000", oldPrice: "Rp525.000" },
    { title: "Cloudy Chic - Grey Peep Toe Heeled Sandals", img: "/shoes.avif", price: "Rp255.000", oldPrice: "Rp525.000" },
    { title: "ChronoMaster Stainless Steel Watch", img: "/watches.avif", price: "Rp255.000", oldPrice: "Rp525.000" },
    { title: "Gentlemen's Summer Gray Hat - Premium Blend", img: "/cap.avif", price: "Rp255.000", oldPrice: "Rp525.000" },
  ];


  return (
    <div className='bg-white-100 h-200 mt-10 ml-10'>
        <div className='flex'>
        <div className='text-3xl font-bold '> Todays For You ! </div>
     
      <div className='flex gap-10 ml-130'>

          <button className='border rounded-xl p-1'>Best Seller</button>
        <button className='border rounded-xl p-1'>Keep Stylish</button>
        <button className='border rounded-xl p-1'>Special Discount</button>
        <button className='border rounded-xl p-1'>Official Store</button>
        <button className='border rounded-xl p-1'>Coveted Product</button>
      </div>
        </div>


        {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 mb-10">

        {items.map((i, index) => (
          <div 
            key={index} 
            className="bg-white relative rounded-xl shadow-md p-4 w-[220px]"
          >
            {/* Image */}
            <div className="relative">
              <img 
                src={i.img} 
                alt={i.title} 
                className="rounded-lg object-cover w-full h-48"
              />

              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                🤍
              </button>
            </div>

            {/* Title */}
            <h3 className="font-medium mt-2">{i.title}</h3>

            {/* Price */}
            <div className="flex gap-2 text-lg font-semibold mt-1">
              <span>{i.price}</span>
              <span className="text-red-500 line-through text-sm">
                {i.oldPrice}
              </span>
            </div>
             </div>
        ))}
         </div>
        
  </div>
    
   
  )
}

export default Todays;
