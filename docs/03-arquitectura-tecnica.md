# 03 — Arquitectura Técnica

**Proyecto:** Tazza Du Vita
**Tipo:** Aplicación web de comercio electrónico
**Versión del documento:** 1.1
**Fecha de creación:** 23 de noviembre de 2026
**Última actualización:** 24 de noviembre de 2026
**Estado:** Arquitectura objetivo inicial, pendiente de evaluación técnica y contraste con el código actual
**Documentos de referencia:** 00 — Dirección del Proyecto; 01 — Requisitos y Backlog; 02 — Procesos y Casos de Uso
**Responsable de las decisiones:** Responsable del proyecto

---

## 1. Propósito del documento

Este documento establece los principios y la organización técnica propuesta para el desarrollo de Tazza Du Vita.

Su finalidad es definir las responsabilidades de los componentes principales, la comunicación entre ellos, el tratamiento de la información y los criterios que deberán orientar las decisiones de implementación.

La arquitectura debe facilitar el desarrollo de una tienda virtual funcional, manteniendo una estructura comprensible, segura y adecuada a los recursos disponibles.

Las tecnologías, frameworks, servicios y herramientas mencionados como alternativas no se considerarán aprobados hasta que exista una decisión registrada.

Este documento describe principalmente la arquitectura objetivo de la primera versión. No debe interpretarse como una representación exacta del código actualmente implementado.

## 2. Contexto y alcance arquitectónico

### 2.1. Contexto del sistema

Tazza Du Vita requiere una aplicación web que permita a visitantes y clientes consultar productos, gestionar compras y registrar pedidos.

También necesita un área administrativa para gestionar el catálogo y las operaciones comerciales autorizadas.

La primera versión se concentrará en las funcionalidades establecidas en el Documento 00.

Los procesos del negocio y sus escenarios de funcionamiento se encuentran descritos en el Documento 02.

### 2.2. Alcance de la arquitectura

La arquitectura deberá contemplar los componentes necesarios para:

- Presentación de interfaces web.
- Navegación e interacción con usuarios.
- Registro y autenticación.
- Control de acceso y permisos.
- Gestión del catálogo.
- Gestión del carrito.
- Confirmación y registro de pedidos.
- Consulta y administración de pedidos.
- Persistencia de información.
- Validaciones y tratamiento de errores.
- Verificación y mantenimiento.

La integración de pagos electrónicos se considerará únicamente como una capacidad condicionada.

### 2.3. Exclusiones

No se diseñará inicialmente una arquitectura completa para suscripciones recurrentes, talleres, eventos, programas avanzados de fidelización ni otras funcionalidades aplazadas.

Estas capacidades podrán incorporarse posteriormente mediante una evaluación de sus requisitos y efectos sobre el sistema.

No se implementarán componentes preventivos para funcionalidades futuras si aumentan innecesariamente la complejidad de la primera versión.

## 3. Estado técnico conocido

### 3.1. Implementación observada anteriormente

En una revisión previa del proyecto se identificó una aplicación frontend construida con HTML, CSS y JavaScript modular.

El código examinado incluía:

- Páginas públicas y administrativas.
- Funcionalidades de consulta y gestión de productos.
- Persistencia provisional mediante LocalStorage.
- Componentes y utilidades reutilizables.
- Validaciones.
- Pruebas automatizadas de determinadas operaciones.
- Control de versiones mediante Git.

### 3.2. Limitaciones de la implementación conocida

La versión examinada anteriormente no disponía de un backend operativo conectado a una base de datos relacional.

También utilizaba mecanismos provisionales de autenticación que no son adecuados para proteger operaciones comerciales reales.

LocalStorage permitía realizar pruebas de persistencia en el navegador, pero no constituía una fuente de datos centralizada y confiable para varios usuarios.

No existe evidencia suficiente para afirmar que la versión actual del proyecto conserva exactamente estas características.

### 3.3. Pendiente de verificación

El diagnóstico del código actualizado deberá identificar:

