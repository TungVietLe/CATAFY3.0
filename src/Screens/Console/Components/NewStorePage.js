import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
//context
import {UserContext} from '../../../App'
//hooks
import {HandleCreateStore} from '../../../Hooks/Create/HandleCreateStore'

function NewStorePage() {
    //
    const user = useContext(UserContext)
    const userid = user?.uid
    const navigateTo = useNavigate()
    

    //
    const [storeName, setStoreName] = useState()
    const [storeid, setstoreid] = useState()
    const [logo, setLogo] = useState()
  return (
    <>
        <h2>New Store</h2>
        <input type={'file'} onChange={(e)=>{setLogo(e.target.files[0])}}/>
        <button onClick={()=>{
            HandleCreateStore('booleke', 'bbbb', 'testname', logo)
            .then(()=>{navigateTo('/console')})
        }}>Test Do not click without carefull investigation</button>
    </>
  )
}

export default NewStorePage