// GESTION DE PRODUCTOS

// Clave utilizada para guardar la información en LocalStorage.
const STORAGE_KEY = "tazzaProducts";

// Formulario principal.
const productForm = document.getElementById("productForm");

// Cuerpo de la tabla.
const productsTableBody = document.getElementById("productsTableBody");

// Referencia al modal utilizado paa registrar y editar productos
const modal = document.getElementById("productModal");

// Botontes para abrir y cerrar el modal
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
    saveProduct();
});

// Guarda el producto
function saveProduct() {
    // Obtenemos todos los productos almacenados.
    const products = getProducts();

    // Obtenemos el id oculto.
    const productId = document.getElementById("productId").value;

    // Creamos un objeto producto.
    const product = {
        id: productId || Date.now(),
        name: document.getElementById("productName").value,
        category: document.getElementById("productCategory").value,
        price: document.getElementById("productPrice").value,
        stock: document.getElementById("productStock").value,
        description: document.getElementById("productDescription").value
    };

    const row = document.createElement("tr");

    // Si existe un id significa que estamos editando.
    if (productId) {
        updateProduct(product);
    } else {
        products.push(product);
        saveProducts(products);
    }

    // Llamamos a la funcion que muestra los productos y limpiamos el formulario
    renderProducts();
    clearForm();

    // Cerramos el modal
    modal.classList.remove("active");
}

// Actualiza el producto
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

// Elimina el producto
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
}

// Edita el producto
function editProduct(productId) {

    // Llamamos a la funcion que obtiene los productos
    const products = getProducts();

    // Buscamos el producto
    const product = products.find(product => {
        // Buscamos el id del producto que queremos editar
        return String(product.id) === String(productId);
    });

    // Si no encontramos el producto, no hacemos nada
    if (!product) return;

    // Llenamos el formulario con los datos nuevos
    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productStock").value = product.stock;
    document.getElementById("productDescription").value = product.description;

    // Abrimos el modal
    document.getElementById("modalTitle").textContent = "Editar Producto";
    modal.classList.add("active");

    // Cambiamos el texto del boton
    document.getElementById("saveProductBtn").textContent = "Actualizar Producto";
}

// Muestra los productos
function renderProducts() {

    // Llamamos a la funcion que obtiene los productos
    const products = getProducts();

    // Limpiamos la tabla
    productsTableBody.innerHTML = "";

    // Iteramos todos los productos
    products.forEach(product => {

        // Creamos una fila
        const row = document.createElement("tr");

        // Llenamos la fila
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>$ ${product.price}</td>
            <td>${product.stock}</td>
            <td class="admin-products-table-action-btns">
                <button class="edit-btn" onclick="editProduct('${product.id}')">
                    ✎
                </button>
                <button class="cancel-btn" onclick="deleteProduct('${product.id}')">
                    🗑
                </button>
            </td>
        `;

        // Agregamos la fila
        productsTableBody.appendChild(row);
    });
}

// Limpiar el formulario
function clearForm() {
    productForm.reset();
    document.getElementById("productId").value = "";
}

// LOCALSTORAGE
// Obtiene todos los productos.
function getProducts() {
    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];

}

// Guarda los productos.
function saveProducts(products) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(products)
    );
    modal.classList.remove("active");
}

// Funcion para abrir y cerrar el modal
openModalBtn.addEventListener("click", () => {
    clearForm();
    document.getElementById("modalTitle").textContent = "Registrar Producto";
    modal.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", function(e){
    if(e.target === modal){
        modal.classList.remove("active");
    }

});

