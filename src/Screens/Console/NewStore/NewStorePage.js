import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
//hooks
import { handleCheckStoreidAvailability } from '../../../Hooks/Check/handleCheckStoreidAvailability'
import MultiPagesForm from '../../../Hooks/MultiPagesForm'
//steps
import NewStoreConfig from './NewStoreConfig'
import DeliveryAndBooking from './steps/DeliveryAndBooking'
import LogoAndBanner from './steps/LogoAndBanner'
import Name from './steps/Name'

function NewStorePage() {
	//
	const { wantedStoreid } = useParams()

	//Store id check
	const [storeid, setStoreid] = useState(wantedStoreid)
	const [idCheckDone, setidCheck] = useState(false)
	const validStoreid =
		storeid &&
		storeid !== '' &&
		!storeid.includes(' ') &&
		!storeid.includes('/')

	const [newStore, setStoreConfig] = useState({
		name: '',
		slogan: '',
		logoFile: null,
		bannerFile: null,
		acceptPickup: false,
		acceptDelivery: false,
		requireBooking: false,
	})

	const storeConfigElements = [
		<Name newStore={newStore} setStoreConfig={setStoreConfig} />,
		<LogoAndBanner newStore={newStore} setStoreConfig={setStoreConfig} />,
		<DeliveryAndBooking newStore={newStore} setStoreConfig={setStoreConfig} />,
	]

	return (
		<>
			<h1>Create New Store</h1>

			{idCheckDone ? (
				<NewStoreConfig storeid={storeid} />
			) : (
				<MultiPagesForm
					elements={storeConfigElements}
					submitFunction={() => {
						console.log('test')
					}}
				/>
				/* <div>
					<h2>Store URL</h2>

					<div className="storeIDinput">
						catafy.io/
						<input
							defaultValue={wantedStoreid}
							placeholder="storeid"
							onChange={(e) => {
								setStoreid(e.target.value)
							}}
						/>
					</div>

					<button
						className="button Pri"
						disabled={!validStoreid}
						onClick={() => {
							handleCheckStoreidAvailability(storeid).then((status) => {
								if (status == 'id available') {
									setidCheck(true)
								}
								if (status == 'id taken') {
									alert('id already been used')
								}
							})
						}}
					>
						Continue
					</button>
				</div> */
			)}
		</>
	)
}

export default NewStorePage