1. Estructura real de carpetas y módulos.
2. Dependencias existentes.
3. Separación actual de responsabilidades.
4. Funcionalidades implementadas.
5. Mecanismos de almacenamiento y autenticación.
6. Pruebas disponibles y resultados.
7. Problemas técnicos que puedan afectar la arquitectura.
8. Componentes que conviene conservar.

Las decisiones de refactorización o reemplazo deberán basarse en esos resultados.

## 4. Principios arquitectónicos

### 4.1. Separación de responsabilidades

Cada componente deberá asumir funciones identificables y evitar concentrar tareas que corresponden a otras partes del sistema.

La interfaz no será responsable de garantizar la seguridad, administrar directamente la base de datos o establecer reglas comerciales definitivas.

### 4.2. Simplicidad

La arquitectura deberá ajustarse al tamaño y las necesidades reales de la primera versión.

No se adoptarán microservicios, patrones complejos o herramientas adicionales sin una justificación concreta.

Se favorecerá una organización modular que permita evolucionar el sistema sin introducir complejidad innecesaria.

### 4.3. Seguridad desde el diseño

Las decisiones arquitectónicas deberán considerar autenticación, autorización, validación de entradas, protección de información y gestión de operaciones sensibles.

Las comprobaciones realizadas en el navegador podrán mejorar la experiencia del usuario, pero no reemplazarán los controles del servidor.

### 4.4. Integridad de la información

El sistema deberá mantener coherencia entre productos, carritos, pedidos y demás registros comerciales.

Las operaciones que modifiquen varios datos relacionados deberán disponer de mecanismos que eviten estados parcialmente registrados o inconsistentes.

### 4.5. Mantenibilidad

La organización del sistema deberá facilitar:

- Comprensión del código.
- Identificación de errores.
- Implementación de cambios.
- Ejecución de pruebas.
- Reutilización de componentes.
- Sustitución razonable de dependencias.

### 4.6. Evolución incremental

La arquitectura deberá permitir incorporar las funcionalidades aprobadas de manera gradual.

No será necesario implementar todos los componentes simultáneamente, pero cada incremento deberá integrarse de manera coherente con el sistema.

### 4.7. Verificabilidad

Las responsabilidades y dependencias deberán facilitar la ejecución de pruebas.

Se evitará que las reglas esenciales de negocio dependan exclusivamente de eventos visuales, elementos del DOM o condiciones difíciles de reproducir.

## 5. Arquitectura lógica propuesta

### 5.1. Modelo general

Se propone una aplicación web con separación entre presentación, procesamiento de solicitudes, lógica de negocio y persistencia.

El sistema podrá organizarse en tres grandes áreas:

**Frontend:** responsable de la interfaz y la interacción.

**Backend:** responsable de atender solicitudes, verificar permisos y ejecutar las operaciones del negocio.

**Persistencia:** responsable de almacenar y recuperar información de manera consistente.

Esta distribución representa responsabilidades lógicas. No implica que deban utilizarse tres servidores físicos independientes.

### 5.2. Presentación o frontend

El frontend será la parte de la aplicación con la que interactúan los usuarios mediante el navegador.

Sus responsabilidades principales serán:

- Presentar productos y contenidos.
- Gestionar formularios y eventos de interfaz.
- Facilitar la navegación.
- Mostrar estados de carga y mensajes.
- Aplicar validaciones orientadas a mejorar la experiencia.
- Solicitar operaciones al backend.
- Representar los resultados recibidos.

No deberá considerarse una fuente confiable de permisos, precios definitivos, resultados de pago o datos comerciales que necesiten verificación.

La organización concreta de páginas, componentes y estilos se documentará en el Documento 05.

### 5.3. Procesamiento de solicitudes

El backend deberá ofrecer mecanismos controlados para recibir y responder las solicitudes del frontend.

Esta responsabilidad incluirá:

- Identificación de la operación solicitada.
- Interpretación y validación de datos de entrada.
- Comprobación de autenticación cuando corresponda.
- Verificación de permisos.
- Invocación de las operaciones de negocio.
- Preparación de respuestas consistentes.
- Manejo de errores.

