import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
//hooks
import {handleAddItemToLocalCart} from '../../../customHooks/LocalStorage/useLocalStorage'
import {handlePlaceOrder} from '../../../customHooks/Orders/usePlaceOrder'

function CartContainer({setViewingCart}) {
    //params
    const {storeidURL} = useParams()
    //
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
    const refreshCart = () => {
        setCart(JSON.parse(localStorage.getItem('cart')))
    }

    useEffect(()=>{
        console.count('cart rendered')
    }, [])






  return (
    <div className='CartContainer'>
        <h2>Your Cart</h2>
        <button onClick={()=>{setViewingCart(false)}}>X</button>
        <button onClick={()=>{refreshCart()}}>refresh</button>
        <button onClick={()=>{localStorage.clear()}}>Clear</button>
        <button onClick={()=>{handlePlaceOrder(storeidURL)}}>Place Order</button>



        {/* CART ITEMS LIST */}
        {cart?.map((itemInCart)=>{
            return <div key={itemInCart.productName}>
                <img src={itemInCart.productImageLink} width='150'/>
                <h4>{itemInCart.productName}</h4>
                <p>quantity: {itemInCart.quantity}</p>
                <button 
                    onClick={()=>{
                        handleAddItemToLocalCart(itemInCart.productName, itemInCart.productPrice, itemInCart.productImageLink)
                        .then(()=>{refreshCart()})
                    }}
                >+</button>
            </div>
        })}
        {/* CART ITEMS LIST */}
    </div>
  )
}

export default CartContainer