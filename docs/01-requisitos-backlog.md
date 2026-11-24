# 01 — Requisitos y Backlog

**Proyecto:** Tazza Du Vita
**Tipo:** Aplicación web de comercio electrónico
**Versión del documento:** 1.0
**Fecha de creación:** 23 de noviembre de 2026
**Estado:** Especificación inicial de la V1, pendiente de contraste con el código actual
**Documento de referencia:** 00 — Dirección del Proyecto
**Responsable de las decisiones:** Responsable del proyecto

---

## 1. Propósito del documento

Este documento establece los requisitos funcionales y no funcionales de Tazza Du Vita, las historias de usuario, sus criterios de aceptación y el backlog inicial de desarrollo.

Su finalidad es definir las capacidades que deberá ofrecer la primera versión del sistema y establecer condiciones que permitan comprobar su funcionamiento.

La información se basa en las decisiones registradas en el Documento 00 y en la revisión de la documentación histórica del proyecto.

Los requisitos aquí establecidos representan el comportamiento esperado del sistema, no necesariamente funcionalidades que ya se encuentren implementadas.

Las decisiones que dependan de información técnica todavía no verificada permanecerán identificadas como pendientes.

## 2. Alcance y criterios de interpretación

### 2.1. Alcance funcional

La primera versión de Tazza Du Vita estará orientada a una tienda virtual que permita:

- Registrar y autenticar usuarios.
- Consultar productos e información del catálogo.
- Administrar un carrito de compras.
- Confirmar y registrar pedidos.
- Consultar los pedidos registrados.
- Administrar productos.
- Consultar y gestionar pedidos desde el área administrativa.
- Proteger las operaciones según los permisos correspondientes.

El sistema deberá ofrecer una interfaz adaptable a diferentes dispositivos.

La integración de pagos en línea permanecerá condicionada a su viabilidad técnica y al tiempo disponible.

Las suscripciones, talleres, eventos y demás funcionalidades complementarias no forman parte del alcance obligatorio de la V1.

### 2.2. Clasificación de requisitos

Se utilizarán las siguientes categorías:

**Obligatorio:** necesario para completar el alcance aprobado de la V1.

**Condicionado:** podrá implementarse si se cumplen las condiciones establecidas para su incorporación.

**Futuro:** corresponde a una etapa posterior y no forma parte de la entrega obligatoria.

**Pendiente de definición:** aspecto cuyo comportamiento detallado requiere una decisión adicional.

Estas categorías no deben confundirse con el estado de implementación. Un requisito obligatorio puede encontrarse pendiente de desarrollo.

### 2.3. Identificadores

Los elementos de este documento tendrán identificadores permanentes.

| Prefijo | Significado | Ejemplo |
|---|---|---|
| RF | Requisito funcional | RF-2026-11-001 |
| RNF | Requisito no funcional | RNF-2026-11-001 |
| HU | Historia de usuario | HU-2026-11-001 |

El formato general será `TIPO-AAAA-MM-NNN`.

El año y el mes corresponden a la creación del registro. El consecutivo será único dentro de cada tipo y mes.

Los identificadores no se reutilizarán ni cambiarán cuando un requisito sea actualizado.

Si un requisito se divide, sustituye o elimina, deberá quedar constancia de la modificación y de sus relaciones con los demás elementos.

### 2.4. Trazabilidad

Cada historia de usuario deberá relacionarse con al menos un requisito funcional.

Cuando corresponda, también se vinculará con los requisitos no funcionales, casos de uso y pruebas.

El documento 07 registrará las evidencias de implementación y verificación. No se duplicarán esos resultados dentro de este documento.

## 3. Actores del sistema

### 3.1. Visitante

Persona que utiliza las funciones públicas de Tazza Du Vita sin haber iniciado sesión.

Podrá consultar el catálogo, revisar productos y acceder a los formularios de registro e inicio de sesión.

El uso del carrito sin autenticación continúa pendiente de definición.

### 3.2. Cliente

Usuario registrado y autenticado que utiliza las funciones comerciales habilitadas para su cuenta.

Podrá administrar su carrito, confirmar pedidos y consultar sus compras conforme a las reglas establecidas.

No tendrá acceso a las operaciones administrativas.

### 3.3. Administrador

Usuario autorizado para gestionar las operaciones administrativas de Tazza Du Vita.

Podrá gestionar productos y consultar o actualizar la información de los pedidos de acuerdo con los permisos establecidos.

La administración no deberá depender únicamente de que una interfaz o un botón permanezca oculto para los clientes.

