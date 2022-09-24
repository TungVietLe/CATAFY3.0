import React, {useState} from 'react'

//firebase
import {getDocs} from 'firebase/firestore'


/* function useReadEntireCollection() {
  const [resultArray, setItemArray] = useState([])

  const handleReadCollection = async(targetCollection) => {
    setItemArray([])
    const querySnapshot = await getDocs(targetCollection)
    querySnapshot.forEach((item)=>{
      setItemArray((prev)=> [...prev, item] )
    })
  }

  return {handleReadCollection, resultArray}
}

export {useReadEntireCollection} */

export const handleReadCollection = (targetCollection) => {
  return new Promise(async(resolve, reject) => {
    const resultArray = []
    const querySnapshot = await getDocs(targetCollection)
    querySnapshot.forEach((item)=>{
      resultArray.push(item)
    })
    resolve(resultArray)
  })
}