import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { UserContext } from '../App';

//pages
import StoreIndex from '../Screens/Store/StoreIndex';
import Cart from '../Screens/Store/Cart'
import CheckoutPage from '../Screens/Store/Cart related/CheckoutPage';
import LoginPage from '../Screens/Landing/Components/LoginPage';

function ConsoleRoutes() {
  const user = useContext(UserContext);






  return (
    <>
        <div className='StoreNav'>
            <Link to={''}>Store</Link>
            <Link to={'admin'}>admin</Link>
            <Link className='button Highlight' to={'cart'}>cart</Link>
        </div>
        <Routes>
          <Route index element={<StoreIndex/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="cart/checkout" element={user? <CheckoutPage/> : <LoginPage/>}/>
        </Routes>
    </>
  )
}

export default ConsoleRoutes