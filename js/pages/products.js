import { getProducts } from "../utils/product-storage.js";

document.addEventListener("DOMContentLoaded", renderCatalog);

// Renderiza el catálogo
function renderCatalog() {
    const catalog = document.getElementById("productsCatalog");

    if (!catalog) {
        return;
    }

    const products = getProducts();

    // Si no hay productos, mostramos un mensaje
    if (products.length === 0) {
        catalog.innerHTML = `
            <article class="products-empty-state">
                <h2>Catálogo en actualización</h2>
                <p>
                    Aún no hay productos registrados. Cuando el administrador
                    agregue productos, aparecerán automáticamente en este catálogo.
                </p>
            </article>
        `;
        return;
    }

    // Si hay productos, los mostramos
    catalog.innerHTML = products.map(product => `
        <article class="product-card">
            <div class="product-card-content">
                <span class="product-card-category">
                    ${escapeHtml(getCategoryName(product.category))}
                </span>
                <h2>${escapeHtml(product.name)}</h2>
                <p>${escapeHtml(product.description)}</p>
                <div class="product-card-footer">
                    <strong>$ ${formatPrice(product.price)}</strong>
                    <span>Stock: ${product.stock}</span>
                </div>
            </div>
        </article>
    `).join("");
}

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
