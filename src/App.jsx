
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
import BecomeADealer from './pages/BecomeADealer'
import Checkout from './pages/Checkout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermCondition from './pages/TermCondition'
import MyAddress from './pages/MyAddress'
import MyOrder from './pages/MyOrder'
import OrderDetails from './pages/OrderDetails'

function App() {

  return (
    <>
      <ContextProvider>
        <BrowserRouter basename='/victura'>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/:slug' element={<ProductListing />} />
            <Route path='/:catslug/:slug' element={<ProductDetails />} />
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/account' element={<Admin />} />
            <Route path='/address' element={<MyAddress />}  />
            <Route path='/order' element={<MyOrder />}  />
            <Route path='/order-details' element={<OrderDetails />}  />
            <Route path='/contact-us' element={<ContactUsPage />} />
            <Route path='/blog' element={<BlogListing />} />
            <Route path='/blog-details' element={<BlogDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/become-a-dealer' element={<BecomeADealer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/term-and-condition' element={<TermCondition />} />

          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
