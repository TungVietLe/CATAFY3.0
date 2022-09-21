import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
//screens
import ProductIndex from '../../Screens/Admin/Products/ProductIndex'
import ProductNew from '../../Screens/Admin/Products/ProductNew';




function OrderRoutes() {
  return (
    <>
        <div>
            <Link to={''}>Close</Link>
            <Link to={'new'}>New Order</Link>
        </div>
        <Routes>
          <Route index element={<ProductIndex/>}/>
          <Route path='new' element={<ProductNew/>}/>
        </Routes>
    </>
  )
}

export default OrderRoutes