import React, { useEffect, useState, createContext } from "react";
import './App.scss';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//routes
import ConsoleRoutes from "./Routes/ConsoleRoutes";
import StoreRoutes from './Routes/StoreRoutes'
import AdminRoutes from "./Routes/AdminRoutes";

function App() {
  const user = true
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<div>Landing page</div>}/>
          <Route path="/pricing" element={<div>Pricing</div>}/>
          <Route path="/about" element={<div>about</div>}/>
          <Route path="/careers" element={<div>career</div>}/>
          <Route path="/console/*" element={user? <ConsoleRoutes/> : <div>Login</div>}/>
          <Route path="/:storeidURL/*" element={<StoreRoutes/>}/>
          <Route path="/:storeidURL/admin/*" element={<AdminRoutes/>}/>
          <Route path="*" element={<div>Not found</div>}/>
        </Routes>
      </Router>
  );
}

export default App;
