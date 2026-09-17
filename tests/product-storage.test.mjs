import assert from "node:assert/strict";
import {
    addProduct,
    getProducts,
    removeProduct,
    saveProducts,
    updateProduct
} from "../js/utils/product-storage.js";

function createMemoryStorage() {
    const data = new Map();

    return {
        getItem(key) {
            return data.has(key) ? data.get(key) : null;
        },
        setItem(key, value) {
            data.set(key, String(value));
        }
    };
}

const storage = createMemoryStorage();

const firstProduct = {
    id: 1,
    name: "Producto de prueba",
    category: "coffee",
    price: 10000,
    stock: 5,
    description: "Producto utilizado para pruebas unitarias."
};

assert.deepEqual(getProducts(storage), []);

addProduct(firstProduct, storage);
assert.equal(getProducts(storage).length, 1);

updateProduct({ ...firstProduct, stock: 8 }, storage);
assert.equal(getProducts(storage)[0].stock, 8);

removeProduct(firstProduct.id, storage);
assert.deepEqual(getProducts(storage), []);

saveProducts([firstProduct], storage);
assert.equal(getProducts(storage)[0].name, "Producto de prueba");

console.log("OK - todas las pruebas de persistencia de productos pasaron.");
