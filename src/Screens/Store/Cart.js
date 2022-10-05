import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
//hooks
import { handleAddItemToLocalCart } from '../../Hooks/localStorage/handleAddToLocalCart'

function Cart({ openCart }) {
	//params
	const { storeidURL } = useParams()

	//
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem(storeidURL)))
	const refreshCart = () => {
		setCart(JSON.parse(localStorage.getItem(storeidURL)))
	}

	return (
		<div className="cartBackground">
			<div className="CartDrawer">
				<div className="CartHeader">
					<h2>Your Cart</h2>
					<button
						className="button Pri"
						onClick={() => {
							openCart(false)
						}}
					>
						X
					</button>
				</div>

				<button
					className="button Pri"
					onClick={() => {
						refreshCart()
					}}
				>
					refresh
				</button>
				<button
					className="button Pri"
					onClick={() => {
						localStorage.removeItem(storeidURL)
					}}
				>
					Clear
				</button>

				{/* CART ITEMS LIST */}
				{cart?.map((itemInCart) => {
					return (
						<div className="cartItemContainer" key={itemInCart.id}>
							<h4>{itemInCart.id}</h4>
							<p>quantity: {itemInCart.quantity}</p>
							<button
								className="button Pri"
								onClick={() => {
									handleAddItemToLocalCart(storeidURL, itemInCart.id).then(() => {
										refreshCart()
									})
								}}
							>
								+
							</button>
						</div>
					)
				})}
				{/* CART ITEMS LIST */}

				{cart && (
					<div className="CartFooter">
						<Link className="button Pri" to={'checkout'} onClick={() => openCart(false)}>
							Checkout
						</Link>{' '}
						{/* only available when cart has item inside */}
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
