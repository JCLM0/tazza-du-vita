# 07 — Implementación y Calidad

**Proyecto:** Tazza Du Vita
**Tipo:** Aplicación web de comercio electrónico
**Versión del documento:** 1.1
**Fecha de creación:** 23 de noviembre de 2026
**Última actualización:** 24 de noviembre de 2026
**Estado:** Plan inicial de implementación y verificación, pendiente de diagnóstico del código actual
**Documentos de referencia:** 00 — Dirección del Proyecto; 01 — Requisitos y Backlog; 02 — Procesos y Casos de Uso; 03 — Arquitectura Técnica; 04 — Modelo de Datos; 05 — Diseño de Interfaces; 06 — Estándares de Desarrollo
**Responsable de las decisiones:** Responsable del proyecto

---

## 1. Propósito del documento

Este documento establece cómo se organizará, ejecutará y verificará el desarrollo de Tazza Du Vita.

Su finalidad es transformar los requisitos aprobados en actividades controlables, mantener un seguimiento de los avances e identificar los criterios necesarios para considerar terminadas las funcionalidades.

También establece procedimientos para registrar pruebas, defectos, riesgos y evidencias.

La planificación parte del alcance de la primera versión y deberá ajustarse después del diagnóstico del código actualizado.

Este documento no constituye un cronograma definitivo ni demuestra que las funcionalidades descritas hayan sido implementadas.

## 2. Enfoque de implementación

### 2.1. Desarrollo incremental

El trabajo se organizará mediante incrementos funcionales que puedan desarrollarse, integrarse y verificarse progresivamente.

Cada incremento deberá responder a una necesidad identificada y tener resultados comprobables.

Se evitará desarrollar simultáneamente múltiples funcionalidades complejas cuando sus dependencias no estén resueltas.

### 2.2. Priorización

Las tareas se ordenarán considerando:

- Importancia para completar la V1.
- Dependencias funcionales y técnicas.
- Riesgos de seguridad e integridad.
- Estado del código existente.
- Complejidad y esfuerzo estimado.
- Tiempo disponible.

La prioridad de una funcionalidad no será equivalente a su esfuerzo de implementación.

### 2.3. Aprovechamiento del código existente

Antes de implementar nuevamente una funcionalidad deberá comprobarse si ya existe y cuál es su estado.

Los componentes funcionales se conservarán cuando resulte razonable.

Las correcciones y refactorizaciones se justificarán según sus beneficios y riesgos.

### 2.4. Organización del trabajo

Se adoptará un enfoque ágil e incremental adaptado al tamaño del proyecto.

No será obligatorio implementar Scrum formalmente ni mantener ceremonias, roles o artefactos que no aporten valor.

El seguimiento deberá ser suficiente para identificar qué se está haciendo, qué está bloqueado y qué falta por verificar.

## 3. Etapas de trabajo

### 3.1. Etapa 1 — Consolidación documental

**Estado:** En desarrollo.

**Objetivo:** disponer de documentación coherente para orientar el desarrollo.

**Actividades principales:**

1. Revisar la documentación histórica.
2. Identificar contradicciones y contenidos obsoletos.
3. Consolidar los documentos oficiales.
4. Registrar decisiones aprobadas y pendientes.
5. Verificar la coherencia entre requisitos, procesos y arquitectura.

**Resultado esperado:** documentación inicial consolidada.

**Condición de cierre:** los documentos están disponibles, mantienen coherencia interna suficiente y sus asuntos pendientes están identificados.

No será necesario resolver todas las decisiones técnicas antes de cerrar esta etapa.

### 3.2. Etapa 2 — Diagnóstico técnico

**Estado:** Pendiente.

**Objetivo:** establecer el estado real del código actualizado.

**Actividades principales:**

1. Revisar la estructura del repositorio.
2. Identificar tecnologías y dependencias.
3. Examinar las funcionalidades existentes.
4. Ejecutar las pruebas disponibles.
5. Revisar la persistencia y autenticación.
6. Identificar problemas técnicos y de seguridad.
7. Determinar qué componentes conviene conservar.
8. Contrastar la implementación con los requisitos.

