export const handleAddItemToLocalCart = (storeid, addProdName, addProdPrice, addProdImgLink) => {
    
    return new Promise((resolve, reject)=>{
        let beforeCart = JSON.parse(localStorage.getItem(storeid))
        if (!beforeCart) {beforeCart = []} //cart not exist yet

        const itemAlreadyInCart = beforeCart.find((boughtItem)=>{
            return addProdName === boughtItem.productName
        })

        if (itemAlreadyInCart) {
            itemAlreadyInCart.quantity++
            localStorage.setItem(storeid, JSON.stringify(beforeCart))
            resolve('item added to cart')
        }
        else {
            const newItem = {
                productName: addProdName, 
                quantity: 1, 
                productImageLink: addProdImgLink,
                productPrice: addProdPrice
            }
            const newCart = [...beforeCart, newItem]
            localStorage.setItem(storeid, JSON.stringify(newCart))
            resolve('item added to cart')
        }
    })
}