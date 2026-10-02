const database = require("../database/productDatabase");

async function getAllProducts() {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return await database.getProducts();
}

async function getProductById(id) {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const products = await database.getProducts();

    return products.find((product) => product.id === Number(id));
}

async function createProduct(product) {
    const products = await database.getProducts();

    const newProduct = {
        id: products.length
            ? Math.max(...products.map((product) => product.id)) + 1
            : 1,
        ...product
    };

    products.push(newProduct);

    await database.saveProducts(products);

    return newProduct;
}

async function updateProduct(id, data) {
    const products = await database.getProducts();

    const index = products.findIndex(
        (product) => product.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...data
    };

    await database.saveProducts(products);

    return products[index];
}

async function deleteProduct(id) {
    const products = await database.getProducts();

    const index = products.findIndex(
        (product) => product.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    const deletedProduct = products[index];

    products.splice(index, 1);

    await database.saveProducts(products);

    return deletedProduct;
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};