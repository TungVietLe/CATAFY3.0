import { collection, doc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../App'
import { db } from '../../../firebase/config'
import { handleReadCollection } from '../../../Hooks/FetchData/useReadEntireCollection'

function ProductIndex({ myProducts }) {
	const navigateTo = useNavigate()

	return (
		<div>
			<h1>Fetch list here</h1>

			{/* _____ PRODUCT LIST _____ */}
			{myProducts?.map((item) => {
				const itemData = item.data()

				return (
					<div
						className="itemContainer"
						key={item.id}
						onClick={() => {
							navigateTo(item.id)
						}}
					>
						<img src={itemData.thumbnailLink} />
						<h3>{itemData.name}</h3>
					</div>
				)
			})}
			{/* _____ PRODUCT LIST _____ */}
		</div>
	)
}

export default ProductIndex
