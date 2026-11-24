# 00 — Dirección del Proyecto

**Proyecto:** Tazza Du Vita
**Tipo:** Aplicación web de comercio electrónico
**Versión del documento:** 1.0
**Fecha de creación:** 23 de noviembre de 2026
**Estado:** Versión inicial de referencia
**Responsable de las decisiones:** Responsable del proyecto

---

## 1. Propósito del documento

Este documento establece la dirección general del proyecto Tazza Du Vita. Su finalidad es mantener claros los objetivos, el alcance, las decisiones aprobadas y los criterios que orientarán el desarrollo del software.

También sirve como referencia para mantener la coherencia entre los requisitos, los diseños, la arquitectura, el código y las pruebas. Cualquier persona o herramienta que participe en el desarrollo deberá respetar las decisiones aquí registradas o proponer formalmente su modificación cuando exista una razón justificada.

Este documento no sustituye las especificaciones técnicas ni los requisitos detallados. Su función es establecer los acuerdos generales que deben respetarse en los demás documentos.

## 2. Descripción del proyecto

### 2.1. Contexto

Tazza Du Vita es un emprendimiento colombiano relacionado con la comercialización de productos de bienestar, entre ellos productos asociados con Gano Excel y Ganoderma lucidum.

El proyecto busca fortalecer su presencia digital mediante una plataforma web que permita presentar sus productos, facilitar las compras y administrar las operaciones comerciales.

La propuesta original contempla funcionalidades adicionales, como suscripciones mensuales, talleres, experiencias y herramientas de fidelización. Sin embargo, debido al tiempo disponible y a la necesidad de completar una primera versión funcional, estas características se desarrollarán de manera gradual.

### 2.2. Objetivo general

Desarrollar una aplicación web de comercio electrónico para Tazza Du Vita que permita a los clientes consultar productos, gestionar un carrito de compras y registrar pedidos, mientras los administradores disponen de herramientas para gestionar el catálogo y consultar las operaciones comerciales.

### 2.3. Objetivos específicos

1. Implementar mecanismos de registro, inicio de sesión y control de acceso.
2. Desarrollar un catálogo que permita consultar la información de los productos disponibles.
3. Implementar un carrito de compras para gestionar los productos seleccionados.
4. Permitir la confirmación y el registro de pedidos.
5. Desarrollar un panel administrativo para gestionar productos y consultar pedidos.
6. Mantener una interfaz adaptable a dispositivos móviles y de escritorio.
7. Aplicar prácticas de seguridad, organización del código y verificación funcional.
8. Evaluar la incorporación de pagos en línea según las condiciones técnicas y el tiempo disponible.

## 3. Estado conocido del proyecto

### 3.1. Desarrollo existente

Una revisión técnica anterior identificó una base de frontend desarrollada mediante HTML, CSS y JavaScript modular.

Entre los elementos observados se encuentran:

- Estructura de páginas públicas y administrativas.
- Visualización de productos.
- Funciones de creación, edición y eliminación de productos.
- Persistencia provisional mediante LocalStorage.
- Validaciones y componentes reutilizables.
- Uso de Git para control de versiones.
- Pruebas automatizadas relacionadas con validaciones y persistencia.

Estos elementos corresponden a la versión del código examinada durante el diagnóstico anterior. No deben considerarse una descripción definitiva del estado actual hasta revisar nuevamente el repositorio de trabajo.

### 3.2. Limitaciones conocidas

En el código revisado anteriormente no se identificó un backend operativo ni una integración funcional con una base de datos relacional.

También se observaron mecanismos provisionales de autenticación que no son adecuados para un sistema comercial en producción.

Las pruebas disponibles cubrían partes concretas de la aplicación, pero no demostraban el funcionamiento integral de los procesos de registro, compra y administración.

### 3.3. Verificación pendiente

Una vez consolidada la documentación, se revisará la versión actual del código para determinar:

- Qué funcionalidades están implementadas y funcionan correctamente.
- Qué elementos deben conservarse, corregirse o completarse.
- Qué dependencias y tecnologías están realmente presentes.
- Qué pruebas existen y qué resultados producen.
- Qué componentes pueden reutilizarse en la siguiente etapa.

