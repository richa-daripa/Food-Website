import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Home from './pages/Home';
import FoodDisplay from './pages/FoodDisplay';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import './style.css'
import Cart from './pages/Cart';
import About from './pages/About';
import ScrollToTop from './pages/ScrollToTop';


function App() {
  const location=useLocation();
  const hideNavbar=location.pathname==='/order';

  return (
    <>
    <ScrollToTop/>
    {!hideNavbar && <NavBar/>}
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/> } />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/menu' element={<FoodDisplay  />} /> 
          <Route path='/order' element={<Order/> } />
        </Routes>
      {!hideNavbar &&<Footer />}
    </>
  )
}

export default App
