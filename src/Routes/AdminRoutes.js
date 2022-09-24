import React, { useContext, useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import {UserContext} from '../App'

import ProductRoutes from './AdminRoutes/ProductRoutes';
import OrderRoutes from './AdminRoutes/OrderRoutes';

//firebase
import { doc } from 'firebase/firestore';
import {db} from '../firebase/config'
//hooks
import {handleReadOneDoc} from '../Hooks/FetchData/useReadOneDoc'


function AdminRoutes() {
    //params
    const {storeidURL} = useParams()
    //context
    const user = useContext(UserContext)
    const userid = user?.uid

    //
    useEffect(()=>{
        handleReadOneDoc(doc(db, 'store collection', storeidURL))
        .then((res)=>{setstoreConfig(res)})
    }, [])

    const [storeConfig, setstoreConfig] = useState(); const storeConfigData = storeConfig?.data()
    const storeOwnerid = storeConfigData?.ownerID
    const userIsOwner = user && storeConfig && storeOwnerid == userid // user exist and store exist and storeownerid = userid






  return (
    <>
        {userIsOwner? <div className='AdminRoutes'>
            <div className='AdminNav'>
                <Link to={''}>Overview</Link>
                <Link to={'orders'}>Orders</Link>
                <Link to={'products'}>Product</Link>
                <Link to={'setting'}>Setting</Link>
                <Link to={`/${storeidURL}`} target='_blank'>View Store</Link>
            </div>
            <Routes>
                <Route index element={<div>Admin index</div>}/>
                <Route path="orders/*" element={<OrderRoutes/>}/>
                <Route path="products/*" element={<ProductRoutes/>}/>
                <Route path="setting" element={<div>setting</div>}/>
            </Routes>
        </div> : <>
            <div>Sorry you are not owner</div>
        </>}
    </>
  )
}

export default AdminRoutes