### 3.4. Sistema

El sistema ejecuta validaciones, procesa operaciones y almacena información.

No se considera un actor externo de sí mismo en los diagramas de casos de uso.

## 4. Requisitos funcionales

### 4.1. Gestión de usuarios y acceso

**RF-2026-11-001 — Registro de usuarios**

**Clasificación:** Obligatorio.

El sistema deberá permitir que una persona cree una cuenta proporcionando los datos requeridos.

Deberá validar la información, comprobar que la cuenta no duplique un identificador de acceso existente y almacenar las credenciales mediante mecanismos seguros.

Ante información inválida, deberá comunicar el problema sin registrar una cuenta incorrecta.

La definición exacta de campos obligatorios se completará durante el diseño de datos y formularios.

**RF-2026-11-002 — Inicio de sesión**

**Clasificación:** Obligatorio.

El sistema deberá permitir que un usuario registrado inicie sesión mediante las credenciales establecidas.

Deberá verificar su autenticidad, establecer una sesión válida y permitir el acceso a las funciones correspondientes a su rol.

Las credenciales incorrectas no deberán permitir el acceso.

**RF-2026-11-003 — Cierre de sesión**

**Clasificación:** Obligatorio.

El sistema deberá permitir que los usuarios autenticados cierren su sesión.

Una vez finalizada, el usuario no deberá conservar acceso autorizado a funciones protegidas mediante la sesión anterior.

**RF-2026-11-004 — Control de roles y permisos**

**Clasificación:** Obligatorio.

El sistema deberá diferenciar los permisos de clientes y administradores.

Las operaciones protegidas deberán comprobar la autorización del usuario antes de ejecutarse.

Un cliente no podrá crear, modificar o eliminar productos ni ejecutar operaciones administrativas restringidas.

### 4.2. Catálogo de productos

**RF-2026-11-005 — Visualización del catálogo**

**Clasificación:** Obligatorio.

El sistema deberá mostrar los productos disponibles para consulta pública.

Cada producto deberá presentar la información definida para el catálogo, incluyendo nombre, precio, descripción e imagen cuando corresponda.

Si no existen productos disponibles para mostrar, la interfaz deberá comunicarlo de manera comprensible.

**RF-2026-11-006 — Consulta de información del producto**

**Clasificación:** Obligatorio.

El sistema deberá permitir consultar la información necesaria para que un usuario evalúe un producto antes de agregarlo al carrito.

La interfaz deberá presentar el precio vigente y la información de disponibilidad conforme a las reglas de negocio definidas.

No deberá presentar productos inexistentes como disponibles para la compra.

### 4.3. Carrito de compras

**RF-2026-11-007 — Gestión del carrito**

**Clasificación:** Obligatorio.

El sistema deberá permitir agregar productos al carrito, consultar su contenido, modificar cantidades y eliminar artículos.

Deberá calcular el resumen de compra utilizando los datos vigentes y las reglas comerciales aplicables.

No deberá aceptar cantidades inválidas ni permitir operaciones contrarias a las reglas de disponibilidad establecidas.

El comportamiento del carrito para visitantes y su persistencia después del inicio de sesión permanecen pendientes de definición.

### 4.4. Pedidos

**RF-2026-11-008 — Confirmación y registro de pedidos**

**Clasificación:** Obligatorio.

El sistema deberá permitir revisar los productos seleccionados y la información requerida antes de confirmar una compra.

Deberá validar los datos necesarios y registrar el pedido con sus productos, cantidades, precios correspondientes y demás información comercial definida.

Cada pedido confirmado deberá contar con un identificador que permita su posterior consulta.

El sistema no deberá registrar como exitoso un pedido cuya operación haya fallado.

La confirmación del pedido no implica necesariamente que se haya realizado un pago.

**RF-2026-11-009 — Consulta de pedidos del cliente**

**Clasificación:** Obligatorio.

El sistema deberá permitir que un cliente autenticado consulte sus pedidos registrados y la información necesaria para reconocerlos y conocer su estado.

No deberá permitir consultar pedidos pertenecientes a otros clientes sin autorización.

### 4.5. Administración

**RF-2026-11-010 — Administración de productos**

**Clasificación:** Obligatorio.

El sistema deberá proporcionar funciones administrativas para registrar, consultar y modificar productos.

También deberá permitir retirar productos de la oferta según las reglas definidas.