**Resultado esperado:** diagnóstico técnico y listado de cambios necesarios.

**Condición de cierre:** existe información suficiente para planificar el desarrollo sin depender de suposiciones sobre el código.

### 3.3. Etapa 3 — Definición técnica y planificación

**Estado:** Pendiente.

**Objetivo:** resolver las decisiones que bloquean la implementación.

**Actividades principales:**

1. Seleccionar las tecnologías necesarias.
2. Definir los componentes principales del backend.
3. Aprobar el modelo físico de datos.
4. Resolver las reglas críticas de carrito, inventario y pedidos.
5. Identificar dependencias de implementación.
6. Estimar el trabajo pendiente.
7. Priorizar los primeros incrementos.

**Resultado esperado:** plan de implementación ajustado al estado del proyecto.

**Condición de cierre:** las funcionalidades prioritarias pueden comenzar a desarrollarse con criterios y dependencias suficientemente definidos.

### 3.4. Etapa 4 — Desarrollo e integración

**Estado:** Pendiente.

**Objetivo:** implementar y completar las funcionalidades de la V1.

**Actividades principales:**

1. Preparar los componentes técnicos necesarios.
2. Implementar o corregir funcionalidades.
3. Integrar frontend, backend y persistencia.
4. Ejecutar pruebas durante el desarrollo.
5. Corregir los defectos encontrados.
6. Revisar e integrar cambios.
7. Actualizar la documentación afectada.

**Resultado esperado:** funcionalidades integradas y verificables.

### 3.5. Etapa 5 — Validación final y preparación de entrega

**Estado:** Pendiente.

**Objetivo:** comprobar el cumplimiento del alcance obligatorio.

**Actividades principales:**

1. Ejecutar pruebas funcionales completas.
2. Comprobar permisos y operaciones protegidas.
3. Verificar la integridad comercial.
4. Revisar las interfaces en distintos dispositivos.
5. Corregir defectos críticos.
6. Revisar la documentación final.
7. Preparar las evidencias y la versión de entrega.

**Resultado esperado:** V1 validada respecto del alcance acordado.

La validación final no implicará automáticamente que el sistema esté autorizado o preparado para operar comercialmente en producción.

## 4. Plan funcional inicial

La organización siguiente es una propuesta de planificación, no un calendario aprobado.

| Bloque | Funcionalidades principales | Dependencias |
|---|---|---|
| A — Base técnica | Backend, persistencia y configuración | Diagnóstico y decisiones tecnológicas |
| B — Catálogo | Visualización y administración de productos | Modelo de productos y persistencia |
| C — Identidad | Registro, autenticación y permisos | Backend y modelo de usuarios |
| D — Carrito | Agregar, modificar y eliminar productos | Catálogo y reglas de carrito |
| E — Pedidos | Confirmación, registro y consulta | Carrito, identidad y reglas comerciales |
| F — Administración | Consulta y gestión de pedidos | Pedidos y permisos |
| G — Integración y calidad | Pruebas completas y correcciones | Funcionalidades implementadas |
| H — Pagos en línea | Integración y verificación de pagos | Aprobación y flujo de pedidos estable |

Los bloques podrán desarrollarse parcialmente en paralelo cuando sus dependencias y riesgos lo permitan.

El bloque H es condicionado y no formará parte del alcance obligatorio mientras no se apruebe su implementación.

El orden definitivo se establecerá después del diagnóstico técnico.

### 4.1. Ajuste del plan tras diagnóstico y acuerdos comerciales

La inspección del código recibido identificó CRUD de productos con persistencia local, catálogo y pruebas unitarias parciales, pero no un backend de comercio real, carrito, pedidos ni autenticación segura. Se prioriza conservar y adaptar el frontend, preparar Node.js + Express con MySQL, implementar sesiones y roles, trasladar el catálogo a persistencia central, carrito de visitante, reservas de stock, pedidos y gestión administrativa.

