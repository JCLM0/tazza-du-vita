// =============================================================
// GESTION DE PRODUCTOS
// =============================================================

// Clave utilizada para guardar la información en LocalStorage.
const STORAGE_KEY = "tazzaProducts";

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



// Cuando el documento termina de cargar, inicializa el modulo
document.addEventListener("DOMContentLoaded", initializeModule);

// Funcion para poner en marcha el modulo de productos
function initializeModule() {
    renderProducts();
}

// Cuando el usuario envía el formulario evita que la pagina se recargue
productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateFormProduct()) {
        return;
    }

    saveProduct();
});


// =============================================================
// VALIDACION DEL FORMULARIO
// =============================================================
// Valida la informacion ingresada en el formulario de productos
function validateFormProduct() {

    // Obtener y limpiar los valores del formulario
    const name = productName.value.trim();
    const category = productCategory.value.trim();
    const price = Number(productPrice.value);
    const stock = Number(productStock.value);
    const description = productDescription.value.trim();

    // Validar nombre
    if (name === "") {
        showNotification(
            "Debe ingresar el nombre del producto.",
            "error"
        );
        productName.focus();
        return false;
    }

    // Validar categoría
    if (category === "") {
        showNotification(
            "Debe seleccionar una categoría.",
            "error"
        );
        productCategory.focus();
        return false;
    }

    // Validar precio
    if (isNaN(price) || price <= 0) {
        showNotification(
            "El precio debe ser mayor que cero.",
            "error"
        )
        productPrice.focus();
        return false;
    }

    // Validar stock
    if (isNaN(stock) || stock < 0) {
        showNotification(
            "El stock no puede ser negativo.",
            "error"
        )
        productStock.focus();
        return false;
    }

    // Validar descripcion
    if (description.length < 10) {
        showNotification(
            "La descripción debe tener al menos 10 caracteres.",
            "error"
        )
        productDescription.focus();
        return false;
    }

    return true;
}


// =============================================================
// GUARDAR PRODUCTOS
// =============================================================
// Guarda un nuevo producto o actualiza uno existente
// dependiendo si el formulario contiene un ID
function saveProduct() {

    // Obtenemos todos los productos almacenados.
    const products = getProducts();

    // Obtenemos el id oculto.
    const productID = productId.value;

    // Creamos un objeto producto.
    const product = {
        id: productID || Date.now(),
        name: productName.value,
        category: productCategory.value,
        price: productPrice.value,
        stock: productStock.value,
        description: productDescription.value
    };

    // Si existe un id significa que estamos editando.
    if (productID) {
        updateProduct(product);

        // Mostramos notificación de éxito
        showNotification(
            "Producto actualizado correctamente.",
            "success"
        );
    } else {
        products.push(product);
        saveProducts(products);

        // Mostramos notificación de éxito
        showNotification(
            "Producto registrado correctamente.",
            "success"
        );
    }

    // Llamamos a la funcion que muestra los productos y limpiamos el formulario
    renderProducts();
    clearForm();

    // Cerramos el modal
    closeModal();
}


// =============================================================
// ACTUALIZAR PRODUCTOS
// =============================================================
// Recorre la lista de productos almacenados y reemplaza
// unicamente el producto que coincide con el ID recibido.
function updateProduct(updatedProduct) {

    // Llamamos a la funcion que obtiene los productos.
    let products = getProducts();
    // Iteramos todos los productos.
    products = products.map(product => {
        if (String(product.id) === String(updatedProduct.id)) {
            // Actualizamos el producto
            return updatedProduct;
        }
        // Si no es el producto que queremos actualizar, lo devolvemos tal cual
        return product;
    });

    // Guardamos los productos
    saveProducts(products);
}


// =============================================================
// ELIMINAR PRODUCTOS
// =============================================================
// Eliminando un porudcto usando su ID como referencia
function deleteProduct(productId) {

    // Confirmamos
    const confirmation = confirm(
        "¿Deseas eliminar este producto?"
    );

    // Si no confirma, no hacemos nada y volvemos a llamar la funcion que obtiene los productos
    if (!confirmation) return;
    let products = getProducts();

    // Filtramos los productos
    products = products.filter(product => {
        // Devolvemos todos los productos menos el que queremos eliminar
        return String(product.id) !== String(productId);
    });

    // Guardamos los productos y llamamos a la funcion que muestra los productos
    saveProducts(products);
    renderProducts();

    // Mostramos notificacion de exito
    showNotification("Producto eliminado correctamente.", "success");
}


// =============================================================
// EDITAR PRODUCTOS
// =============================================================
// Obtiene la ID del producto que queremos editar
// luego reemplaza los datos del producto en el formulario
function editProduct(productID) {

    // Llamamos a la funcion que obtiene los productos
    const products = getProducts();

    // Buscamos el producto
    const product = products.find(product => {
        // Buscamos el id del producto que queremos editar
        return String(product.id) === String(productID);
    });

    // Si no encontramos el producto, no hacemos nada
    if (!product) return;

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

    // Iteramos todos los productos
    products.forEach(product => {

        // Creamos una fila nueva para el producto actual
        const row = document.createElement("tr");

        // Llenamos la fila
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>$ ${product.price}</td>
            <td>${product.stock}</td>
            <td class="admin-products-table-action-btns">
                <button class="edit-btn" aria-label="Editar producto" title="Editar producto" onclick="editProduct('${product.id}')">
                    ✎
                </button>
                <button class="cancel-btn" aria-label="Eliminar producto" title="Eliminar producto" onclick="deleteProduct('${product.id}')">
                    🗑
                </button>
            </td>
        `;

        // Agregamos la fila
        productsTableBody.appendChild(row);
    });
}


// =============================================================
// LIMPIAR FORMULARIO
// =============================================================
// Limpia el formulario de productos
function clearForm() {
    productForm.reset();
    productId.value = "";
}


// =============================================================
// LOCALSTORAGE
// =============================================================
// Obtiene todos los productos almacenados en la memoria del navegador
function getProducts() {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];

}


// =============================================================
// GUARDAR PRODUCTOS EN LOCALSTORAGE
// =============================================================
// Guarda los productos en la memoria del navegador (LocalStorage).
function saveProducts(products) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(products)
    );

    closeModal();
}


// =============================================================
// FUNCIONES DEL MODAL
// =============================================================

// Funcion para abrir el modal
function openModal(){
    if (productId.value) {
        modalTitle.textContent = "Editar Producto";
        confirmModalBtn.textContent = "Actualizar Producto";
    } else {
        modalTitle.textContent = "Registrar Producto";
        confirmModalBtn.textContent = "Guardar Producto";
    }

    modal.classList.add("active");
};

openModalBtn.addEventListener("click", () => {
    clearForm();
    openModal();
});

// Funcion para cerrar el modal
function closeModal(){
    modal.classList.remove("active");
};

closeModalBtn.addEventListener("click", () => {
    closeModal();
});

// Funcion para cerrar el modal al hacer click fuera
modal.addEventListener("click", function(e){
    if(e.target === modal){
        closeModal();
    }
});