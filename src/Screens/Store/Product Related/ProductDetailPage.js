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
	const otherProduct = storeProducts?.filter((item) => item.id !== productidURL)
	const allowedAddCart = true

	return (
		<>
			<main className="productDetailContainer">
				<img src={product?.data()?.thumbnailLink} />

				<div className="textContainer">
					<h1>{product.data()?.name}</h1>
					<h3>${product?.data()?.price}</h3>

					<button
						className="button Pri"
						disabled={!allowedAddCart}
						onClick={() => {
							handleAddItemToLocalCart(storeidURL, product.id, product?.data()?.thumbnailLink)
						}}
					>
						ADD TO CART
					</button>
				</div>
			</main>
		</>
	)
}

export default ProductDetailPage