La eliminación definitiva de productos que tengan relaciones con pedidos históricos no se asumirá como comportamiento obligatorio; deberá establecerse una política que preserve la integridad de los registros comerciales.

Las operaciones deberán validar la información recibida y restringirse a usuarios autorizados.

**RF-2026-11-011 — Administración de pedidos**

**Clasificación:** Obligatorio.

El sistema deberá permitir que los administradores consulten los pedidos registrados y actualicen la información operativa autorizada.

Las transiciones entre estados deberán respetar las reglas definidas para los pedidos.

Las operaciones administrativas no deberán alterar indebidamente los datos históricos de compra.

### 4.6. Funcionalidad condicionada

**RF-2026-11-012 — Pagos en línea**

**Clasificación:** Condicionado.

Si se aprueba su implementación, el sistema deberá permitir realizar pagos mediante un proveedor autorizado.

La aplicación deberá verificar el resultado del pago mediante mecanismos confiables y registrar su estado de manera coherente con el pedido.

No deberá considerar un pago aprobado únicamente porque el navegador muestre una confirmación o porque el cliente regrese de la página del proveedor.

La selección de la pasarela, los métodos de pago y el manejo de transacciones deberán definirse antes de su implementación.

Si no se incorpora esta funcionalidad en la V1, el sistema deberá contar con un procedimiento de registro y atención de pedidos que no simule pagos exitosos.

## 5. Requisitos no funcionales

Los requisitos no funcionales definen condiciones de calidad, seguridad y funcionamiento aplicables al sistema.

Cuando un criterio necesite una meta numérica, esta deberá establecerse a partir de las condiciones reales de uso, infraestructura y pruebas.

No se asumirán como compromisos vigentes las cifras históricas que carezcan de justificación o verificación.

**RNF-2026-11-001 — Seguridad de credenciales**

Las contraseñas deberán almacenarse mediante un algoritmo de hash de contraseñas apropiado, con las configuraciones de seguridad correspondientes.

No deberán almacenarse ni exponerse contraseñas en texto plano.

**Verificación:** revisión de implementación y pruebas del mecanismo de autenticación y almacenamiento.

**RNF-2026-11-002 — Control de acceso**

Las operaciones protegidas deberán comprobar autenticación y autorización desde los componentes responsables del procesamiento seguro de las solicitudes.

No será suficiente restringir el acceso mediante elementos visuales del frontend.

**Verificación:** pruebas de acceso autorizado y no autorizado.

**RNF-2026-11-003 — Integridad de datos**

El sistema deberá impedir, según las reglas de negocio, registros comerciales inconsistentes, referencias inválidas y modificaciones que comprometan la información histórica de pedidos.

**Verificación:** pruebas de validación, persistencia, restricciones y operaciones relacionadas.

**RNF-2026-11-004 — Adaptabilidad**

La interfaz deberá permitir utilizar las funcionalidades principales desde dispositivos móviles y de escritorio sin perder información o acciones esenciales.

**Verificación:** pruebas de visualización e interacción en los tamaños de pantalla acordados para la V1.

**RNF-2026-11-005 — Usabilidad y accesibilidad**

La interfaz deberá presentar navegación comprensible, formularios identificables, mensajes claros y controles utilizables mediante métodos de interacción habituales.

Se incorporarán criterios de accesibilidad aplicables, como etiquetas de formularios, navegación por teclado, alternativas textuales e indicación de errores.

**Verificación:** revisión funcional y de accesibilidad de las pantallas principales.

El estándar y nivel de conformidad específico se definirán antes de la validación final.

**RNF-2026-11-006 — Rendimiento**

Las operaciones principales deberán ofrecer tiempos de respuesta adecuados para las condiciones previstas de uso.

Las metas cuantitativas se definirán cuando se conozcan la infraestructura, el volumen de información y el entorno de evaluación.

**Verificación:** mediciones en un entorno definido, con condiciones y resultados documentados.

**RNF-2026-11-007 — Mantenibilidad**

El código deberá organizarse de acuerdo con los estándares de desarrollo del proyecto, manteniendo responsabilidades comprensibles y evitando duplicaciones innecesarias.

**Verificación:** revisión de código, estructura y cumplimiento de convenciones.

**RNF-2026-11-008 — Manejo de errores**

El sistema deberá proporcionar respuestas comprensibles ante errores de validación, operaciones fallidas y problemas de disponibilidad de información.

Los mensajes presentados a los usuarios no deberán exponer información sensible ni detalles internos innecesarios.

**Verificación:** ejecución de escenarios negativos y revisión de respuestas.

