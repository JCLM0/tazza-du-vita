/**
 * Persistencia local del módulo de productos.
 *
 * Esta capa abstrae LocalStorage para que los módulos que consumen
 * productos no dependan directamente de la implementación del navegador.
 */

export const STORAGE_KEY = "tazzaProducts";

// Obtiene los productos del almacenamiento local
export function getProducts(storage = window.localStorage) {
    try {
        const rawProducts = storage.getItem(STORAGE_KEY);

        if (!rawProducts) {
            return [];
        }

        const products = JSON.parse(rawProducts);

        return Array.isArray(products) ? products : [];
    } catch (error) {
        console.error("No fue posible leer los productos.", error);
        return [];
    }
}

// Guarda los productos en el almacenamiento local
export function saveProducts(products, storage = window.localStorage) {
    storage.setItem(STORAGE_KEY, JSON.stringify(products));
}

// Agrega un producto
export function addProduct(product, storage = window.localStorage) {
    const products = getProducts(storage);
    products.push(product);
    saveProducts(products, storage);

    return product;
}

// Actualiza un producto
export function updateProduct(updatedProduct, storage = window.localStorage) {
    const products = getProducts(storage);

    const updatedProducts = products.map(product =>
        String(product.id) === String(updatedProduct.id)
            ? updatedProduct
            : product
    );

    saveProducts(updatedProducts, storage);

    return updatedProduct;
}

// Elimina un producto
export function removeProduct(productId, storage = window.localStorage) {
    const products = getProducts(storage);

    const remainingProducts = products.filter(
        product => String(product.id) !== String(productId)
    );

    saveProducts(remainingProducts, storage);

    return remainingProducts;
}
