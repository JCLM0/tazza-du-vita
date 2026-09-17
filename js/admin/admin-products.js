// =============================================================
// IMPORTACIONES DE MODULOS
// =============================================================

import {
    addProduct,
    getProducts,
    removeProduct,
    updateProduct
} from "../utils/product-storage.js";

import { showNotification } from "../components/notifications.js";

import { validateProductData } from "../utils/product-validation.js";


// =============================================================
// REFERENCIAS A ELEMENTOS DEL DOM
// =============================================================

// Formulario principal.
const productForm = document.getElementById("productForm");

// Cuerpo de la tabla.
const productsTableBody = document.getElementById("productsTableBody");

// Valores del formulario
const productId = document.getElementById("productId");
const productName = document.getElementById("productName");
const productCategory = document.getElementById("productCategory");
const productPrice = document.getElementById("productPrice");
const productStock = document.getElementById("productStock");
const productDescription = document.getElementById("productDescription");


//============================================================
// REFERENCIAS A ELEMENTOS DEL MODAL
//============================================================

// Modal
const modal = document.getElementById("productModal");

// Titulo del modal
const modalTitle = document.getElementById("modalTitle");

// Boton de confirmar Modal
const confirmModalBtn = document.getElementById("confirmModalBtn");

// Botones para abrir y cerrar el modal
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");


//============================================================
// INICIALIZACION DEL MODULO
//============================================================

// Cuando el documento termina de cargar, inicializa el modulo
document.addEventListener("DOMContentLoaded", initializeModule);

// Funcion para poner en marcha el modulo de productos
function initializeModule() {
    renderProducts();
}


//============================================================
// FORMULARIO
//============================================================

// Cuando el usuario envía el formulario evita que la pagina se recargue
productForm.addEventListener("submit", event => {
    event.preventDefault();

    // Validamos la informacion ingresada en el formulario
    const validation = validateProductData({
        name: productName.value,
        category: productCategory.value,
        price: productPrice.value,
        stock: productStock.value,
        description: productDescription.value
    });

    if (!validation.valid) {
        showNotification(validation.message, "error");

        const field = document.getElementById(
            `product${validation.field.charAt(0).toUpperCase()}${validation.field.slice(1)}`
        );

        field?.focus();
        return;
    }

    saveProduct();
});


// =============================================================
// GUARDAR PRODUCTOS
// =============================================================
// Guarda un nuevo producto o actualiza uno existente
// dependiendo si el formulario contiene un ID
function saveProduct() {

    // Obtenemos el id oculto.
    const existingID = productId.value;

    // Creamos un objeto producto.
    const product = {
        id: existingID || Date.now(),
        name: productName.value,
        category: productCategory.value,
        price: Number(productPrice.value),
        stock: Number(productStock.value),
        description: productDescription.value
    };

    // Si existe un id significa que estamos editando.
    if (existingID) {
        updateProduct(product);

        // Mostramos notificación de éxito
        showNotification("Producto actualizado correctamente.", "success");
    } else {
        addProduct(product);

        // Mostramos notificación de éxito
        showNotification("Producto registrado correctamente.", "success");
    }

    // Llamamos a la funcion que muestra los productos y limpiamos el formulario
    renderProducts();
    clearForm();

    // Cerramos el modal
    closeModal();
}


// =============================================================
// MOSTRAR PRODUCTOS
// =============================================================
/**
*   Obtiene todos los productos registrados y los muestra en la tabla.
*/
function renderProducts() {

    // Llamamos a la funcion que obtiene los productos
    const products = getProducts();

    // Limpiamos la tabla
    productsTableBody.innerHTML = "";

    // Si no hay productos, mostramos un mensaje
    if (products.length === 0) {
        productsTableBody.innerHTML = `
            <tr>
                <td colspan="5" class="empty-state">
                    No hay productos registrados todavía.
                </td>
            </tr>
        `;
        return;
    }

    // Iteramos todos los productos
    products.forEach(product => {

        // Creamos una fila nueva para el producto actual
        const row = document.createElement("tr");

        // Llenamos la fila
        row.innerHTML = `
            <td>${escapeHtml(product.name)}</td>
            <td>${escapeHtml(getCategoryName(product.category))}</td>
            <td>$ ${formatPrice(product.price)}</td>
            <td>${product.stock}</td>
            <td class="admin-products-table-action-btns">
                <button
                    class="edit-btn"
                    type="button"
                    data-action="edit"
                    data-product-id="${product.id}"
                    aria-label="Editar producto"
                    title="Editar producto"
                >
                    Editar
                </button>

                <button
                    class="cancel-btn"
                    type="button"
                    data-action="delete"
                    data-product-id="${product.id}"
                    aria-label="Eliminar producto"
                    title="Eliminar producto"
                >
                    Eliminar
                </button>
            </td>
        `;

        // Agregamos la fila
        productsTableBody.appendChild(row);
    });
}

