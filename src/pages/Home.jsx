import React from 'react'
import HeroSection from '../sections/HeroSection.jsx'
import CategorySection from '../sections/CategorySection.jsx'
import FlashSale from '../sections/FlashSale.jsx'
import Todays from '../sections/Todays.jsx'
import BestSelling from '../sections/BestSelling.jsx'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FlashSale />
      <Todays />
      <BestSelling />
    </div>
  )
}

export default Home