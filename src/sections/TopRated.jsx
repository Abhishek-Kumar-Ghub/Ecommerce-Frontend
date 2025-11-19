

import React from 'react'

const TopRated = () => {
  return (
   <div className='w-90 h-130 rounded-2xl bg-amber-100 m-5 flex-col'>

    <div className=' p-3  '>
    <img src="/Products.png"  className='rounded-2xl '  alt="1st Products" />
    </div>

    <div className=''>
     
     <div className='bg-green-100 rounded-2xl text-sm w-10 px-1 mx-5'>
        Nike
     </div>
     
    <div className='px-4'>
        <h1 className=' py-1 text-[20px] my-1'>
    Dunk High "Green Satin" Sneakers
    </h1>
    </div>

    <div className='px-4'>
        <h1 className=' text-[20px] '>
        $180
    </h1>
    </div>

    <div className='px-2'>
        <button className='rounded-xl bg-gray-500 text-amber-50 p-1 my-1 px-2 w-full'>
    Buy Now
    </button>
    </div>

    </div>




   </div>
  )
}

export default TopRated
