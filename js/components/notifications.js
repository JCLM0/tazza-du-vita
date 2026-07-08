// =============================================================
// COMPONENTE DE NOTIFICACIONES
// =============================================================

/**
 * Crea automáticamente el contenedor de notificaciones
 * si todavía no existe dentro del documento.
 */
function createNotificationContainer() {

    // Verificamos si el contenedor ya existe
    let container = document.getElementById("notificationContainer");

    // Si no existe, lo creamos
    if (!container) {

        container = document.createElement("div");
        container.id = "notificationContainer";

        // Lo agregamos al final del body
        document.body.appendChild(container);
    }

    return container;
}

// Inicializa automáticamente el componente.
document.addEventListener(
    "DOMContentLoaded",
    createNotificationContainer
);

/**
 * Muestra una notificación temporal en pantalla.
 *
 * @param {string} message Mensaje que se mostrará al usuario.
 * @param {string} type Tipo de notificación:
 * success | error | warning | info
 */
function showNotification(message, type = "info") {

    // Obtener el contenedor que contiene las notificaciones
    const container = createNotificationContainer();

    // Eliminar cualquier notificación anterior
    container.innerHTML = "";

    // Crear la notificación
    const notification = document.createElement("div");

    // Agregar las clase general notification
    notification.classList.add("notification");
    // Agregar la clase correspondiente al tipo
    notification.classList.add(type);

    // Agregará el contenido de la notificacion dentro
    notification.textContent = message;

    // Agregar la notificación al contenedor
    container.appendChild(notification);

    // Mostrar en consola para obtener información de lo que sucede
    console.log(`[${type.toUpperCase()}] ${message}`);

    // Esperar un pequeño instante para activar la animación
    // Funciona de la siguiente manera
    // El sistema carga lo que ve frame por frame
    // Al agregar la clase show, este esperará al siguiente frame
    // En ese tiempo de un frame es mas que suficiente para que se muestre
    // la animacion que contiene la clase
    requestAnimationFrame(() => {
        notification.classList.add("show");
    });

    // Ocultar después de 3 segundos
    setTimeout(() => {

        // Remover la clase show
        // Esto lo hara "invisible"
        notification.classList.remove("show");

        // Agregar la clase hide
        // Esto lo hara desaparecer haciendo uso de la animación
        notification.classList.add("hide");

        // Esperar que termine la animación antes de eliminarla
        setTimeout(() => {
            notification.remove();
        }, 300);

    }, 3000);
}