# 04 — Modelo de Datos

**Proyecto:** Tazza Du Vita
**Tipo:** Aplicación web de comercio electrónico
**Versión del documento:** 1.0
**Fecha de creación:** 23 de noviembre de 2026
**Estado:** Modelo conceptual y lógico preliminar, pendiente de aprobación y contraste con el código actual
**Documentos de referencia:** 00 — Dirección del Proyecto; 01 — Requisitos y Backlog; 02 — Procesos y Casos de Uso; 03 — Arquitectura Técnica
**Responsable de las decisiones:** Responsable del proyecto

---

## 1. Propósito del documento

Este documento establece el modelo de datos propuesto para la primera versión de Tazza Du Vita.

Su finalidad es identificar la información que necesita almacenar el sistema, definir las entidades principales, establecer sus relaciones y documentar las reglas necesarias para conservar la integridad de los datos.

El modelo toma como referencia los procesos de registro, autenticación, catálogo, carrito, pedidos y administración establecidos en los documentos anteriores.

La documentación histórica del proyecto incluía modelos conceptuales, relacionales y un script SQL con inconsistencias en las cardinalidades, las restricciones y la conservación de información comercial. Esta versión busca corregir esos problemas mediante un diseño coherente con el alcance aprobado.

No se considera un esquema físico definitivo ni autoriza la creación de tablas sin la revisión técnica correspondiente.

## 2. Alcance del modelo

### 2.1. Información incluida

El modelo deberá permitir gestionar:

- Cuentas de usuarios y sus roles.
- Productos e información comercial.
- Disponibilidad y existencias.
- Carritos y sus artículos.
- Pedidos y sus detalles.
- Información histórica de las compras.
- Estados de pedidos.
- Información necesaria para su administración.

La persistencia de estos datos deberá ser centralizada y estar protegida mediante las reglas de acceso correspondientes.

### 2.2. Información condicionada

Se contempla una posible entidad de pagos para registrar intentos, resultados y referencias de transacciones electrónicas.

Su incorporación al esquema de la V1 dependerá de la decisión sobre la pasarela de pagos.

### 2.3. Información excluida de la V1

No se modelarán como entidades obligatorias:

- Suscripciones mensuales.
- Renovaciones automáticas.
- Talleres y eventos.
- Inscripciones y asistencia.
- Programas avanzados de fidelización.
- Reportes analíticos persistidos.
- Facturación electrónica como módulo independiente.

Estas funcionalidades podrán incorporarse posteriormente mediante una ampliación del modelo.

## 3. Criterios de diseño

### 3.1. Integridad referencial

Las relaciones entre entidades deberán impedir referencias inválidas y conservar la coherencia de los datos.

Se utilizarán claves primarias, claves foráneas y restricciones apropiadas según el motor seleccionado.

### 3.2. Conservación histórica

Los pedidos deberán conservar la información necesaria para representar correctamente una compra, incluso si posteriormente cambian los precios o datos del catálogo.

La eliminación o modificación de productos no deberá destruir los registros históricos.

### 3.3. Control de redundancia

Se evitará almacenar datos calculables cuando su persistencia no aporte un beneficio justificado.

Cuando se almacenen valores derivados, deberá documentarse su finalidad y cómo se garantiza su consistencia.

### 3.4. Seguridad

El almacenamiento deberá proteger las credenciales y los datos personales.

Las contraseñas no se conservarán en texto plano.

Los permisos y las validaciones deberán aplicarse desde los componentes seguros del sistema, además de las restricciones de la base de datos.

### 3.5. Simplicidad y evolución

El modelo incluirá las entidades necesarias para la V1 sin incorporar anticipadamente toda la estructura de las funcionalidades futuras.

Se favorecerá un diseño que pueda ampliarse mediante cambios controlados cuando existan nuevas necesidades.

## 4. Entidades principales

Las entidades siguientes constituyen la propuesta inicial del modelo lógico.

Los atributos se presentan con nombres conceptuales. Sus tipos físicos, longitudes y restricciones específicas se definirán posteriormente.

### 4.1. Usuario

Representa las cuentas registradas en Tazza Du Vita.

