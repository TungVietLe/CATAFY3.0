import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ProductRoutes from './AdminRoutes/ProductRoutes';


function AdminRoutes() {
    const userIsOwner = true
  return (
    <>
        {userIsOwner? <>
            <div>
                <Link to={''}>Overview</Link>
                <Link to={'orders'}>Orders</Link>
                <Link to={'products'}>Product</Link>
                <Link to={'setting'}>Setting</Link>
            </div>
            <Routes>
                <Route index element={<div>Admin index</div>}/>
                <Route path="orders" element={<div>Orders</div>}/>
                <Route path="products/*" element={<ProductRoutes/>}/>
                <Route path="setting" element={<div>setting</div>}/>
            </Routes>
        </> : <>
            <div>Sorry you are not owner</div>
        </>}
    </>
  )
}

export default AdminRoutes