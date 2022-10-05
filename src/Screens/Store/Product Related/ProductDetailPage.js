import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//firebase
import { db } from '../../../firebase/config'
import { doc } from 'firebase/firestore'
//hooks
import { handleReadOneDoc } from '../../../Hooks/FetchData/useReadOneDoc'
import { handleAddItemToLocalCart } from '../../../Hooks/localStorage/handleAddToLocalCart'

function ProductDetailPage({ storeProducts }) {
	const { storeidURL, productidURL } = useParams()

	//
	// [product] because filter return an ARRAY
	const [product] = storeProducts?.filter((item) => item.id === productidURL)
	const allowedAddCart = true

	return (
		<>
			<h1>Product Detail</h1>
			<p>Params: {productidURL}</p>
			<img src={product?.data()?.thumbnailLink} width="50%" />
			<p>{product?.data()?.name}</p>
			<p>{product?.data()?.price}</p>

			<button
				className="button Pri"
				disabled={!allowedAddCart}
				onClick={() => {
					handleAddItemToLocalCart(storeidURL, product.id)
				}}
			>
				ADD TO CART
			</button>
		</>
	)
}

export default ProductDetailPage