| Atributo | Descripción |
|---|---|
| idUsuario | Identificador único |
| nombreCompleto | Nombre del usuario |
| correoElectronico | Correo utilizado como identificador de acceso |
| telefono | Información de contacto, si corresponde |
| passwordHash | Resultado seguro del procesamiento de la contraseña |
| rol | Permisos generales de la cuenta |
| estadoCuenta | Condición de acceso de la cuenta |
| fechaRegistro | Fecha de creación |

**Reglas iniciales:**

- Cada usuario tendrá un identificador único.
- El correo utilizado para autenticación deberá ser único según la política de normalización definida.
- Las contraseñas deberán almacenarse mediante hash seguro.
- Los roles iniciales serán cliente y administrador.
- Las cuentas públicas no podrán asignarse automáticamente privilegios administrativos.

**Pendientes:** campos obligatorios definitivos, verificación de correo, estados de cuenta y recuperación de contraseña.

### 4.2. Producto

Representa los artículos comercializados por Tazza Du Vita.

| Atributo | Descripción |
|---|---|
| idProducto | Identificador único |
| nombre | Nombre comercial |
| descripcion | Información del producto |
| precio | Precio vigente |
| stock | Cantidad disponible, según la política de inventario |
| imagenReferencia | Referencia a la imagen principal |
| estadoPublicacion | Indica si puede ofrecerse públicamente |
| fechaCreacion | Fecha de registro |
| fechaActualizacion | Última actualización |

**Reglas iniciales:**

- El precio no podrá ser negativo.
- Las existencias no podrán ser negativas.
- Un producto no deberá ofrecerse para compra si no cumple las condiciones de disponibilidad.
- Retirar un producto de la oferta no implicará necesariamente eliminarlo de la base de datos.
- Modificar su precio no deberá alterar pedidos históricos.

**Pendientes:** categorías, múltiples imágenes, identificadores comerciales, tratamiento de agotados y política definitiva de inventario.

### 4.3. Carrito

Representa una selección de productos preparada para una posible compra.

| Atributo | Descripción |
|---|---|
| idCarrito | Identificador único |
| idUsuario | Usuario propietario |
| fechaCreacion | Fecha de creación |
| fechaActualizacion | Última modificación |

Se propone inicialmente un carrito persistente por usuario.

Sin embargo, esta cardinalidad no se considerará aprobada hasta resolver PEN-2026-11-003.

No se incorpora `cantidadProductos` como atributo obligatorio porque su valor puede calcularse a partir de los detalles.

### 4.4. DetalleCarrito

Representa cada producto incorporado al carrito y su cantidad.

| Atributo | Descripción |
|---|---|
| idDetalleCarrito | Identificador único |
| idCarrito | Carrito al que pertenece |
| idProducto | Producto seleccionado |
| cantidad | Cantidad solicitada |

**Reglas iniciales:**

- La cantidad deberá ser mayor que cero.
- El detalle deberá pertenecer a un carrito existente.
- El producto deberá existir.
- Se propone evitar múltiples registros del mismo producto dentro de un mismo carrito.
- Los precios deberán verificarse nuevamente antes de registrar el pedido.

El carrito no conservará automáticamente un precio histórico de compra. Ese valor corresponderá al pedido confirmado.

### 4.5. Pedido

Representa una solicitud de compra registrada por un cliente.

| Atributo | Descripción |
|---|---|
| idPedido | Identificador único |
| idUsuario | Cliente propietario |
| fechaPedido | Fecha del registro |
| estadoPedido | Estado comercial |
| subtotal | Valor de los productos antes de ajustes adicionales |
| totalPedido | Valor total confirmado |
| observaciones | Información complementaria, si corresponde |

El total podrá necesitar otros componentes, como descuentos o costos de entrega, si se aprueban esas funcionalidades.

**Reglas iniciales:**

- Cada pedido pertenecerá a un usuario.
- Deberá contener al menos un detalle válido al quedar confirmado.
- Sus importes deberán calcularse mediante mecanismos confiables.
- Los cambios de estado deberán respetar transiciones autorizadas.
- Registrar un pedido no implica que esté pagado.

**Pendientes:** estados definitivos, datos de entrega, impuestos aplicables, costos adicionales y comportamiento ante cancelaciones.

