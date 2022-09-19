import React, { useEffect, useState, createContext } from "react";
import './App.scss';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//routes
import ConsoleRoutes from "./Routes/ConsoleRoutes";
import AdminRoutes from "./Routes/AdminRoutes";

function App() {
  const user = false
  return (
    <Router>
        <Routes>
          <Route path="/" element={<div>Landing page</div>}/>
          <Route path="/pricing" element={<div>Pricing</div>}/>
          <Route path="/about" element={<div>about</div>}/>
          <Route path="/console/*" element={user? <ConsoleRoutes/> : <div>Login</div>}/>
          <Route path="/:storeidURL" element={<div>Store</div>}/>
          <Route path="/:storeidURL/admin/*" element={<AdminRoutes/>}/>
          <Route path="*" element={<div>Not found</div>}/>
        </Routes>
      </Router>
  );
}

export default App;
