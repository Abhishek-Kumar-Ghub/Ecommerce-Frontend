import { Zap } from "lucide-react";
import React from "react";

const ProductSection2 = () => {
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
    <div className="w-full bg-gray-50 p-6 rounded-xl shadow-sm mt-15">
      {/* Header */}
      <div className="flex items-center justify-between mb-15 ml-10 mt-10">
        <div className="flex items-center gap-2">
          <Zap />
          <span className="text-xl font-semibold">Flash Sale</span>

          <div className="flex gap-2 text-white font-semibold">
            <span className="bg-red-500 px-2 py-1 rounded-md">08</span> :
            <span className="bg-red-500 px-2 py-1 rounded-md">17</span> :
            <span className="bg-red-500 px-2 py-1 rounded-md">56</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="w-8 h-8 border rounded-md">&larr;</button>
          <button className="w-8 h-8 border rounded-md">&rarr;</button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ml-10 mb-10">

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

            {/* Progress */}
            <div className="mt-2">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-black h-2 rounded-full w-[80%]"></div>
              </div>
              <p className="text-xs mt-1 text-gray-500">9/10 Sale</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductSection2;
