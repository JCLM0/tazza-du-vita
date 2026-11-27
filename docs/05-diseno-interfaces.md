# 05 — Diseño de Interfaces

**Proyecto:** Tazza Du Vita
**Tipo:** Aplicación web de comercio electrónico
**Versión del documento:** 1.1
**Fecha de creación:** 23 de noviembre de 2026
**Última actualización:** 24 de noviembre de 2026
**Estado:** Especificación inicial de interfaces, pendiente de contraste con el frontend actual
**Documentos de referencia:** 00 — Dirección del Proyecto; 01 — Requisitos y Backlog; 02 — Procesos y Casos de Uso; 03 — Arquitectura Técnica; 04 — Modelo de Datos
**Responsable de las decisiones:** Responsable del proyecto

---

## 1. Propósito del documento

Este documento establece los criterios de diseño, navegación, organización visual e interacción para las interfaces de Tazza Du Vita.

Su finalidad es mantener una experiencia coherente entre las distintas secciones de la aplicación, facilitar el uso de las funcionalidades comerciales y proporcionar una referencia para el desarrollo y la verificación del frontend.

La especificación parte de los diseños web y móviles elaborados anteriormente, así como de los requisitos y procesos definidos para la primera versión.

Este documento describe el comportamiento esperado de las interfaces. No implica que todas las pantallas estén implementadas ni establece una obligación de reconstruir los componentes existentes.

## 2. Objetivos del diseño

El diseño de interfaces deberá:

1. Facilitar la consulta de productos y el proceso de compra.
2. Presentar información comercial de manera clara.
3. Mantener una identidad visual consistente.
4. Adaptarse a dispositivos móviles y de escritorio.
5. Ofrecer navegación comprensible y accesible.
6. Comunicar correctamente los resultados de cada operación.
7. Diferenciar las funciones públicas, privadas y administrativas.
8. Reducir pasos y elementos innecesarios.
9. Aprovechar los componentes funcionales existentes cuando resulte conveniente.

Las decisiones visuales deberán responder a las necesidades del usuario y a la identidad del proyecto, sin introducir complejidad innecesaria.

## 3. Identidad visual

### 3.1. Dirección visual

Los prototipos anteriores de Tazza Du Vita utilizan una identidad predominantemente oscura, acompañada de acentos verdes y elementos relacionados con los productos comercializados.

Se propone conservar esta dirección como referencia principal.

La paleta y los estilos definitivos deberán contrastarse con los archivos actuales del frontend y los recursos visuales del proyecto.

### 3.2. Colores

Se establecerán las siguientes funciones visuales:

| Función | Aplicación |
|---|---|
| Fondo principal | Superficie general de la aplicación |
| Fondo secundario | Tarjetas, formularios y secciones diferenciadas |
| Color de acento | Acciones principales y elementos destacados |
| Texto principal | Información prioritaria |
| Texto secundario | Descripciones y datos complementarios |
| Color de error | Mensajes y estados incorrectos |
| Color de éxito | Confirmaciones de operaciones |
| Bordes y separadores | Organización de elementos |

La dirección inicial utilizará fondos oscuros y acentos verdes.

No se establecerán todavía códigos hexadecimales definitivos.

Los colores deberán proporcionar contraste suficiente para facilitar la lectura y el reconocimiento de controles.

### 3.3. Tipografía

La aplicación deberá utilizar una jerarquía tipográfica consistente.

Se diferenciarán claramente:

- Títulos principales.
- Encabezados de sección.
- Nombres de productos.
- Texto informativo.
- Etiquetas de formularios.
- Mensajes de estado.
- Información complementaria.

Se evitará utilizar tamaños excesivamente pequeños para información necesaria durante una compra.

Las familias tipográficas definitivas se determinarán después de revisar los recursos existentes.

### 3.4. Componentes visuales

Los botones, campos de entrada, tarjetas, menús y mensajes deberán mantener criterios coherentes de:

- Espaciado.
- Alineación.
- Tipografía.
- Bordes.
- Colores.
- Estados de interacción.
- Comportamiento responsive.