El flujo de pagos alojados es la experiencia seleccionada, pero su integración efectiva permanece condicionada a seleccionar pasarela, confirmar viabilidad y disponer de tarifas de envío reales. No debe declararse pagado un pedido por una redirección de retorno. React y la reescritura total del frontend no son objetivos de V1.

## 5. Gestión de tareas

### 5.1. Identificación

Las tareas de implementación utilizarán el formato:

`TAR-AAAA-MM-NNN`

Ejemplo: `TAR-2026-11-001`.

Los identificadores permitirán relacionar las actividades con historias de usuario, requisitos, cambios y pruebas.

No se crearán tareas definitivas para implementar funcionalidades cuyo estado todavía no haya sido verificado.

### 5.2. Información mínima

Cada tarea deberá contener, cuando corresponda:

- Identificador.
- Descripción.
- Requisito o historia relacionada.
- Prioridad.
- Estado.
- Dependencias.
- Responsable o colaborador asignado.
- Criterios de finalización.
- Resultado de la revisión.
- Evidencia o referencia al cambio realizado.

Las tareas pequeñas podrán utilizar registros simplificados cuando no sea necesario completar todos los campos.

### 5.3. Estados de tareas

**Pendiente:** actividad identificada que todavía no ha comenzado.

**En desarrollo:** actividad en ejecución.

**En revisión:** implementación disponible para comprobar.

**Bloqueada:** requiere resolver una dependencia o problema.

**Completada:** actividad verificada y aceptada conforme a sus criterios.

**Cancelada:** actividad descartada mediante una decisión justificada.

Estos estados no deben confundirse con los estados de las historias de usuario ni con la situación de un requisito.

### 5.4. División del trabajo

Las funcionalidades extensas deberán dividirse en actividades que permitan revisar avances parciales.

Por ejemplo, la implementación de pedidos podría separarse en:

- Diseño de estructuras.
- Validaciones comerciales.
- Registro de pedido.
- Registro de detalles.
- Consulta de pedidos.
- Pruebas de integración.
- Interfaz de confirmación.

Esta división es ilustrativa y deberá ajustarse al código real.

## 6. Definición de terminado

Una tarea o funcionalidad no deberá considerarse completada únicamente porque el código esté escrito.

### 6.1. Criterios generales

Para marcar una funcionalidad como completada deberán verificarse, según corresponda:

1. Cumple los requisitos relacionados.
2. Satisface sus criterios de aceptación.
3. Respeta las reglas de negocio.
4. Funciona correctamente en los escenarios principales.
5. Maneja los errores relevantes.
6. Aplica los controles de seguridad necesarios.
7. No introduce regresiones conocidas.
8. Supera las verificaciones apropiadas.
9. Sus cambios están integrados.
10. La documentación afectada está actualizada.

### 6.2. Alcance de la revisión

La profundidad de las comprobaciones deberá ser proporcional al riesgo.

Una corrección visual menor no requerirá el mismo procedimiento que una modificación de autenticación, inventario o pedidos.

### 6.3. Restricciones

No se declarará terminada una funcionalidad cuando:

- Sus pruebas críticas no se hayan ejecutado.
- Exista un defecto crítico conocido que impida su utilización.
- Dependa de una integración inexistente.
- Utilice únicamente simulaciones donde se requiera comportamiento real.
- Su implementación contradiga una decisión aprobada.

## 7. Estrategia de calidad

### 7.1. Verificación continua

La calidad deberá comprobarse durante el desarrollo y no únicamente al finalizar el proyecto.

Cada modificación deberá acompañarse de verificaciones apropiadas antes de integrarse.

### 7.2. Calidad funcional

Se comprobará que el sistema realice las operaciones esperadas y responda correctamente ante condiciones normales y errores.

### 7.3. Calidad técnica

