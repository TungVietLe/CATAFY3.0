import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { handleCheckStoreidAvailability } from '../../../../Hooks/Check/handleCheckStoreidAvailability'
import LoadingScreen from '../../../Loading/LoadingScreen'

function StoreID({ setFinalStoreid }) {
	const { wantedStoreid } = useParams()

	//loading check store id
	const [isLoading, setLoading] = useState(false)

	//Store id check
	const [storeid, setStoreid] = useState(wantedStoreid)
	const validStoreid =
		storeid &&
		storeid !== '' &&
		!storeid.includes(' ') &&
		!storeid.includes('/')

	return (
		<>
			{isLoading && (
				<LoadingScreen label={'Checking Store URL availability...'} />
			)}

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
					setLoading(true)
					handleCheckStoreidAvailability(storeid).then((status) => {
						if (status == 'id available') {
							setFinalStoreid(storeid)
							setLoading(false)
						}
						if (status == 'id taken') {
							alert('id already been used')
							setLoading(false)
						}
					})
				}}
			>
				Continue
			</button>
		</>
	)
}

export default StoreID
