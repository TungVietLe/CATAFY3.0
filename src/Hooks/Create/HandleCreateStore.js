import React from 'react'

//firebase
import { db, storage } from '../../firebase/config'
import { setDoc, doc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export const handleCreateStore = (
	owner,
	storeid,
	name,
	logoFile,
	bannerFile,
	pickUp,
	delivery,
	reservation
) => {
	return new Promise((resolve, reject) => {
		var newStore = {
			ownerID: owner,
			name: name,
			pickUp: pickUp,
			delivery: delivery,
			reservation: reservation,
		}

		const logoRef = ref(storage, `stores/${storeid}/storeConfig/logo`)
		const bannerRef = ref(storage, `stores/${storeid}/storeConfig/banner`)
		//START
		uploadBytes(logoRef, logoFile).then(() => {
			console.log('logo to storage!')
			getDownloadURL(logoRef).then((url) => {
				newStore.logoLink = url
			})
			//
			uploadBytes(bannerRef, bannerFile).then(() => {
				console.log('banner to storage!')
				getDownloadURL(bannerRef).then((url) => {
					newStore.bannerLink = url

					//FINAL
					setDoc(doc(db, 'store collection', storeid), newStore)
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
