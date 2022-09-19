import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function ProductRoutes() {
  return (
    <>
        <div>
            <Link to={''}>Close</Link>
            <Link to={'new'}>New Product</Link>
        </div>
        <Routes>
          <Route index element={<div>Product index</div>}/>
          <Route path='new' element={<div>new product</div>}/>
        </Routes>
    </>
  )
}

export default ProductRoutes