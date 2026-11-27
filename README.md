# Tazza Du Vita

**Aplicación web de comercio electrónico**

Tazza Du Vita es un proyecto de software orientado a fortalecer la presencia digital de un emprendimiento colombiano dedicado a la comercialización de productos de bienestar, incluidos productos relacionados con Gano Excel y Ganoderma lucidum.

El objetivo es desarrollar una tienda virtual que permita consultar productos, realizar pedidos y administrar las operaciones comerciales desde una plataforma web.

El desarrollo se realiza de manera incremental, priorizando una primera versión funcional (V1) antes de incorporar características adicionales como suscripciones, talleres y programas de fidelización.

## 1. Estado del proyecto

**Estado general:** En desarrollo.

El proyecto cuenta con una base de frontend construida con HTML, CSS y JavaScript modular.

El diagnóstico técnico realizado sobre una copia anterior del repositorio identificó las siguientes funcionalidades:

| Componente | Estado conocido |
|---|---|
| Frontend web | Implementado parcialmente |
| Catálogo de productos | Implementación inicial |
| Panel administrativo de productos | CRUD funcional en el prototipo |
| Persistencia de productos | LocalStorage, provisional |
| Autenticación | Mecanismo provisional, no seguro para producción |
| Carrito de compras | Pendiente de implementación |
| Gestión de pedidos | Pendiente de implementación |
| Backend comercial | Pendiente de implementación |
| Base de datos MySQL | Diseñada parcialmente; integración pendiente |
| Pagos en línea | Integración condicionada |

Estos estados proceden del diagnóstico inicial. Las modificaciones locales posteriores deberán verificarse antes de actualizar formalmente el estado de implementación.

**Importante:** la existencia de una interfaz o un prototipo no significa que su funcionalidad esté preparada para operar comercialmente.

## 2. Alcance de la primera versión

La V1 tendrá como objetivo ofrecer las funciones esenciales de una tienda virtual.

### Funcionalidades principales

- Registro, inicio y cierre de sesión.
- Autenticación y autorización por roles.
- Catálogo público de productos.
- Consulta de información y disponibilidad.
- Carrito de compras para visitantes y clientes.
- Confirmación y registro de pedidos.
- Consulta de pedidos por parte de los clientes.
- Administración de productos y existencias.
- Consulta y gestión administrativa de pedidos.
- Interfaz adaptable a dispositivos móviles y de escritorio.

### Pagos en línea

La integración de pagos electrónicos es una funcionalidad prioritaria, pero condicionada a su viabilidad técnica, al proveedor seleccionado y al tiempo disponible.

El diseño contempla un checkout alojado por el proveedor, verificación de pagos desde el backend y reintentos seguros sin duplicar pedidos ni cobros.

Si la integración no se incorpora en la V1, deberá definirse y verificarse un procedimiento alternativo de atención de pedidos.

### Funcionalidades futuras

Quedan fuera del alcance obligatorio de la V1:

- Suscripciones mensuales y pagos recurrentes.
- Talleres, rituales y eventos.
- Programas avanzados de fidelización.
- Reportes comerciales avanzados.
- Automatizaciones complementarias.
- Aplicación móvil independiente.

Su incorporación requerirá una nueva evaluación del alcance.

## 3. Tecnologías

### Frontend existente

- HTML5.
- CSS3.
- JavaScript modular (ES Modules).

La implementación actual utiliza JavaScript sin frameworks de frontend como React.

### Backend seleccionado

- Node.js.
- Express.js.

### Base de datos seleccionada

- MySQL.

Node.js, Express y MySQL fueron seleccionados para la arquitectura de la V1, pero su implementación e integración todavía están pendientes.

### Herramientas de desarrollo

- Visual Studio Code.
- Git.
- GitHub.
- Herramientas de pruebas y desarrollo que se confirmen durante la configuración técnica.

No se incorporarán nuevas dependencias sin evaluar su necesidad y compatibilidad con el proyecto.

## 4. Arquitectura

La aplicación seguirá una arquitectura modular con separación de responsabilidades.

Se contemplan tres áreas principales:

**Frontend:** presentación de información, navegación e interacción con los usuarios.

**Backend:** procesamiento de solicitudes, autenticación, autorización, validaciones y reglas de negocio.

**Persistencia:** almacenamiento centralizado y administración de los datos mediante MySQL.

La comunicación entre frontend y backend se plantea mediante una API REST con intercambio de información JSON.

Se mantendrá una organización por capas, utilizando principios de MVC cuando resulten adecuados.