Las rutas o controladores no deberían concentrar toda la lógica de negocio ni construir directamente las consultas de persistencia como regla general.

### 5.4. Lógica de negocio

La lógica de negocio establecerá el comportamiento de las operaciones comerciales.

Comprenderá, entre otras responsabilidades:

- Validar cantidades y condiciones de compra.
- Comprobar las reglas de disponibilidad.
- Preparar y confirmar pedidos.
- Calcular importes comerciales.
- Aplicar transiciones de estado.
- Preservar la información histórica.
- Coordinar operaciones relacionadas.

Los procesos deberán respetar las reglas establecidas en los Documentos 01 y 02.

La lógica de negocio no deberá depender de la forma visual en que se presenta una página.

### 5.5. Acceso a datos

El acceso a datos permitirá consultar y modificar la información persistida.

Esta responsabilidad puede desarrollarse mediante módulos de acceso a datos, repositorios u otras soluciones adecuadas a la tecnología seleccionada.

Su finalidad será separar, cuando aporte valor, las operaciones de almacenamiento de las reglas comerciales.

No se establece como obligación crear una clase Repository para cada entidad.

### 5.6. Persistencia

La persistencia deberá conservar la información necesaria para las funciones de la V1.

Se prevé utilizar una base de datos centralizada que permita gestionar relaciones, restricciones e integridad comercial.

El motor relacional aprobado es MySQL; el esquema físico y la herramienta de acceso a datos siguen pendientes.

El almacenamiento del navegador podrá seguir utilizándose para información temporal o preferencias de interfaz, cuando corresponda.

No deberá sustituir la persistencia confiable de cuentas, permisos y pedidos.

## 6. Organización funcional del sistema

La arquitectura podrá agrupar responsabilidades por módulos funcionales.

### 6.1. Identidad y acceso

Responsable de las operaciones relacionadas con:

- Registro.
- Autenticación.
- Cierre de sesión.
- Identificación del usuario.
- Autorización por roles.

Deberá proteger las operaciones privadas y administrativas.

### 6.2. Catálogo

Responsable de:

- Consulta de productos.
- Obtención de detalles.
- Información comercial vigente.
- Disponibilidad pública de los productos.

### 6.3. Carrito

Responsable de:

- Incorporación de productos.
- Modificación de cantidades.
- Eliminación de artículos.
- Consulta del contenido.
- Preparación del resumen de compra.

La persistencia del carrito y su comportamiento para visitantes continúan pendientes de definición.

### 6.4. Pedidos

Responsable de:

- Validaciones previas a la confirmación.
- Registro de pedidos y sus detalles.
- Conservación de valores históricos.
- Consulta de pedidos.
- Gestión de estados.
- Coordinación con las reglas de inventario.

### 6.5. Administración

Agrupa las funcionalidades protegidas disponibles para los administradores.

No se considera necesariamente un servicio independiente.

Las interfaces administrativas podrán utilizar las operaciones de catálogo y pedidos, siempre que las solicitudes estén sujetas a las verificaciones de permisos correspondientes.

### 6.6. Pagos

Se considera un componente condicionado.

Si se incorpora, deberá gestionar las interacciones necesarias con el proveedor seleccionado, el seguimiento de intentos de pago y la verificación de resultados.

No se implementará una simulación de aprobación como sustituto de una integración de pagos real.

## 7. Comunicación entre componentes

### 7.1. Comunicación frontend–backend

Se propone utilizar solicitudes web mediante HTTPS para comunicar el navegador con el backend en un entorno desplegado.

La interfaz enviará solicitudes y recibirá respuestas que permitan representar los resultados de las operaciones.

El formato de intercambio y el diseño específico de la API se definirán cuando se seleccione la tecnología de backend.

JSON es una alternativa apropiada para intercambiar información estructurada, pero no se establecerán todavía contratos definitivos.

### 7.2. Comunicación backend–persistencia

