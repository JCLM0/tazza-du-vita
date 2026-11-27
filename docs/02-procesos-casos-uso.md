# 02 — Procesos y Casos de Uso

**Proyecto:** Tazza Du Vita
**Tipo:** Aplicación web de comercio electrónico
**Versión del documento:** 1.1
**Fecha de creación:** 23 de noviembre de 2026
**Última actualización:** 24 de noviembre de 2026
**Estado:** Especificación funcional inicial, pendiente de validación de procesos y contraste con el código actual
**Documentos de referencia:** 00 — Dirección del Proyecto; 01 — Requisitos y Backlog
**Responsable de las decisiones:** Responsable del proyecto

---

## 1. Propósito del documento

Este documento describe los procesos principales de Tazza Du Vita y las interacciones necesarias para utilizar las funcionalidades de su primera versión.

Su finalidad es establecer cómo deberán desarrollarse las operaciones de registro, autenticación, consulta de productos, gestión del carrito, confirmación de pedidos y administración.

Cada proceso se describe mediante casos de uso que identifican los actores participantes, las condiciones necesarias, el flujo principal, los escenarios alternativos y los resultados esperados.

Esta especificación complementa los requisitos del Documento 01 y servirá como referencia para el diseño de interfaces, el modelo de datos, la implementación y las pruebas.

Los casos de uso expresan comportamientos esperados. No constituyen evidencia de que las funcionalidades estén implementadas.

## 2. Alcance de los procesos

### 2.1. Procesos incluidos

La primera versión contempla los siguientes procesos funcionales:

1. Registro y acceso de usuarios.
2. Consulta del catálogo de productos.
3. Gestión del carrito de compras.
4. Confirmación y registro de pedidos.
5. Consulta de pedidos del cliente.
6. Administración de productos.
7. Consulta y gestión administrativa de pedidos.

La integración de pagos en línea se documentará como proceso condicionado.

Las suscripciones, talleres, eventos y funcionalidades complementarias no forman parte de los procesos obligatorios de la V1.

### 2.2. Límites de la especificación

Este documento define comportamientos funcionales y reglas de negocio, pero no establece:

- Lenguajes, frameworks o tecnologías de backend.
- Estructuras físicas de bases de datos.
- Endpoints o contratos de API.
- Distribución de archivos y módulos de código.
- Proveedores de infraestructura.
- Diseño visual definitivo de las interfaces.

Estos aspectos se abordarán en los documentos técnicos correspondientes.

Cuando un proceso dependa de una decisión pendiente, se indicará expresamente.

## 3. Identificación y estructura de casos de uso

### 3.1. Identificadores

Los casos de uso utilizarán el formato:

`CU-AAAA-MM-NNN`

Ejemplo: `CU-2026-11-001`.

Los identificadores serán permanentes y seguirán el mismo criterio de trazabilidad establecido en los Documentos 00 y 01.

### 3.2. Elementos de descripción

Cada caso de uso podrá contener:

- **Objetivo:** resultado que busca el actor.
- **Actor principal:** quien inicia la interacción.
- **Requisitos relacionados:** referencias a los requisitos funcionales.
- **Precondiciones:** condiciones necesarias antes de ejecutar el proceso.
- **Flujo principal:** secuencia esperada cuando la operación se realiza correctamente.
- **Flujos alternativos:** situaciones válidas que modifican el recorrido.
- **Excepciones:** errores o condiciones que impiden completar la operación.
- **Postcondiciones:** estado esperado después de finalizar el proceso.
- **Decisiones pendientes:** aspectos que requieren definición adicional.

Las validaciones y controles transversales se describen en las reglas de negocio para evitar repetirlos innecesariamente.

## 4. Actores y responsabilidades

### 4.1. Visitante

Persona que accede a la aplicación sin iniciar sesión.

Puede consultar el catálogo, revisar la información pública de los productos y utilizar los formularios de registro y autenticación.

Los visitantes pueden agregar productos al carrito; la autenticación se exige al iniciar la confirmación de compra.

### 4.2. Cliente

Usuario autenticado que utiliza las funciones comerciales disponibles para su cuenta.

Puede gestionar su carrito, confirmar pedidos y consultar el historial de compras correspondiente a su identidad.

### 4.3. Administrador

Usuario autenticado con permisos para utilizar el área administrativa.

Puede gestionar productos y realizar las operaciones permitidas sobre los pedidos.

### 4.4. Servicios externos

Cuando corresponda, podrán existir servicios externos que participen en determinados procesos.

Por ejemplo, una pasarela de pagos podrá intervenir en el procesamiento de transacciones electrónicas si se aprueba su implementación.

Estos servicios no deberán representarse como actores existentes hasta que su participación esté definida.

### 4.5. Generalización de actores

Para el modelado UML se podrá representar un actor general denominado `Usuario autenticado`, especializado en `Cliente` y `Administrador` cuando esto facilite mostrar operaciones compartidas.

El visitante representa una condición de acceso, no necesariamente un tipo de cuenta almacenada.

El sistema no se representará como actor externo de sí mismo.

## 5. Catálogo de casos de uso

