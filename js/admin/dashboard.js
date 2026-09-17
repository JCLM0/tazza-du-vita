import { getProducts } from "../utils/product-storage.js";


// Cuando termina de cargar la pagina inicializa el modulo
document.addEventListener("DOMContentLoaded", initializeDashboard);

function initializeDashboard() {
    initializeSidebar();
    initializeQuickActions();
    initializeSummary();
}

// Funcion para poner en marchar la barra lateral
function initializeSidebar() {
    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("dashboardSidebar");

    if (!menuButton || !sidebar) return;

    menuButton.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-open");
    });
}

// Funcion para poner en marcha las Tareas
function initializeQuickActions() {
    const unavailableButtons = document.querySelectorAll(".coming-soon");

    unavailableButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Este módulo estará disponible en una próxima actualización.");
        });
    });
}

// Funcion para poner en marcha el resumen
function initializeSummary() {
    const productCount = document.getElementById("productCount");

    if (productCount) {
        productCount.textContent = getProducts().length;
    }
}

// Variable del boton de Gestion de Productos
const productsButton = document.getElementById("productsButton");

// Redirige a la pagina de Gestion de productos
if (productsButton) {
    productsButton.addEventListener("click", () => {
        window.location.href = "admin-products.html";
    });
}