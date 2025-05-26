
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductListing from './pages/ProductListing'
import Landing from './pages/Landing'
import ProductDetails from './pages/ProductDetails'
import LoginSignup from './pages/LoginSignup'
import Otp from './pages/Otp'
import Admin from './pages/Admin'
import ContactUsPage from './pages/ContactUsPage'
import BlogListing from './pages/BlogListing'
import BlogDetails from './pages/BlogDetails'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/product' element={<ProductListing/>}/>
      <Route path='/product-details' element={<ProductDetails/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/account' element={<Admin/>}/>
      <Route path='/contact-us' element={<ContactUsPage/>}/>
      <Route path='/blog' element={<BlogListing/>}/>
      <Route path='/blog-details' element={<BlogDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
