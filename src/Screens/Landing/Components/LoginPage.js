import React from 'react'
import { useNavigate } from 'react-router-dom'
//hooks
import {handleGoogleSignIn, handleSignOut} from '../../../Hooks/Auth/handleAuth'

//components
import NavBar from './NavBar'

function LoginPage() {
  const navigateTo = useNavigate()

  return (
    <>  
      <button onClick={()=>{navigateTo(-1)}}>Back</button>
      <h1>Choose an account to continue</h1>
      <button onClick={()=>{handleGoogleSignIn()}}>Continue with Google</button>
      <button onClick={()=>{handleSignOut()}}>Log out</button>
    </>
  )
}
export default LoginPage