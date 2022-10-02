import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//firebase
import { collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
//context
import { UserContext } from '../../App'
//hooks
import { handleFilterFrom } from '../../Hooks/FetchData/useFilter'

function ConsoleIndex() {
	//
	const user = useContext(UserContext)
	const userid = user.uid
	const navigateTo = useNavigate()

	//
	useEffect(() => {
		const storeCol = collection(db, 'store collection')
		handleFilterFrom(storeCol, 'ownerID', '==', userid).then((result) => {
			setMyStoreArray(result)
		})
	}, [])

	const [myStoreArray, setMyStoreArray] = useState([])

	return (
		<div className="ConsoleIndex">
			<h1>Console index</h1>

			{myStoreArray.map((userStore) => {
				return (
					<div className="storeContainer" key={userStore.id}>
						<img src={userStore.data().logoLink} width="100" />
						<div className="rightSide">
							<h2>{userStore.data().name}</h2>
							<p>id: {userStore.id}</p>

							<div className="buttonContainer">
								<button
									className="button Pri"
									onClick={() => {
										navigateTo(`/${userStore.id}/admin`)
									}}
								>
									Admin
								</button>

								<button
									className="button Sec"
									onClick={() => {
										navigateTo(`/${userStore.id}`)
									}}
								>
									View store
								</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default ConsoleIndex