Se revisará la organización del código, la separación de responsabilidades, el manejo de errores y el cumplimiento de los estándares aplicables.

### 7.4. Seguridad

Se prestará especial atención a:

- Autenticación.
- Autorización.
- Protección de credenciales.
- Validación de información.
- Integridad de pedidos.
- Restricción de operaciones administrativas.
- Protección de información personal.

### 7.5. Calidad de datos

Las operaciones deberán preservar relaciones, restricciones y valores históricos.

No se aceptarán resultados que produzcan registros comerciales inconsistentes.

### 7.6. Calidad de interfaces

Se comprobará que las interfaces permitan completar las tareas previstas, comuniquen los errores y se adapten a los dispositivos definidos.

## 8. Tipos de pruebas

### 8.1. Pruebas unitarias

Comprobarán funciones o reglas aisladas.

Entre sus posibles objetivos:

- Validaciones.
- Cálculos comerciales.
- Cantidades.
- Transformaciones de información.
- Reglas de estado.

### 8.2. Pruebas de integración

Verificarán la comunicación entre componentes.

Por ejemplo:

- Autenticación y persistencia.
- Operaciones administrativas y base de datos.
- Carrito y registro de pedidos.
- Consultas y permisos.
- Registro de un pedido y sus detalles.

### 8.3. Pruebas funcionales

Comprobarán recorridos completos desde la perspectiva del usuario.

Se tomarán como referencia los casos de uso del Documento 02.

### 8.4. Pruebas de seguridad

Verificarán que las operaciones protegidas no puedan ejecutarse sin los permisos correspondientes y que las entradas se procesen de manera segura.

Estas verificaciones deberán realizarse en entornos autorizados y controlados.

### 8.5. Pruebas de interfaces

Se comprobarán:

- Navegación.
- Formularios.
- Mensajes.
- Estados de carga.
- Diseño adaptable.
- Interacción mediante teclado.
- Comportamiento ante errores.

### 8.6. Pruebas de regresión

Después de modificar funcionalidades existentes se ejecutarán las pruebas necesarias para comprobar que los comportamientos relacionados continúan funcionando.

No será necesario ejecutar todas las pruebas para cada modificación trivial, salvo cuando el riesgo lo justifique.

## 9. Casos de prueba

### 9.1. Identificadores

Los casos de prueba utilizarán el formato:

`CP-AAAA-MM-NNN`

Ejemplo: `CP-2026-11-001`.

Cada caso deberá relacionarse con requisitos, historias o casos de uso cuando corresponda.

### 9.2. Información requerida

Un caso de prueba podrá contener:

| Campo | Descripción |
|---|---|
| Identificador | Código permanente |
| Objetivo | Comportamiento que se comprueba |
| Referencia | Requisito, historia o caso de uso |
| Precondiciones | Condiciones necesarias |
| Datos de prueba | Información utilizada |
| Procedimiento | Pasos de ejecución |
| Resultado esperado | Comportamiento correcto |
| Resultado obtenido | Comportamiento observado |
| Estado | Resultado de la prueba |
| Evidencia | Registro verificable |
| Observaciones | Información adicional |

Los resultados esperados deberán definirse antes de ejecutar la prueba siempre que sea posible.

### 9.3. Estados de pruebas

**No ejecutada:** todavía no se ha comprobado.

**Aprobada:** el resultado coincide con lo esperado.

**Fallida:** existe una diferencia entre el resultado esperado y el obtenido.

**Bloqueada:** una dependencia impide ejecutar la prueba.

**No aplicable:** el caso no corresponde al alcance evaluado y existe una justificación.

No se utilizará «Aprobada» como estado predeterminado.

## 10. Matriz inicial de verificación

La siguiente matriz identifica áreas que deberán comprobarse.

No representa pruebas ya ejecutadas.