| Identificador | Caso de uso | Actor principal |
|---|---|---|
| CU-2026-11-001 | Registrar cuenta | Visitante |
| CU-2026-11-002 | Iniciar sesión | Usuario registrado |
| CU-2026-11-003 | Cerrar sesión | Usuario autenticado |
| CU-2026-11-004 | Explorar catálogo | Visitante o cliente |
| CU-2026-11-005 | Consultar producto | Visitante o cliente |
| CU-2026-11-006 | Agregar producto al carrito | Visitante o cliente |
| CU-2026-11-007 | Consultar y modificar carrito | Visitante o cliente |
| CU-2026-11-008 | Confirmar y registrar pedido | Cliente |
| CU-2026-11-009 | Consultar mis pedidos | Cliente |
| CU-2026-11-010 | Registrar producto | Administrador |
| CU-2026-11-011 | Modificar producto | Administrador |
| CU-2026-11-012 | Retirar producto de la oferta | Administrador |
| CU-2026-11-013 | Consultar y gestionar pedidos | Administrador |
| CU-2026-11-014 | Realizar pago en línea | Cliente |

El caso CU-2026-11-014 permanece condicionado.

Los casos del carrito se aplican también a visitantes con un carrito temporal; solo la confirmación del pedido exige autenticación.

---

## 6. Casos de uso detallados

### CU-2026-11-001 — Registrar cuenta

**Objetivo:** permitir que un visitante cree una cuenta de cliente.

**Actor principal:** Visitante.

**Requisitos relacionados:** RF-2026-11-001.

**Historia relacionada:** HU-2026-11-001.

#### Precondiciones

- El visitante tiene acceso al formulario de registro.
- El servicio necesario para registrar cuentas está disponible.

#### Flujo principal

1. El visitante selecciona la opción de registro.
2. El sistema presenta el formulario correspondiente.
3. El visitante introduce los datos solicitados.
4. El visitante envía la información.
5. El sistema valida los campos y el formato de los datos.
6. El sistema comprueba que el identificador de acceso no esté registrado previamente.
7. El sistema procesa las credenciales mediante los mecanismos de seguridad establecidos.
8. El sistema registra la cuenta con los permisos correspondientes a un cliente.
9. El sistema informa que el registro se realizó correctamente.

#### Flujos alternativos y excepciones

**A1 — Datos incompletos o inválidos**

El sistema identifica los campos incorrectos y comunica las correcciones necesarias. La cuenta no se registra.

**A2 — Cuenta existente**

Si el identificador de acceso ya está registrado, el sistema rechaza la creación de una cuenta duplicada y presenta una respuesta apropiada.

**E1 — Error de almacenamiento**

Si ocurre un fallo al registrar la cuenta, el sistema informa que la operación no pudo completarse.

No deberá comunicar un registro exitoso cuando no exista confirmación de almacenamiento.

#### Postcondiciones

- En caso de éxito, existe una cuenta registrada.
- La cuenta dispone de los permisos de cliente.
- Las credenciales no se almacenan en texto plano.

**Pendiente:** determinar los campos definitivos y si el registro incluye verificación de correo electrónico.

El registro automático de una sesión después de crear la cuenta también requiere definición.

### CU-2026-11-002 — Iniciar sesión

**Objetivo:** permitir que un usuario registrado acceda a sus funciones autorizadas.

**Actor principal:** Usuario registrado.

**Requisitos relacionados:** RF-2026-11-002 y RF-2026-11-004.

**Historia relacionada:** HU-2026-11-002.

#### Precondiciones

- Existe una cuenta que puede utilizar el mecanismo de autenticación.
- El usuario no dispone de una sesión válida para la operación que intenta iniciar.

#### Flujo principal

1. El usuario accede al formulario de inicio de sesión.
2. Introduce sus credenciales.
3. Envía la solicitud de autenticación.
4. El sistema valida la información recibida.
5. El sistema comprueba las credenciales mediante el mecanismo establecido.
6. Si son válidas, establece una sesión autenticada.
7. El sistema identifica los permisos correspondientes a la cuenta.
8. El usuario obtiene acceso a las funciones autorizadas.

#### Flujos alternativos y excepciones

**A1 — Credenciales incorrectas**

El sistema rechaza la autenticación y muestra un mensaje comprensible sin revelar información sensible.

**A2 — Datos incompletos**

El sistema solicita corregir los datos y no intenta establecer una sesión válida con información insuficiente.

**A3 — Cuenta no habilitada**

Si el modelo de usuarios contempla cuentas deshabilitadas, el sistema impide su acceso conforme a las reglas establecidas.

**E1 — Error del servicio de autenticación**

El sistema informa que no puede completar la operación y no presenta un inicio de sesión exitoso.

#### Postcondiciones

- En caso de éxito, existe una sesión autenticada válida.
- El usuario solo puede ejecutar operaciones autorizadas.
- En caso de fallo, no se concede acceso.

**Pendiente:** definir el comportamiento exacto de cuentas inactivas y la política de sesiones.

### CU-2026-11-003 — Cerrar sesión

**Objetivo:** finalizar una sesión autenticada.

**Actor principal:** Usuario autenticado.

**Requisito relacionado:** RF-2026-11-003.

**Historia relacionada:** HU-2026-11-003.

#### Precondición

El usuario dispone de una sesión autenticada.

#### Flujo principal

1. El usuario selecciona la opción de cerrar sesión.
2. El sistema procesa la solicitud.
3. El sistema invalida la sesión correspondiente.
4. La interfaz se actualiza para representar el estado no autenticado.
5. El usuario puede continuar utilizando las funciones públicas.

