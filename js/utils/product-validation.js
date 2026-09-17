/**
 * Reglas de validación del módulo de productos.
 *
 * La función es independiente del DOM para que pueda ser reutilizada
 * desde la interfaz y comprobada mediante pruebas unitarias.
 */

// Validación de datos de producto
export function validateProductData(data) {
    const name = String(data.name ?? "").trim();
    const category = String(data.category ?? "").trim();
    const price = Number(data.price);
    const stock = Number(data.stock);
    const description = String(data.description ?? "").trim();

    if (!name) {
        return {
            valid: false,
            field: "name",
            message: "Debe ingresar el nombre del producto."
        };
    }

    if (!category || category === "null") {
        return {
            valid: false,
            field: "category",
            message: "Debe seleccionar una categoría."
        };
    }

    if (!Number.isFinite(price) || price <= 0) {
        return {
            valid: false,
            field: "price",
            message: "El precio debe ser mayor que cero."
        };
    }

    if (!Number.isInteger(stock) || stock < 0) {
        return {
            valid: false,
            field: "stock",
            message: "El stock debe ser un número entero igual o mayor que cero."
        };
    }

    if (description.length < 10) {
        return {
            valid: false,
            field: "description",
            message: "La descripción debe tener al menos 10 caracteres."
        };
    }

    return {
        valid: true,
        field: null,
        message: ""
    };
}