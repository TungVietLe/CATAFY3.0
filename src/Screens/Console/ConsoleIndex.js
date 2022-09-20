import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

//firebase
import { collection } from 'firebase/firestore';
import { db } from '../../firebase/config';
//context
import {UserContext} from '../../App'
//hooks
import {useFilter} from '../../Hooks/FetchData/useFilter'



function ConsoleIndex() {
  //
  const user = useContext(UserContext); const userid = user.uid
  const navigateTo = useNavigate()
  //hooks
  const {handleFilterFrom, filteredArray} = useFilter()


  //
  const storeCol = collection(db, 'store collection')
  useEffect(()=>{
    handleFilterFrom(storeCol, 'ownerID', '==', userid)
  }, [])


  return (
    <>
      <h1>Console index</h1>

      {filteredArray.map((userStore)=>{
        return <div key={userStore.id}>
          <img src={userStore.data().logoLink} width='100'/>
          <h2>{userStore.data().storeName}</h2>
          <button onClick={()=>{navigateTo(`/${userStore.data().storeID}`)}}>View store</button>
        </div>
      })}

    </>
  )
}

export default ConsoleIndex