#### Excepción

**E1 — Fallo al finalizar la sesión**

Si no se confirma la invalidación de la sesión, la aplicación no deberá afirmar que la sesión quedó cerrada de manera segura.

#### Postcondición

La sesión anterior deja de autorizar operaciones protegidas.

### CU-2026-11-004 — Explorar catálogo

**Objetivo:** permitir la consulta de los productos ofrecidos.

**Actor principal:** Visitante o cliente.

**Requisito relacionado:** RF-2026-11-005.

**Historia relacionada:** HU-2026-11-004.

#### Precondición

El usuario puede acceder al área pública del catálogo.

#### Flujo principal

1. El usuario accede al catálogo.
2. El sistema obtiene los productos autorizados para su visualización pública.
3. El sistema presenta los productos con su información principal.
4. El usuario puede recorrer el contenido disponible.
5. El usuario selecciona un producto si desea consultar información adicional.

#### Flujos alternativos y excepciones

**A1 — Catálogo vacío**

El sistema presenta un mensaje apropiado e indica que no existen productos disponibles para mostrar.

**E1 — Error al recuperar productos**

El sistema muestra un aviso sin presentar información inexistente como si estuviera disponible.

#### Postcondición

El usuario puede consultar el catálogo sin necesidad de autenticarse.

**Pendiente:** definir filtros, categorías, ordenamiento o búsqueda, si se consideran necesarios para la V1.

### CU-2026-11-005 — Consultar producto

**Objetivo:** permitir que el usuario examine la información de un producto.

**Actor principal:** Visitante o cliente.

**Requisito relacionado:** RF-2026-11-006.

**Historia relacionada:** HU-2026-11-004.

#### Precondición

El producto solicitado existe y está autorizado para consulta pública.

#### Flujo principal

1. El usuario selecciona un producto.
2. El sistema obtiene la información correspondiente.
3. Presenta su nombre, descripción, precio e información visual disponible.
4. Muestra su disponibilidad conforme a las reglas definidas.
5. El usuario puede regresar al catálogo o iniciar una operación permitida sobre el producto.

#### Flujos alternativos y excepciones

**A1 — Producto no disponible para compra**

El sistema informa su condición e impide las operaciones de compra que no estén permitidas.

**E1 — Producto inexistente o retirado**

El sistema presenta una respuesta apropiada y no ofrece una operación de compra inválida.

#### Postcondición

El usuario obtiene información suficiente para evaluar el producto.

### CU-2026-11-006 — Agregar producto al carrito

**Objetivo:** incorporar productos seleccionados al carrito.

**Actor principal:** Visitante o cliente.

**Requisito relacionado:** RF-2026-11-007.

**Historia relacionada:** HU-2026-11-005.

#### Precondiciones

- El actor puede disponer de un carrito temporal (visitante) o asociado a la cuenta (cliente).
- El producto existe y puede incorporarse al carrito.
- La cantidad solicitada es válida.

#### Flujo principal

1. El usuario selecciona un producto.
2. Indica la cantidad deseada o acepta la cantidad inicial presentada.
3. Solicita agregar el producto.
4. El sistema valida la solicitud.
5. Comprueba las reglas de disponibilidad aplicables.
6. Registra o actualiza el artículo dentro del carrito.
7. Actualiza el resumen correspondiente.
8. Informa que la operación se completó correctamente.

#### Flujos alternativos y excepciones

**A1 — Producto ya existente en el carrito**

El sistema aplica la política definida para las cantidades del mismo producto.

La política deberá evitar registros inconsistentes o duplicaciones no deseadas.

**A2 — Cantidad inválida**

El sistema rechaza la operación y comunica el problema.

**A3 — Disponibilidad insuficiente**

El sistema impide aceptar una cantidad que contradiga las reglas de disponibilidad vigentes.

**E1 — Fallo al modificar el carrito**

No se comunica una actualización exitosa si la operación no se completa.

#### Postcondición

El carrito refleja únicamente los cambios aceptados.

**Pendientes relacionados:** PEN-2026-11-003 y PEN-2026-11-005.

No se asume que agregar un producto al carrito reserve automáticamente existencias.

### CU-2026-11-007 — Consultar y modificar carrito

**Objetivo:** permitir que el visitante o cliente revise y ajuste los productos seleccionados.

**Actor principal:** Visitante o cliente.

**Requisito relacionado:** RF-2026-11-007.

**Historia relacionada:** HU-2026-11-006.

#### Precondición

El visitante o cliente puede acceder a su carrito.

#### Flujo principal

1. El usuario abre el carrito.
2. El sistema presenta los productos registrados.
3. Muestra las cantidades, precios y valores calculados.
4. El usuario puede modificar una cantidad o retirar un artículo.
5. El sistema valida la operación solicitada.
6. Si es válida, actualiza el contenido.
7. El sistema recalcula el resumen de compra.
8. El usuario puede continuar explorando productos o iniciar la confirmación del pedido; para confirmar se requiere autenticación.

#### Flujos alternativos y excepciones

**A1 — Carrito vacío**

El sistema presenta un estado informativo y permite continuar navegando.

**A2 — Cantidad inválida o no permitida**

El sistema rechaza la modificación y conserva un estado coherente del carrito.

**A3 — Producto que dejó de estar disponible**

El sistema informa el cambio y aplica la política de disponibilidad definida.

