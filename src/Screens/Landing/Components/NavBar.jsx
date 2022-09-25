import React from 'react'
import {Link } from "react-router-dom";
import CatafyLogo from '../../../logo.svg'

function NavBar() {
  return (
    <div className='Navbar'>
      <div className='Elements'>
        <img src={CatafyLogo}/>
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