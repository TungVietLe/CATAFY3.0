import React, { useContext, useEffect } from 'react'
import {
	Routes,
	Route,
	Link,
	NavLink,
	useParams,
	useNavigate,
} from 'react-router-dom'
import { UserContext } from '../App'
import { doc } from 'firebase/firestore'
import { db } from '../firebase/config'
//hooks
import { handleReadOneDoc } from '../Hooks/FetchData/useReadOneDoc'

//pages
import StoreIndex from '../Screens/Store/StoreIndex'
import Cart from '../Screens/Store/Cart'
import CheckoutPage from '../Screens/Store/Cart related/CheckoutPage'
import ProductDetailPage from '../Screens/Store/Product Related/ProductDetailPage'
import LoginPage from '../Screens/Landing/Components/LoginPage'
import { useState } from 'react'

function ConsoleRoutes() {
	const user = useContext(UserContext)
	const { storeidURL } = useParams()
	const navigateTo = useNavigate()

	useEffect(() => {
		console.count('store routes triggered')
		const storeDoc = doc(db, 'store collection', storeidURL)
		handleReadOneDoc(storeDoc).then((res) => {
			setStoreConfig(res)
		})
	}, [])

	//
	const [storeConfig, setStoreConfig] = useState()

	const [cartisOpen, openCart] = useState(false)

	return (
		<>
			<div className="Navbar">
				<div className="Elements">
					<img
						src={storeConfig?.data()?.logoLink}
						onClick={() => {
							navigateTo('')
						}}
					/>
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
				<Route index element={<StoreIndex storeConfig={storeConfig} />} />
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