No se introducirán estilos distintos para componentes equivalentes sin una justificación funcional.

### 3.5. Recursos gráficos

Las imágenes deberán corresponder a los productos y a la identidad de Tazza Du Vita.

Durante el desarrollo podrán utilizarse recursos provisionales claramente identificados.

Antes de utilizar el sistema comercialmente deberán revisarse los derechos de uso, la calidad visual y la exactitud de las imágenes y descripciones.

No se incorporarán afirmaciones sobre propiedades de salud o beneficios de productos sin respaldo adecuado.

## 4. Organización de las interfaces

La aplicación se dividirá conceptualmente en tres áreas.

### 4.1. Área pública

Disponible para visitantes y usuarios autenticados.

Incluye:

- Página de inicio.
- Catálogo de productos.
- Consulta de productos.
- Registro.
- Inicio de sesión.

Su propósito será presentar Tazza Du Vita y facilitar el acceso a sus productos.

### 4.2. Área del cliente

Disponible para usuarios con los permisos correspondientes.

Incluye:

- Gestión del carrito.
- Confirmación de pedidos.
- Consulta de pedidos.
- Cierre de sesión.

El acceso a estas funciones deberá respetar las reglas de autenticación establecidas.

### 4.3. Área administrativa

Disponible únicamente para administradores autorizados.

Incluye:

- Consulta de productos administrables.
- Registro de productos.
- Modificación de productos.
- Retiro de productos.
- Consulta de pedidos.
- Actualización de estados permitidos.

La interfaz administrativa podrá compartir componentes con el área pública, pero deberá mantener una organización adecuada para tareas de gestión.

## 5. Mapa de navegación inicial

### 5.1. Estructura general

La navegación propuesta para la V1 será:

**Tazza Du Vita**

- Inicio
- Productos
  - Catálogo
  - Información de producto
- Carrito
  - Artículos seleccionados
  - Confirmación de compra
- Cuenta
  - Registro
  - Inicio de sesión
  - Mis pedidos
  - Cerrar sesión
- Administración
  - Productos
    - Registrar
    - Editar
    - Retirar
  - Pedidos
    - Consultar
    - Gestionar

La visibilidad y disponibilidad de cada opción dependerán del estado de autenticación y los permisos del usuario.

Este mapa representa secciones y funciones, no necesariamente archivos HTML o rutas independientes.

### 5.2. Navegación pública

El encabezado principal deberá proporcionar acceso claro a las secciones públicas más importantes.

Se priorizarán las opciones relacionadas con la consulta de productos y el carrito.

Las funciones de suscripciones, talleres y eventos no formarán parte de la navegación obligatoria de la V1.

### 5.3. Navegación autenticada

Cuando exista una sesión válida, la interfaz deberá permitir acceder a las funciones correspondientes al usuario.

El acceso a pedidos propios deberá mantenerse separado de las operaciones administrativas.

### 5.4. Navegación administrativa

El panel de administración deberá ofrecer acceso comprensible a las funciones principales de gestión.

No se incluirán menús para funcionalidades que todavía no estén implementadas o habilitadas, salvo que se identifiquen explícitamente como no disponibles y exista una razón para mostrarlas.

### 5.5. Landing Page y Home

Se aprobó unificar Landing Page y Home en una sola página denominada **Home**, conservando `index.html` como entrada principal. El hero reutilizará la función de presentación y llamada a explorar productos del landing anterior; debajo se incorporarán las secciones pertinentes previstas para Home, sujetas al alcance V1.

`pages/home.html` podrá retirarse cuando se hayan trasladado sus contenidos útiles, actualizado enlaces y ejecutado pruebas de navegación. No debe eliminarse sin comprobar referencias.

## 6. Especificación de pantallas

### 6.1. INT-2026-11-001 — Página de inicio

**Acceso:** Público.

**Objetivo:** presentar Tazza Du Vita y facilitar la navegación hacia el catálogo.

**Elementos previstos:**

