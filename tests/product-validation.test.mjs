import assert from "node:assert/strict";
import { validateProductData } from "../js/utils/product-validation.js";

const validProduct = {
    name: "Ganoderma Classic",
    category: "coffee",
    price: 45000,
    stock: 10,
    description: "Café con extracto de Ganoderma para el catálogo."
};

assert.equal(validateProductData(validProduct).valid, true);

assert.equal(
    validateProductData({ ...validProduct, name: " " }).field,
    "name"
);

assert.equal(
    validateProductData({ ...validProduct, category: "null" }).field,
    "category"
);

assert.equal(
    validateProductData({ ...validProduct, price: 0 }).field,
    "price"
);

assert.equal(
    validateProductData({ ...validProduct, stock: -1 }).field,
    "stock"
);

assert.equal(
    validateProductData({ ...validProduct, stock: 1.5 }).field,
    "stock"
);

assert.equal(
    validateProductData({ ...validProduct, description: "corta" }).field,
    "description"
);

console.log("OK - todas las pruebas de validación de productos pasaron.");
