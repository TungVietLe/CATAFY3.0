import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function ConsoleRoutes() {
  return (
    <>
        <div>
            <Link to={''}>Home</Link>
            <Link to={'learn'}>Learn</Link>
            <Link to={'new'}>New</Link>
        </div>
        <Routes>
          <Route index element={<div>Console index</div>}/>
          <Route path="new" element={<div>new store</div>}/>
          <Route path="learn" element={<div>Learn feature</div>}/>
        </Routes>
    </>
  )
}

export default ConsoleRoutes