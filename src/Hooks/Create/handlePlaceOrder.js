import React from 'react'

//firebase
import {db} from '../../firebase/config'
import { collection, doc, addDoc} from "firebase/firestore";



export const handlePlaceOrder = (storeid) => {
    return new Promise((resolve, reject)=>{
        const localCartValue = JSON.parse(localStorage.getItem(storeid))
        const storeDocRef = doc(db, 'store collection', storeid)
        const orderCol = collection(storeDocRef, 'orders')
        
        addDoc(orderCol, {cart: localCartValue})
        .then(()=>{resolve('order success')})
        .catch((err)=>{console.log(err)})
    })
}