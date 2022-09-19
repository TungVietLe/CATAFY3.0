import React from 'react'
import {Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/pricing'}>Pricing</Link>
        <Link to={'/career'}>Career</Link>
        <Link to={'/about'}>About</Link>
    </div>
  )
}

export default NavBar