import { doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebase/config'
import { handleReadOneDoc } from '../../../Hooks/FetchData/useReadOneDoc'

function OrderDetailPage() {
    //params
    const {storeidURL, orderidURL} = useParams()

    
    //
    useEffect(()=>{
        const storeDoc = doc(db, 'store collection', storeidURL)
        const orderDoc = doc(storeDoc, 'orders', orderidURL)
        handleReadOneDoc(orderDoc).then((res)=>{setOrder(res)})
    }, [])

    const [order, setOrder] = useState(); const orderData = order?.data()
    const orderCart = orderData?.cart

  return (
    <>
        <h1>Order Detail Page</h1>
        <p>params: {orderidURL}</p>

        {/* ______ ORDER CART LIST ______ */}
        {orderCart?.map((item)=>{

            return <div key={item.productName}>
                <img src={item.productImageLink} width='150'/>
                <h3>{item.productName}</h3>
            </div>
        })}
        {/* ______ ORDER CART LIST ______ */}
    </>
  )
}


export default OrderDetailPage