No se realizarán cambios estructurales importantes basándose únicamente en el diagnóstico histórico.

## 4. Alcance de la primera versión

La primera versión, denominada **V1**, tendrá como objetivo principal ofrecer una tienda virtual funcional.

El desarrollo se concentrará en completar correctamente los procesos comerciales básicos antes de incorporar funcionalidades complementarias.

### 4.1. Funcionalidades obligatorias

**F01 — Registro de usuarios**

Permitir que los clientes creen una cuenta mediante la información requerida, con validaciones adecuadas y almacenamiento seguro de sus credenciales.

**F02 — Inicio y cierre de sesión**

Permitir que los usuarios registrados accedan a su cuenta y finalicen su sesión mediante mecanismos de autenticación apropiados.

**F03 — Catálogo de productos**

Mostrar los productos disponibles con información relevante, como nombre, descripción, precio e imagen, cuando corresponda.

**F04 — Carrito de compras**

Permitir agregar productos, modificar cantidades, eliminar artículos y consultar el resumen de la compra.

**F05 — Confirmación y registro de pedidos**

Permitir revisar la información de la compra, confirmar el pedido y conservar un registro de la operación.

El registro del pedido no dependerá necesariamente de contar con una pasarela de pagos.

**F06 — Administración de productos**

Proporcionar un panel protegido desde el cual los administradores puedan registrar, consultar, modificar y gestionar los productos.

**F07 — Consulta y gestión básica de pedidos**

Permitir consultar los pedidos registrados y realizar las operaciones administrativas necesarias para su seguimiento.

**F08 — Roles y permisos**

Diferenciar los permisos de clientes y administradores, impidiendo que usuarios no autorizados accedan a operaciones restringidas.

**F09 — Adaptabilidad de la interfaz**

Mantener una experiencia de navegación funcional en dispositivos móviles y de escritorio.

### 4.2. Funcionalidades condicionadas

**F10 — Pagos en línea**

Se evaluará la integración de una pasarela de pagos una vez estén definidos el backend, el flujo de compra y las condiciones de seguridad.

Su implementación dependerá del tiempo disponible, la viabilidad técnica y los requisitos del proveedor seleccionado.

Si no resulta viable incorporarla en la V1, deberá existir un flujo de pedidos coherente que no simule pagos realizados ni marque operaciones como pagadas sin una confirmación válida.

### 4.3. Funcionalidades aplazadas

Las siguientes características quedan fuera del alcance obligatorio de la V1:

- Suscripciones mensuales y pagos recurrentes.
- Inscripciones a talleres, rituales y experiencias.
- Gestión de eventos y cupos.
- Programas avanzados de fidelización.
- Reportes comerciales avanzados.
- Automatizaciones complementarias.
- Aplicación móvil nativa o híbrida independiente.
- Integraciones empresariales que no sean necesarias para completar las funciones principales.

Estas funcionalidades podrán considerarse en versiones posteriores mediante una revisión de prioridades, requisitos y recursos.

## 5. Decisiones del proyecto

### 5.1. Sistema de identificación

Las decisiones importantes utilizarán el siguiente formato:

`DEC-AAAA-MM-NNN`

Donde:

- `DEC` identifica una decisión del proyecto.
- `AAAA` representa el año de registro.
- `MM` representa el mes de registro.
- `NNN` corresponde a un consecutivo dentro de ese mes.

Ejemplo: `DEC-2026-11-001`.

El identificador será permanente. Si una decisión cambia, se registrará una nueva decisión que haga referencia a la anterior, manteniendo la trazabilidad histórica.

### 5.2. Estados de las decisiones

**Aprobada:** decisión confirmada por el responsable del proyecto y vigente.

**Propuesta:** alternativa recomendada que todavía no ha sido aprobada.

**Pendiente:** asunto que requiere información adicional, evaluación o una decisión.

**Sustituida:** decisión que dejó de estar vigente porque fue reemplazada formalmente por otra.

**Histórica:** información procedente de versiones o documentos anteriores que no constituye por sí misma una decisión vigente.

