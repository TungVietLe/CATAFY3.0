import React, { useContext, useEffect, useState } from 'react'
import {
	Routes,
	Route,
	Link,
	useParams,
	useNavigate,
	NavLink,
} from 'react-router-dom'
import { UserContext } from '../App'
import logo from '../logo.svg'

import ProductRoutes from './AdminRoutes/ProductRoutes'
import OrderRoutes from './AdminRoutes/OrderRoutes'

//firebase
import { doc } from 'firebase/firestore'
import { db } from '../firebase/config'
//hooks
import { handleReadOneDoc } from '../Hooks/FetchData/useReadOneDoc'
import SettingIndex from '../Screens/Admin/Setting/SettingIndex'

function AdminRoutes() {
	const navigateTo = useNavigate()
	//params
	const { storeidURL } = useParams()
	//context
	const user = useContext(UserContext)
	const userid = user?.uid

	//
	useEffect(() => {
		handleReadOneDoc(doc(db, 'store collection', storeidURL)).then((res) => {
			setstoreConfig(res)
		})
	}, [])

	const [storeConfig, setstoreConfig] = useState()
	const storeConfigData = storeConfig?.data()
	const storeOwnerid = storeConfigData?.ownerID
	const userIsOwner = user && storeConfig && storeOwnerid == userid // user exist and store exist and storeownerid = userid

	return (
		<>
			{userIsOwner ? (
				<div className="AdminRoutes">
					<div className="AdminNav">
						<img
							src={logo}
							onClick={() => {
								navigateTo('/console')
							}}
						/>
						<Link to={''}>Overview</Link>
						<NavLink to={'orders'}>Orders</NavLink>
						<NavLink to={'products'}>Product</NavLink>
						<NavLink to={'setting'}>Setting</NavLink>
						<Link to={`/${storeidURL}`} target="_blank">
							View Store
						</Link>
					</div>

					<Routes>
						<Route index element={<div>Admin index</div>} />
						<Route path="orders/*" element={<OrderRoutes />} />
						<Route path="products/*" element={<ProductRoutes />} />
						<Route path="setting" element={<SettingIndex />} />
					</Routes>
				</div>
			) : (
				<>
					<div>Sorry you are not owner</div>
				</>
			)}
		</>
	)
}

export default AdminRoutes
