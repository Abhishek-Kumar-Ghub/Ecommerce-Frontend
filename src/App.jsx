import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Layout from './component/Layout.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Category from './pages/Category.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AdminProductForm from './pages/AdminProductForm.jsx'
import Cart from './pages/Cart.jsx'
import Profile from './pages/Profile.jsx'
import AdminOrders from './pages/AdminOrders.jsx'
import Products from './pages/Products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "product/:id",
        element: <ProductDetail />
      },
      {
        path: "category/:category",
        element: <Category />
      },
      {
        path: "admin/products",
        element: <AdminProductForm />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "admin/orders",
        element: <AdminOrders />
      },
      {
        path: "products",
        element: <Products />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
])

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  )
}
export default App