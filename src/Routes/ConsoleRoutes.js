import React from 'react'
import { Routes, Route, Link, useNavigate, NavLink} from "react-router-dom";
import CatafyLogo from '../logo.svg'

//screens
import ConsoleIndex from '../Screens/Console/ConsoleIndex';
import NewStorePage from '../Screens/Console/Components/NewStorePage';


function ConsoleRoutes() {
  const navigateTo = useNavigate()
  return (
    <>
      <div className='Navbar'>
        <div className='Elements'>
          <img src={CatafyLogo} onClick={()=>navigateTo('')}/>
          <NavLink to={'learn'}>Learn</NavLink>
          <NavLink to={'/pricing'}>Pricing</NavLink>
        </div>
          <Link to={'new'} className='button Highlight'>New Store</Link>
      </div>
      
      <Routes>
        <Route index element={<ConsoleIndex/>}/>
        <Route path="new" element={<NewStorePage/>}/>
        <Route path="learn" element={<div>Learn feature soon!</div>}/>
      </Routes>
    </>
  )
}

export default ConsoleRoutes