**RNF-2026-11-009 — Compatibilidad**

La aplicación deberá funcionar en los navegadores y dispositivos definidos como objetivo para la primera versión.

**Verificación:** pruebas de compatibilidad en la matriz de entornos aprobada.

La lista exacta de navegadores y versiones está pendiente de definición.

**RNF-2026-11-010 — Verificabilidad**

Las funcionalidades críticas deberán disponer de criterios de aceptación y casos de prueba que permitan comprobar su comportamiento.

**Verificación:** trazabilidad entre requisitos, historias, pruebas y resultados.

### 5.1. Requisitos no funcionales históricos

La documentación anterior mencionaba, entre otras condiciones, una carga inferior a tres segundos y una disponibilidad del 99,9 %.

Estas cifras permanecerán como antecedentes, no como compromisos aprobados.

Solo podrán incorporarse cuando se definan el alcance de la medición, las condiciones de prueba y los recursos necesarios para cumplirlas.

## 6. Historias de usuario y criterios de aceptación

Las historias describen necesidades concretas de los actores.

Cada una incluye criterios de aceptación iniciales. Estos criterios deberán ajustarse cuando una decisión pendiente afecte directamente su comportamiento.

Los criterios expresan condiciones esperadas y no constituyen evidencia de pruebas ejecutadas.

### HU-2026-11-001 — Registro de cuenta

**Como** visitante,  
**quiero** crear una cuenta,  
**para** acceder a las funciones disponibles para clientes registrados.

**Requisito relacionado:** RF-2026-11-001.

**Criterios de aceptación:**

1. El visitante puede acceder al formulario de registro.
2. El formulario identifica los datos obligatorios.
3. Los datos inválidos producen mensajes comprensibles.
4. No se crean cuentas duplicadas para un mismo identificador de acceso.
5. Una solicitud válida permite registrar la cuenta.
6. Las credenciales se almacenan de manera segura.

### HU-2026-11-002 — Inicio de sesión

**Como** cliente registrado,  
**quiero** iniciar sesión,  
**para** acceder a las funciones autorizadas de mi cuenta.

**Requisito relacionado:** RF-2026-11-002.

**Criterios de aceptación:**

1. El usuario puede introducir sus credenciales.
2. Las credenciales válidas permiten iniciar sesión.
3. Las credenciales incorrectas no permiten el acceso.
4. Los errores se muestran sin revelar información sensible.
5. El usuario obtiene acceso únicamente a las funciones permitidas.

### HU-2026-11-003 — Cierre de sesión

**Como** usuario autenticado,  
**quiero** cerrar mi sesión,  
**para** finalizar el acceso autorizado a mi cuenta desde esa sesión.

**Requisito relacionado:** RF-2026-11-003.

**Criterios de aceptación:**

1. Existe una opción identificable para cerrar sesión.
2. La operación finaliza la sesión correspondiente.
3. Los recursos protegidos no pueden seguir utilizándose con la sesión finalizada.
4. El sistema permite volver a iniciar sesión.

### HU-2026-11-004 — Explorar productos

**Como** visitante o cliente,  
**quiero** consultar el catálogo,  
**para** conocer los productos ofrecidos por Tazza Du Vita.

**Requisitos relacionados:** RF-2026-11-005 y RF-2026-11-006.

**Criterios de aceptación:**

1. El catálogo puede consultarse sin iniciar sesión.
2. Los productos muestran su información principal.
3. Es posible consultar la información necesaria de un producto.
4. Los precios y la disponibilidad corresponden a la información vigente.
5. Si no existen productos para mostrar, aparece un mensaje apropiado.

### HU-2026-11-005 — Agregar productos al carrito

**Como** cliente,  
**quiero** agregar productos al carrito,  
**para** preparar una compra.

**Requisito relacionado:** RF-2026-11-007.

**Criterios de aceptación:**

1. Se puede solicitar la incorporación de un producto permitido al carrito.
2. El producto seleccionado aparece en el carrito.
3. La cantidad registrada corresponde a la operación aceptada.
4. El sistema comunica si un producto no puede agregarse.
5. No se aceptan cantidades inválidas.

**Pendiente:** definir si esta operación también estará disponible para visitantes.

### HU-2026-11-006 — Modificar el carrito

**Como** cliente,  
**quiero** revisar y modificar mi carrito,  
**para** ajustar los productos antes de realizar el pedido.

**Requisito relacionado:** RF-2026-11-007.

**Criterios de aceptación:**

