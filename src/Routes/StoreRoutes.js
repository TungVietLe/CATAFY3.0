import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//routes
import AdminRoutes from './AdminRoutes';

function ConsoleRoutes() {
  return (
    <>
        <div>
            <Link to={''}>Store</Link>
            <Link to={'cart'}>cart</Link>
            <Link to={'admin'}>admin</Link>
        </div>
        <Routes>
          <Route index element={<div>Store index</div>}/>
          <Route path="cart" element={<div>cart page</div>}/>
        </Routes>
    </>
  )
}

export default ConsoleRoutes