- Identidad visual del proyecto.
- Encabezado de navegación.
- Presentación breve del negocio.
- Acceso destacado al catálogo.
- Productos o contenidos destacados, cuando existan.
- Información complementaria relevante.
- Pie de página.

**Comportamiento esperado:**

La página deberá orientar al usuario hacia las principales funcionalidades disponibles.

Los enlaces deberán conducir a secciones existentes y funcionales.

No se mostrarán como operativas funcionalidades aplazadas.

**Decisión aprobada:** la Landing Page y Home se unificarán en index.html. Se conservará el hero de presentación y se incorporarán las secciones pertinentes de Home. pages/home.html podrá retirarse únicamente después de trasladar el contenido necesario y verificar los enlaces.

### 6.2. INT-2026-11-002 — Catálogo de productos

**Acceso:** Público.

**Objetivo:** permitir explorar los productos comercializados.

**Elementos previstos:**

- Encabezado.
- Listado o cuadrícula de productos.
- Tarjetas con información comercial.
- Acceso a información adicional.
- Indicaciones de disponibilidad.
- Estado de catálogo vacío.

**Comportamiento esperado:**

Las tarjetas deberán mostrar información consistente.

Los precios deberán ser legibles y utilizar el formato monetario aprobado.

Cuando un producto no esté disponible para comprar, la interfaz deberá comunicarlo y evitar presentar acciones inválidas.

Los filtros, categorías y herramientas de búsqueda se definirán según las necesidades reales del catálogo.

**Referencias:** RF-2026-11-005; CU-2026-11-004.

### 6.3. INT-2026-11-003 — Información de producto

**Acceso:** Público.

**Objetivo:** ofrecer información suficiente antes de agregar un producto al carrito.

**Elementos previstos:**

- Nombre del producto.
- Imagen o recurso visual.
- Descripción.
- Precio.
- Disponibilidad.
- Control de cantidad, cuando corresponda.
- Acción para agregar al carrito.
- Navegación de regreso al catálogo.

**Comportamiento esperado:**

La información deberá corresponder al producto seleccionado.

No deberán aceptarse cantidades inválidas.

Los productos no disponibles deberán presentar un estado comprensible.

La acción de agregar al carrito respetará las reglas de autenticación y disponibilidad aprobadas.

**Referencia:** CU-2026-11-005.

### 6.4. INT-2026-11-004 — Registro

**Acceso:** Público.

**Objetivo:** permitir crear una cuenta.

**Elementos previstos:**

- Título e instrucciones breves.
- Campos obligatorios.
- Etiquetas identificables.
- Mensajes de validación.
- Acción de registro.
- Acceso al inicio de sesión.

**Comportamiento esperado:**

Los errores deberán mostrarse dentro del contexto del formulario.

Cuando sea posible, deberán conservarse los datos no sensibles introducidos correctamente después de un error.

No deberán presentarse contraseñas en mensajes ni registros visibles.

El sistema deberá comunicar claramente el resultado de la operación.

No se incluirá autenticación mediante Google u otros proveedores sin una decisión aprobada y una implementación funcional.

**Referencia:** CU-2026-11-001.

### 6.5. INT-2026-11-005 — Inicio de sesión

**Acceso:** Público.

**Objetivo:** autenticar usuarios registrados.

**Elementos previstos:**

- Identificador de acceso.
- Contraseña.
- Acción de iniciar sesión.
- Mensajes de error.
- Acceso al registro.

**Comportamiento esperado:**

Las credenciales incorrectas deberán producir un mensaje dentro del formulario.

No se redirigirá al usuario a una página general de error por una contraseña equivocada.

Las operaciones administrativas deberán continuar protegidas aunque alguien intente acceder directamente a sus direcciones.

**Referencia:** CU-2026-11-002.

### 6.6. INT-2026-11-006 — Carrito de compras

**Acceso:** Visitante o cliente autenticado.

**Objetivo:** permitir revisar y modificar los artículos seleccionados.

**Elementos previstos:**