El backend será responsable de las operaciones que afecten la información centralizada.

El navegador no deberá disponer de credenciales ni conexiones directas que permitan administrar libremente los datos comerciales.

El mecanismo de conexión dependerá del motor de base de datos seleccionado.

### 7.3. Comunicación con servicios externos

Las integraciones externas deberán implementarse mediante componentes que permitan controlar las solicitudes, respuestas, errores y credenciales necesarios.

En el caso de los pagos, el backend deberá comprobar los resultados mediante los mecanismos confiables proporcionados por el proveedor.

No se considerarán aprobadas integraciones que todavía no hayan sido seleccionadas.

### 7.4. Contratos de comunicación

Cuando se defina la API, deberán documentarse:

- Operaciones disponibles.
- Datos requeridos.
- Estructuras de respuesta.
- Condiciones de autenticación.
- Permisos necesarios.
- Errores posibles.
- Reglas de validación.
- Consideraciones para solicitudes repetidas.

Estos contratos podrán conservarse como un recurso técnico vinculado al documento, evitando incluir especificaciones extensas de endpoints en la arquitectura general.

## 8. Diseño de seguridad

### 8.1. Gestión de credenciales

Las contraseñas deberán almacenarse mediante un algoritmo de hash de contraseñas adecuado.

No se guardarán contraseñas en texto plano ni se incluirán credenciales reales dentro del código fuente.

Los mecanismos concretos se establecerán al seleccionar el backend.

### 8.2. Autenticación y sesiones

El sistema deberá establecer una forma confiable de identificar usuarios autenticados.

La estrategia de sesiones o tokens se definirá después del análisis tecnológico.

Si se emplean cookies de sesión, deberán configurarse las protecciones correspondientes, incluyendo sus atributos de seguridad y medidas frente a solicitudes no autorizadas.

No se asumirá que guardar un identificador o un rol en LocalStorage constituye autenticación válida.

### 8.3. Autorización

El backend deberá comprobar los permisos de cada operación protegida.

No será suficiente impedir que un usuario vea una página o un botón administrativo.

El sistema deberá rechazar solicitudes no autorizadas incluso cuando se intenten realizar fuera de la interfaz normal.

### 8.4. Validación de información

Los datos recibidos deberán comprobarse antes de utilizarse en operaciones sensibles.

Las validaciones deberán considerar tipos, formatos, cantidades, identificadores y reglas comerciales.

Las validaciones del frontend podrán complementarlas, pero nunca sustituirlas.

### 8.5. Protección de información

La arquitectura deberá evitar la exposición innecesaria de:

- Contraseñas.
- Credenciales de servicios.
- Datos de otros usuarios.
- Información administrativa.
- Detalles internos de errores.
- Información comercial restringida.

Se aplicarán las medidas de protección pertinentes para los datos personales tratados por la aplicación.

### 8.6. Seguridad de operaciones comerciales

Los valores críticos de un pedido deberán verificarse en el backend.

El sistema no deberá confiar en precios, totales, estados de pago o permisos enviados por el navegador sin comprobación.

Las operaciones relacionadas con pagos requerirán controles adicionales definidos según el proveedor seleccionado.

## 9. Integridad y tratamiento de datos

### 9.1. Persistencia centralizada

La información comercial permanente deberá mantenerse en una fuente de datos confiable.

Las cuentas, pedidos y registros administrativos no deberán depender únicamente del almacenamiento de un navegador específico.

### 9.2. Integridad de pedidos

El registro de un pedido implica operaciones relacionadas que deberán mantener coherencia.

Cuando la tecnología lo permita y corresponda, se utilizarán transacciones de base de datos para asegurar que las modificaciones dependientes se confirmen o se reviertan de manera consistente.

No deberá quedar registrado un pedido confirmado si falló el almacenamiento de información indispensable.

### 9.3. Precios históricos

Los pedidos deberán conservar los precios y valores necesarios para interpretar la compra en el momento de su confirmación.

Los cambios posteriores del catálogo no deberán alterar los registros históricos.

