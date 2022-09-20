import React, { useContext, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
//context
import {UserContext} from '../../../App'
//hooks
import {handleCreateProduct} from '../../../Hooks/Create/handleCreateProduct'

function ProductNew() {
  const navigateTo = useNavigate()
  //context
  const user = useContext(UserContext); const userid = user?.uid
  //params
  const {storeidURL} = useParams()
  

  

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
          handleCreateProduct(storeidURL, productName, productPrice, productImg)
          .then((mes)=>{console.log(mes)})
        }}>Save</button>
    </>
  )
}

export default ProductNew