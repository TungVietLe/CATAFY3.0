import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
//screens
import OrderIndex from '../../Screens/Admin/Orders/OrderIndex';
import ProductNew from '../../Screens/Admin/Products/ProductNew';




function OrderRoutes() {
  return (
    <>
        <div>
            <Link to={''}>Close</Link>
            <Link to={'new'}>New Order</Link>
        </div>
        <Routes>
          <Route index element={<OrderIndex/>}/>
          <Route path='new' element={<ProductNew/>}/>
        </Routes>
    </>
  )
}

export default OrderRoutes