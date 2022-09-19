import React, { useEffect, useState, createContext } from "react";
import './App.scss';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//routes
import ConsoleRoutes from "./Routes/ConsoleRoutes";
import StoreRoutes from './Routes/StoreRoutes'
import AdminRoutes from "./Routes/AdminRoutes";
//Screens
import LandingScreen from "./Screens/LandingScreen";
import PricingPage from "./Screens/LandingScreen components/PricingPage";


function App() {
  const user = true
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingScreen/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
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
