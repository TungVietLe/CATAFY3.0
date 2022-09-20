import { collection, doc } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { db } from '../../../firebase/config';
import { useReadEntireCollection } from '../../../Hooks/FetchData/useReadEntireCollection';

function ProductIndex() {
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
    const productCol = collection(storeDoc, 'products')
    handleReadCollection(productCol)
  }, [])



  return (
    <div>
        <h1>Fetch list here</h1>

        {/* _____ PRODUCT LIST _____ */}
        {resultArray.map((item)=>{
          return <div key={item.id}>
            <img src={item.data().productImageLink} width='100'/>
            <h3>{item.data().productName}</h3>
          </div>
        })}
        {/* _____ PRODUCT LIST _____ */}
    </div>
  )
}

export default ProductIndex