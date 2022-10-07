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
		<>
			<div
				className="cartOutside"
				onClick={() => {
					openCart(false)
				}}
			></div>

			<div className="CartDrawer">
				<header className="CartHeader">
					<h2>Your Cart</h2>
					<button
						className="button Pri"
						onClick={() => {
							openCart(false)
						}}
					>
						X
					</button>
				</header>

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
							<img src={itemInCart.thumbnailLink} />
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
					<footer className="CartFooter">
						<Link className="button Pri" to={'checkout'} onClick={() => openCart(false)}>
							Checkout
						</Link>{' '}
						{/* only available when cart has item inside */}
					</footer>
				)}
			</div>
		</>
	)
}

export default Cart