### 5.3. Registro inicial de decisiones aprobadas

| Identificador | Decisión | Estado |
|---|---|---|
| DEC-2026-11-001 | El nombre oficial del proyecto es Tazza Du Vita. | Aprobada |
| DEC-2026-11-002 | La V1 priorizará una tienda virtual funcional. | Aprobada |
| DEC-2026-11-003 | El alcance obligatorio comprenderá autenticación, catálogo, carrito, pedidos y administración básica. | Aprobada |
| DEC-2026-11-004 | Los pagos en línea estarán condicionados a su viabilidad técnica y al tiempo disponible. | Aprobada |
| DEC-2026-11-005 | Las suscripciones, talleres y funcionalidades complementarias se aplazarán para etapas posteriores. | Aprobada |
| DEC-2026-11-006 | La documentación existente será revisada y consolidada antes de continuar con cambios estructurales en el código. | Aprobada |
| DEC-2026-11-007 | Se revisará el código actual antes de decidir cambios importantes de arquitectura o implementación. | Aprobada |
| DEC-2026-11-008 | Las decisiones relevantes sobre alcance y arquitectura requerirán aprobación del responsable del proyecto. | Aprobada |
| DEC-2026-11-009 | Se utilizará una documentación oficial consolidada para reducir duplicaciones y contradicciones. | Aprobada |

Estas decisiones representan acuerdos generales. Los detalles técnicos se registrarán en sus documentos correspondientes.

## 6. Asuntos pendientes de definición

Las siguientes cuestiones no deben interpretarse como decisiones aprobadas.

| Identificador | Asunto | Estado |
|---|---|---|
| PEN-2026-11-001 | Tecnología y estructura del backend | Pendiente |
| PEN-2026-11-002 | Motor y diseño definitivo de la base de datos | Pendiente |
| PEN-2026-11-003 | Carrito para visitantes y persistencia al iniciar sesión | Pendiente |
| PEN-2026-11-004 | Datos obligatorios y estados de los pedidos | Pendiente |
| PEN-2026-11-005 | Reglas de disponibilidad e inventario | Pendiente |
| PEN-2026-11-006 | Gestión de direcciones y entregas | Pendiente |
| PEN-2026-11-007 | Proveedor de alojamiento y despliegue | Pendiente |
| PEN-2026-11-008 | Viabilidad e integración de pagos en línea | Pendiente |
| PEN-2026-11-009 | Alcance de la consulta y edición del perfil de usuario | Pendiente |
| PEN-2026-11-010 | Requisitos de facturación y obligaciones aplicables | Pendiente |

Las alternativas técnicas que aparezcan en documentos anteriores, incluyendo MySQL, PostgreSQL, DigitalOcean, AWS u otras herramientas, deberán evaluarse antes de ser adoptadas.

No se elegirán tecnologías únicamente porque hayan sido mencionadas en una actividad académica anterior.

## 7. Principios generales de desarrollo

### 7.1. Prioridad funcional

Se dará prioridad a completar funcionalidades necesarias para el funcionamiento de la tienda antes de incorporar características secundarias.

Una funcionalidad no se considerará terminada únicamente porque su interfaz esté construida. También deberá cumplir sus reglas de negocio, validaciones y pruebas correspondientes.

### 7.2. Simplicidad y mantenimiento

Se buscarán soluciones comprensibles y adecuadas al tamaño del proyecto.

No se incorporarán patrones, dependencias, bibliotecas o estructuras complejas sin una necesidad justificada.

Se procurará conservar y mejorar el código existente cuando sea razonable, evitando reescrituras innecesarias.

### 7.3. Seguridad

La seguridad formará parte del diseño y de la implementación.

Entre los principios mínimos se encuentran:

- Proteger las contraseñas mediante mecanismos de hash adecuados.
- Validar las entradas del lado del servidor.
- Comprobar los permisos antes de ejecutar operaciones protegidas.
- Evitar almacenar secretos en el código del frontend.
- Proteger el acceso y la modificación de datos.
- No considerar LocalStorage un mecanismo seguro de autenticación.
- Gestionar los errores sin revelar información sensible.

