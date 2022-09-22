import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

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
    <div className='ConsoleIndex'>
      <h1>Console index</h1>

      {filteredArray.map((userStore)=>{
        return <div className='storeContainer' key={userStore.id}>
          <img src={userStore.data().logoLink} width='100'/>
          <div className='rightSide'>
            <h2>{userStore.data().storeName}</h2>
            <p>id: {userStore.id}</p>
            <div className='buttonContainer'>
              <Link className='Link Pri' onClick={()=>{navigateTo(`/${userStore.data().storeID}/admin`)}} target='blank'>Admin</Link>
              <Link className='Link Sec' to={`/${userStore.data().storeID}`} target='blank'>View store</Link>
            </div>
          </div>
        </div>
      })}

    </div>
  )
}

export default ConsoleIndex