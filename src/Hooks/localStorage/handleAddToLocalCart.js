export const handleAddItemToLocalCart = (storeid, targetProductID, thumbnailLink) => {
	return new Promise((resolve, reject) => {
		let beforeCart = JSON.parse(localStorage.getItem(storeid))
		if (!beforeCart) {
			beforeCart = []
		} //cart not exist yet

		const itemAlreadyInCart = beforeCart.find((itemInCart) => {
			return itemInCart.id === targetProductID
		})

		if (itemAlreadyInCart) {
			itemAlreadyInCart.quantity++
			localStorage.setItem(storeid, JSON.stringify(beforeCart))
			resolve('item added to cart')
		} else {
			const newItem = {
				id: targetProductID,
				quantity: 1,
				thumbnailLink: thumbnailLink,
			}
			const newCart = [...beforeCart, newItem]
			localStorage.setItem(storeid, JSON.stringify(newCart))
			resolve('item added to cart')
		}
	})
}
