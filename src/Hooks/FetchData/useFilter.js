import { useState } from "react"

//firebase
import {query, where, getDocs} from 'firebase/firestore'





/* export const useFilter = () =>{
    const [filteredArray, setFilteredArray] = useState([])
  
    const handleFilterFrom = async(targetCollection, compareField, comparison, compareValue) => {
      setFilteredArray([])
      const q = query(targetCollection, where(compareField, comparison, compareValue))
      const querySnapshop = await getDocs(q)
      querySnapshop.forEach((doc)=>{
        setFilteredArray((prev)=>[...prev, doc])
      })
    }
  
    return {handleFilterFrom, filteredArray}
} */

export const handleFilterFrom = (targetCollection, compareField, comparison, compareValue) => {
  return new Promise (async(resolve, reject)=>{
    const filteredArray = []
    const q = query(targetCollection, where(compareField, comparison, compareValue))
    const querySnapshop = await getDocs(q)
    querySnapshop.forEach((doc)=>{
      filteredArray.push(doc)
    })
    resolve(filteredArray)
  })
}

