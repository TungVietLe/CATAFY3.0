import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../App'
import { db } from '../../firebase/config'
import { collection, doc } from 'firebase/firestore'
//hooks
import { handleReadOneDoc } from '../../Hooks/FetchData/useReadOneDoc'
import { handleReadCollection } from '../../Hooks/FetchData/useReadEntireCollection'
import { handleAddItemToLocalCart } from '../../Hooks/localStorage/handleAddToLocalCart'

function StoreIndex({ storeConfig }) {
	const navigateTo = useNavigate()
	//params
	const { storeidURL } = useParams()

	//
	useEffect(() => {
		const storeDoc = doc(db, 'store collection', storeidURL)
		const productCol = collection(storeDoc, 'products')

		handleReadCollection(productCol).then((res) => {
			setStoreProducts(res)
		})
	}, [])

	const [storeProducts, setStoreProducts] = useState([])

	return (
		<div className="StoreIndex">
			{/* _____ STORE INFO _____ */}
			<img className="heroImage" src={storeConfig?.data()?.bannerLink} />
			<h1>Welcome to {storeConfig?.data()?.name}</h1>
			{/* _____ STORE INFO _____ */}

			{/* _____ PRODUCT LIST _____ */}
			<div className="productList">
				{storeProducts.map((item) => {
					const itemData = item?.data()

					return (
						<div
							className="productContainer"
							key={item.id}
							onClick={() => {
								navigateTo(`product/${item.id}`)
							}}
						>
							<img src={itemData.thumbnailLink} />
							<h3>{itemData.name}</h3>
							<p>{itemData.price} USD</p>
						</div>
					)
				})}
			</div>
			{/* _____ PRODUCT LIST _____ */}
		</div>
	)
}

export default StoreIndex
