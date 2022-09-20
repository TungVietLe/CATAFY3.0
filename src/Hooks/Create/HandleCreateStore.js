import React from 'react'

//firebase
import {db,storage} from '../../firebase/config'
import {setDoc, doc} from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'



function handleCreateStore(owner, storeid, name, logoFile) {
    return new Promise((resolve, reject)=>{
        const logoRef = ref(storage, `stores/${storeid}/storeConfig/logo`)
        uploadBytes(logoRef, logoFile)
        .then(()=>{
            console.log('logo done!')
            getDownloadURL(logoRef)
            .then((url)=>{
                console.log('logo url done!')
                const newStore = {
                    ownerID: owner,
                    storeName: name,
                    logoLink: url,
                    storeID: storeid,
                }
                setDoc(doc(db, 'store collection', storeid),  newStore)
                .then(()=>{
                    console.log('set store done!')
                    resolve('congrats! Create store success')
                })
                .catch((error)=>{alert(error)})
            })
            .catch((error)=>{alert(error)})
            })
        .catch((error)=>{alert(error)})
    })
    
}

export {handleCreateStore}