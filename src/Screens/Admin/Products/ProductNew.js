import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//context
import { UserContext } from '../../../App'
//hooks
import { handleCreateProduct } from '../../../Hooks/Create/handleCreateProduct'
//screens
import LoadingScreen from '../../Loading/LoadingScreen'

function ProductNew() {
	const navigateTo = useNavigate()
	//context
	const user = useContext(UserContext)
	const userid = user?.uid
	//params
	const { storeidURL } = useParams()
	//hooks

	//
	const [isAddingItem, setLoadingAddItem] = useState(false)

	const [productName, setProductName] = useState()
	const [productPrice, setProductPrice] = useState()
	const [productImg, setProductImg] = useState()

	return (
		<>
			{isAddingItem && <LoadingScreen label={'Adding Product To Store'} />}
			<h2>New Store</h2>
			{/* _____ INPUTS _____ */}
			<input
				placeholder="item name"
				onChange={(e) => {
					setProductName(e.target.value)
				}}
			/>
			<input
				placeholder="price"
				type={'number'}
				onChange={(e) => {
					setProductPrice(e.target.value)
				}}
			/>
			<input
				type={'file'}
				onChange={(e) => {
					setProductImg(e.target.files[0])
				}}
			/>
			{/* _____ INPUTS _____ */}

			<button
				className="button Pri"
				onClick={() => {
					setLoadingAddItem(true)
					handleCreateProduct(storeidURL, productName, productPrice, productImg).then((mes) => {
						setLoadingAddItem(false)
						console.log(mes)
					})
				}}
			>
				Save
			</button>
		</>
	)
}

export default ProductNew