- Lista de productos.
- Nombre e información principal.
- Cantidad seleccionada.
- Precio unitario mostrado.
- Subtotal correspondiente.
- Acciones para modificar o eliminar.
- Resumen de compra.
- Acción para continuar con el pedido.
- Estado de carrito vacío.

**Comportamiento esperado:**

Los cambios aceptados deberán reflejarse en el resumen.

Los valores calculados en el navegador serán informativos y deberán verificarse al registrar el pedido.

La aplicación deberá impedir cantidades inválidas y comunicar cambios de disponibilidad.

No se interpretará que agregar un producto al carrito reserva automáticamente inventario.

**Decisión aprobada:** los visitantes pueden utilizar un carrito temporal sin registrarse. Al iniciar sesión para confirmar la compra, el contenido deberá conservarse y conciliarse con el carrito de la cuenta. Queda pendiente definir la persistencia técnica.

**Referencias:** CU-2026-11-006 y CU-2026-11-007.

### 6.7. INT-2026-11-007 — Confirmación de pedido

**Acceso:** Cliente autenticado.

**Objetivo:** permitir revisar y confirmar una solicitud de compra.

**Elementos previstos:**

- Resumen de productos.
- Cantidades.
- Precios y valores correspondientes.
- Información requerida para atender el pedido.
- Mensajes de validación.
- Acción de confirmación.
- Información de condiciones comerciales aplicables.

**Comportamiento esperado:**

Antes de confirmar, el usuario deberá poder revisar los datos de la operación.

Si cambian precios, cantidades disponibles o condiciones relevantes, la interfaz deberá informar el cambio y solicitar su revisión.

La operación no deberá considerarse exitosa hasta recibir una confirmación confiable del registro.

Mientras se procesa una solicitud, deberá evitarse que interacciones repetidas produzcan accidentalmente operaciones duplicadas. El backend seguirá siendo responsable de garantizar la consistencia.

**Decisiones aprobadas:** los datos mínimos de entrega y los seis estados comerciales están definidos. La interfaz deberá mostrar el costo de envío válido y el total antes del pago. Quedan pendientes las tarifas reales, el proveedor de pagos y determinados procedimientos excepcionales.

**Referencia:** CU-2026-11-008.

### 6.8. INT-2026-11-008 — Resultado del registro del pedido

**Acceso:** Cliente correspondiente.

**Objetivo:** comunicar el resultado de la operación.

**Elementos previstos cuando exista éxito:**

- Confirmación del registro.
- Identificador del pedido.
- Resumen principal.
- Estado correspondiente.
- Orientación sobre el siguiente paso.
- Acceso a los pedidos del cliente.

**Comportamiento esperado:**

La interfaz deberá diferenciar entre:

- Pedido registrado.
- Pago aprobado, cuando exista.
- Pago pendiente o rechazado, cuando corresponda.
- Error durante la operación.

No se presentará un pedido como pagado simplemente porque se haya registrado.

La implementación podrá utilizar una pantalla, una sección o un componente de confirmación, según resulte adecuado.

**Referencia:** CU-2026-11-008.

### 6.9. INT-2026-11-009 — Mis pedidos

**Acceso:** Cliente autenticado.

**Objetivo:** permitir consultar pedidos propios.

**Elementos previstos:**

- Listado de pedidos.
- Identificador.
- Fecha.
- Total registrado.
- Estado.
- Acceso al detalle.
- Estado sin pedidos.

**Comportamiento esperado:**

El cliente deberá consultar únicamente los pedidos autorizados.

La información histórica no deberá modificarse visualmente a partir de precios actuales del catálogo.

**Referencia:** CU-2026-11-009.

### 6.10. INT-2026-11-010 — Administración de productos

**Acceso:** Administrador.

**Objetivo:** gestionar la información del catálogo.

**Elementos previstos:**

- Listado de productos.
- Información comercial relevante.
- Acciones de registro y edición.
- Acción de retiro.
- Formularios de mantenimiento.
- Mensajes de validación y confirmación.

**Comportamiento esperado:**

