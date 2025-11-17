
import { Heart, Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex h-16 items-center justify-between px-1 text-2xl bg-gray-100 '>
      
      <div>
        <img src="/logo.png" alt="logo" className='h-14 '/>
      </div>

      <div className='flex gap-6 text-lg'>
      <h1> MEN</h1>
      <h1> WOMEN</h1>
      <h1>KIDS</h1>
      <h1>BEAUTY</h1>
      <h1>GENZ</h1>
      </div>

      <div className='flex items-center gap-2 text-lg'>
         <h1> <Search /></h1>
        <input type="text" placeholder='Search for products, brands and more' className='w-90 h-8 rounded-md px-4  '/>
      </div>

      <div className='flex gap-10 px-10'>

        <div className='flex items-center flex-col -gap-1 text-sm'>
          <h1><User/></h1>
          <h1>Profile</h1>
        </div>
       <div className='flex items-center flex-col -gap-1 text-sm'>
          <h1> <Heart /></h1>
          <h1>Wishlist</h1>
       </div>
            

      <div className='flex items-center flex-col -gap-1 text-sm'>
        <h1>  <ShoppingCart /></h1>
          <h1>Cart</h1>
          </div>
      </div>

    </div>
  )
}

export default Navbar
