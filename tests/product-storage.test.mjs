import assert from "node:assert/strict";
import {
    STORAGE_KEY,
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

// ---------------------------------------------------------------------
// TAR-2026-11-001 — Ampliación de pruebas (revisión de mantenibilidad)
//
// Estas pruebas verifican lo que observa el consumidor del módulo: la lista
// que devuelve getProducts tras cada operación. No fijan comportamientos que
// el informe de hallazgos identifica como posibles defectos (ids duplicados,
// colisiones al comparar ids como texto, errores de escritura sin capturar,
// elementos inválidos dentro de la lista, etc.); esos puntos se documentan en
// el informe, no aquí.
// ---------------------------------------------------------------------

function runCase(name, testFunction) {
    try {
        testFunction();
    } catch (error) {
        console.error(`FALLÓ - ${name}`);
        throw error;
    }
}

// Crea un almacenamiento con productos ya guardados.
function createStorageWith(products) {
    const memory = createMemoryStorage();
    saveProducts(products, memory);
    return memory;
}

// Ejecuta una función sin ensuciar la salida con el console.error esperado.
function withSilencedConsoleError(testFunction) {
    const originalConsoleError = console.error;
    console.error = () => {};

    try {
        testFunction();
    } finally {
        console.error = originalConsoleError;
    }
}

const productA = { id: 1, name: "A", price: 100, stock: 1 };
const productB = { id: 2, name: "B", price: 200, stock: 2 };
const productC = { id: 3, name: "C", price: 300, stock: 3 };

// --- Persistencia: clave y lectura ------------------------------------

runCase("los productos se guardan como JSON bajo la clave tazzaProducts", () => {
    // La clave y el formato son un contrato con los datos que ya existen en
    // los navegadores: cambiarlos dejaría sin acceso a los productos guardados.
    const memory = createMemoryStorage();
    saveProducts([productA], memory);

    assert.equal(STORAGE_KEY, "tazzaProducts");
    assert.deepEqual(JSON.parse(memory.getItem(STORAGE_KEY)), [productA]);
});

runCase("getProducts devuelve [] si todavía no hay datos", () => {
    assert.deepEqual(getProducts(createMemoryStorage()), []);
});

runCase("getProducts devuelve [] si los datos están corruptos o no son una lista", () => {
    const invalidValues = ["{no es json", "{}", "{\"id\":1}", "null", "123", "\"texto\"", ""];

    withSilencedConsoleError(() => {
        for (const raw of invalidValues) {
            const memory = createMemoryStorage();
            memory.setItem(STORAGE_KEY, raw);

            assert.deepEqual(getProducts(memory), [], `valor almacenado: ${raw}`);
        }
    });
});

runCase("getProducts devuelve [] si el almacenamiento no permite leer", () => {
    const unreadableStorage = {
        getItem() {
            throw new Error("acceso denegado");
        },
        setItem() {}
    };

    withSilencedConsoleError(() => {
        assert.deepEqual(getProducts(unreadableStorage), []);
    });
});

runCase("getProducts devuelve lo guardado, con orden y tipos de datos intactos", () => {
    const products = [
        { id: "x-2", price: 10.5, stock: 0, active: true, note: null },
        { id: 1, price: 20, stock: 3, active: false, note: "café con acentos" }
    ];

    assert.deepEqual(getProducts(createStorageWith(products)), products);
});

// --- saveProducts -----------------------------------------------------

runCase("saveProducts reemplaza el contenido anterior, incluso con una lista vacía", () => {
    const memory = createStorageWith([productA, productB]);

    saveProducts([productC], memory);
    assert.deepEqual(getProducts(memory), [productC]);

    saveProducts([], memory);
    assert.deepEqual(getProducts(memory), []);
});

// --- addProduct -------------------------------------------------------

runCase("addProduct devuelve el producto y lo agrega al final conservando los demás", () => {
    const memory = createMemoryStorage();

    assert.deepEqual(addProduct(productA, memory), productA);
    addProduct(productB, memory);
    addProduct(productC, memory);

    assert.deepEqual(getProducts(memory), [productA, productB, productC]);
});

// --- updateProduct ----------------------------------------------------

runCase("updateProduct devuelve el producto y solo modifica el que tiene ese id", () => {
    const memory = createStorageWith([productA, productB, productC]);
    const updatedB = { ...productB, name: "B modificado", stock: 20 };

    assert.deepEqual(updateProduct(updatedB, memory), updatedB);
    assert.deepEqual(getProducts(memory), [productA, updatedB, productC]);
});

runCase("updateProduct reconoce el id aunque cambie entre número y texto", () => {
    // Los ids que llegan desde el DOM son texto; los guardados pueden ser números.
    const numericIdMemory = createStorageWith([{ id: 1, name: "A" }]);
    updateProduct({ id: "1", name: "A2" }, numericIdMemory);
    assert.deepEqual(getProducts(numericIdMemory), [{ id: "1", name: "A2" }]);

    const textIdMemory = createStorageWith([{ id: "7", name: "B" }]);
    updateProduct({ id: 7, name: "B2" }, textIdMemory);
    assert.deepEqual(getProducts(textIdMemory), [{ id: 7, name: "B2" }]);
});

runCase("updateProduct con un id inexistente no cambia la lista guardada", () => {
    const memory = createStorageWith([productA, productB]);

    updateProduct({ id: 99, name: "No existe" }, memory);

    assert.deepEqual(getProducts(memory), [productA, productB]);
});

// --- removeProduct ----------------------------------------------------

runCase("removeProduct elimina solo el producto indicado y devuelve la lista restante", () => {
    const memory = createStorageWith([productA, productB, productC]);

    const remaining = removeProduct(2, memory);

    assert.deepEqual(remaining, [productA, productC]);
    assert.deepEqual(getProducts(memory), [productA, productC]);
});

runCase("removeProduct reconoce el id aunque cambie entre número y texto", () => {
    const memory = createStorageWith([productA, productB]);

    removeProduct("1", memory);

    assert.deepEqual(getProducts(memory), [productB]);
});

runCase("removeProduct con un id inexistente no cambia la lista guardada", () => {
    const memory = createStorageWith([productA, productB]);

    assert.deepEqual(removeProduct(99, memory), [productA, productB]);
    assert.deepEqual(getProducts(memory), [productA, productB]);
});

runCase("removeProduct del último producto deja la lista vacía", () => {
    const memory = createStorageWith([productA]);

    assert.deepEqual(removeProduct(1, memory), []);
    assert.deepEqual(getProducts(memory), []);
});

// --- Almacenamiento por defecto ---------------------------------------

runCase("sin argumento las operaciones usan window.localStorage", () => {
    // En el navegador este es el camino real; en Node se simula window y se
    // restaura el estado original al terminar.
    const hadWindow = Object.hasOwn(globalThis, "window");
    const previousWindow = globalThis.window;

    globalThis.window = { localStorage: createMemoryStorage() };

    try {
        addProduct(productA);
        addProduct(productB);
        updateProduct({ ...productA, name: "A2" });
        removeProduct(2);

        assert.deepEqual(getProducts(), [{ ...productA, name: "A2" }]);
    } finally {
        if (hadWindow) {
            globalThis.window = previousWindow;
        } else {
            delete globalThis.window;
        }
    }
});

console.log("OK - todas las pruebas de persistencia de productos pasaron.");