Las operaciones deberán validar los datos y comprobar permisos.

El retiro de un producto deberá respetar las reglas de conservación histórica.

Los errores deberán comunicarse sin mostrar información interna sensible.

**Referencias:** CU-2026-11-010, CU-2026-11-011 y CU-2026-11-012.

### 6.11. INT-2026-11-011 — Administración de pedidos

**Acceso:** Administrador.

**Objetivo:** consultar y gestionar pedidos registrados.

**Elementos previstos:**

- Listado de pedidos.
- Identificador y fecha.
- Cliente relacionado.
- Estado.
- Valores principales.
- Acceso al detalle.
- Acciones de gestión autorizadas.

**Comportamiento esperado:**

El administrador podrá consultar la información necesaria y ejecutar únicamente las transiciones permitidas.

Las modificaciones deberán reflejar el resultado confirmado por el sistema.

No se permitirán cambios arbitrarios que contradigan las reglas de negocio.

**Referencia:** CU-2026-11-013.

## 7. Componentes reutilizables

Se propone organizar los componentes de interfaz según su responsabilidad.

| Componente | Función |
|---|---|
| Header / Navbar | Navegación general y acceso a funciones principales |
| Footer | Información complementaria y enlaces |
| ProductCard | Presentación resumida de productos |
| ProductDetail | Información detallada del producto |
| CartItem | Representación de un artículo del carrito |
| OrderSummary | Resumen de valores y productos |
| FormField | Campo con etiqueta, ayuda y validación |
| Notification | Mensajes de éxito, advertencia o error |
| ConfirmDialog | Confirmación de operaciones sensibles |
| ProductForm | Registro y edición de productos |
| ProductList | Visualización administrativa de productos |
| OrderList | Visualización de pedidos |
| LoadingIndicator | Comunicación de operaciones en proceso |
| EmptyState | Presentación de secciones sin contenido |

La nomenclatura es conceptual. No obliga a crear un archivo o una clase por cada componente.

### 7.1. Criterios de reutilización

Un componente deberá reutilizarse cuando represente una responsabilidad común y su reutilización simplifique el mantenimiento.

No se crearán abstracciones únicamente para evitar pequeñas cantidades de código similar.

Los componentes existentes deberán evaluarse antes de reemplazarlos.

### 7.2. Estados de componentes

Los componentes interactivos deberán contemplar los estados relevantes:

- Normal.
- Hover, cuando aplique.
- Foco.
- Deshabilitado.
- Procesando.
- Error.
- Confirmación.

Los estados deberán comunicar su significado mediante señales comprensibles, sin depender exclusivamente del color.

## 8. Diseño adaptable

### 8.1. Enfoque general

La interfaz deberá adaptarse a diferentes tamaños de pantalla sin perder funcionalidades esenciales.

Se priorizará la posibilidad de completar las operaciones principales desde dispositivos móviles.

### 8.2. Dispositivos móviles

En pantallas pequeñas se procurará:

- Mantener navegación accesible.
- Evitar desplazamientos horizontales innecesarios.
- Presentar controles con dimensiones adecuadas.
- Facilitar el uso de formularios.
- Mostrar los productos de forma legible.
- Mantener visible o accesible el resumen de compra.
- Evitar que mensajes o diálogos oculten información indispensable.

### 8.3. Escritorio

En pantallas amplias podrá aprovecharse el espacio para presentar varias tarjetas, formularios y paneles de información.

El aumento del espacio disponible no deberá producir interfaces innecesariamente dispersas o difíciles de recorrer.

### 8.4. Puntos de adaptación

Los breakpoints se definirán de acuerdo con las necesidades reales de los componentes y el diseño existente.

No se establecerán valores definitivos hasta revisar los estilos actuales.

### 8.5. Aplicación móvil independiente

Los documentos históricos incluyen diseños relacionados con Android.

Estos permanecerán como antecedentes académicos.

La V1 no requiere una aplicación Android nativa o híbrida independiente.

## 9. Accesibilidad y usabilidad

### 9.1. Estructura semántica

