import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { db } from '../../firebase/config';
import { collection, doc } from 'firebase/firestore';
//hooks
import { useReadOneDoc } from '../../Hooks/FetchData/useReadOneDoc';
import { useReadEntireCollection } from '../../Hooks/FetchData/useReadEntireCollection';

function StoreIndex() {
  const navigateTo = useNavigate()
  //params
  const {storeidURL} = useParams()
  //hooks
  const {handleReadCollection, resultArray} = useReadEntireCollection()
  const {handleReadOneDoc, resultDoc} = useReadOneDoc()
  const storeData = resultDoc?.data()

  




  //
  useEffect(()=>{
    const storeDoc = doc(db, 'store collection', storeidURL)
    const productCol = collection(storeDoc, 'products')
    handleReadCollection(productCol)
    handleReadOneDoc(storeDoc)
  }, [])


  return (
    <>
        {/* _____ STORE INFO _____ */}
        <img src={storeData?.logoLink} width='100%'/>
        <h1>{storeData?.storeName}</h1>
        {/* _____ STORE INFO _____ */}

        {/* _____ PRODUCT LIST _____ */}
        {resultArray.map((item)=>{
          return <div key={item.id}>
            <img src={item.data().productImageLink} width='100'/>
            <h3>{item.data().productName}</h3>
          </div>
        })}
        {/* _____ PRODUCT LIST _____ */}
    </>
  )
}

export default StoreIndex