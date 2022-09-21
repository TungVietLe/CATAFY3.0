import { collection, doc } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { db } from '../../../firebase/config';
import { useReadEntireCollection } from '../../../Hooks/FetchData/useReadEntireCollection';

function OrderIndex() {
  const navigateTo = useNavigate()
  //context
  const user = useContext(UserContext); const userid = user?.uid
  //params
  const {storeidURL} = useParams()
  //hooks
  const {handleReadCollection, resultArray} = useReadEntireCollection()

  //
  useEffect(()=>{
    const storeDoc = doc(db, 'store collection', storeidURL)
    const orderCol = collection(storeDoc, 'orders')
    handleReadCollection(orderCol)
  }, [])







  return (
    <div>
        <h1>Your Orders</h1>

        {/* _____ ORDER LIST _____ */}
        {resultArray.map((order)=>{
            const orderData = order.data()
            
          return <div key={order.id}>
            <h3>{order.id}</h3>
          </div>
        })}
        {/* _____ ORDER LIST _____ */}
    </div>
  )
}

export default OrderIndex