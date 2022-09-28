import React from 'react'

//components
import NavBar from './Components/NavBar'

function LandingScreen() {
  return (
    <>
      <NavBar/>
      <section className='heroSection'>
        <h1>Create your own online store in less than 3 minutes.</h1>
        <div className='storeIDinput'>
          catafy.io/
          <input placeholder='storeid'/>
        </div>
        <button>Start My Store</button>
      </section>
    </>
  )
}

export default LandingScreen