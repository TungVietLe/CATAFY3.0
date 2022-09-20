import React, { useContext, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import {UserContext} from '../App'

import ProductRoutes from './AdminRoutes/ProductRoutes';

//firebase
import { doc } from 'firebase/firestore';
import {db} from '../firebase/config'
//hooks
import {useReadOneDoc} from '../Hooks/FetchData/useReadOneDoc'


function AdminRoutes() {
    const {storeidURL} = useParams()
    const user = useContext(UserContext); const userid = user?.uid

    //hooks
    const {handleReadOneDoc, resultDoc} = useReadOneDoc()



    
    //
    const [userIsOwner, setUserIsOwner] = useState(false)
    const checkOwner = () => {
        handleReadOneDoc(doc(db, 'store collection', storeidURL))
        if (resultDoc?.ownerID == userid) { setUserIsOwner(true) }
        else {setUserIsOwner(false)}
    }






  return (
    <>
        {userIsOwner? <>
            <div>
                <Link to={''}>Overview</Link>
                <Link to={'orders'}>Orders</Link>
                <Link to={'products'}>Product</Link>
                <Link to={'setting'}>Setting</Link>
            </div>
            <Routes>
                <Route index element={<div>Admin index</div>}/>
                <Route path="orders" element={<div>Orders</div>}/>
                <Route path="products/*" element={<ProductRoutes/>}/>
                <Route path="setting" element={<div>setting</div>}/>
            </Routes>
        </> : <>
            <div>Sorry you are not owner</div>
        </>}
    </>
  )
}

export default AdminRoutes