**E1 — Fallo al actualizar**

Se informa que la operación no se completó.

#### Postcondición

El carrito y su resumen representan los cambios válidos que fueron aceptados.

**Regla vigente:** el carrito muestra valores informativos. Antes de confirmar el pedido, el backend debe verificar los precios y las existencias vigentes. Si encuentra diferencias relevantes, el cliente deberá revisar y aceptar el resumen actualizado.

### CU-2026-11-008 — Confirmar y registrar pedido

**Objetivo:** convertir una selección válida de productos en un pedido registrado.

**Actor principal:** Cliente.

**Requisito relacionado:** RF-2026-11-008.

**Historia relacionada:** HU-2026-11-007.

#### Precondiciones

- El cliente está autenticado.
- El carrito contiene al menos un producto válido.
- El sistema dispone de la información necesaria para intentar registrar el pedido.

#### Flujo principal

1. El cliente inicia el proceso de confirmación.
2. El sistema presenta un resumen del carrito.
3. El cliente revisa los productos, cantidades y valores.
4. El sistema solicita los datos adicionales necesarios para el pedido.
5. El cliente revisa y confirma la información.
6. El sistema valida nuevamente los productos, cantidades, precios y condiciones comerciales aplicables.
7. Comprueba que los datos requeridos estén completos.
8. El sistema registra el pedido y sus detalles como una operación coherente.
9. Asigna un identificador al pedido.
10. Establece su estado inicial conforme a las reglas aprobadas.
11. Informa que el pedido fue registrado y presenta su referencia.

#### Flujos alternativos y excepciones

**A1 — Datos incompletos**

El sistema solicita corregir la información antes de continuar.

**A2 — Producto no disponible**

Si algún producto no puede incluirse, el sistema informa el problema e impide confirmar el pedido con datos inválidos.

**A3 — Precio o cantidad modificados**

Si la información comercial ha cambiado, el sistema presenta las diferencias relevantes para que el cliente pueda revisar y aceptar las condiciones actualizadas antes de confirmar.

**A4 — Carrito vacío**

El sistema impide registrar un pedido sin artículos válidos.

**E1 — Error de registro**

Si no puede completarse de manera consistente el registro del pedido y sus detalles, la operación no deberá comunicarse como exitosa.

**E2 — Solicitud duplicada**

Si el cliente repite la solicitud debido a una demora o error de conexión, el sistema deberá contar con una estrategia que evite crear involuntariamente pedidos duplicados.

El mecanismo técnico se determinará en la arquitectura.

#### Postcondiciones

En caso de éxito:

- El pedido queda registrado.
- Existe un identificador para consultarlo.
- Se conserva la información comercial necesaria.
- El cliente recibe una confirmación de registro.

El pedido no se considera pagado por el simple hecho de haber sido creado.

**Pendientes relacionados:** PEN-2026-11-004, PEN-2026-11-005 y PEN-2026-11-006.

El carrito no reserva existencias. Cuando se inicia el pago de un pedido válido, se aplica una reserva temporal, cuya duración y mecanismo técnico están pendientes. La venta se consolida únicamente después de verificar el pago. La entrega será a domicilio, sujeta a cobertura y cotización válida. Si no se incorpora una pasarela en la V1, deberá definirse un procedimiento alternativo seguro para registrar y atender pedidos.

### CU-2026-11-009 — Consultar mis pedidos

**Objetivo:** permitir al cliente consultar su historial de pedidos.

**Actor principal:** Cliente.

**Requisito relacionado:** RF-2026-11-009.

**Historia relacionada:** HU-2026-11-008.

#### Precondición

El cliente dispone de una sesión autenticada.

#### Flujo principal

1. El cliente accede a la sección de pedidos.
2. El sistema identifica su cuenta.
3. Recupera los pedidos asociados que el cliente está autorizado a consultar.
4. Presenta la información principal de cada pedido.
5. El cliente selecciona uno.
6. El sistema muestra los detalles y su estado correspondiente.

#### Flujos alternativos y excepciones

**A1 — Sin pedidos registrados**

El sistema presenta un mensaje informativo.

**E1 — Pedido no autorizado**

Si se solicita un pedido que no pertenece al cliente, el sistema impide su consulta.

**E2 — Error de recuperación**

El sistema informa que no pudo mostrar la información solicitada.

#### Postcondición

El cliente consulta únicamente la información autorizada de sus pedidos.

### CU-2026-11-010 — Registrar producto

**Objetivo:** permitir que un administrador agregue un producto al catálogo.

**Actor principal:** Administrador.

**Requisito relacionado:** RF-2026-11-010.

**Historia relacionada:** HU-2026-11-009.

#### Precondiciones

- El administrador dispone de una sesión válida.
- Tiene autorización para gestionar productos.

#### Flujo principal

1. El administrador accede al área de productos.
2. Selecciona la opción de registrar un producto.
3. El sistema presenta el formulario correspondiente.
4. El administrador introduce la información requerida.
5. Envía la solicitud de registro.
6. El sistema valida los datos y permisos.
7. Registra el producto.
8. Informa que el registro se realizó correctamente.
9. El producto queda disponible para administración y para publicación cuando cumpla las reglas correspondientes.

#### Flujos alternativos y excepciones

**A1 — Datos inválidos**

El sistema identifica la información incorrecta y no registra el producto.

