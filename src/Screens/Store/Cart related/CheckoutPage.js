import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
//hooks
import { handlePlaceOrder } from '../../../Hooks/Create/handlePlaceOrder'

function CheckoutPage() {
	//params
	const { storeidURL } = useParams()

	//
	const cart = JSON.parse(localStorage.getItem(storeidURL))
	let total = 0

	return (
		<>
			<h2>Checking out</h2>

			{/* BILLING */}
			<h3>Billing</h3>
			{cart?.map((purchasedItem) => {
				total = total + purchasedItem.price * purchasedItem.quantity
				return (
					<div key={purchasedItem.name}>
						<img src={purchasedItem.thumbnailLink} width="150" />
						<h4>{purchasedItem.name}</h4>
						<p>quantity: {purchasedItem.quantity}</p>
					</div>
				)
			})}
			<h2>total: ${total}</h2>
			{/* BILLING */}

			<button
				className="button Pri"
				onClick={() => {
					handlePlaceOrder(storeidURL).then(() => {
						localStorage.removeItem(storeidURL)
					})
				}}
			>
				Place order
			</button>
		</>
	)
}

export default CheckoutPage
