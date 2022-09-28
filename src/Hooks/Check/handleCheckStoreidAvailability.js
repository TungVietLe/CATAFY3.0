import { doc, getDoc } from "firebase/firestore"
import {db} from '../../firebase/config'

export const handleCheckStoreidAvailability = (storeid) => {
    const storeDoc = doc(db, 'store collection', storeid)
    return new Promise(async(resolve, reject)=>{
        const docSnap = await getDoc(storeDoc)
        if (docSnap.data()) {resolve('id taken')} //if docsnap exist = storeid NOT available
        else (resolve('id available'))
        
    })
}