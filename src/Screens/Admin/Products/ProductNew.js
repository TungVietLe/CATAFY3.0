import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
//context
import {UserContext} from '../../../App'
//hooks
import {HandleCreateStore} from '../../../Hooks/Create/HandleCreateStore'

function ProductNew() {
    //context
    const user = useContext(UserContext); const userid = user?.uid
    const navigateTo = useNavigate()
    

    //
    const [productName, setProductName] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productImg, setProductImg] = useState()





  return (
    <>
        <h2>New Store</h2>
        {/* _____ INPUTS _____ */}
        <input placeholder='item name' onChange={(e)=>{setProductName(e.target.value)}}/>
        <input placeholder='price' type={'number'} onChange={(e)=>{setProductPrice(e.target.value)}}/>
        <input type={'file'} onChange={(e)=>{setProductImg(e.target.files[0])}}/>
        {/* _____ INPUTS _____ */}

        <button onClick={()=>{
            
        }}>Save</button>
    </>
  )
}

export default ProductNew