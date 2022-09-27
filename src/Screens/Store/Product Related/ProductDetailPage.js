import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//firebase
import {db} from '../../../firebase/config'
import { doc } from 'firebase/firestore'
//hooks
import {handleReadOneDoc} from '../../../Hooks/FetchData/useReadOneDoc'
import {handleAddItemToLocalCart} from '../../../Hooks/localStorage/handleAddToLocalCart'

function ProductDetailPage() {
    const {storeidURL, productidURL} = useParams()


    //
    useEffect(()=>{
        const storeDoc = doc(db, 'store collection', storeidURL)
        const productDoc = doc(storeDoc, 'products', productidURL)
        handleReadOneDoc(productDoc).then((res)=>{setProduct(res)})
    }, [])

    const [product, setProduct] = useState(); const productData = product?.data()
    const allowedAddCart = !product

  return (
    <div>
        <h1>Product Detail</h1>
        <p>Params: {productidURL}</p>
        <img src={productData?.thumbnailLink} width='50%'/>
        <p>{productData?.name}</p>

        <button 
            disabled={allowedAddCart}
            onClick={()=>{handleAddItemToLocalCart(storeidURL, productData.name, productData.price, productData.thumbnailLink)}}
        >ADD TO CART</button>
    </div>
  )
}

export default ProductDetailPage