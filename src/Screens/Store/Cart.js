import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
//hooks
import {handleAddItemToLocalCart} from '../../Hooks/localStorage/handleAddToLocalCart'

function Cart({openCart}) {
    //params
    const {storeidURL} = useParams()

    //
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem(storeidURL)))
    const refreshCart = () => {
        setCart(JSON.parse(localStorage.getItem(storeidURL)))
    }





  return (
    <div className='cartBackground'>
        <div className='CartDrawer'>
            <div className='CartHeader'>
                <h2>Your Cart</h2>
                <button onClick={()=>{openCart(false)}}>X</button>
            </div>
                <button onClick={()=>{refreshCart()}}>refresh</button>
                <button onClick={()=>{localStorage.removeItem(storeidURL)}}>Clear</button>

            {cart && <div className='CartFooter'>
                <Link className='button Pri' to={'checkout'} onClick={()=>openCart(false)}>Checkout</Link> {/* only available when cart has item inside */}
            </div>}
            



            {/* CART ITEMS LIST */}
            {cart?.map((itemInCart)=>{
                return <div key={itemInCart.name}>
                    <img src={itemInCart.thumbnailLink} width='150'/>
                    <h4>{itemInCart.name}</h4>
                    <p>quantity: {itemInCart.quantity}</p>
                    <button 
                        onClick={()=>{
                            handleAddItemToLocalCart(storeidURL, itemInCart.productName, itemInCart.productPrice, itemInCart.productImageLink)
                            .then(()=>{refreshCart()})
                    }}>+</button>
                </div>
            })}
            {/* CART ITEMS LIST */}

        </div>
    </div>
  )
}

export default Cart