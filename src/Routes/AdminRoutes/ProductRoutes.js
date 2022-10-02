import { collection, doc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import { UserContext } from '../../App'
import { db } from '../../firebase/config'
import { handleReadCollection } from '../../Hooks/FetchData/useReadEntireCollection'
import ProductEdit from '../../Screens/Admin/Products/ProductEdit'
//screens
import ProductIndex from '../../Screens/Admin/Products/ProductIndex'
import ProductNew from '../../Screens/Admin/Products/ProductNew'

function ProductRoutes() {
	//context
	const user = useContext(UserContext)
	const userid = user?.uid
	//params
	const { storeidURL } = useParams()
	//
	useEffect(() => {
		const storeDoc = doc(db, 'store collection', storeidURL)
		const productCol = collection(storeDoc, 'products')
		handleReadCollection(productCol).then((res) => {
			setMyProducts(res)
		})
	}, [])

	const [myProducts, setMyProducts] = useState([])
	return (
		<>
			<div>
				<Link to={''}>Close</Link>
				<Link to={'new'} className="button Highlight">
					New Product
				</Link>
			</div>
			<Routes>
				<Route index element={<ProductIndex myProducts={myProducts} />} />
				<Route path="new" element={<ProductNew />} />
				<Route path=":productidURL" element={<ProductEdit myProducts={myProducts} />} />
			</Routes>
		</>
	)
}

export default ProductRoutes