### 9.4. Inventario y concurrencia

La validación del inventario deberá considerar que varios usuarios podrían intentar comprar un mismo producto simultáneamente.

La comprobación visual de existencias en el frontend no garantizará por sí sola su disponibilidad al confirmar un pedido.

Está aprobada la reserva temporal al iniciar el pago de un pedido válido y la consolidación de venta tras confirmar el pago. Quedan pendientes los detalles de vencimiento, concurrencia, compensación y conciliación de pagos tardíos.

La solución técnica deberá impedir resultados inconsistentes cuando se confirme la operación comercial.

### 9.5. Solicitudes repetidas

Las operaciones críticas deberán contemplar solicitudes duplicadas por reintentos, demoras o fallos de comunicación.

Se definirá una estrategia apropiada para evitar la creación involuntaria de pedidos duplicados.

Si se integran pagos, también deberá evitarse el procesamiento inconsistente de notificaciones o resultados repetidos.

### 9.6. Cambios y conservación histórica

Las operaciones de administración de productos deberán respetar las relaciones existentes con pedidos históricos.

La estrategia para retirar o desactivar productos se establecerá en el modelo de datos y las reglas de negocio correspondientes.

## 10. Manejo de errores y observabilidad

### 10.1. Respuestas ante errores

La aplicación deberá distinguir entre:

- Errores de validación.
- Falta de autenticación.
- Falta de permisos.
- Recursos inexistentes.
- Conflictos comerciales.
- Fallos internos del sistema.
- Problemas temporales de servicios externos.

Las respuestas deberán permitir al frontend informar al usuario sin exponer información interna innecesaria.

### 10.2. Registro de eventos

Se propone establecer mecanismos de registro de errores y eventos relevantes para facilitar el diagnóstico.

Los registros deberán evitar incluir contraseñas, tokens completos u otra información sensible que no sea necesaria.

El alcance de los registros dependerá del entorno de ejecución.

### 10.3. Verificación operativa

Cuando exista un entorno desplegado, se evaluarán mecanismos básicos para comprobar su funcionamiento y detectar errores.

No se establece todavía una plataforma de monitoreo ni un objetivo contractual de disponibilidad.

## 11. Organización interna y patrones

### 11.1. Separación por capas

La separación por capas será el criterio principal para distinguir las responsabilidades de presentación, procesamiento, negocio y persistencia.

Esto no implica que deban crearse cuatro proyectos separados ni que cada componente requiera una clase propia.

La organización deberá adaptarse a las necesidades y tecnologías seleccionadas.

### 11.2. MVC

MVC podrá utilizarse como patrón de organización donde resulte adecuado.

Sin embargo, no debe confundirse con la totalidad de la arquitectura en capas.

En particular:

- Una vista representa información o interfaz.
- Un controlador coordina interacciones o solicitudes según el framework utilizado.
- Un modelo representa conceptos y comportamientos de la aplicación según el contexto arquitectónico.

Los servicios de negocio, la persistencia y las integraciones pueden necesitar responsabilidades adicionales que no quedan completamente descritas mediante MVC.

No se exigirá adoptar MVC si la tecnología seleccionada utiliza una organización más apropiada.

### 11.3. Patrones complementarios

Los documentos históricos mencionan Repository, DAO, DTO, Singleton y Factory.

Estos patrones no se consideran implementados ni obligatorios por haber sido mencionados anteriormente.

Podrán utilizarse cuando resuelvan una necesidad concreta.

Por ejemplo:

- Un repositorio puede facilitar el aislamiento de operaciones de datos.
- Un objeto de transferencia puede ayudar a definir información intercambiada.
- Una fábrica puede resultar útil cuando exista una creación compleja de objetos.

No se introducirán clases o abstracciones sin una utilidad identificable.

### 11.4. Organización por funcionalidades

Se podrá combinar la separación de responsabilidades con módulos funcionales como identidad, catálogo y pedidos.

La estructura de carpetas definitiva se determinará tras revisar el código y seleccionar las tecnologías correspondientes.

