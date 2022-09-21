import React from 'react'
import { Routes, Route, Link} from "react-router-dom";

//screens
import ConsoleIndex from '../Screens/Console/ConsoleIndex';
import NewStorePage from '../Screens/Console/Components/NewStorePage';


function ConsoleRoutes() {
  return (
    <>
        <div>
            <Link to={''}>Home</Link>
            <Link to={'learn'}>Learn</Link>
            <Link to={'new'}>New</Link>
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