**A2 — Producto no publicable**

Si existe una política de publicación, el producto podrá permanecer fuera del catálogo público mientras no cumpla las condiciones correspondientes.

**E1 — Usuario no autorizado**

El sistema impide el registro.

**E2 — Error de almacenamiento**

El sistema informa que no pudo completar la operación.

#### Postcondición

El producto queda registrado si la operación se completó correctamente.

### CU-2026-11-011 — Modificar producto

**Objetivo:** actualizar la información de un producto existente.

**Actor principal:** Administrador.

**Requisito relacionado:** RF-2026-11-010.

**Historia relacionada:** HU-2026-11-010.

#### Precondiciones

- El administrador tiene los permisos necesarios.
- El producto existe.

#### Flujo principal

1. El administrador consulta la lista de productos.
2. Selecciona el producto que desea editar.
3. El sistema presenta su información actual.
4. El administrador modifica los campos autorizados.
5. Solicita guardar los cambios.
6. El sistema valida la información.
7. Actualiza el registro.
8. Informa que la operación se completó.

#### Flujos alternativos y excepciones

**A1 — Datos incorrectos**

El sistema rechaza la modificación y señala los campos que deben corregirse.

**E1 — Producto inexistente**

La operación se rechaza si el producto ya no existe o no puede ser modificado.

**E2 — Error de actualización**

El sistema comunica el fallo y no informa una modificación exitosa.

**E3 — Acceso no autorizado**

El sistema impide la operación.

#### Postcondición

La información vigente del producto refleja los cambios aceptados.

Los cambios de precio o descripción no deberán alterar indebidamente los registros históricos de pedidos.

### CU-2026-11-012 — Retirar producto de la oferta

**Objetivo:** permitir retirar un producto que no debe seguir ofreciéndose para nuevas compras.

**Actor principal:** Administrador.

**Requisito relacionado:** RF-2026-11-010.

**Historia relacionada:** HU-2026-11-011.

#### Precondiciones

- El administrador está autorizado.
- El producto existe y puede gestionarse.

#### Flujo principal

1. El administrador localiza el producto.
2. Selecciona la opción para retirarlo.
3. El sistema presenta la información necesaria para confirmar la acción.
4. El administrador confirma la operación.
5. El sistema verifica que el cambio sea permitido.
6. Ejecuta el procedimiento de retiro definido.
7. El producto deja de ofrecerse para nuevas compras.
8. El sistema informa el resultado.

#### Flujos alternativos y excepciones

**A1 — Operación cancelada**

El administrador cancela la confirmación y no se modifica el producto.

**A2 — Producto relacionado con pedidos**

El sistema deberá preservar las referencias y la información histórica necesarias.

**E1 — Error de retiro**

El sistema comunica el fallo y mantiene un estado consistente.

**E2 — Usuario no autorizado**

La operación se rechaza.

#### Postcondición

El producto deja de estar disponible para nuevas compras conforme a la política adoptada.

**Pendiente:** seleccionar formalmente entre desactivación, eliminación lógica u otra estrategia segura.

No se establece como requisito eliminar físicamente los registros.

### CU-2026-11-013 — Consultar y gestionar pedidos

**Objetivo:** permitir que un administrador supervise y actualice las operaciones comerciales autorizadas.

**Actor principal:** Administrador.

**Requisito relacionado:** RF-2026-11-011.

**Historia relacionada:** HU-2026-11-012.

#### Precondiciones

- El administrador está autenticado.
- Tiene permisos para consultar y gestionar pedidos.

#### Flujo principal

1. El administrador accede al área de pedidos.
2. El sistema presenta los pedidos disponibles para administración.
3. El administrador selecciona un pedido.
4. El sistema muestra su información y estado.
5. El administrador solicita una operación de actualización permitida.
6. El sistema verifica los permisos y las reglas de transición.
7. Si la operación es válida, registra el cambio.
8. El sistema informa el resultado y presenta el estado actualizado.

#### Flujos alternativos y excepciones

**A1 — No existen pedidos**

El sistema presenta un estado informativo.

**A2 — Cambio de estado no permitido**

El sistema rechaza la operación y explica que la transición solicitada no es válida.

**A3 — Pedido modificado durante la consulta**

Si el estado del pedido cambia antes de ejecutar una operación, el sistema deberá comprobar nuevamente las condiciones correspondientes.

**E1 — Pedido inexistente**

El sistema impide la actualización.

**E2 — Error de almacenamiento**

El sistema informa que no fue posible completar el cambio.

**E3 — Usuario no autorizado**

El sistema rechaza la operación.

#### Postcondición

Los cambios permitidos quedan registrados y el pedido mantiene un estado coherente.

**Estados aprobados:** pendiente de pago, confirmado, en preparación, enviado, entregado y cancelado. La secuencia ordinaria está definida; quedan pendientes las transiciones excepcionales, devoluciones y procedimientos especiales de cancelación.

### CU-2026-11-014 — Realizar pago en línea

**Clasificación:** Condicionado.

**Objetivo:** permitir al cliente pagar electrónicamente un pedido.

**Actor principal:** Cliente.

**Actor externo potencial:** Proveedor de pagos.

**Requisito relacionado:** RF-2026-11-012.

**Historia relacionada:** HU-2026-11-013.

#### Precondiciones

