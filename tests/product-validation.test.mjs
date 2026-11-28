import assert from "node:assert/strict";
import { inspect } from "node:util";
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

// ---------------------------------------------------------------------
// TAR-2026-11-001 — Ampliación de pruebas (revisión de mantenibilidad)
//
// Estas pruebas verifican el resultado que recibe el consumidor de
// validateProductData: si el producto es válido, qué campo falla y qué
// mensaje se muestra. No fijan comportamientos que el informe de hallazgos
// identifica como posibles defectos (por ejemplo, la coerción de valores
// vacíos o booleanos); esos puntos se documentan en el informe, no aquí.
// ---------------------------------------------------------------------

function runCase(name, testFunction) {
    try {
        testFunction();
    } catch (error) {
        console.error(`FALLÓ - ${name}`);
        throw error;
    }
}

const validResult = { valid: true, field: null, message: "" };

const expectedMessages = {
    name: "Debe ingresar el nombre del producto.",
    category: "Debe seleccionar una categoría.",
    price: "El precio debe ser mayor que cero.",
    stock: "El stock debe ser un número entero igual o mayor que cero.",
    description: "La descripción debe tener al menos 10 caracteres."
};

function expectValid(overrides) {
    assert.deepEqual(
        validateProductData({ ...validProduct, ...overrides }),
        validResult,
        `debería ser válido: ${inspect(overrides)}`
    );
}

function expectInvalid(field, overrides) {
    assert.deepEqual(
        validateProductData({ ...validProduct, ...overrides }),
        { valid: false, field, message: expectedMessages[field] },
        `debería fallar en "${field}": ${inspect(overrides)}`
    );
}

// Comprueba que cada valor de la lista sea rechazado en el campo indicado.
function expectInvalidValues(field, values) {
    for (const value of values) {
        expectInvalid(field, { [field]: value });
    }
}

runCase("un producto correcto devuelve el resultado válido completo", () => {
    assert.deepEqual(validateProductData(validProduct), validResult);
});

runCase("cada campo inválido devuelve su campo y su mensaje", () => {
    expectInvalid("name", { name: "" });
    expectInvalid("category", { category: "" });
    expectInvalid("price", { price: 0 });
    expectInvalid("stock", { stock: -1 });
    expectInvalid("description", { description: "corta" });
});

runCase("no modifica el objeto recibido y ignora propiedades adicionales", () => {
    const input = { ...validProduct, id: 99, name: "  Con espacios  ", price: "45000" };
    const copy = { ...input };

    assert.deepEqual(validateProductData(input), validResult);
    assert.deepEqual(input, copy);
});

runCase("nombre: vacío, solo espacios, null o ausente es inválido", () => {
    expectInvalidValues("name", ["", "   \t\n ", null, undefined]);
});

runCase("nombre: se acepta con espacios alrededor", () => {
    expectValid({ name: "  Ganoderma  " });
});

runCase("categoría: vacía, espacios, null, ausente o la cadena \"null\" es inválida", () => {
    expectInvalidValues("category", ["", "   ", null, undefined, "null", "  null  "]);
});

runCase("categoría: se acepta con espacios alrededor", () => {
    expectValid({ category: "  coffee  " });
});

runCase("precio: cero, negativos y valores no numéricos son inválidos", () => {
    expectInvalidValues("price", [
        0, -0.01, -45000,
        "abc", "", null, undefined, NaN,
        Infinity, -Infinity
    ]);
});

runCase("precio: acepta decimales positivos y números en texto de un formulario", () => {
    expectValid({ price: 0.01 });
    expectValid({ price: 12999.99 });
    expectValid({ price: "45000" });
});

runCase("stock: negativos, decimales y valores no numéricos son inválidos", () => {
    expectInvalidValues("stock", [
        -1, -0.5, 0.5, "1.5",
        "abc", undefined, NaN,
        Infinity, -Infinity
    ]);
});

runCase("stock: acepta cero (agotado) y enteros positivos, también en texto", () => {
    expectValid({ stock: 0 });
    expectValid({ stock: "0" });
    expectValid({ stock: 1 });
    expectValid({ stock: "25" });
});

runCase("descripción: el mínimo es de 10 caracteres sin contar espacios externos", () => {
    expectInvalid("description", { description: "123456789" });
    expectInvalid("description", { description: "  123456789  " });
    expectValid({ description: "1234567890" });
    expectValid({ description: "  1234567890  " });
});

runCase("descripción: vacía, solo espacios, null o ausente es inválida", () => {
    expectInvalidValues("description", ["", "          ", null, undefined]);
});

runCase("con varios errores se informa el primero según el orden de campos", () => {
    const allInvalid = {
        name: "",
        category: "",
        price: 0,
        stock: -1,
        description: ""
    };
    const corrections = [
        { name: "Producto" },
        { category: "coffee" },
        { price: 10 },
        { stock: 1 }
    ];
    const expectedOrder = ["name", "category", "price", "stock", "description"];

    let data = { ...allInvalid };

    expectedOrder.forEach((field, index) => {
        assert.equal(validateProductData(data).field, field);

        if (index < corrections.length) {
            data = { ...data, ...corrections[index] };
        }
    });
});

console.log("OK - todas las pruebas de validación de productos pasaron.");