productsTableBody.addEventListener("click", event => {

    // Obtenemos el boton
    const button = event.target.closest("button[data-action]");

    // Si no hay boton, no hacemos nada
    if (!button) {
        return;
    }

    // Obtenemos el id
    const productIdValue = button.dataset.productId;

    // Si el boton es de edicion
    if (button.dataset.action === "edit") {
        // Abrimos el modal para editar productos
        editProduct(productIdValue);
    }

    // Si el boton es de eliminacion
    if (button.dataset.action === "delete") {
        // Eliminamos el producto
        deleteProduct(productIdValue);
    }
});


// =============================================================
// EDITAR PRODUCTOS
// =============================================================
// Obtiene la ID del producto que queremos editar
// luego reemplaza los datos del producto en el formulario
function editProduct(productIdValue) {

    // Llamamos a la funcion que obtiene los productos y buscamos el producto
    const product = getProducts().find(
        // Buscamos el id del producto que queremos editar
        item => String(item.id) === String(productIdValue)
    );

    // Si no encontramos el producto, no hacemos nada
    if (!product) {
        showNotification("No se encontró el producto seleccionado.", "error");
        return;
    };

    // Llenamos el formulario con los datos nuevos
    productId.value = product.id;
    productName.value = product.name;
    productCategory.value = product.category;
    productPrice.value = product.price;
    productStock.value = product.stock;
    productDescription.value = product.description;

    openModal();
}


// =============================================================
// ELIMINAR PRODUCTOS
// =============================================================
// Eliminando un producto usando su ID como referencia
function deleteProduct(productIdValue) {

    // Filtramos los productos
    const product = getProducts().find(
        // Hasta encontrar el producto
        item => String(item.id) === String(productIdValue)
    );

    // Si no encontramos el producto, no hacemos nada
    if (!product) {
        return;
    }

    // Confirmamos la eliminacion
    const confirmation = confirm(
        `Estas seguro que deseas eliminar este producto: "${product.name}"?`
    )

    // Si no confirma, no hacemos nada
    if (!confirmation) {
        return;
    }

    // Guardamos los productos y llamamos a la funcion que muestra los productos
    removeProduct(productIdValue);
    renderProducts();

    // Mostramos notificacion de exito
    showNotification("Producto eliminado correctamente.", "success");
}


// =============================================================
// FUNCIONES DEL MODAL
// =============================================================

// Funcion para abrir el modal
function openModal(){
    // Verificamos si estamos editando
    const isEditing = Boolean(productId.value);

    // Cambiamos el titulo y el texto del boton
    modalTitle.textContent = isEditing
        ? "Editar Producto"
        : "Registrar Producto";

    confirmModalBtn.textContent = isEditing
        ? "Actualizar Producto"
        : "Guardar Producto";

    modal.classList.add("active");
}

openModalBtn.addEventListener("click", () => {
    clearForm();
    openModal();
});


// Funcion para cerrar el modal
function closeModal(){
    modal.classList.remove("active");
}

closeModalBtn.addEventListener("click", () => {
    closeModal();
});

// Funcion para cerrar el modal al hacer click fuera
modal.addEventListener("click", event =>{
    if(event.target === modal){
        closeModal();
    }
});


// =============================================================
// LIMPIAR FORMULARIO
// =============================================================
// Limpia el formulario de productos
function clearForm() {
    productForm.reset();
    productId.value = "";
}


// =============================================================
// UTILIDADES
// =============================================================

// Formatea el precio
function formatPrice(price) {
    return Number(price).toLocaleString("es-CO");
}

// Obtiene el nombre de la categoria
function getCategoryName(category) {
    const categories = {
        plants: "Plantas",
        coffee: "Café",
        chocolate: "Chocolate"
    };

    return categories[category] ?? "Sin categoría";
}

// Escapa los caracteres especiales
function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