### 4.6. DetallePedido

Representa los productos y valores registrados dentro de un pedido.

| Atributo | Descripción |
|---|---|
| idDetallePedido | Identificador único |
| idPedido | Pedido propietario |
| idProducto | Referencia al producto |
| nombreProducto | Nombre comercial registrado al confirmar |
| cantidad | Cantidad comprada |
| precioUnitario | Precio unitario histórico |
| subtotal | Importe correspondiente al detalle |

**Reglas iniciales:**

- La cantidad deberá ser mayor que cero.
- El precio unitario no podrá ser negativo.
- Cada detalle deberá pertenecer a un pedido válido.
- El subtotal deberá corresponder a las reglas de cálculo aprobadas.
- La referencia al producto no deberá impedir conservar el historial cuando el artículo deje de comercializarse.

Se propone conservar también `nombreProducto` para evitar que un cambio posterior de nombre altere la identificación histórica del artículo.

Los valores monetarios deberán almacenarse mediante tipos numéricos exactos apropiados. No se utilizarán tipos de coma flotante binaria para representar importes comerciales.

### 4.7. Pago

**Clasificación:** Entidad condicionada.

Representa intentos u operaciones de pago asociados con un pedido.

| Atributo | Descripción |
|---|---|
| idPago | Identificador único |
| idPedido | Pedido relacionado |
| referenciaExterna | Identificador del proveedor |
| monto | Importe de la operación |
| estadoPago | Estado de la transacción |
| proveedor | Servicio utilizado |
| fechaCreacion | Fecha de registro |
| fechaActualizacion | Última actualización |

**Reglas propuestas:**

- Cada registro de pago estará asociado con un pedido.
- Un pedido podrá tener varios intentos de pago.
- Un intento rechazado no deberá registrarse como aprobado.
- Las referencias externas deberán permitir identificar las operaciones recibidas del proveedor.
- Las notificaciones duplicadas no deberán producir cambios inconsistentes.

El tratamiento de pagos parciales, reembolsos y múltiples pagos aprobados se definirá si se incorpora la integración.

No se implementará esta tabla únicamente para simular pagos.

## 5. Relaciones y cardinalidades

Las relaciones conceptuales iniciales se describen a continuación.

| Relación | Cardinalidad propuesta | Interpretación |
|---|---|---|
| Usuario–Pedido | 1:N | Un usuario puede tener varios pedidos; cada pedido pertenece a un usuario |
| Pedido–DetallePedido | 1:N | Un pedido confirmado contiene uno o más detalles |
| Producto–DetallePedido | 1:N | Un producto puede aparecer en múltiples detalles históricos |
| Carrito–DetalleCarrito | 1:N | Un carrito puede tener varios artículos |
| Producto–DetalleCarrito | 1:N | Un producto puede aparecer en carritos distintos |
| Usuario–Carrito | Pendiente | Se propone un carrito persistente por usuario |
| Pedido–Pago | 1:N, condicionada | Un pedido puede registrar varios intentos de pago |

En las relaciones 1:N, la entidad del lado «uno» puede no tener todavía registros relacionados. Por ejemplo, un usuario recién creado puede tener cero pedidos y un carrito puede encontrarse vacío.

Cada detalle, en cambio, debe pertenecer a su entidad principal.

En el modelo lógico deberá especificarse la participación mínima y máxima de cada extremo para evitar interpretaciones ambiguas.

### 5.1. Relación Usuario–Carrito

La documentación original presentaba una relación 1:1, pero el SQL histórico permitía múltiples carritos para un usuario.

Se propone resolverlo mediante una regla de unicidad si finalmente se aprueba un único carrito persistente por usuario.

No se implementará esa restricción hasta definir el comportamiento de carritos temporales y autenticados.

### 5.2. Relación Pedido–DetallePedido

El pedido y sus detalles forman una unidad comercial.

La base de datos deberá impedir detalles sin pedido y los procesos de negocio deberán evitar confirmar pedidos vacíos.

Una clave foránea por sí sola no garantiza que un pedido tenga al menos un detalle. Esa condición deberá controlarse durante la operación de confirmación.

### 5.3. Relación Pedido–Pago

