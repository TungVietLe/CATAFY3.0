import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//pages
import StoreIndex from '../Screens/Store/StoreIndex';

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
          <Route path="cart" element={<div>cart page</div>}/>
        </Routes>
    </>
  )
}

export default ConsoleRoutes