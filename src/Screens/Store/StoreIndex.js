import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../App'
import { db } from '../../firebase/config'
import { collection, doc } from 'firebase/firestore'
//hooks
import { handleReadOneDoc } from '../../Hooks/FetchData/useReadOneDoc'
import { handleReadCollection } from '../../Hooks/FetchData/useReadEntireCollection'
import { handleAddItemToLocalCart } from '../../Hooks/localStorage/handleAddToLocalCart'

function StoreIndex({ storeConfig, storeProducts }) {
	const navigateTo = useNavigate()

	//recevie store config and products datas from store routes

	return (
		<div className="StoreIndex">
			<header className="Hero">
				<div className="textContainer">
					<h1>{storeConfig?.data()?.coreIdea}</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
					<button className="button Highlight">Get Started</button>
				</div>
				<img className="heroImage" src={storeConfig?.data()?.bannerLink} />
			</header>

			{/* _____ PRODUCT LIST _____ */}
			<div className="productList">
				{storeProducts?.map((item) => {
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
