import { useState } from 'react'

//firebase
import { query, where, getDocs } from 'firebase/firestore'

export const handleFilterFrom = (
	targetCollection,
	compareField,
	comparison,
	compareValue
) => {
	return new Promise(async (resolve, reject) => {
		const filteredArray = []
		const q = query(
			targetCollection,
			where(compareField, comparison, compareValue)
		)
		const querySnapshop = await getDocs(q)
		querySnapshop.forEach((doc) => {
			filteredArray.push(doc)
		})
		resolve(filteredArray)
	})
}
