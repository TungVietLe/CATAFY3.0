import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../App'
import { handleCreateStore } from '../../../Hooks/Create/handleCreateStore'
//screens
import LoadingScreen from '../../Loading/LoadingScreen'

function NewStoreConfig({ storeid }) {
	const user = useContext(UserContext)
	const userid = user?.uid
	const navigateTo = useNavigate()

	//
	const [loadingCreate, setLoadingCreate] = useState(false)

	const [storeName, setStoreName] = useState()
	const [logo, setLogo] = useState()
	const [banner, setBanner] = useState()
	//Receive Order Method
	const [acceptPickUp, setPickUp] = useState(false)
	const [acceptDelivery, setDelivery] = useState(false)
	//Reservation
	const [requireBooking, setBooking] = useState(false)

	//Validity
	const validStoreName = storeName && storeName !== ''
	const validOveral = validStoreName && logo && banner

	return (
		<>
			<p>Your Store ID: {storeid}</p>
			{loadingCreate && <LoadingScreen label={'Creating Store'} />}

			{/* _____ INPUTS _____ */}
			<form>
				<label>
					Store Name
					<input
						onChange={(e) => {
							setStoreName(e.target.value)
						}}
					/>
				</label>

				<label>
					Logo
					<input
						type={'file'}
						onChange={(e) => {
							setLogo(e.target.files[0])
						}}
					/>
				</label>
				<label>
					Banner
					<input
						type={'file'}
						onChange={(e) => {
							setBanner(e.target.files[0])
						}}
					/>
				</label>
				<label>
					How Customer Receive Order?
					<div className={`selectBar ${acceptPickUp}`} onClick={() => setPickUp(!acceptPickUp)}>
						At Store
					</div>
					<div className={`selectBar ${acceptDelivery}`} onClick={() => setDelivery(!acceptDelivery)}>
						Delivery
					</div>
				</label>
				<label>
					Are Customer Required To Make A Reservation?
					<div className={`selectBar ${requireBooking}`} onClick={() => setBooking(true)}>
						Yes
					</div>
					<div className={`selectBar ${!requireBooking}`} onClick={() => setBooking(false)}>
						No
					</div>
				</label>
			</form>
			{/* _____ INPUTS _____ */}

			<button
				className="button "
				id="createStoreButton"
				disabled={!validOveral}
				onClick={() => {
					setLoadingCreate(true)
					handleCreateStore(
						userid,
						storeid,
						storeName,
						logo,
						banner,
						acceptPickUp,
						acceptDelivery,
						requireBooking
					).then(() => {
						setLoadingCreate(false)
					})
				}}
			>
				Create
			</button>
		</>
	)
}

export default NewStoreConfig