La relación solo se incorporará si se implementan pagos en línea o se aprueba una necesidad real de registrar pagos por otros medios.

No se adoptará una cardinalidad 1:1 obligatoria porque pueden producirse intentos rechazados y posteriores reintentos.

## 6. Restricciones de integridad

### 6.1. Integridad de identidad

Cada entidad deberá disponer de una clave primaria.

Las claves deberán permitir identificar registros de forma estable.

### 6.2. Integridad referencial

Las relaciones deberán establecerse mediante claves foráneas cuando corresponda.

No se permitirán referencias a usuarios, productos, pedidos o carritos inexistentes.

### 6.3. Restricciones de unicidad

Se deberá garantizar la unicidad de los identificadores de acceso que así lo requieran.

También se propone impedir la duplicación del mismo producto dentro de un carrito mediante una restricción compuesta sobre carrito y producto.

Las reglas de unicidad adicionales dependerán del diseño aprobado.

### 6.4. Restricciones numéricas

Se establecerán restricciones para impedir:

- Precios negativos.
- Existencias negativas.
- Cantidades de compra menores o iguales a cero.
- Importes comerciales negativos cuando no estén justificados por la naturaleza de la operación.

Estas restricciones deberán complementarse con validaciones de negocio.

### 6.5. Valores obligatorios

Los campos necesarios para identificar entidades y establecer relaciones deberán impedir valores nulos injustificados.

La selección definitiva de atributos `NOT NULL` dependerá de los formularios y procesos aprobados.

### 6.6. Eliminación y actualización

Las políticas de eliminación deberán proteger los registros históricos.

No se utilizarán eliminaciones en cascada sobre pedidos y detalles sin evaluar sus consecuencias.

La desactivación de productos se considera una alternativa preferible a eliminarlos físicamente cuando existen referencias comerciales.

## 7. Normalización y datos derivados

### 7.1. Criterio general

El modelo buscará reducir redundancias y dependencias innecesarias.

Se evaluará el cumplimiento de las formas normales correspondientes a partir de las claves y dependencias funcionales de cada entidad.

No se declarará que el esquema cumple completamente la tercera forma normal sin un análisis documentado.

### 7.2. Datos derivados

Algunos datos pueden obtenerse mediante cálculos.

Ejemplos:

- Número de artículos del carrito.
- Importe total del carrito.
- Subtotal de un detalle.
- Total de un pedido.

No todos requieren almacenamiento permanente.

### 7.3. Excepciones justificadas

Los pedidos representan registros históricos, por lo que conservar precios, nombres comerciales y valores finales puede ser necesario aunque existan datos semejantes en el catálogo.

Esta duplicación controlada responde a la necesidad de preservar el contenido de una transacción en un momento específico.

Los valores históricos deberán mantenerse coherentes mediante reglas de cálculo y almacenamiento definidas.

### 7.4. Decisiones sobre totales

Se propone calcular dinámicamente los totales del carrito y conservar los importes confirmados del pedido.

La composición exacta del total dependerá de las decisiones sobre descuentos, impuestos y entregas.

## 8. Gestión del inventario

El inventario es una de las áreas que requieren mayor precisión antes de implementar la base de datos.

### 8.1. Existencias disponibles

El atributo `stock` representa inicialmente una cantidad de existencias.

Sin embargo, todavía no se ha definido si corresponderá a unidades físicas, unidades disponibles para venta o cantidades después de reservas.

### 8.2. Carrito e inventario

Agregar productos al carrito no deberá interpretarse automáticamente como una reducción definitiva del stock.

La reserva de existencias necesitará una regla de negocio aprobada.

### 8.3. Confirmación de pedidos

El sistema deberá comprobar nuevamente la disponibilidad antes de confirmar una operación.

Cuando varios usuarios intenten adquirir las mismas existencias, el backend y la persistencia deberán impedir que las operaciones aceptadas produzcan cantidades inconsistentes.

### 8.4. Cancelaciones

La devolución de existencias ante cancelaciones dependerá del momento en que se descuenten o reserven los productos.

No se establecerá una regla automática hasta definir el proceso comercial.

**Referencia pendiente:** PEN-2026-11-005.

## 9. Estados de pedidos y pagos

### 9.1. Estado del pedido