La arquitectura definitiva de los módulos, los endpoints y el modelo físico de datos se documentará durante su implementación.

Para mayor información, consultar [03 — Arquitectura Técnica](docs/03-arquitectura-tecnica.md).

## 5. Estructura del proyecto

La organización general contempla:

```text
tazza-du-vita/
├── assets/                 # Recursos gráficos y estáticos
├── css/                    # Estilos de la aplicación
├── docs/                   # Documentación oficial
│   ├── 00-direccion-proyecto.md
│   ├── 01-requisitos-backlog.md
│   ├── 02-procesos-casos-uso.md
│   ├── 03-arquitectura-tecnica.md
│   ├── 04-modelo-datos.md
│   ├── 05-diseno-interfaces.md
│   ├── 06-estandares-desarrollo.md
│   ├── 07-implementacion-calidad.md
│   └── 08-protocolo-colaboracion.md
├── js/                     # JavaScript del frontend
├── pages/                  # Páginas HTML adicionales
|-- tests/                  # Pruebas Unitarias
├── index.html              # Entrada principal
|-- package.json
└── README.md               # Presentación del repositorio
```

Esta estructura representa las carpetas principales conocidas y la documentación consolidada. No es un inventario exhaustivo.

La estructura del backend se definirá cuando comience su implementación.

## 6. Ejecución en desarrollo

### Requisitos actuales

- Un navegador web moderno.
- Un editor de código, preferiblemente Visual Studio Code.
- Git para el control de versiones.

El frontend existente utiliza módulos JavaScript, por lo que se recomienda ejecutarlo mediante un servidor de desarrollo local en lugar de abrir los archivos directamente con el protocolo `file://`.

### Ejecutar el frontend

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Abrir la carpeta del proyecto en Visual Studio Code.

3. Ejecutar la aplicación mediante un servidor local compatible con archivos estáticos y módulos JavaScript.

4. Acceder a `index.html` desde la dirección proporcionada por el servidor.

La URL del repositorio, el comando oficial de ejecución y las dependencias actuales deberán verificarse en el entorno de desarrollo.

### Backend y base de datos

La configuración de Node.js, Express y MySQL todavía no está disponible como procedimiento de ejecución del proyecto.

Cuando se implemente, se documentarán las instrucciones para:

- Instalar dependencias.
- Configurar variables de entorno.
- Preparar la base de datos.
- Ejecutar el servidor.
- Iniciar el frontend.
- Ejecutar las pruebas correspondientes.

No deberán publicarse credenciales reales ni secretos en el repositorio.

## 7. Pruebas

Durante el diagnóstico anterior se identificaron pruebas automatizadas para determinadas validaciones y operaciones de persistencia del prototipo.

Su cobertura es parcial y no demuestra que los procesos comerciales completos estén implementados.

El procedimiento y los comandos vigentes de pruebas se verificarán antes de documentarlos como instrucciones oficiales.

Las nuevas funcionalidades deberán incorporar verificaciones adecuadas según su complejidad y riesgo.

Se priorizarán pruebas relacionadas con:

- Registro y autenticación.
- Permisos de acceso.
- Catálogo y administración de productos.
- Carrito de compras.
- Registro de pedidos.
- Inventario y concurrencia.
- Integridad de datos.
- Manejo de errores.
- Integración de pagos, si se incorpora.

Consultar [07 — Implementación y Calidad](docs/07-implementacion-calidad.md).

## 8. Documentación oficial

La documentación vigente se encuentra en la carpeta [`docs/`](docs/).

| Documento | Contenido |
|---|---|
| [00 — Dirección del Proyecto](docs/00-direccion-proyecto.md) | Alcance, objetivos, decisiones y asuntos pendientes |
| [01 — Requisitos y Backlog](docs/01-requisitos-backlog.md) | Requisitos funcionales, no funcionales e historias de usuario |
| [02 — Procesos y Casos de Uso](docs/02-procesos-casos-uso.md) | Actores, procesos y reglas de negocio |
| [03 — Arquitectura Técnica](docs/03-arquitectura-tecnica.md) | Organización de componentes y decisiones arquitectónicas |
| [04 — Modelo de Datos](docs/04-modelo-datos.md) | Entidades, relaciones e integridad |
| [05 — Diseño de Interfaces](docs/05-diseno-interfaces.md) | Navegación, componentes y criterios de interfaz |
| [06 — Estándares de Desarrollo](docs/06-estandares-desarrollo.md) | Convenciones, seguridad, Git y calidad del código |
| [07 — Implementación y Calidad](docs/07-implementacion-calidad.md) | Planificación, pruebas y seguimiento del desarrollo |
| [08 — Protocolo de Colaboración](docs/08-protocolo-colaboracion.md) | Responsabilidades, autorizaciones y revisión de cambios |