| Área | Verificaciones principales | Estado inicial |
|---|---|---|
| Registro | Datos válidos, inválidos y duplicados | Por verificar |
| Inicio de sesión | Credenciales válidas e inválidas | Por verificar |
| Cierre de sesión | Invalidación y acceso posterior | Por verificar |
| Roles | Acceso permitido y denegado | Por verificar |
| Catálogo | Productos, información y estados vacíos | Por verificar |
| Administración de productos | Registro, edición, retiro y validaciones | Por verificar |
| Carrito | Agregar, modificar, retirar y recalcular | Por verificar |
| Pedido | Validación, confirmación y persistencia coherente | Por verificar |
| Consulta de pedidos | Propiedad de datos y detalle histórico | Por verificar |
| Administración de pedidos | Permisos y transiciones válidas | Por verificar |
| Diseño adaptable | Navegación e interacción en diferentes pantallas | Por verificar |
| Pagos en línea | Integración y estados de transacción | Condicionada |

Esta matriz deberá complementarse con casos de prueba específicos después de revisar el código y resolver las reglas pendientes.

### 10.1. Pruebas comerciales adicionales por especificar

- Carrito anónimo, conservación y conciliación tras autenticación.
- Productos agotados visibles sin compra; desactivados ocultos.
- Reserva concurrente de stock y expiración segura; reembolso o reconciliación ante pago tardío.
- Registro del pedido con instantánea de destinatario y entrega.
- Cotización de envío obligatoria antes de habilitar pago.
- Reintentos seguros del mismo pedido ante rechazo, sin doble cobro.
- Seis estados comerciales y transiciones válidas.
- Inmutabilidad de detalles/precios de pedidos pagados y actualización de guía y confirmación manual de entrega.

No marcar estas pruebas como ejecutadas hasta contar con evidencias.

## 11. Gestión de defectos

### 11.1. Identificación

Los defectos utilizarán el formato:

`BUG-AAAA-MM-NNN`

Ejemplo: `BUG-2026-11-001`.

### 11.2. Información mínima

Cada defecto deberá registrar:

- Identificador.
- Descripción del problema.
- Funcionalidad afectada.
- Pasos para reproducirlo.
- Resultado esperado.
- Resultado observado.
- Severidad.
- Estado.
- Evidencia disponible.
- Referencia a la corrección cuando exista.

### 11.3. Clasificación de severidad

**Crítica:** compromete gravemente seguridad, integridad de datos o funcionamiento de procesos esenciales.

**Alta:** impide completar una función importante sin una alternativa razonable.

**Media:** afecta una funcionalidad, pero permite continuar mediante una alternativa aceptable.

**Baja:** tiene un impacto limitado, generalmente visual o de comportamiento secundario.

La severidad describe el impacto del defecto. Su prioridad de corrección podrá considerar también otros factores.

### 11.4. Estados de defectos

- Abierto.
- En corrección.
- Pendiente de verificación.
- Resuelto.
- Reabierto.
- Descartado, con justificación.

### 11.5. Criterio de resolución

Un defecto no deberá considerarse resuelto únicamente porque se modificó el código.

Deberá verificarse que el comportamiento incorrecto fue corregido y que no se introdujeron problemas relacionados.

## 12. Gestión de riesgos

### 12.1. Objetivo

Los riesgos permitirán identificar situaciones que podrían dificultar la finalización de la V1.

Se registrarán cuando su impacto justifique un seguimiento.

### 12.2. Riesgos iniciales

| Riesgo | Impacto posible | Medida propuesta |
|---|---|---|
| Tiempo limitado | Funcionalidades incompletas | Priorizar alcance obligatorio |
| Código diferente al diagnóstico anterior | Estimaciones incorrectas | Revisar repositorio actualizado |
| Backend sin definir | Retrasos de integración | Resolver selección después del diagnóstico |
| Reglas comerciales incompletas | Rehacer pedidos o modelo de datos | Resolver decisiones antes de implementar procesos dependientes |
| Errores de autenticación | Acceso no autorizado | Verificaciones de seguridad |
| Inconsistencias de inventario | Pedidos inválidos | Validar operaciones y concurrencia |
| Refactorizaciones extensas | Pérdida de tiempo o regresiones | Exigir justificación y pruebas |
| Dependencias externas | Bloqueos técnicos | Priorizar funciones independientes |