- La integración de pagos ha sido aprobada.
- Existe un pedido válido para el proceso.
- Se ha establecido un proveedor de pagos y su mecanismo de integración.

#### Flujo principal propuesto

1. El cliente selecciona la opción de pago.
2. El sistema identifica el pedido y el importe correspondiente.
3. El sistema inicia una operación de pago mediante el proveedor seleccionado.
4. El cliente completa las acciones solicitadas por el proveedor.
5. El proveedor procesa la transacción.
6. El sistema obtiene y verifica el resultado mediante un mecanismo confiable.
7. Actualiza el estado del pago según el resultado validado.
8. Mantiene la información del pedido coherente con la transacción.
9. Presenta al cliente la información correspondiente.

#### Flujos alternativos y excepciones

**A1 — Pago rechazado**

El sistema registra o conserva el resultado correspondiente y no considera el pedido pagado.

**A2 — Operación abandonada**

El sistema no interpreta el abandono como confirmación de pago.

**A3 — Resultado pendiente**

La operación mantiene un estado que permita esperar la confirmación correspondiente, sin presentar como aprobado un pago no verificado.

**E1 — Notificación duplicada**

El sistema evita procesar repetidamente el mismo resultado de manera inconsistente.

**E2 — Error de comunicación**

La aplicación no da por aprobado un pago sin verificación suficiente.

#### Postcondiciones

El pago conserva un estado verificable y el pedido mantiene una relación coherente con el resultado.

**Pendiente:** definir proveedor, métodos de pago, estados, conciliación y tratamiento de reembolsos o cancelaciones cuando correspondan.

Este caso de uso no será obligatorio para declarar completada la V1 si la integración no se aprueba.

## 7. Procesos generales del sistema

Los casos de uso anteriores describen interacciones individuales. Esta sección muestra cómo se relacionan dentro de los procesos principales.

### 7.1. Proceso de acceso

El proceso de acceso permite que una persona pase de utilizar las funciones públicas a utilizar las funciones autorizadas de una cuenta.

**Secuencia general:**

1. Acceso a la aplicación.
2. Consulta pública o selección de autenticación.
3. Registro de cuenta, si es necesario.
4. Inicio de sesión.
5. Identificación de permisos.
6. Acceso a las funciones autorizadas.
7. Cierre de sesión cuando el usuario lo solicite.

La existencia de una cuenta no garantiza permisos administrativos.

### 7.2. Proceso de consulta comercial

El usuario accede al catálogo, consulta productos y decide si desea iniciar una operación de compra.

**Secuencia general:**

1. Acceso al catálogo.
2. Visualización de productos disponibles.
3. Selección de producto.
4. Consulta de información y disponibilidad.
5. Incorporación al carrito cuando esté permitido.

El catálogo permanecerá disponible para visitantes.

### 7.3. Proceso de compra

El proceso de compra comprende la selección, revisión y registro de un pedido.

**Secuencia general:**

1. Selección de productos.
2. Gestión del carrito.
3. Inicio de confirmación.
4. Identificación del cliente.
5. Revisión de productos y datos necesarios.
6. Validación comercial.
7. Confirmación del cliente.
8. Registro coherente del pedido y sus detalles.
9. Presentación del resultado y la referencia.

El procedimiento de pago, cuando exista, se integrará de acuerdo con el flujo aprobado.

No se asumirá que el registro de un pedido requiere que el pago se encuentre aprobado previamente.

### 7.4. Proceso administrativo de productos

Comprende:

1. Acceso autorizado al área administrativa.
2. Consulta del catálogo administrable.
3. Selección de una operación.
4. Captura o modificación de información.
5. Validación de datos y permisos.
6. Registro de cambios.
7. Presentación de resultados.

Las operaciones deberán preservar la integridad de los pedidos históricos.

### 7.5. Proceso administrativo de pedidos

Comprende:

1. Acceso autorizado al módulo de pedidos.
2. Consulta de registros.
3. Selección de un pedido.
4. Revisión de información y estado.
5. Solicitud de una acción permitida.
6. Validación de la transición.
7. Registro del cambio.
8. Presentación del resultado.

No se permitirá actualizar estados de manera arbitraria.

## 8. Reglas de negocio

Las reglas siguientes complementan las definidas en el Documento 01.

Se conserva su identificación original cuando corresponda.

### RN-01 — Control de acceso

Las operaciones administrativas requieren permisos autorizados.

La ocultación de controles visuales no reemplaza la verificación de permisos.

### RN-02 — Cantidades válidas

Las cantidades de productos destinadas a compra deberán ser mayores que cero y cumplir las condiciones comerciales aprobadas.

No podrán registrarse cantidades inválidas dentro de un pedido.

### RN-03 — Conservación del precio histórico

Cada detalle de pedido deberá conservar la información de precio necesaria para interpretar la transacción en el momento en que fue registrada.

Las modificaciones posteriores de los precios del catálogo no deberán alterar esos valores históricos.

### RN-04 — Consistencia de pedidos

El registro del pedido y de sus detalles deberá completarse de forma coherente.

No deberá quedar un pedido aparentemente confirmado si falla una parte indispensable de su registro.

### RN-05 — Independencia entre pedido y pago

El estado de un pedido y el resultado de una operación de pago representan conceptos diferentes.

La creación de un pedido no constituye por sí sola una confirmación de pago.

### RN-06 — Privacidad de información

