import React from 'react'
import Navbar from './component/Navbar.jsx'
import HeroSection from './sections/HeroSection.jsx'
import ProductSection from './sections/ProductSection.jsx'
import TopRated from './sections/TopRated.jsx'
import SingleProducts from './component/SingleProducts.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <TopRated />
      <SingleProducts/>
    </div>
  )
}

export default App