Se utilizarán elementos HTML apropiados para encabezados, formularios, botones, navegación y contenido.

No se sustituirán controles interactivos por elementos genéricos sin considerar sus consecuencias de accesibilidad.

### 9.2. Formularios

Los campos deberán contar con etiquetas identificables.

Los errores deberán indicar qué información necesita corregirse.

Cuando corresponda, se utilizarán tipos de entrada y mecanismos de autocompletado apropiados.

### 9.3. Navegación por teclado

Las funciones principales deberán poder utilizarse mediante teclado.

Los controles deberán presentar una indicación visible de foco y mantener un orden de navegación comprensible.

Los diálogos deberán gestionar adecuadamente el foco y permitir una salida accesible.

### 9.4. Imágenes

Las imágenes informativas deberán contar con alternativas textuales apropiadas.

Los recursos puramente decorativos no deberán introducir información innecesaria para tecnologías de asistencia.

### 9.5. Contraste

Los colores deberán mantener un contraste adecuado, especialmente en textos pequeños, botones y mensajes de error.

La utilización de fondos oscuros no garantiza automáticamente una interfaz accesible.

### 9.6. Mensajes y retroalimentación

La interfaz deberá indicar claramente:

- Qué acción se está ejecutando.
- Si la operación se completó.
- Qué error ocurrió.
- Qué puede hacer el usuario para continuar.

Los mensajes no deberán depender de animaciones o desapariciones demasiado rápidas que impidan leerlos.

### 9.7. Criterios de evaluación

Se tomarán como referencia las pautas de accesibilidad web aplicables al proyecto.

El nivel formal de conformidad se establecerá antes de realizar la validación final.

No se declarará cumplimiento completo de un estándar sin las pruebas correspondientes.

## 10. Validaciones y tratamiento de errores

### 10.1. Validaciones de formularios

Las validaciones del frontend deberán ayudar a corregir errores antes del envío.

Sin embargo, el servidor deberá validar los datos que afecten cuentas, permisos y operaciones comerciales.

### 10.2. Errores de autenticación

Las credenciales incorrectas deberán producir un mensaje dentro del formulario de inicio de sesión.

No se requiere una pantalla independiente para este error.

### 10.3. Errores de operaciones comerciales

Las situaciones de productos agotados, cantidades inválidas o pedidos fallidos deberán comunicarse en el contexto de la operación.

La interfaz no deberá conservar una apariencia de éxito cuando el sistema rechace una operación.

### 10.4. Errores generales

Podrán existir pantallas o componentes para:

- Página no encontrada.
- Servicio temporalmente no disponible.
- Error inesperado.
- Acceso no autorizado, según corresponda.

No todos los errores requieren redirigir a otra página.

### 10.5. Confirmación de acciones

Las operaciones con consecuencias importantes deberán solicitar confirmación cuando corresponda.

Los diálogos no deberán utilizarse de forma excesiva para acciones que puedan ejecutarse y deshacerse fácilmente.

## 11. Información comercial

### 11.1. Productos

La interfaz deberá mostrar información correspondiente a los registros comerciales vigentes.

Los datos utilizados para pruebas deberán distinguirse de los datos oficiales del negocio.

### 11.2. Precios

Los importes deberán presentarse utilizando un formato monetario consistente.

Dado el contexto colombiano del emprendimiento, se propone utilizar pesos colombianos (COP), sujeto a confirmación de las condiciones comerciales del negocio.

Los precios deberán proceder de una fuente confiable y verificarse al confirmar pedidos.

### 11.3. Disponibilidad

La interfaz deberá comunicar cuando un producto no pueda adquirirse.

La presentación visual no reemplazará las validaciones de inventario del backend.

Los productos agotados deberán conservar su presencia en el catálogo público, mostrar claramente su condición y tener deshabilitadas las operaciones de compra. Los productos desactivados no deberán presentarse públicamente.

### 11.4. Datos de compra

El resumen de compra deberá permitir reconocer productos, cantidades e importes.