Se procurará mantener nombres consistentes y evitar dependencias circulares o acoplamientos innecesarios.

## 12. Tecnologías y decisiones pendientes

### 12.1. Tecnologías conocidas

| Área | Estado conocido |
|---|---|
| HTML | Presente en el código anteriormente revisado |
| CSS | Presente en el código anteriormente revisado |
| JavaScript modular | Presente en el código anteriormente revisado |
| LocalStorage | Utilizado como persistencia provisional |
| Git | Utilizado para control de versiones |
| Pruebas automatizadas | Identificadas parcialmente |

La presencia de estas tecnologías deberá comprobarse nuevamente en el repositorio actualizado.

### 12.2. Tecnologías aprobadas y selecciones pendientes

| Componente | Estado |
|---|---|
| Frontend | Mantener HTML, CSS y JavaScript modular; sin migración a React en V1 |
| Backend | Node.js + Express aprobados |
| Base de datos | MySQL aprobado |
| Comunicación | API REST/JSON propuesta para contratos de la V1 |
| Librería de acceso a datos / ORM | Pendiente |
| Mecanismo concreto de sesiones y autenticación | Pendiente |
| Proveedor de alojamiento | Pendiente |
| Pasarela de pagos y métodos efectivos | Condicionada, proveedor pendiente |
| Integración continua y herramientas de análisis | Por verificar o definir |

Se preservará la separación presentación–servicios–persistencia, sin convertir el sistema en microservicios. React y Spring Boot no forman parte de la arquitectura seleccionada para la V1.

### 12.3. Criterios para seleccionar tecnologías

Las tecnologías se evaluarán considerando:

1. Compatibilidad con el código existente.
2. Capacidad para cumplir los requisitos.
3. Seguridad y mantenimiento.
4. Complejidad de implementación.
5. Experiencia y recursos disponibles.
6. Documentación y soporte.
7. Facilidad de pruebas.
8. Costos de desarrollo y operación.
9. Tiempo disponible para completar la V1.

No se seleccionará una tecnología por popularidad ni por haber aparecido en la documentación histórica.

### 12.4. Relación con decisiones anteriores

El Documento 00 registra como pendientes:

- PEN-2026-11-001 — Backend.
- PEN-2026-11-002 — Base de datos.
- PEN-2026-11-007 — Alojamiento y despliegue.
- PEN-2026-11-008 — Pagos en línea.

Las decisiones que resuelvan estos asuntos deberán registrarse antes de actualizar la arquitectura como aprobada.

### 12.5. Decisiones técnicas posteriores al diagnóstico

El frontend actual puede conservarse y completarse; la autenticación fija y LocalStorage como persistencia comercial serán reemplazados. El backend comprobará permisos, precios, disponibilidad y transacciones de pedido. La arquitectura deberá soportar carrito temporal de visitante, reserva de inventario transaccional, múltiples intentos de pago y consulta fiable del estado de pasarela.

El motor de almacenamiento seleccionado es MySQL; el esquema SQL, las migraciones, la duración de reserva y la política ante pagos tardíos aún se diseñarán. No se seleccionó pasarela ni proveedor logístico.

## 13. Arquitectura de despliegue

### 13.1. Diferencia entre arquitectura lógica y física

La arquitectura lógica define las responsabilidades y relaciones de los componentes.

La arquitectura física describe dónde se ejecutan, cómo se conectan y qué infraestructura utilizan.

No debe asumirse que una capa lógica equivale a un servidor independiente.

### 13.2. Entorno de desarrollo

Durante el desarrollo se utilizará un entorno que permita ejecutar, modificar y probar la aplicación.

Sus características definitivas dependerán de la tecnología seleccionada.

Se deberán separar las configuraciones de desarrollo de las utilizadas posteriormente en producción.

### 13.3. Entorno de pruebas

Cuando sea necesario, se establecerá un entorno para validar la integración entre frontend, backend y persistencia.