Un cliente no deberá acceder a los pedidos o datos privados de otro cliente sin autorización.

### RN-07 — Conservación de registros históricos

La modificación o retiro de productos no deberá destruir la información necesaria para interpretar los pedidos anteriores.

### RN-08 — Validación del lado seguro

Las operaciones que afecten credenciales, permisos, productos y pedidos deberán validarse en los componentes responsables del procesamiento seguro de las solicitudes.

### RN-09 — Coherencia de la información comercial

Antes de registrar un pedido, el sistema deberá verificar que las cantidades, precios y condiciones aplicables siguen siendo válidos.

Cuando exista una modificación comercial relevante, el cliente deberá disponer de la información necesaria para revisarla antes de confirmar.

### RN-10 — Prevención de duplicaciones involuntarias

Las operaciones críticas deberán considerar situaciones como solicitudes repetidas, demoras de comunicación o notificaciones duplicadas.

La implementación deberá evitar duplicaciones inconsistentes de pedidos y pagos.

### RN-11 — Estados controlados

Los cambios de estado de pedidos y pagos deberán respetar las transiciones permitidas.

No se permitirán modificaciones arbitrarias que contradigan el historial de la operación.

### RN-12 — Publicación y retiro de productos

La disponibilidad pública de un producto deberá responder a reglas definidas.

Retirar un producto de la oferta no deberá comprometer la información histórica de las compras.

### 8.1. Reglas comerciales complementarias aprobadas

**RN-13 — Carrito del visitante:** consulta y adición sin registro; al autenticarse se conserva y concilia con el carrito de la cuenta, recalculando precios y cantidades válidas.

**RN-14 — Reserva y pago:** el carrito no reserva existencias. Cuando se confirma un pedido válido y se inicia el pago, se reserva stock temporalmente. La confirmación de venta exige pago verificado; reservas caducadas y pagos tardíos requieren conciliación para evitar sobreventas o cobros inconsistentes.

**RN-15 — Estados del pedido:** pendiente de pago → confirmado → en preparación → enviado → entregado. Cancelado es una salida permitida según reglas de negocio y derechos aplicables; transiciones excepcionales y devoluciones requieren procedimiento definido. Los estados de pago son independientes.

**RN-16 — Entregas:** domicilio con cobertura prevista en Colombia, sujeta a cobertura real. Datos mínimos de destinatario, teléfono, departamento, municipio y dirección; datos complementarios opcionales. Conservar los datos históricos. Sin cotización de envío válida no se habilita el pago.

**RN-17 — Operación administrativa:** el administrador registra transportadora y guía, verifica entrega antes de marcar *Entregado* y no modifica artículos, cantidades ni precios de pedidos pagados. Cancelaciones solicitadas mediante contacto con la empresa.

**RN-18 — Catálogo e inventario:** agotado (stock cero) visible sin compra; desactivado no visible públicamente. Reposición reactiva disponibilidad si el producto continúa publicado.

**RN-19 — Reintentos de pago:** se permite reintentar sobre el mismo pedido cuando no haya pago confirmado o en proceso incompatible, siempre dentro de la validez de la reserva. Se deben impedir dobles cobros.

Las reglas técnicas del vencimiento, conciliación de pagos tardíos, cancelaciones posteriores al pago y selección del proveedor siguen pendientes.

## 9. Decisiones pendientes que afectan los procesos

Las siguientes cuestiones requieren definición antes de completar los diseños e implementaciones correspondientes.

| Referencia | Aspecto | Impacto |
|---|---|---|
| PEN-2026-11-003 | Carrito de visitantes | CU-006, CU-007 y proceso de compra |
| PEN-2026-11-004 | Datos y estados de pedidos | CU-008, CU-009, CU-013 |
| PEN-2026-11-005 | Disponibilidad e inventario | CU-005 a CU-008 y CU-010 a CU-012 |
| PEN-2026-11-006 | Direcciones y entregas | CU-008 y CU-013 |
| PEN-2026-11-008 | Pagos en línea | CU-014 y proceso de compra |
| PEN-2026-11-009 | Gestión del perfil | Procesos de cuenta |
| PEN-2026-11-010 | Facturación | Proceso comercial y documentos asociados |

Las referencias abreviadas `CU-006` a `CU-014` utilizadas en esta tabla corresponden a los casos registrados en noviembre de 2026. Los identificadores oficiales son los completos.

### 9.1. Consideraciones específicas

**Carrito de visitantes:** aprobado para uso sin cuenta; el contenido se conservará y conciliará al autenticarse. Pendiente el mecanismo técnico.

**Inventario:** la reserva temporal está aprobada. Faltan su duración, el mecanismo de concurrencia y la conciliación de pagos tardíos.

**Pedidos:** los seis estados comerciales están aprobados. Faltan las reglas de transición excepcionales.

**Entregas:** están aprobados el domicilio y los datos mínimos. Faltan transportadoras, tarifas reales y cobertura efectiva.

**Productos:** los agotados permanecerán visibles sin permitir compras. Los desactivados dejarán de mostrarse en el catálogo público. Falta concretar la implementación física de esta diferencia.

**Pagos:** si la integración se incorpora, deben documentarse los resultados posibles y las operaciones de verificación.

Estas decisiones se resolverán en coordinación con los requisitos, la arquitectura y el modelo de datos, sin introducir supuestos como decisiones aprobadas.

