import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './Pages/Placeorder/PlaceOrder'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './Footer/Footer'
import LoginPopup from './Component/LoginPopup/LoginPopup'
const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App