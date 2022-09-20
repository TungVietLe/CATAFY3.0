import React, {useState} from 'react'

//firebase
import {getDocs} from 'firebase/firestore'


function useReadEntireCollection() {
  const [resultArray, setItemArray] = useState([])

  const handleReadCollection = async(targetCollection) => {
    setItemArray([])
    setArrayWithID([])
    const querySnapshot = await getDocs(targetCollection)
    querySnapshot.forEach((item)=>{
      setItemArray((prev)=> [...prev, item] )
    })
  }

  return {handleReadCollection, resultArray}
}

export {useReadEntireCollection}