### Criterios de consulta

El Documento 00 contiene las decisiones generales aprobadas.

Los Documentos 01 y 02 definen los requisitos y comportamientos esperados.

Los Documentos 03 al 06 orientan el diseño y la implementación técnica.

Los Documentos 07 y 08 establecen los procedimientos de trabajo, calidad y colaboración.

El código y las pruebas constituyen la evidencia del estado real de implementación.

Cuando se detecte una contradicción entre la documentación y el código, deberá analizarse y resolverse; no se asumirá automáticamente que uno de los dos es correcto.

## 9. Convenciones de desarrollo

El proyecto establece las siguientes convenciones principales:

| Elemento | Convención |
|---|---|
| Variables y funciones JavaScript | Inglés, `camelCase` |
| Clases | `PascalCase` |
| Archivos y carpetas propios | `kebab-case` |
| Clases e identificadores HTML/CSS | `kebab-case` |
| Constantes de configuración | `UPPER_SNAKE_CASE`, cuando corresponda |
| Textos visibles para el usuario | Español |
| Control de versiones | Git |

Los cambios deberán ser comprensibles, verificables y respetar las funcionalidades existentes.

No se realizarán refactorizaciones extensas ni migraciones de framework sin justificación y aprobación.

Consultar [06 — Estándares de Desarrollo](docs/06-estandares-desarrollo.md).

## 10. Organización del trabajo

El desarrollo se realiza mediante incrementos funcionales.

El responsable del proyecto conserva la autoridad sobre el alcance, las prioridades y las decisiones técnicas importantes.

### Colaboración técnica

**ChatGPT (CORE):** apoyo en coordinación, análisis, documentación, planificación y revisión de resultados.

**Claude:** colaborador técnico previsto para análisis de código, implementación, corrección de defectos y pruebas mediante tareas delimitadas.

Los aportes de las herramientas de asistencia deberán ser revisados y verificados antes de integrarse.

La utilización de un colaborador no implica autorización para modificar requisitos, arquitectura, reglas comerciales o componentes ajenos a la tarea asignada.

Consultar [08 — Protocolo de Colaboración](docs/08-protocolo-colaboracion.md).

## 11. Control de versiones

El código y la documentación se mantienen bajo Git.

La estrategia de trabajo contempla:

- `main`: versión estable.
- `develop`: integración del desarrollo.
- `feature/...`: desarrollo de funcionalidades.
- `fix/...`: correcciones.

Las modificaciones deberán registrarse mediante commits descriptivos y verificarse antes de integrarse.

Los cambios importantes de arquitectura, requisitos o reglas de negocio requerirán aprobación.

## 12. Consideraciones de seguridad

La implementación actual todavía no está preparada para operaciones comerciales reales.

Antes de utilizar el sistema en producción deberán verificarse, como mínimo:

- Autenticación segura.
- Protección de contraseñas.
- Control de acceso desde el backend.
- Validación de datos.
- Persistencia e integridad de pedidos.
- Protección de datos personales.
- Control de inventario.
- Configuración segura de servicios externos.
- Respaldos y recuperación.
- Requisitos legales y comerciales aplicables.

No deberán utilizarse mecanismos de autenticación provisionales ni simulaciones de pago para procesar compras reales.

## 13. Próximos pasos

Las siguientes actividades orientarán la continuación del desarrollo:

1. Confirmar la versión local del repositorio y las correcciones recientes.
2. Establecer una línea base verificable del frontend.
3. Definir el backlog técnico y los primeros incrementos.
4. Configurar Node.js, Express y MySQL.
5. Implementar autenticación y permisos.
6. Integrar la administración y consulta de productos con el backend.
7. Implementar carrito y pedidos.
8. Incorporar pruebas y corregir defectos.
9. Evaluar la integración de pagos electrónicos.
10. Preparar la validación de la V1.

La secuencia podrá ajustarse según las dependencias y los resultados de las verificaciones.

---

## Estado de esta documentación

**Versión documental de referencia:** 1.2
**Última actualización del README:** 27 de noviembre de 2026.

Este README presenta el estado conocido y el alcance aprobado de Tazza Du Vita. Deberá actualizarse cuando se verifiquen nuevos avances, se modifiquen las decisiones principales o cambien los procedimientos de instalación y ejecución.