Las medidas específicas se definirán según la arquitectura seleccionada.

### 7.4. Calidad y pruebas

El desarrollo deberá acompañarse de verificaciones acordes con cada funcionalidad.

Se priorizarán pruebas de:

- Validaciones y reglas de negocio.
- Operaciones sobre productos.
- Registro y autenticación.
- Permisos de acceso.
- Carrito de compras.
- Registro y consulta de pedidos.
- Integración entre los componentes principales.

Los resultados deberán documentarse con evidencias cuando corresponda.

No se afirmará que una funcionalidad está validada si las pruebas no se han ejecutado o sus resultados son desconocidos.

### 7.5. Experiencia de usuario

La interfaz deberá facilitar la navegación y la realización de compras.

Se procurará mantener consistencia visual, claridad en los mensajes, adaptación a distintos tamaños de pantalla y criterios básicos de accesibilidad.

Los datos, precios e imágenes utilizados en producción deberán corresponder a información autorizada o verificada del negocio.

### 7.6. Desarrollo incremental

El trabajo se organizará mediante tareas pequeñas, priorizadas y verificables.

Cada cambio importante deberá partir de una necesidad identificada, considerar sus efectos sobre el sistema y comprobarse antes de darse por finalizado.

Se adoptarán prácticas ágiles cuando aporten utilidad, sin afirmar que se aplica Scrum formalmente si no se desarrollan sus roles, actividades y artefactos.

## 8. Organización y responsabilidades

### 8.1. Responsable del proyecto

El responsable del proyecto conserva la autoridad sobre las decisiones funcionales y técnicas relevantes.

Sus responsabilidades incluyen:

- Aprobar el alcance y los cambios importantes.
- Definir prioridades.
- Proporcionar información del negocio cuando sea necesaria.
- Revisar y aceptar las funcionalidades desarrolladas.
- Autorizar modificaciones relevantes de arquitectura y diseño.

### 8.2. Coordinación y revisión

La coordinación del trabajo incluirá actividades de análisis, organización documental, identificación de inconsistencias y evaluación de propuestas.

Las recomendaciones técnicas deberán distinguir entre información comprobada, alternativas propuestas y decisiones aprobadas.

### 8.3. Apoyo técnico al desarrollo

Podrán utilizarse herramientas y colaboradores de apoyo para tareas como análisis de código, implementación, pruebas, documentación y revisión técnica.

Sus aportes deberán ajustarse al alcance aprobado y a los estándares establecidos.

Ningún colaborador o herramienta tendrá autoridad para modificar unilateralmente las decisiones principales del proyecto.

Las reglas operativas de colaboración, entrega y revisión de cambios se desarrollarán en el documento **08 — Protocolo de colaboración y gestión de cambios**.

## 9. Organización de la documentación

### 9.1. Documentos oficiales

La documentación consolidada se organizará de la siguiente manera:

| Código | Documento |
|---|---|
| 00 | Dirección del Proyecto |
| 01 | Requisitos y Backlog |
| 02 | Procesos y Casos de Uso |
| 03 | Arquitectura Técnica |
| 04 | Modelo de Datos |
| 05 | Diseño de Interfaces |
| 06 | Estándares de Desarrollo |
| 07 | Implementación y Calidad |
| 08 | Protocolo de Colaboración y Gestión de Cambios |

Esta organización podrá ajustarse si aparecen necesidades justificadas.

### 9.2. Fuente de verdad

El Documento 00 será la referencia principal para el alcance, los objetivos y las decisiones generales del proyecto.

Cada documento complementario tendrá autoridad sobre los detalles de su área, siempre que no contradiga las decisiones aprobadas.

El código y las pruebas serán la evidencia principal de lo que está realmente implementado.

Cuando exista una diferencia entre documentación e implementación, se registrará como una discrepancia que debe resolverse. No se asumirá automáticamente que una de las dos versiones es correcta.

### 9.3. Documentación histórica

Los documentos elaborados durante etapas académicas anteriores se conservarán como antecedentes y evidencias del proceso de desarrollo.

No se considerarán especificaciones vigentes cuando contradigan la documentación oficial o las decisiones aprobadas.