Los costos adicionales que se incorporen deberán presentarse de manera comprensible antes de confirmar el pedido.

### 11.5. Contenidos promocionales

Las descripciones y mensajes comerciales deberán corresponder a información verificable.

No se utilizarán afirmaciones engañosas ni contenido provisional como información comercial definitiva.

## 12. Diseño de interfaces administrativas

### 12.1. Organización

La interfaz administrativa deberá priorizar claridad, rapidez de consulta y facilidad de mantenimiento.

No es necesario reproducir exactamente la distribución visual del catálogo público.

### 12.2. Formularios de productos

Los formularios deberán:

- Identificar campos obligatorios.
- Validar la información introducida.
- Mostrar errores comprensibles.
- Diferenciar creación y edición.
- Comunicar el resultado del almacenamiento.
- Evitar pérdidas innecesarias de información durante errores recuperables.

### 12.3. Gestión de pedidos

La interfaz deberá presentar los datos necesarios para identificar el pedido y realizar las operaciones autorizadas.

Los estados deberán mostrarse con términos consistentes.

Las acciones no permitidas no deberán ofrecerse como operaciones disponibles.

### 12.4. Autorización

La interfaz podrá ocultar o deshabilitar funciones según los permisos, pero la seguridad deberá verificarse desde el backend.

No se considerará suficiente restringir el acceso mediante navegación visual.

## 13. Identificación de interfaces y trazabilidad

Las interfaces tendrán identificadores permanentes con el formato:

`INT-AAAA-MM-NNN`

Estos identificadores permitirán vincular las pantallas con requisitos y casos de uso.

| Interfaz | Función principal | Requisito relacionado |
|---|---|---|
| INT-2026-11-001 | Inicio | Navegación y presentación |
| INT-2026-11-002 | Catálogo | RF-2026-11-005 |
| INT-2026-11-003 | Producto | RF-2026-11-006 |
| INT-2026-11-004 | Registro | RF-2026-11-001 |
| INT-2026-11-005 | Inicio de sesión | RF-2026-11-002 |
| INT-2026-11-006 | Carrito | RF-2026-11-007 |
| INT-2026-11-007 | Confirmación | RF-2026-11-008 |
| INT-2026-11-008 | Resultado del pedido | RF-2026-11-008 |
| INT-2026-11-009 | Mis pedidos | RF-2026-11-009 |
| INT-2026-11-010 | Administración de productos | RF-2026-11-010 |
| INT-2026-11-011 | Administración de pedidos | RF-2026-11-011 |

Las interfaces representan responsabilidades visuales. Varias podrán combinarse dentro de una misma página si esto mejora el uso y mantenimiento del sistema.

### 13.1. Interfaces y comportamiento comercial aprobados

- **Carrito:** accesible a visitantes; el inicio del checkout requiere autenticación, conservando productos y conciliándolos con la cuenta.
- **Catálogo:** mostrar etiqueta «Agotado» para productos sin stock, deshabilitando su compra; no mostrar desactivados.
- **Checkout:** capturar nombre de destinatario, teléfono, departamento, municipio y dirección, con barrio/instrucciones/segundo teléfono opcionales. Presentar tarifa de envío real y total antes del pago; sin cotización válida, impedir avanzar.
- **Pago:** checkout alojado y retorno permitidos, con estado pendiente hasta que el backend confirme el resultado; ofrecer reintento seguro del mismo pedido cuando proceda.
- **Pedidos:** mostrar los seis estados comerciales aprobados y distinguirlos del estado financiero.
- **Administración:** permitir indicar transportadora, guía y confirmación manual de entrega; impedir edición de artículos y totales pagados; cancelaciones por contacto con empresa.

No se diseñará un selector que prometa medios de pago específicos hasta verificar las opciones del proveedor contratado.

## 14. Decisiones pendientes

