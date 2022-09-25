import React from 'react'
import {Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='Elements'>
        <Link to={'/'}>Home</Link>
        <Link to={'/pricing'}>Pricing</Link>
        <Link to={'/career'}>Career</Link>
        <Link to={'/about'}>About</Link>
      </div>
        <Link to={'/console'} className='button Highlight'>{'> Console'}</Link>
    </div>
  )
}

export default NavBar