### 9.4. Control de cambios

Las modificaciones importantes deberán seguir este procedimiento:

1. Identificar la necesidad de cambio.
2. Describir su justificación y sus posibles consecuencias.
3. Revisar su compatibilidad con las decisiones existentes.
4. Obtener aprobación cuando afecte alcance, arquitectura o reglas relevantes.
5. Actualizar los documentos correspondientes.
6. Implementar y verificar los cambios cuando corresponda.

Los cambios menores de redacción o formato podrán realizarse sin generar una nueva decisión, siempre que no alteren el significado del contenido.

## 10. Etapas generales del proyecto

### Etapa 1 — Consolidación documental

**Estado:** En desarrollo.

Comprende la revisión de la documentación histórica, la resolución de inconsistencias y la creación de los documentos oficiales.

**Resultado esperado:** documentación coherente que sirva como referencia para el desarrollo.

### Etapa 2 — Diagnóstico del código actual

**Estado:** Pendiente.

Comprende la inspección del código fuente actualizado, sus dependencias, funcionalidades, pruebas y organización.

**Resultado esperado:** diagnóstico técnico y lista priorizada de cambios necesarios.

### Etapa 3 — Planificación de implementación

**Estado:** Pendiente.

Comprende la definición de tareas, dependencias, tecnologías y criterios de aceptación necesarios para completar la V1.

**Resultado esperado:** plan de implementación basado en el estado real del proyecto.

### Etapa 4 — Implementación incremental

**Estado:** Pendiente.

Comprende el desarrollo, integración y corrección de las funcionalidades priorizadas.

**Resultado esperado:** primera versión funcional de la tienda virtual.

### Etapa 5 — Validación y preparación de entrega

**Estado:** Pendiente.

Comprende las pruebas finales, corrección de defectos, revisión de requisitos y preparación de evidencias.

**Resultado esperado:** versión verificada y documentación correspondiente a las funcionalidades realmente completadas.

Las etapas podrán solaparse cuando resulte conveniente, pero no deberán utilizarse para declarar completado trabajo que aún no haya sido verificado.

## 11. Criterios generales de finalización de la V1

La primera versión podrá considerarse funcionalmente completada cuando se haya comprobado que:

1. Los usuarios pueden registrarse, iniciar sesión y cerrar sesión correctamente.
2. El catálogo muestra los productos y su información de manera adecuada.
3. El carrito permite agregar, modificar y eliminar productos respetando las reglas definidas.
4. Los clientes pueden confirmar y registrar pedidos mediante un flujo coherente.
5. Los pedidos conservan la información necesaria para su consulta y seguimiento.
6. Los administradores pueden gestionar productos y consultar pedidos.
7. Los permisos impiden operaciones administrativas no autorizadas.
8. La interfaz funciona de manera adecuada en los dispositivos contemplados.
9. Las pruebas esenciales se han ejecutado y los defectos críticos conocidos están resueltos.
10. La documentación refleja las funcionalidades y tecnologías realmente utilizadas.

La ausencia de pagos en línea no impedirá declarar completado el alcance obligatorio de la V1, siempre que el flujo alternativo de pedidos esté definido, implementado y validado.

La finalización de la V1 no equivale automáticamente a una autorización para operar comercialmente en producción. Las condiciones de seguridad, infraestructura y obligaciones aplicables deberán evaluarse por separado.

## 12. Consideraciones finales

Tazza Du Vita continuará desarrollándose de manera gradual, priorizando una base funcional y mantenible sobre la incorporación apresurada de características adicionales.

Las decisiones se tomarán considerando las necesidades del proyecto, las posibilidades técnicas, el tiempo disponible y la evidencia obtenida durante el desarrollo.

El propósito de esta documentación es facilitar el trabajo, mantener la coherencia y permitir que el proyecto evolucione sin perder el registro de sus decisiones.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| 1.0 | 23/11/2026 | Creación del documento rector a partir de la revisión documental y las decisiones iniciales de alcance. |

**Próxima revisión prevista:** después del diagnóstico del código actual, para actualizar las referencias a las tecnologías e implementaciones existentes.