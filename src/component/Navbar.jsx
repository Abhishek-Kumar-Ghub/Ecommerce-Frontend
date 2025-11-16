
import { ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex h-16 items-center justify-between px-1 text-2xl bg-gray-200 '>
      
      <div>
        <img src="/logo.png" alt="logo" className='h-14 '/>
      </div>

      <div className='flex gap-40'>
      <h1>Home</h1>
      <h1>About us</h1>
      <h1>products</h1>
      </div>

      <div className='flex gap-10 px-10'>
        <h1>  <ShoppingCart /></h1>
        <h1> <User/></h1>
      </div>

    </div>
  )
}

export default Navbar
