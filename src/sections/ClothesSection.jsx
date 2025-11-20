import React from 'react'

const ClothesSection = () => {
  const items = [
    { title: "T-Shirt", img: "/Tshirt.avif" },
    { title: "Jacket", img: "/Jacket.avif" },
    { title: "Shirt", img: "/Shirt.avif" },
    { title: "Jeans", img: "/jeans.avif" },
    { title: "Bag", img: "/Bag.avif" },
    { title: "Shoes", img: "/shoes.avif" },
    { title: "Watches", img: "/watches.avif" },
    { title: "Cap", img: "/cap.avif" },
    { title: "All Category", img: "/grid.jpg" },
  ];

return (
    <div className="w-full flex bg-gray-100 items-center justify-center gap-23 py-6">
      {items.map((i, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-15 h-15 rounded-full overflow-hidden">
            <img
              src={i.img}
              alt={i.title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm font-semibold mt-2">{i.title}</p>
        </div>
      ))}
    </div>
    );
}
export default ClothesSection