1. El usuario puede consultar el contenido del carrito.
2. Puede modificar cantidades dentro de los límites permitidos.
3. Puede retirar artículos.
4. El resumen de compra se actualiza conforme a los cambios aceptados.
5. Si el carrito queda vacío, se muestra un estado comprensible.

### HU-2026-11-007 — Confirmar un pedido

**Como** cliente,  
**quiero** confirmar los productos que deseo comprar,  
**para** registrar mi pedido en Tazza Du Vita.

**Requisito relacionado:** RF-2026-11-008.

**Criterios de aceptación:**

1. El cliente puede revisar los productos y cantidades seleccionados.
2. El sistema presenta el resumen de la compra y los datos necesarios para confirmarla.
3. Se validan los datos comerciales requeridos.
4. No se permite confirmar un pedido sin productos válidos.
5. Una operación exitosa genera un pedido identificable.
6. El pedido conserva los datos necesarios de la compra.
7. Se informa claramente si el pedido se registró o si ocurrió un error.
8. No se informa que el pedido está pagado sin una confirmación válida de pago.

**Pendiente:** definir datos de entrega, estados y procedimiento de atención de pedidos.

### HU-2026-11-008 — Consultar mis pedidos

**Como** cliente,  
**quiero** consultar mis pedidos registrados,  
**para** revisar sus detalles y conocer su estado.

**Requisito relacionado:** RF-2026-11-009.

**Criterios de aceptación:**

1. El cliente autenticado puede acceder a sus pedidos.
2. Cada pedido muestra la información principal definida.
3. El cliente puede consultar el detalle de un pedido propio.
4. No puede acceder a pedidos de otros clientes sin autorización.
5. Si no tiene pedidos, el sistema presenta un estado informativo.

### HU-2026-11-009 — Registrar productos

**Como** administrador,  
**quiero** registrar nuevos productos,  
**para** incorporarlos al catálogo de Tazza Du Vita.

**Requisito relacionado:** RF-2026-11-010.

**Criterios de aceptación:**

1. Un administrador autorizado puede acceder al formulario.
2. Se validan los campos obligatorios.
3. No se aceptan precios ni cantidades inválidas.
4. Un registro válido puede guardarse correctamente.
5. El producto queda disponible para administración y se muestra al público cuando cumple las reglas de publicación.
6. Un usuario sin permisos no puede ejecutar la operación.

### HU-2026-11-010 — Modificar productos

**Como** administrador,  
**quiero** editar la información de los productos,  
**para** mantener actualizado el catálogo.

**Requisito relacionado:** RF-2026-11-010.

**Criterios de aceptación:**

1. El administrador puede seleccionar un producto existente.
2. Puede modificar los campos autorizados.
3. Las modificaciones deben cumplir las validaciones establecidas.
4. Los cambios válidos quedan registrados.
5. Las operaciones fallidas no se presentan como exitosas.
6. La actualización de un producto no altera indebidamente los valores históricos de pedidos anteriores.

### HU-2026-11-011 — Retirar productos de la oferta

**Como** administrador,  
**quiero** retirar productos del catálogo,  
**para** evitar ofrecer artículos que ya no deben comercializarse.

**Requisito relacionado:** RF-2026-11-010.

**Criterios de aceptación:**

1. El administrador puede seleccionar un producto para retirarlo.
2. El sistema solicita confirmación cuando la operación pueda tener consecuencias importantes.
3. El producto deja de ofrecerse para nuevas compras según la política establecida.
4. Los registros históricos que lo referencian permanecen íntegros.
5. La operación queda restringida a usuarios autorizados.

**Pendiente:** definir si se utilizará desactivación, eliminación lógica u otra estrategia.

### HU-2026-11-012 — Administrar pedidos

**Como** administrador,  
**quiero** consultar y actualizar los pedidos,  
**para** realizar su seguimiento y gestión.

**Requisito relacionado:** RF-2026-11-011.

**Criterios de aceptación:**

1. El administrador puede acceder a los pedidos registrados.
2. Puede consultar la información relevante de cada pedido.
3. Puede realizar las actualizaciones de estado autorizadas.
4. No se aceptan transiciones de estado contrarias a las reglas definidas.
5. No se modifican indebidamente los datos históricos de la compra.
6. Un usuario sin permisos administrativos no puede realizar estas operaciones.

**Pendiente:** definir los estados y transiciones permitidos.

### HU-2026-11-013 — Realizar un pago en línea

