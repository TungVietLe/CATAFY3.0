import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../App'
//hooks
import { handleCheckStoreidAvailability } from '../../../Hooks/Check/handleCheckStoreidAvailability'
import { handleCreateStore } from '../../../Hooks/Create/handleCreateStore'
import MultiPageForm from '../../../Hooks/MultiPageForm'
import LoadingScreen from '../../Loading/LoadingScreen'
//steps
import NewStoreConfig from './NewStoreConfig'
import DeliveryAndBooking from './steps/DeliveryAndBooking'
import LogoAndBanner from './steps/LogoAndBanner'
import Name from './steps/Name'
import StoreID from './steps/StoreID'

function NewStorePage() {
	//
	const user = useContext(UserContext)

	//loading
	const [isLoading, setLoading] = useState(false)

	//change when storeid is final ONLY (after available)
	const [finalStoreid, setFinalStoreid] = useState(null)

	//new store object
	const [newStore, setStoreConfig] = useState({
		ownerID: user?.uid,
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
			{isLoading && <LoadingScreen label={'Creating Store...'} />}
			<h1>Create New Store</h1>

			{finalStoreid ? (
				<MultiPageForm
					elements={storeConfigElements}
					submitFunction={() => {
						setLoading(true)
						handleCreateStore(finalStoreid, newStore).then(() =>
							setLoading(false)
						)
					}}
				/>
			) : (
				<StoreID setFinalStoreid={setFinalStoreid} />
			)}
		</>
	)
}

export default NewStorePage
