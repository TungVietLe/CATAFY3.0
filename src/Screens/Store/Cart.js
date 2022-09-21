import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
//hooks
import {handleAddItemToLocalCart} from '../../Hooks/localStorage/handleAddToLocalCart'

function Cart() {
    //params
    const {storeidURL} = useParams()

    //
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem(storeidURL)))
    const refreshCart = () => {
        setCart(JSON.parse(localStorage.getItem(storeidURL)))
    }





  return (
    <>
        <h2>Your Cart</h2>
        <button onClick={()=>{refreshCart()}}>refresh</button>
        <button onClick={()=>{localStorage.removeItem(storeidURL)}}>Clear</button>
        {cart && <Link to={'checkout'}>Place order</Link>} {/* only available when cart has item inside */}



        {/* CART ITEMS LIST */}
        {cart?.map((itemInCart)=>{
            return <div key={itemInCart.productName}>
                <img src={itemInCart.productImageLink} width='150'/>
                <h4>{itemInCart.productName}</h4>
                <p>quantity: {itemInCart.quantity}</p>
                <button 
                    onClick={()=>{
                        handleAddItemToLocalCart(storeidURL, itemInCart.productName, itemInCart.productPrice, itemInCart.productImageLink)
                        .then(()=>{refreshCart()})
                }}>+</button>
            </div>
        })}
        {/* CART ITEMS LIST */}

    </>
  )
}

export default Cart