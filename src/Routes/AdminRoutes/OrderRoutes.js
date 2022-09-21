import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
//screens
import OrderIndex from '../../Screens/Admin/Orders/OrderIndex';
import ProductNew from '../../Screens/Admin/Products/ProductNew';
import OrderDetailPage from '../../Screens/Admin/Orders/OrderDetailPage';




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
          <Route path=':orderidURL' element={<OrderDetailPage/>}/>
        </Routes>
    </>
  )
}

export default OrderRoutes