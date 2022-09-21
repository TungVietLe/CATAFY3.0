export const handleAddItemToLocalCart = (addProdName, addProdPrice, addProdImgLink) => {
    
    return new Promise((resolve, reject)=>{
        const allParamsExist = addProdName && addProdPrice && addProdImgLink
        if (allParamsExist) {
            let beforeCart = JSON.parse(localStorage.getItem('cart'))
            if (!beforeCart) {beforeCart = []} //cart not exist yet

            const itemAlreadyInCart = beforeCart.find((boughtItem)=>{
                return addProdName === boughtItem.productName
            })

            if (itemAlreadyInCart) {
                itemAlreadyInCart.quantity++
                localStorage.setItem('cart', JSON.stringify(beforeCart))
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
                localStorage.setItem('cart', JSON.stringify(newCart))
                resolve('item added to cart')
            }
        }
        else { reject('not enough inputs') }
    })
}