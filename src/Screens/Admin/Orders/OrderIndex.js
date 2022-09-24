import { collection, doc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { db } from '../../../firebase/config';
import { handleReadCollection } from '../../../Hooks/FetchData/useReadEntireCollection';

function OrderIndex() {
  const navigateTo = useNavigate()
  //context
  const user = useContext(UserContext); const userid = user?.uid
  //params
  const {storeidURL} = useParams()

  //
  useEffect(()=>{
    const storeDoc = doc(db, 'store collection', storeidURL)
    const orderCol = collection(storeDoc, 'orders')
    handleReadCollection(orderCol)
    .then((res)=>{setMyOrders(res)})
  }, [])

  const [myOrders, setMyOrders] = useState([])







  return (
    <div>
        <h1>Your Orders</h1>

        {/* _____ ORDER LIST _____ */}
        {myOrders.map((order)=>{
          const orderData = order.data()
            
          return <div key={order.id}>
            <h3>{order.id}</h3>
            <Link to={`${order.id}`}>Detail</Link>
          </div>
        })}
        {/* _____ ORDER LIST _____ */}
    </div>
  )
}

export default OrderIndex