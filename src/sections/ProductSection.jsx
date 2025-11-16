import React from 'react'
import Cards from '../component/Cards'

const ProductSection = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-2xl font-bold mb-4'>New Arrivals</h1>
      <div>
        <Cards />
      </div>
    </div>
  )
}

export default ProductSection