El estado del pedido deberá representar su situación dentro del proceso comercial.

Se podrán evaluar estados como pendiente, confirmado, cancelado y completado, pero estos valores son propuestas y todavía no constituyen un catálogo aprobado.

### 9.2. Estado del pago

Si se incorpora el módulo de pagos, sus estados representarán el resultado financiero.

Entre los valores posibles se encuentran pendiente, aprobado, rechazado y reembolsado, sujetos a las características del proveedor seleccionado.

### 9.3. Independencia de estados

Un pedido puede existir sin un pago confirmado.

Por tanto, no se deberán utilizar los mismos atributos para representar indiscriminadamente la situación comercial y financiera.

Las transiciones se definirán en el Documento 02 y se implementarán mediante validaciones y restricciones apropiadas.

## 10. Información de entrega y facturación

### 10.1. Entregas

La confirmación de pedidos podría requerir datos como destinatario, dirección, ciudad, teléfono de contacto y observaciones.

Sin embargo, todavía no se ha definido si Tazza Du Vita utilizará envíos a domicilio, recogida u otras modalidades.

Por ese motivo, no se incorpora aún una entidad obligatoria de direcciones.

Cuando se defina el procedimiento, deberá evaluarse si conviene guardar la dirección utilizada directamente como información histórica del pedido o mediante una estructura complementaria.

No se deberá depender únicamente de una dirección editable del perfil para reconstruir una entrega pasada.

### 10.2. Facturación

La factura electrónica y la confirmación de pedido son documentos diferentes.

La V1 requiere conservar pedidos e informar correctamente su registro, pero no se ha aprobado un módulo completo de facturación electrónica.

Su eventual incorporación deberá responder a las obligaciones aplicables y a los requisitos técnicos correspondientes.

**Referencias pendientes:** PEN-2026-11-006 y PEN-2026-11-010.

## 11. Seguridad y protección de datos

### 11.1. Credenciales

Se almacenarán hashes de contraseñas y no contraseñas originales.

Las configuraciones necesarias dependerán del mecanismo de autenticación aprobado.

### 11.2. Datos personales

La información de usuarios y pedidos deberá estar protegida conforme a sus necesidades de confidencialidad y a las obligaciones aplicables.

No se almacenarán datos personales que no resulten necesarios para las funcionalidades aprobadas.

### 11.3. Permisos

La existencia de un atributo `rol` no reemplaza la verificación de permisos en el backend.

Las consultas y modificaciones deberán ejecutarse con los controles correspondientes.

### 11.4. Datos de pago

Si se utiliza un proveedor de pagos, el sistema deberá limitar el almacenamiento a la información necesaria para identificar y verificar las operaciones.

No se propone almacenar números completos de tarjetas, códigos de seguridad u otros datos sensibles de instrumentos de pago.

## 12. Diseño físico y script SQL

### 12.1. Estado

El diseño físico permanece pendiente.

No se dispone todavía de una decisión aprobada sobre el motor de base de datos.

### 12.2. Elementos por definir

Una vez seleccionada la tecnología, deberán especificarse:

- Tipos de datos.
- Longitudes y precisión.
- Claves primarias.
- Claves foráneas.
- Restricciones `UNIQUE`.
- Restricciones `CHECK`.
- Valores obligatorios.
- Índices.
- Políticas de actualización y eliminación.
- Transacciones.
- Estrategia de migraciones.

### 12.3. Script SQL histórico

El archivo `DB_TazzaDuVita_Entidades.sql` se conservará como antecedente del diseño anterior.

No deberá ejecutarse como esquema oficial sin aplicar y verificar las correcciones correspondientes.

### 12.4. Artefactos técnicos futuros

El modelo definitivo podrá complementarse con:

- Diagrama entidad-relación.
- Diccionario físico de datos.
- Script de creación de estructuras.
- Migraciones versionadas.
- Datos de prueba.
- Pruebas de restricciones e integridad.

Estos recursos podrán mantenerse asociados al documento sin duplicar todas sus definiciones en el texto principal.

## 13. Relación con los requisitos

