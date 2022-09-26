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
    const [banner, setBanner] = useState()
    //Receive Order Method
    const [acceptPickUp, setPickUp] = useState(false)
    const [acceptDelivery, setDelivery] = useState(false)






  return (
    <>
        <h2>New Store</h2>

        {/* _____ INPUTS _____ */}
        <form>
          <label>
            Store Name
            <input onChange={(e)=>{setStoreName(e.target.value)}}/>
          </label>
          <label>
            Store URL
          <input placeholder='e.g. mystore123' onChange={(e)=>{setStoreid(e.target.value)}}/>
          </label>
          <label>
            Logo
            <input type={'file'} onChange={(e)=>{setLogo(e.target.files[0])}}/>
          </label>
          <label>
            Banner
            <input type={'file'} onChange={(e)=>{setBanner(e.target.files[0])}}/>
          </label>
          <label>
            How Customer Receive Order?
            <div className={`select ${acceptPickUp}`} onClick={()=>setPickUp(!acceptPickUp)}>At Store</div>
            <div className={`select ${acceptDelivery}`} onClick={()=>setDelivery(!acceptDelivery)}>Delivery</div>
          </label>
        </form>
        {/* _____ INPUTS _____ */}

        <button id='createStoreButton' onClick={()=>{
            handleCreateStore(userid, storeid, storeName, logo)
            .then(()=>{navigateTo('/console')})
        }}>Create</button>
    </>
  )
}

export default NewStorePage