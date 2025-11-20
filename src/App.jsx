import React from 'react'
import Navbar from './component/Navbar.jsx'
import HeroSection from './sections/HeroSection.jsx'
import ProductSection from './sections/ProductSection.jsx'
import TopRated from './sections/TopRated.jsx'
import SingleProducts from './component/SingleProducts.jsx'
import ClothesSection from './sections/ClothesSection.jsx'
import ProductSection2 from './sections/ProductSection2.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Todays from './sections/Todays.jsx'
import BestSelling from './sections/BestSelling.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HeroSection />
        <ProductSection />
        <TopRated />
        <SingleProducts />
        <ClothesSection />
        <ProductSection2 />
        <Todays />
        <BestSelling/>
      </>
    )
  },

  {
    path: "/ProductSection2",
    element: <ProductSection2 />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App