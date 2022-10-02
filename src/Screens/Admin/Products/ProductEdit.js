import React from 'react'
import { useParams } from 'react-router-dom'

function ProductEdit({ myProducts }) {
	const { productidURL } = useParams()

	//
	const [product] = myProducts.filter((item) => item.id == productidURL) //filter returns an array

	return (
		<div>
			<img src={product.data().thumbnailLink} width="100%" />
			<h2>{product.data().name}</h2>
			<h2>${product.data().price}</h2>
		</div>
	)
}

export default ProductEdit