**Como** cliente,  
**quiero** pagar mi pedido mediante un servicio de pagos,  
**para** completar la operación utilizando un método electrónico.

**Requisito relacionado:** RF-2026-11-012.

**Clasificación:** Condicionada.

**Criterios de aceptación, aplicables únicamente si se aprueba su implementación:**

1. El sistema permite iniciar el pago mediante el proveedor seleccionado.
2. El importe y la referencia corresponden al pedido.
3. El resultado de la operación se verifica mediante un mecanismo confiable.
4. Los pagos rechazados o fallidos no se registran como aprobados.
5. El pedido y el pago conservan estados coherentes.
6. El usuario recibe información comprensible sobre el resultado.
7. Las operaciones repetidas o notificaciones duplicadas no generan confirmaciones o cobros inconsistentes.

## 7. Reglas de negocio iniciales

Las siguientes reglas se derivan del alcance aprobado y deberán respetarse durante el diseño funcional y técnico.

**RN-01 — Acceso administrativo**

Solo los usuarios autorizados podrán ejecutar operaciones administrativas.

**RN-02 — Validez de cantidades**

Las cantidades utilizadas en operaciones comerciales deberán ser válidas y respetar las reglas de disponibilidad definidas.

**RN-03 — Integridad de precios**

El sistema deberá utilizar los precios correspondientes al momento de registrar el pedido y conservar la información histórica necesaria.

Las modificaciones posteriores del precio de un producto no deberán alterar indebidamente el valor registrado en pedidos anteriores.

**RN-04 — Integridad de pedidos**

Un pedido deberá contener información suficiente para identificar sus productos, cantidades y valores comerciales.

No se considerará registrado correctamente si falla una parte esencial de la operación de almacenamiento.

**RN-05 — Separación de pedido y pago**

Registrar un pedido no equivale a confirmar que ha sido pagado.

El estado del pago deberá gestionarse de manera independiente cuando corresponda.

**RN-06 — Protección de información**

Los clientes únicamente podrán acceder a la información privada y a las operaciones para las que tengan autorización.

**RN-07 — Conservación histórica**

Las operaciones de mantenimiento del catálogo no deberán destruir la información necesaria para interpretar pedidos anteriores.

**RN-08 — Validación confiable**

Los valores y operaciones que afecten información comercial o permisos deberán validarse en los componentes seguros del sistema y no depender exclusivamente del navegador.

Las reglas que requieran mayor detalle se desarrollarán en el Documento 02 — Procesos y Casos de Uso, y se reflejarán en el modelo de datos cuando corresponda.

## 8. Product Backlog inicial

### 8.1. Propósito

El Product Backlog reúne las funcionalidades que deberán desarrollarse, verificarse o completarse durante la implementación.

El backlog se actualizará conforme se revise el código y se obtenga información sobre el esfuerzo real requerido.

No debe confundirse con una lista de funcionalidades completamente pendientes de programación. Algunas podrían estar implementadas parcial o totalmente.

### 8.2. Criterios de prioridad

Se utilizarán tres niveles:

**Alta:** funcionalidades esenciales para completar el alcance obligatorio o habilitar otras funciones críticas.

**Media:** funcionalidades obligatorias que pueden desarrollarse después de sus dependencias principales sin bloquear el inicio del trabajo.

**Condicionada:** funcionalidades cuya ejecución requiere aprobación o cumplimiento de condiciones adicionales.

Las funcionalidades futuras se conservarán en un apartado separado.

La prioridad representa importancia y dependencia funcional; no es una medida del esfuerzo de desarrollo.

### 8.3. Backlog de la V1

| Historia | Funcionalidad | Prioridad | Estado inicial |
|---|---|---|---|
| HU-2026-11-004 | Explorar productos | Alta | Por verificar |
| HU-2026-11-009 | Registrar productos | Alta | Por verificar |
| HU-2026-11-010 | Modificar productos | Alta | Por verificar |
| HU-2026-11-011 | Retirar productos | Alta | Por verificar |
| HU-2026-11-001 | Registro de cuenta | Alta | Por verificar |
| HU-2026-11-002 | Inicio de sesión | Alta | Por verificar |
| HU-2026-11-003 | Cierre de sesión | Alta | Por verificar |
| HU-2026-11-005 | Agregar al carrito | Alta | Por verificar |
| HU-2026-11-006 | Modificar el carrito | Alta | Por verificar |
| HU-2026-11-007 | Confirmar un pedido | Alta | Por verificar |
| HU-2026-11-008 | Consultar mis pedidos | Media | Por verificar |
| HU-2026-11-012 | Administrar pedidos | Media | Por verificar |
| HU-2026-11-013 | Pagos en línea | Condicionada | Sin aprobación de implementación |

