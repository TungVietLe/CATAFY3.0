import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
//context
import {UserContext} from '../../../App'
//hooks
import {handleCreateStore} from '../../../Hooks/Create/handleCreateStore'

function NewStorePage() {
    //
    const user = useContext(UserContext)
    const userid = user?.uid
    const navigateTo = useNavigate()
    

    //
    const [storeName, setStoreName] = useState()
    const [storeid, setStoreid] = useState()
    const [logo, setLogo] = useState()





  return (
    <>
        <h2>New Store</h2>
        {/* _____ INPUTS _____ */}
        <input placeholder='name' onChange={(e)=>{setStoreName(e.target.value)}}/>
        <input placeholder='store id' onChange={(e)=>{setStoreid(e.target.value)}}/>
        <input type={'file'} onChange={(e)=>{setLogo(e.target.files[0])}}/>
        {/* _____ INPUTS _____ */}

        <button onClick={()=>{
            handleCreateStore(userid, storeid, storeName, logo)
            .then(()=>{navigateTo('/console')})
        }}>Create</button>
    </>
  )
}

export default NewStorePage