Estos riesgos son iniciales y deberán reevaluarse con información real del proyecto.

### 12.3. Seguimiento

Cada riesgo relevante podrá registrar su probabilidad, impacto, medidas de mitigación y estado.

No se asignarán puntuaciones numéricas sin una escala definida.

## 13. Evidencias de desarrollo y calidad

### 13.1. Propósito

Las evidencias permitirán respaldar las afirmaciones sobre funcionalidades implementadas, pruebas ejecutadas y problemas corregidos.

### 13.2. Evidencias aceptables

Según la actividad, podrán utilizarse:

- Resultados de pruebas automatizadas.
- Registros de ejecución.
- Commits y referencias de Git.
- Capturas de pantalla.
- Pruebas funcionales documentadas.
- Registros de errores.
- Revisiones de código.
- Resultados de integración.

Una captura de pantalla puede demostrar un estado visual, pero no necesariamente que las reglas de negocio o la seguridad funcionen correctamente.

### 13.3. Organización

Las evidencias deberán identificarse mediante referencias a tareas, funcionalidades, pruebas o versiones.

No será necesario duplicar archivos cuando puedan consultarse mediante una referencia estable.

### 13.4. Veracidad

No se crearán resultados ficticios ni se marcarán verificaciones como ejecutadas sin evidencia.

Las limitaciones deberán registrarse cuando una prueba no pueda realizarse.

## 14. Control de versiones y cambios

### 14.1. Relación con Git

Los cambios de código deberán mantenerse bajo control de versiones.

La estrategia definitiva de ramas y commits se encuentra descrita como propuesta en el Documento 06.

### 14.2. Integración

Antes de integrar una modificación importante deberá comprobarse:

1. Qué archivos fueron modificados.
2. Qué comportamiento se esperaba cambiar.
3. Qué pruebas se ejecutaron.
4. Qué resultados se obtuvieron.
5. Qué riesgos permanec.
6. Si existe alguna decisión que requiera aprobación.

### 14.3. Cambios estructurales

Las modificaciones de arquitectura, tecnologías principales o reglas comerciales deberán seguir el control de decisiones establecido en el Documento 00.

### 14.4. Historial

Los cambios relevantes deberán mantener trazabilidad mediante commits, tareas y documentación correspondiente.

El procedimiento específico de colaboración se desarrollará en el Documento 08.

## 15. Seguimiento del avance

### 15.1. Criterio general

El avance deberá medirse mediante trabajo verificado y no únicamente por cantidad de código escrito o tareas iniciadas.

### 15.2. Indicadores útiles

Se podrán utilizar indicadores como:

- Historias obligatorias completadas.
- Historias pendientes.
- Tareas bloqueadas.
- Casos de prueba aprobados.
- Defectos críticos abiertos.
- Funcionalidades integradas.

No se interpretará un porcentaje de tareas completadas como una medida exacta de preparación para producción.

### 15.3. Seguimiento práctico

Se recomienda mantener un tablero sencillo con tareas pendientes, en desarrollo, en revisión y completadas.

La herramienta definitiva podrá ser GitHub Projects, un archivo de seguimiento u otra alternativa apropiada.

No se impondrá una herramienta adicional sin comprobar su utilidad.

### 15.4. Revisión de prioridades

Cuando aparezcan bloqueos o cambios de alcance se revisará el backlog.

La incorporación de funcionalidades nuevas deberá respetar las prioridades y decisiones vigentes.

## 16. Criterios de aceptación de la V1

La primera versión podrá considerarse funcionalmente completada cuando:

