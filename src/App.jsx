
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
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'
import ContextProvider from './context/ContextProvider'

function App() {

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/product' element={<ProductListing />} />
            <Route path='/product/:slug' element={<ProductDetails />} />
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/account' element={<Admin />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            <Route path='/blog' element={<BlogListing />} />
            <Route path='/blog-details' element={<BlogDetails />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