Las pruebas no deberán depender de datos comerciales reales cuando puedan utilizarse datos de prueba apropiados.

### 13.4. Entorno de producción

La arquitectura objetivo contempla:

- Un cliente web ejecutado en el navegador.
- Un servicio o aplicación responsable del backend.
- Persistencia centralizada.
- Comunicación protegida.
- Configuración segura de credenciales.
- Mecanismos apropiados de respaldo y recuperación.

Estos componentes podrán desplegarse mediante diferentes configuraciones físicas según los recursos y el proveedor seleccionado.

### 13.5. Servicios de infraestructura

No existe todavía una decisión aprobada sobre AWS, Azure, DigitalOcean u otro proveedor.

Las comparaciones económicas históricas no constituyen compromisos vigentes.

La elección del alojamiento deberá realizarse después de definir las necesidades reales de ejecución.

### 13.6. Continuidad y recuperación

Antes de utilizar el sistema con información comercial real deberán establecerse procedimientos apropiados de respaldo, recuperación y protección de datos.

La frecuencia de los respaldos y los objetivos de recuperación dependerán de la importancia de la información y de las condiciones operativas.

No se declararán implementados mecanismos de recuperación que todavía no existan.

## 14. Arquitectura de pruebas

### 14.1. Pruebas de lógica

Deberán comprobar reglas y operaciones que puedan evaluarse de forma independiente.

Entre ellas:

- Validaciones.
- Cálculos.
- Reglas de cantidades.
- Transiciones de estados.
- Transformaciones de información.

### 14.2. Pruebas de integración

Deberán comprobar la comunicación entre componentes relevantes.

Por ejemplo:

- Solicitudes de autenticación y persistencia.
- Operaciones administrativas y almacenamiento.
- Registro de pedidos y sus detalles.
- Comprobaciones de permisos.
- Gestión de errores.

### 14.3. Pruebas funcionales

Deberán verificar los recorridos completos establecidos en el Documento 02.

Se prestará especial atención al proceso de compra y a las operaciones administrativas.

### 14.4. Pruebas de seguridad

Deberán comprobar los controles relevantes de autenticación, autorización, validación y protección de datos.

Las pruebas se realizarán dentro del alcance y los recursos disponibles.

### 14.5. Evidencia

Los resultados, incidencias y verificaciones se registrarán en el Documento 07 o en los recursos técnicos asociados.

No se considerará validado un componente únicamente por estar documentado.

## 15. Alternativas y riesgos arquitectónicos

### 15.1. Continuar únicamente con almacenamiento local

**Ventaja:** permite desarrollar prototipos rápidamente y sin infraestructura adicional.

**Limitación:** no proporciona persistencia centralizada confiable, autenticación segura ni coordinación adecuada entre varios usuarios.

**Evaluación:** útil para pruebas y prototipos, pero insuficiente como arquitectura final de la tienda.

### 15.2. Introducir múltiples servicios independientes

**Ventaja potencial:** permite desplegar y escalar responsabilidades de manera separada.

**Riesgo:** aumenta la complejidad de comunicación, despliegue, pruebas y mantenimiento.

**Evaluación:** no existe actualmente una necesidad demostrada que justifique adoptar microservicios para la V1.

### 15.3. Reescribir completamente el frontend

**Ventaja potencial:** permitiría reorganizar la aplicación desde una estructura nueva.

**Riesgo:** podría descartar código funcional, generar trabajo adicional y consumir tiempo destinado a funcionalidades pendientes.

**Evaluación:** no se recomienda decidir una reescritura sin revisar antes el estado real del código.

### 15.4. Seleccionar una tecnología de backend antes del diagnóstico

**Ventaja:** permitiría comenzar rápidamente la configuración de un entorno.

**Riesgo:** podría generar incompatibilidades, dependencias innecesarias o cambios evitables.

**Evaluación:** conviene completar primero el diagnóstico y luego comparar alternativas concretas.

### 15.5. Implementar pagos antes del flujo básico de pedidos

