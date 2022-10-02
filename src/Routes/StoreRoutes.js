import React, { useContext } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { UserContext } from '../App'

//pages
import StoreIndex from '../Screens/Store/StoreIndex'
import Cart from '../Screens/Store/Cart'
import CheckoutPage from '../Screens/Store/Cart related/CheckoutPage'
import ProductDetailPage from '../Screens/Store/Product Related/ProductDetailPage'
import LoginPage from '../Screens/Landing/Components/LoginPage'
import { useState } from 'react'

function ConsoleRoutes() {
	const user = useContext(UserContext)

	//
	const [cartisOpen, openCart] = useState(false)

	return (
		<>
			<div className="Navbar">
				<div className="Elements">
					<Link to={''}>Logo</Link>
					<NavLink to={'admin'}>Admin</NavLink>
					<NavLink to={'about'}>About Us</NavLink>
				</div>
				<Link
					className="button Highlight"
					onClick={() => {
						openCart(!cartisOpen)
					}}
				>
					CART
				</Link>
			</div>
			{cartisOpen && <Cart openCart={openCart} />}

			<Routes>
				<Route index element={<StoreIndex />} />
				<Route path="product/:productidURL" element={<ProductDetailPage />} />
				<Route
					path="checkout"
					element={user ? <CheckoutPage /> : <LoginPage />}
				/>
			</Routes>
		</>
	)
}

export default ConsoleRoutes
