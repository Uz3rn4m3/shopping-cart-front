const productsArray =[
    {
        id: "1",
        title: "GTX 1060",
        price: 175.99
    },
    {
        id: "2",
        title: "Asus 27 inch Gaming Monitor",
        price: 75.99
    },
    {
        id: "3",
        title: "GTX 3070",
        price: 275.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    
    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
    return productData;
}
export { productsArray, getProductData };