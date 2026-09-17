/**
 * Login temporal para demostración de la evidencia.
 *
 * Credenciales de acceso al panel administrativo:
 * Usuario: root
 * Contraseña: root123
 *
 * Esta validación es únicamente de demostración y no reemplaza
 * un sistema real de autenticación con backend.
 */

const loginForm = document.getElementById("loginForm");

// Cuando el usuario envía el formulario evita que la pagina se recargue
loginForm?.addEventListener("submit", event => {
    event.preventDefault();

    // Validamos la informacion ingresada en el formulario
    const username = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value;

    // Si las credenciales son correctas redirigimos al panel administrativo
    if (username === "root" && password === "root123") {
        window.location.href = "../admin/dashboard.html";
        return;
    }

    // Si las credenciales son incorrectas mostramos un mensaje de error
    alert("Credenciales no válidas. Para esta demostración utiliza root / root123.");
});