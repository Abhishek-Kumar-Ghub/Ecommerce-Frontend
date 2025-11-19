import React from 'react'

const SingleProducts = () => {
  return (
    <div className='flex p-3'>
      <div className='flex h-150 gap-3'> 
        <img src="/product1-1.png" alt="img"/>
        <img src="/product1-2.png" alt="img" />
      </div>

    <div className='flex-col px-10'>
    <div className='text-3xl font-bold'>
    <h1>NOBERO</h1>
    </div>

    <div className='text-xl text-gray-400 my-1.5'>
        <h1>Men Oversized Graphic Printed T-shirt</h1>
    </div>

    <div className='flex items-center gap-4 border-2 border-gray-200 w-50 mt-4'>
        <h1 className=' ml-5 border-r-2 text-center'>
            4.4 ⭐ 
        </h1>
        <h1 className='flex text-center'>
            575 Ratings
        </h1>
    </div>

    <div className='mt-4 border-t-2 flex gap-4'>
    <h1 className='text-3xl font-bold mt-4'>₹499</h1>
    <h1 className='text-gray-500 text-2xl mt-4'>MRP <span className='line-through'>₹1799</span></h1>
    <h1 className='text-orange-400 text-3xl font-bold mt-4'>(75% 0FF)</h1>
    </div>

    <div>
        <h1 className='text-green-600 font-bold text-xl mt-3'>inclusive of all taxes</h1>
    </div>

    <div className='mt-8 font-bold text-[20px]'>MORE COLORS</div>

    <div className='flex mt-4 gap-3'>
<img src="/product1-3.png" alt="img" className='flex h-30 ' />
<img src="/product1-4.png" alt="img" className='flex h-30 ' />
    </div>

<div className='flex gap-6'>
<h1 className='font-bold mt-4 text-lg'>SELECT SIZE</h1>
<h1 className='font-bold mt-4 text-lg text-pink-600'>SIZE CHART &gt;</h1>
</div>

<div className='flex gap-4 font-bold mt-4'>
<div className='h-10 w-10 border rounded-full pl-4 pt-2'>S</div>
<div className='h-10 w-10 border rounded-full pl-3 pt-2'>M</div>
<div className='h-10 w-10 border rounded-full pl-4 pt-2'>L</div>
<div className='h-10 w-10 border rounded-full pl-3 pt-2'>XL</div>
<div className='h-10 w-10 border rounded-full pl-1 pt-2'>XXL</div>
<div className='h-10 w-10 border rounded-full pl-1 pt-2'>3XL</div>
</div>

<div className='mt-4 flex gap-8'>
<h1 className='text-white font-bond text-lg bg-pink-600 w-40 pl-5'>ADD TO BAG</h1>
<h1 className='text-lg font-bold border w-30 pl-4'>WHISLIST</h1>

</div>












</div>








    </div>
  )
}

export default SingleProducts
