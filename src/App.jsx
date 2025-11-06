import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/sharedComponents/Navbar'
import Home from './pages/Home'
import Footer from './components/sharedComponents/Footer'
import PageNotFound from './pages/PageNotFound'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
        <Route path='/terms-service' element={<TermsOfService />}></Route>
        <Route path='/*' element={<PageNotFound />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App