import React from 'react'
import { useParams } from 'react-router-dom'

function OrderDetailPage() {
    //params
    const {orderidURL} = useParams()

  return (
    <div>
        <h1>Order Detail Page</h1>
        <p>params: {orderidURL}</p>
    </div>
  )
}


export default OrderDetailPage