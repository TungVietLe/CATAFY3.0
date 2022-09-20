import { useState } from "react"

//firebase
import {getDoc} from 'firebase/firestore'

const useReadOneDoc = () => {
    const [resultDoc, setResultDoc] = useState(null)

   
  
    const handleReadOneDoc = async(targetDocRef) => {
        const docSnap = await getDoc(targetDocRef)
        setResultDoc(docSnap)
    }
    
    return {handleReadOneDoc, resultDoc}
}

export {useReadOneDoc}