| Entidad | Requisitos principales |
|---|---|
| Usuario | RF-2026-11-001 a RF-2026-11-004 |
| Producto | RF-2026-11-005, RF-2026-11-006 y RF-2026-11-010 |
| Carrito | RF-2026-11-007 |
| DetalleCarrito | RF-2026-11-007 |
| Pedido | RF-2026-11-008, RF-2026-11-009 y RF-2026-11-011 |
| DetallePedido | RF-2026-11-008 y RF-2026-11-009 |
| Pago | RF-2026-11-012, condicionado |

Las relaciones definitivas deberán conservar la trazabilidad con los procesos definidos en el Documento 02.

## 14. Decisiones pendientes del modelo

| Referencia | Asunto | Consecuencia principal |
|---|---|---|
| PEN-2026-11-002 | Motor de base de datos | Determina tipos, restricciones y SQL |
| PEN-2026-11-003 | Carrito de visitantes | Afecta propiedad y persistencia |
| PEN-2026-11-004 | Estados y datos de pedidos | Afecta atributos y validaciones |
| PEN-2026-11-005 | Inventario | Afecta disponibilidad y transacciones |
| PEN-2026-11-006 | Entregas | Afecta datos del pedido |
| PEN-2026-11-008 | Pagos en línea | Determina incorporación de Pago |
| PEN-2026-11-009 | Perfil de usuario | Puede añadir atributos |
| PEN-2026-11-010 | Facturación | Puede requerir entidades adicionales |

También deberán resolverse antes del esquema físico:

- Política de retiro de productos.
- Necesidad de categorías.
- Manejo de imágenes adicionales.
- Tratamiento de descuentos e impuestos.
- Reglas para modificaciones y cancelaciones de pedidos.

No todas estas decisiones necesitan resolverse simultáneamente.

## 15. Criterios de validación del modelo

El modelo podrá considerarse listo para su implementación cuando:

1. Las entidades correspondan al alcance aprobado.
2. Los atributos obligatorios estén definidos.
3. Las cardinalidades sean coherentes con los procesos.
4. Las claves y restricciones estén especificadas.
5. Se hayan establecido las reglas de inventario.
6. Los pedidos conserven información histórica suficiente.
7. Estén definidos los estados y sus transiciones.
8. Se haya revisado la normalización.
9. El diseño físico sea compatible con el motor seleccionado.
10. El esquema haya sido contrastado con el código y los requisitos vigentes.

Posteriormente se deberán ejecutar pruebas que comprueben las restricciones y operaciones de persistencia.

## 16. Mantenimiento y evolución

Este documento se actualizará cuando:

- Se apruebe el motor de base de datos.
- Se definan las reglas pendientes.
- Se incorporen nuevas entidades.
- Se modifiquen relaciones o cardinalidades.
- Se identifiquen necesidades derivadas del código actual.
- Se aprueben funcionalidades posteriores.
- Se detecten inconsistencias durante las pruebas.

Los cambios deberán mantener coherencia con los Documentos 00, 01, 02 y 03.

Cuando una modificación afecte requisitos o procesos, deberá actualizarse también la documentación correspondiente.

Las migraciones necesarias para aplicar cambios sobre una base de datos existente se documentarán durante la implementación.

## 17. Consideraciones finales

El modelo de datos propuesto establece las entidades y relaciones necesarias para desarrollar las funcionalidades comerciales principales de Tazza Du Vita.

Se prioriza la integridad de la información, la conservación de pedidos históricos, la seguridad y la simplicidad del diseño.

Las entidades del sistema original se han revisado para eliminar dependencias de funcionalidades aplazadas y corregir inconsistencias relevantes.

El modelo se encuentra en una etapa conceptual y lógica preliminar. Su estructura definitiva dependerá de las decisiones de negocio pendientes, de la selección tecnológica y del diagnóstico del código actual.

El objetivo no es reproducir automáticamente el SQL histórico, sino construir un esquema coherente con el funcionamiento real de la primera versión.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| 1.0 | 23/11/2026 | Consolidación inicial del modelo conceptual y lógico de datos, entidades, relaciones, restricciones y decisiones pendientes de la V1. |

**Próxima revisión prevista:** después de definir las reglas de carrito, pedidos, inventario y entrega, seleccionar el motor de base de datos y contrastar el modelo con el código actualizado.