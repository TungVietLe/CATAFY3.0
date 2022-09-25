import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { UserContext } from '../App';

//pages
import StoreIndex from '../Screens/Store/StoreIndex';
import Cart from '../Screens/Store/Cart'
import CheckoutPage from '../Screens/Store/Cart related/CheckoutPage';
import ProductDetailPage from '../Screens/Store/Product Related/ProductDetailPage';
import LoginPage from '../Screens/Landing/Components/LoginPage';
import { useState } from 'react';

function ConsoleRoutes() {
  const user = useContext(UserContext);
  
  //
  const [cartisOpen, openCart] = useState(false)






  return (
    <>
      <div className='Navbar'>
        <div className='Elements'>
          <Link to={''}>Home</Link>
          <Link to={'admin'}>Admin</Link>
          <Link to={'admin'}>About Us</Link>
        </div>
          <Link className='button Highlight' onClick={()=>{openCart(!cartisOpen)}}>cart</Link>
      </div>
      {cartisOpen && <Cart openCart={openCart}/>}

      <Routes>
        <Route index element={<StoreIndex/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="product/:productidURL" element={<ProductDetailPage/>}/>
        <Route path="cart/checkout" element={user? <CheckoutPage/> : <LoginPage/>}/>
      </Routes>
    </>
  )
}

export default ConsoleRoutes