**Riesgo:** introduciría dependencias externas y problemas de estados financieros antes de estabilizar el proceso comercial principal.

**Evaluación:** el registro y la gestión de pedidos deben quedar definidos antes de integrar una pasarela de pagos.

## 16. Criterios para validar la arquitectura

La arquitectura podrá considerarse suficientemente definida para orientar la implementación cuando:

1. Se conozcan las tecnologías principales seleccionadas.
2. Estén identificadas las responsabilidades del frontend y backend.
3. Se haya definido el mecanismo de persistencia.
4. Se establezcan las reglas de autenticación y autorización.
5. Los procesos críticos tengan un diseño de integridad coherente.
6. Las dependencias entre componentes sean comprensibles.
7. Se hayan identificado los principales riesgos técnicos.
8. Exista correspondencia con los requisitos y casos de uso.
9. La estructura propuesta haya sido contrastada con el código actual.
10. Las decisiones relevantes estén aprobadas y documentadas.

La validación de la arquitectura no demuestra por sí sola que la aplicación se encuentre implementada o sea segura para operar en producción.

## 17. Relación con los demás documentos

**Documento 00 — Dirección del Proyecto**

Establece los objetivos, el alcance y las decisiones aprobadas.

**Documento 01 — Requisitos y Backlog**

Define las capacidades y condiciones de calidad que debe satisfacer el sistema.

**Documento 02 — Procesos y Casos de Uso**

Describe el comportamiento esperado y las reglas de las operaciones.

**Documento 04 — Modelo de Datos**

Definirá las entidades, relaciones, restricciones y estructuras de persistencia.

**Documento 05 — Diseño de Interfaces**

Establecerá la navegación, las vistas y los componentes visuales.

**Documento 06 — Estándares de Desarrollo**

Precisará las convenciones de implementación y control de versiones.

**Documento 07 — Implementación y Calidad**

Registrará la planificación de tareas, las verificaciones y los resultados de pruebas.

**Documento 08 — Protocolo de Colaboración y Gestión de Cambios**

Establecerá las responsabilidades y procedimientos para revisar e integrar aportes al proyecto.

## 18. Mantenimiento y actualización

Este documento deberá actualizarse cuando:

- Se seleccione la tecnología de backend.
- Se apruebe el motor de base de datos.
- Se establezca la arquitectura definitiva de autenticación.
- Se defina el mecanismo de persistencia del carrito.
- Se aprueben las reglas de inventario y pedidos.
- Se seleccione la infraestructura de despliegue.
- Se incorpore una integración externa relevante.
- El diagnóstico del código actual identifique restricciones o componentes reutilizables.
- Se aprueben cambios arquitectónicos que afecten responsabilidades o dependencias.

Las modificaciones importantes deberán contar con la aprobación correspondiente.

Se deberá distinguir entre la arquitectura propuesta, la aprobada y la realmente implementada.

## 19. Consideraciones finales

La arquitectura técnica de Tazza Du Vita deberá proporcionar una base adecuada para desarrollar y mantener una tienda virtual funcional.

Se propone una aplicación web modular, con responsabilidades separadas entre presentación, backend, lógica de negocio y persistencia.

Esta orientación busca facilitar la seguridad, la integridad de los datos, las pruebas y la evolución del proyecto sin introducir complejidad innecesaria.

La selección definitiva de tecnologías y la organización concreta de los componentes se realizarán después del diagnóstico del código actualizado.

El propósito de la arquitectura no será imponer una estructura teórica, sino orientar decisiones que permitan construir, verificar y mantener el sistema de manera coherente con sus necesidades reales.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| 1.1 | 24/11/2026 | Actualización tras el diagnóstico del repositorio y acuerdos sobre tecnologías, navegación y proceso comercial. |
| 1.0 | 23/11/2026 | Definición inicial de principios, arquitectura lógica, responsabilidades, seguridad, persistencia y criterios técnicos de la V1. |

**Próxima revisión prevista:** precisar los contratos API, la autenticación, el esquema de datos y la política de reservas para Node.js + Express y MySQL.