import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//pages
import StoreIndex from '../Screens/Store/StoreIndex';
import Cart from '../Screens/Store/Cart'
import CheckoutPage from '../Screens/Store/Cart related/CheckoutPage';

function ConsoleRoutes() {
  return (
    <>
        <div>
            <Link to={''}>Store</Link>
            <Link to={'cart'}>cart</Link>
            <Link to={'admin'}>admin</Link>
        </div>
        <Routes>
          <Route index element={<StoreIndex/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="cart/checkout" element={<CheckoutPage/>}/>
        </Routes>
    </>
  )
}

export default ConsoleRoutes