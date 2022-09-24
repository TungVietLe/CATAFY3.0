import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { db } from '../../firebase/config';
import { collection, doc } from 'firebase/firestore';
//hooks
import { useReadOneDoc } from '../../Hooks/FetchData/useReadOneDoc';
import { useReadEntireCollection } from '../../Hooks/FetchData/useReadEntireCollection';
import { handleAddItemToLocalCart } from '../../Hooks/localStorage/handleAddToLocalCart'

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
    <div className='StoreIndex'>
        {/* _____ STORE INFO _____ */}
        <img className='heroImage' src={storeData?.logoLink}/>
        <h1>{storeData?.storeName}</h1>
        {/* _____ STORE INFO _____ */}



        {/* _____ PRODUCT LIST _____ */}
        <div className='productList'>
          {resultArray.map((item)=>{
            const itemData = item?.data()
            
            return <div className='productContainer' key={item.id} onClick={()=>{navigateTo('product-ab')}}>
              <img src={itemData.productImageLink}/>
              <h3>{itemData.productName}</h3>
              <p>{itemData.productPrice} USD</p>
            </div>
          })}
        </div>
        {/* _____ PRODUCT LIST _____ */}
    </div>
  )
}

export default StoreIndex