El control de roles y permisos no deberá tratarse como una tarea secundaria: es un requisito transversal que afecta autenticación, administración y acceso a pedidos.

### 8.4. Estados de implementación

**Por verificar:** todavía no se ha comprobado el estado actual de la funcionalidad.

**Pendiente:** no está implementada o requiere desarrollo.

**En desarrollo:** se están realizando cambios para completarla.

**En revisión:** su implementación está disponible para verificación.

**Completada:** cumple los criterios de aceptación y cuenta con validación suficiente.

**Bloqueada:** no puede continuar debido a una dependencia o decisión sin resolver.

Estos estados son independientes de la clasificación de alcance.

### 8.5. Estimación del esfuerzo

No se asignarán puntos de historia ni tiempos de desarrollo hasta revisar el código actualizado.

Después del diagnóstico se podrá utilizar un sistema de estimación proporcional a las necesidades del proyecto.

Las estimaciones deberán considerar:

- Trabajo que ya existe y puede reutilizarse.
- Complejidad de los cambios requeridos.
- Dependencias técnicas.
- Riesgos e incertidumbres.
- Necesidad de pruebas y correcciones.

No se interpretarán los puntos de historia como indicadores de importancia.

## 9. Dependencias y orden recomendado

El desarrollo deberá organizarse respetando las relaciones entre funcionalidades, sin asumir que todas necesitan ejecutarse en una secuencia rígida.

### 9.1. Base comercial

Incluye catálogo, visualización de productos y administración del catálogo.

Estas funciones permitirán disponer de información comercial sobre la cual construir el carrito y los pedidos.

### 9.2. Identidad y control de acceso

Incluye registro, inicio y cierre de sesión, además de roles y permisos.

Deberá estar disponible antes de habilitar operaciones que requieran identificar clientes o proteger funciones administrativas.

### 9.3. Flujo de compra

Incluye gestión del carrito, validación de información comercial y confirmación del pedido.

Requiere definir previamente las reglas de cantidades, disponibilidad, identificación del cliente y datos de compra.

### 9.4. Gestión de pedidos

Incluye consulta de pedidos por clientes y administración de las operaciones permitidas.

Depende del modelo de pedidos y de sus estados.

### 9.5. Pagos en línea

Únicamente se iniciará cuando exista aprobación y estén definidos los requisitos técnicos y de seguridad.

No debe bloquear la implementación del flujo básico de pedidos.

El orden definitivo se establecerá después de revisar las funcionalidades existentes y sus dependencias reales.

## 10. Funcionalidades futuras

Las siguientes capacidades se registran para preservar la visión general del producto, sin incorporarlas al backlog obligatorio de la V1.

| Funcionalidad | Clasificación |
|---|---|
| Suscripciones mensuales | Futura |
| Pagos recurrentes | Futura |
| Inscripción a talleres y eventos | Futura |
| Gestión de cupos y asistencia | Futura |
| Programas avanzados de fidelización | Futura |
| Reportes comerciales avanzados | Futura |
| Aplicación móvil independiente | Futura |
| Integraciones empresariales complementarias | Futura |

Su implementación requerirá una revisión de requisitos y una decisión de incorporación al alcance.

No se asignarán identificadores de historias de usuario definitivas a estas funcionalidades hasta que se inicie su especificación.

## 11. Asuntos pendientes y su impacto

Los siguientes asuntos están vinculados a las decisiones pendientes registradas en el Documento 00.

| Referencia | Asunto pendiente | Requisitos afectados |
|---|---|---|
| PEN-2026-11-001 | Backend | RF-001 a RF-012 |
| PEN-2026-11-002 | Base de datos | RF-001 a RF-012 |
| PEN-2026-11-003 | Carrito de visitantes y persistencia | RF-007 |
| PEN-2026-11-004 | Datos y estados de pedidos | RF-008, RF-009, RF-011 |
| PEN-2026-11-005 | Inventario y disponibilidad | RF-005 a RF-008, RF-010 |
| PEN-2026-11-006 | Direcciones y entregas | RF-008, RF-009, RF-011 |
| PEN-2026-11-007 | Alojamiento y despliegue | Requisitos no funcionales |
| PEN-2026-11-008 | Pagos en línea | RF-012 |
| PEN-2026-11-009 | Gestión de perfil | Alcance complementario por definir |
| PEN-2026-11-010 | Facturación y obligaciones aplicables | Proceso de compra y documentación comercial |