1. El registro y la autenticación funcionen correctamente.
2. Los permisos impidan operaciones no autorizadas.
3. El catálogo permita consultar los productos.
4. La administración de productos funcione según sus requisitos.
5. El carrito permita gestionar productos válidos.
6. Los clientes puedan confirmar y registrar pedidos.
7. Los datos históricos de las compras se conserven correctamente.
8. Los clientes puedan consultar sus pedidos.
9. Los administradores puedan consultar y gestionar pedidos.
10. La interfaz funcione en los dispositivos definidos.
11. Las pruebas esenciales se hayan ejecutado satisfactoriamente.
12. No existan defectos críticos conocidos que impidan los procesos obligatorios.
13. La documentación refleje el sistema realmente implementado.

Los pagos en línea no serán una condición obligatoria mientras su implementación permanezca condicionada.

Si se aprueban, deberán cumplir sus propios criterios de aceptación y seguridad.

### 16.1. Entrega académica y producción

La finalización de la V1 para fines de desarrollo o entrega académica no equivale automáticamente a disponer de un sistema listo para atender transacciones comerciales reales.

Antes de operar en producción deberán revisarse, según corresponda:

- Infraestructura y despliegue.
- Seguridad.
- Protección de datos personales.
- Respaldos y recuperación.
- Procedimientos comerciales.
- Obligaciones legales y tributarias.
- Configuración de servicios externos.

No se declarará una preparación comercial que no haya sido comprobada.

## 17. Relación con los demás documentos

**Documento 00 — Dirección del Proyecto**

Define el alcance, las prioridades generales y las decisiones aprobadas.

**Documento 01 — Requisitos y Backlog**

Establece las funcionalidades y sus criterios de aceptación.

**Documento 02 — Procesos y Casos de Uso**

Describe los recorridos funcionales que deben verificarse.

**Documento 03 — Arquitectura Técnica**

Define la organización y las responsabilidades técnicas propuestas.

**Documento 04 — Modelo de Datos**

Establece las entidades y reglas de integridad que deberán comprobarse.

**Documento 05 — Diseño de Interfaces**

Describe las pantallas y comportamientos visuales esperados.

**Documento 06 — Estándares de Desarrollo**

Establece las convenciones y criterios de calidad del código.

**Documento 08 — Protocolo de Colaboración y Gestión de Cambios**

Desarrollará los procedimientos para asignar, revisar, aprobar e integrar aportes.

## 18. Mantenimiento del documento

Este documento deberá actualizarse cuando:

- Se complete el diagnóstico técnico.
- Se establezcan estimaciones de desarrollo.
- Se definan las tecnologías principales.
- Se aprueben o modifiquen requisitos.
- Se reordene el backlog.
- Se incorporen nuevas herramientas de pruebas.
- Se detecten riesgos importantes.
- Se modifiquen criterios de calidad.
- Se prepare una nueva versión de entrega.

Las actualizaciones deberán reflejar información comprobable y mantener coherencia con los documentos oficiales.

No se modificarán estados de avance sin revisar las evidencias correspondientes.

## 19. Consideraciones finales

La implementación de Tazza Du Vita se organizará de manera incremental, priorizando las funcionalidades necesarias para completar una tienda virtual funcional.

El seguimiento del trabajo deberá facilitar la toma de decisiones y la detección de problemas, sin introducir procesos administrativos desproporcionados.

La calidad se comprobará mediante criterios de aceptación, pruebas y evidencias acordes con cada funcionalidad.

El plan de implementación definitivo se establecerá después de revisar el código actualizado, identificar el trabajo pendiente y resolver las dependencias técnicas y comerciales necesarias.

Este documento servirá como referencia para organizar las actividades y verificar el avance real del proyecto hasta completar la primera versión.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| 1.1 | 24/11/2026 | Actualización tras el diagnóstico del repositorio y acuerdos sobre tecnologías, navegación y proceso comercial. |
| 1.0 | 23/11/2026 | Definición inicial de etapas, organización del trabajo, pruebas, defectos, riesgos, evidencias y criterios de finalización de la V1. |

**Próxima revisión prevista:** después del diagnóstico del código actual y de la definición del plan de implementación.