## 10. Diagramas de casos de uso y actividades

### 10.1. Diagrama de casos de uso

El diagrama oficial deberá representar:

**Actores principales:**

- Visitante.
- Cliente.
- Administrador.

**Casos públicos:**

- Registrar cuenta.
- Iniciar sesión.
- Explorar catálogo.
- Consultar producto.

**Casos compartidos por visitantes y clientes:**

- Agregar producto al carrito.
- Consultar y modificar carrito.

**Casos del cliente:**

- Cerrar sesión.
- Confirmar pedido.
- Consultar pedidos propios.

**Casos administrativos:**

- Registrar producto.
- Modificar producto.
- Retirar producto.
- Consultar y gestionar pedidos.

**Caso condicionado:**

- Realizar pago en línea.

Los servicios externos se incluirán únicamente cuando estén definidos.

No se representará al sistema como actor de sus propios casos de uso.

Las relaciones `include` y `extend` se utilizarán solo cuando representen reutilización obligatoria o extensión condicional real de un comportamiento.

No deberán emplearse para dibujar simplemente el orden de las pantallas.

### 10.2. Diagramas de actividades

Se priorizarán los diagramas de los procesos con mayor número de decisiones y escenarios alternativos:

1. Registro y autenticación.
2. Gestión del carrito.
3. Confirmación de pedidos.
4. Administración de productos.
5. Gestión de pedidos.
6. Pago electrónico, si se aprueba.

Los diagramas deberán respetar los flujos definidos en los casos de uso.

En particular, las decisiones sobre autenticación, disponibilidad y validaciones deberán mostrar sus condiciones correctamente.

No se incorporarán pasos como verificación de correo, bloqueo de cuentas o pagos automáticos sin una especificación aprobada.

### 10.3. Control de consistencia

Cada diagrama deberá indicar el proceso representado y su versión.

Cuando se modifique una regla de negocio, se revisarán los casos y diagramas que dependan de ella.

Los diagramas no constituirán una segunda fuente independiente de requisitos.

## 11. Relación con otros documentos

**Documento 00 — Dirección del Proyecto**

Define el alcance, las decisiones aprobadas y las cuestiones pendientes.

**Documento 01 — Requisitos y Backlog**

Establece las funcionalidades, historias de usuario y criterios de aceptación que los procesos deben satisfacer.

**Documento 03 — Arquitectura Técnica**

Definirá los componentes responsables de implementar los comportamientos descritos.

**Documento 04 — Modelo de Datos**

Representará las entidades, relaciones y restricciones necesarias para almacenar la información de los procesos.

**Documento 05 — Diseño de Interfaces**

Definirá cómo se presentan las interacciones a los usuarios.

**Documento 07 — Implementación y Calidad**

Permitirá verificar los procesos mediante pruebas, resultados y evidencias.

Cuando exista una contradicción, deberá resolverse a través del procedimiento de control de cambios del proyecto.

## 12. Criterios de validación de procesos

Un proceso podrá considerarse correctamente especificado cuando:

1. Su objetivo y actor principal estén identificados.
2. Las precondiciones sean coherentes con el alcance.
3. El flujo principal describa un resultado funcional completo.
4. Los escenarios alternativos relevantes estén contemplados.
5. Las operaciones restringidas tengan controles de autorización.
6. Las reglas comerciales aplicables estén identificadas.
7. Los errores no produzcan confirmaciones falsas o estados inconsistentes.
8. Las postcondiciones sean verificables.
9. Exista correspondencia con los requisitos e historias relacionados.
10. No se hayan incorporado decisiones técnicas o comerciales no aprobadas como hechos.

La validación de esta especificación no equivale a la validación de su implementación.

Los resultados de ejecución se registrarán posteriormente en la documentación de calidad.

## 13. Mantenimiento del documento

Este documento deberá revisarse cuando:

- Cambien los requisitos funcionales.
- Se apruebe una regla de negocio pendiente.
- Se modifiquen actores o permisos.
- Se definan nuevos estados o transiciones.
- Se incorporen pagos en línea.
- La revisión del código identifique comportamientos existentes que deban conservarse o corregirse.
- Las pruebas revelen inconsistencias en los flujos descritos.

Las modificaciones que alteren el alcance o las decisiones aprobadas requerirán autorización conforme al Documento 00.

## 14. Consideraciones finales

Los procesos y casos de uso descritos establecen el comportamiento esperado de las funcionalidades principales de Tazza Du Vita.

La primera versión priorizará los recorridos necesarios para consultar productos, gestionar compras y administrar las operaciones comerciales.

Las reglas pendientes deberán resolverse antes de implementar las partes del sistema que dependan de ellas.

La documentación mantendrá una separación entre los procesos del negocio, el diseño técnico y la evidencia de implementación, evitando que una propuesta o un prototipo se interprete como funcionalidad terminada.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| 1.2 | 27/11/2026 | Correciones de consistencia documental
| 1.1 | 24/11/2026 | Actualización tras el diagnóstico del repositorio y acuerdos sobre tecnologías, navegación y proceso comercial. |
| 1.0 | 23/11/2026 | Creación del documento rector a partir de la revisión documental y las decisiones iniciales de alcance. |

**Próxima revisión prevista:** después de verificar la copia local del repositorio y concretar el backlog técnico, los contratos API y las reglas pendientes de implementación.