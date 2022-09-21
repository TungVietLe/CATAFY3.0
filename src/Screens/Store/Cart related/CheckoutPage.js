import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
//hooks
import {handlePlaceOrder} from '../../../Hooks/Create/handlePlaceOrder'

function CheckoutPage() {
    //params
    const {storeidURL} = useParams()

    //
    const cart = JSON.parse(localStorage.getItem(storeidURL))
    let total = 0





  return (
    <>
      <h2>Checking out</h2>



      {/* BILLING */}
      <h3>Billing</h3>
      {cart?.map((purchasedItem)=>{
          total = total + purchasedItem.productPrice*purchasedItem.quantity
          return <div key={purchasedItem.productName}>
              <img src={purchasedItem.productImageLink} width='150'/>
              <h4>{purchasedItem.productName}</h4>
              <p>quantity: {purchasedItem.quantity}</p>
          </div>
      })}
      <h2>total: ${total}</h2>
      {/* BILLING */}

      <button onClick={()=>{localStorage.removeItem(storeidURL)}}>test</button>
      <button onClick={()=>{
        handlePlaceOrder(storeidURL)
        .then(()=>{localStorage.removeItem(storeidURL)})
      }}>Place order</button>


    </>
  )
}

export default CheckoutPage