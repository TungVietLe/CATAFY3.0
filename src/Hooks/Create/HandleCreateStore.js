import React from 'react'

//firebase
import { db, storage } from '../../firebase/config'
import { setDoc, doc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const handleCreateStore = (storeid, newStoreObj) => {
	return new Promise((resolve, reject) => {
		const logoRef = ref(storage, `stores/${storeid}/storeConfig/logo`)
		const bannerRef = ref(storage, `stores/${storeid}/storeConfig/banner`)
		//destructure
		const { logoFile, bannerFile } = newStoreObj

		//START
		uploadBytes(logoRef, logoFile).then(() => {
			console.log('logo to storage!')
			getDownloadURL(logoRef).then((url) => {
				newStoreObj.logoLink = url
				delete newStoreObj.logoFile
			})
			//
			uploadBytes(bannerRef, bannerFile).then(() => {
				console.log('banner to storage!')
				getDownloadURL(bannerRef).then((url) => {
					newStoreObj.bannerLink = url
					delete newStoreObj.bannerFile

					//FINAL
					setDoc(doc(db, 'store collection', storeid), newStoreObj)
						.then(() => {
							console.log('set store done!')
							resolve('congrats! Create store success')
						})
						.catch((error) => {
							alert(error)
						})
				})
			})
		})
	})
}
