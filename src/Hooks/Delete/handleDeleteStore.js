import React, { useEffect } from 'react'
import { doc, deleteDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { handleReadCollection } from '../../Hooks/FetchData/useReadEntireCollection'
import { async } from '@firebase/util'

export const handleDeleteStore = (targetStoreid) => {
	const targetRef = doc(db, 'store collection', targetStoreid)
	const productCol = collection(targetRef, 'products')

	return new Promise(async (resolve, reject) => {
		await deleteDoc(targetRef)
		resolve('delete store successfully!')
	})
}