| Referencia | Asunto | Impacto en interfaces |
|---|---|---|
| PEN-2026-11-003 | Carrito de visitantes | Acceso, navegación y persistencia |
| PEN-2026-11-004 | Estados de pedidos | Etiquetas y acciones de gestión |
| PEN-2026-11-005 | Inventario | Disponibilidad y controles de cantidad |
| PEN-2026-11-006 | Entregas | Formularios y resumen de compra |
| PEN-2026-11-008 | Pagos en línea | Pantallas y estados del proceso de pago |
| PEN-2026-11-009 | Gestión del perfil | Navegación y formularios adicionales |
| PEN-2026-11-010 | Facturación | Consulta y entrega de documentos comerciales |

Además, se deberán verificar:

- Paleta y tipografías actuales.
- Distribución de la página de inicio.
- Componentes ya implementados.
- Convenciones de estilos.
- Navegación administrativa.
- Comportamiento responsive.
- Recursos gráficos disponibles.

## 15. Prototipos y recursos visuales

Los diseños anteriores elaborados en herramientas de prototipado se conservarán como referencia de la identidad visual y de la evolución del proyecto.

No se considerarán automáticamente especificaciones definitivas cuando contradigan el alcance o los requisitos actuales.

Durante la revisión del frontend se determinará qué diseños coinciden con la implementación y cuáles necesitan actualizarse.

Cuando se construyan nuevos prototipos, deberán corresponder a las funcionalidades aprobadas y representar los estados principales de interacción.

Los prototipos deberán identificarse mediante su versión y vincularse con las interfaces correspondientes.

Los recursos visuales podrán organizarse como anexos o archivos asociados, evitando duplicarlos innecesariamente dentro de la documentación.

## 16. Criterios de validación

Una interfaz podrá considerarse conforme con su especificación cuando:

1. Cumpla la funcionalidad prevista.
2. Presente información correcta y comprensible.
3. Permita completar las interacciones autorizadas.
4. Comunique errores y resultados apropiadamente.
5. Respete la identidad visual acordada.
6. Funcione en los tamaños de pantalla definidos.
7. Mantenga los criterios de accesibilidad aplicables.
8. No exponga operaciones restringidas como si estuvieran autorizadas.
9. No utilice información comercial falsa o provisional en producción.
10. Supere las pruebas funcionales correspondientes.

La validación visual deberá complementarse con la comprobación del comportamiento real.

Una pantalla no estará completada únicamente por coincidir con un diseño gráfico.

## 17. Mantenimiento del documento

Este documento deberá actualizarse cuando:

- Se modifiquen los requisitos o procesos.
- Se aprueben decisiones pendientes.
- Se incorporen nuevas interfaces.
- Se modifique la navegación.
- Se definan formalmente colores y tipografías.
- Se cambien componentes reutilizables.
- Se identifiquen problemas de accesibilidad o usabilidad.
- La revisión del código actual requiera ajustar las especificaciones.

Las modificaciones que afecten el alcance o las decisiones generales deberán seguir el procedimiento establecido en el Documento 00.

## 18. Consideraciones finales

El diseño de interfaces de Tazza Du Vita deberá facilitar la consulta de productos, la gestión de compras y la administración de operaciones comerciales.

La primera versión conservará como referencia la identidad visual oscura con acentos verdes desarrollada durante las etapas anteriores del proyecto.

Se priorizarán interfaces comprensibles, adaptables, accesibles y coherentes con las reglas de negocio.

Las pantallas y componentes existentes deberán evaluarse antes de decidir modificaciones importantes.

La finalidad de esta especificación es orientar el desarrollo de una experiencia funcional y consistente, sin convertir los prototipos históricos en obligaciones que contradigan el alcance vigente.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| 1.2 | 27/11/2026 | Correciones de consistencia documental
| 1.1 | 24/11/2026 | Actualización tras el diagnóstico del repositorio y acuerdos sobre tecnologías, navegación y proceso comercial. |
| 1.0 | 23/11/2026 | Creación del documento rector a partir de la revisión documental y las decisiones iniciales de alcance. |

**Próxima revisión prevista:** al verificar el frontend local, unificar la página de inicio e implementar las interfaces de carrito, checkout y pedidos.