*En esta tabla, las referencias abreviadas RF-001 a RF-012 corresponden a los requisitos funcionales registrados en noviembre de 2026. Sus identificadores oficiales siguen siendo los completos.*

Estos asuntos deberán resolverse cuando su definición sea necesaria para continuar el diseño o la implementación.

No todos requieren una decisión inmediata.

## 12. Trazabilidad entre requisitos e historias

La siguiente matriz facilita identificar las historias asociadas a cada requisito funcional.

| Requisito | Historia relacionada |
|---|---|
| RF-2026-11-001 | HU-2026-11-001 |
| RF-2026-11-002 | HU-2026-11-002 |
| RF-2026-11-003 | HU-2026-11-003 |
| RF-2026-11-004 | Transversal a autenticación, pedidos y administración |
| RF-2026-11-005 | HU-2026-11-004 |
| RF-2026-11-006 | HU-2026-11-004 |
| RF-2026-11-007 | HU-2026-11-005 y HU-2026-11-006 |
| RF-2026-11-008 | HU-2026-11-007 |
| RF-2026-11-009 | HU-2026-11-008 |
| RF-2026-11-010 | HU-2026-11-009, HU-2026-11-010 y HU-2026-11-011 |
| RF-2026-11-011 | HU-2026-11-012 |
| RF-2026-11-012 | HU-2026-11-013 |

La implementación de los requisitos no funcionales se comprobará mediante las pruebas y revisiones técnicas correspondientes.

Los vínculos con casos de uso, componentes y evidencias se incorporarán conforme se desarrollen los siguientes documentos.

## 13. Criterios para considerar completada una historia

Una historia podrá marcarse como completada cuando:

1. Su comportamiento esté implementado conforme a las decisiones vigentes.
2. Cumpla los criterios de aceptación definidos.
3. Se hayan comprobado los escenarios normales y los errores relevantes.
4. Respete las reglas de seguridad y permisos aplicables.
5. No presente defectos críticos conocidos que impidan su uso previsto.
6. Los cambios se hayan integrado y verificado según el procedimiento del proyecto.
7. Exista evidencia suficiente de las verificaciones realizadas.
8. La documentación relacionada se encuentre actualizada cuando corresponda.

No se exigirá una cantidad fija de pruebas para todas las historias. El alcance de la verificación dependerá del riesgo y la complejidad de cada funcionalidad.

Una historia no deberá marcarse como completada únicamente porque su interfaz se encuentre terminada o porque el código no presente errores visibles durante una prueba informal.

## 14. Mantenimiento y actualización

Este documento deberá actualizarse cuando:

- Se apruebe un cambio de alcance.
- Se resuelva una decisión pendiente que modifique requisitos.
- Se identifiquen necesidades funcionales no contempladas.
- Se modifiquen criterios de aceptación.
- Se dividan o sustituyan historias.
- La revisión del código aporte evidencia que requiera actualizar el backlog.
- Se detecten inconsistencias entre requisitos y otros documentos.

Las modificaciones deberán respetar el control de decisiones establecido en el Documento 00.

Los cambios que alteren el alcance aprobado necesitarán autorización del responsable del proyecto.

El estado de desarrollo y los resultados de pruebas se mantendrán en los registros de implementación y calidad, evitando duplicar información.

## 15. Consideraciones finales

Este documento establece la especificación funcional inicial de Tazza Du Vita para su primera versión.

Su propósito es mantener una relación clara entre las necesidades de los usuarios, las capacidades del sistema y las condiciones necesarias para comprobar su cumplimiento.

El backlog será revisado después del diagnóstico del código actual. Esto permitirá identificar qué funcionalidades pueden conservarse, cuáles necesitan correcciones y cuáles requieren desarrollo nuevo.

Las decisiones técnicas todavía abiertas no deberán resolverse mediante suposiciones ni mediante la adopción automática de diseños históricos.

La documentación y la implementación deberán evolucionar de forma coordinada, manteniendo la trazabilidad de las decisiones y evitando incorporar funcionalidades ajenas al alcance aprobado.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| 1.0 | 23/11/2026 | Especificación inicial de requisitos, historias de usuario, criterios de aceptación y backlog de la V1. |

**Próxima revisión prevista:** después del diagnóstico del código actual y conforme se resuelvan las decisiones pendientes que afecten el comportamiento de las funcionalidades.