import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { handleDeleteStore } from '../../../../Hooks/Delete/handleDeleteStore'
import LoadingScreen from '../../../../Screens/Loading/LoadingScreen'

function DeleteStoreButton() {
	const { storeidURL } = useParams()
	const navigateTo = useNavigate()
	//loading
	const [isLoading, setLoading] = useState(false)

	return (
		<>
			{isLoading && <LoadingScreen label={'Deleting Store...'} />}
			<button
				className="button Warning"
				onClick={() => {
					setLoading(true)
					handleDeleteStore(storeidURL).then(() => {
						setLoading(false)
						navigateTo('/console')
					})
				}}
			>
				Delete Store
			</button>
		</>
	)
}

export default DeleteStoreButton
