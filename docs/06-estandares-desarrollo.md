# 06 — Estándares de Desarrollo

**Proyecto:** Tazza Du Vita
**Tipo:** Aplicación web de comercio electrónico
**Versión del documento:** 1.1
**Fecha de creación:** 23 de noviembre de 2026
**Última actualización:** 24 de noviembre de 2026
**Estado:** Estándares iniciales, pendientes de contraste con el código actual
**Documentos de referencia:** 00 — Dirección del Proyecto; 01 — Requisitos y Backlog; 02 — Procesos y Casos de Uso; 03 — Arquitectura Técnica; 04 — Modelo de Datos; 05 — Diseño de Interfaces
**Responsable de las decisiones:** Responsable del proyecto

---

## 1. Propósito del documento

Este documento establece las convenciones y buenas prácticas que orientarán el desarrollo de Tazza Du Vita.

Su finalidad es mantener un código comprensible, consistente, seguro y fácil de modificar, así como establecer criterios para revisar, probar e integrar cambios.

Los estándares se aplicarán a las funcionalidades nuevas y a las modificaciones del código existente, considerando las tecnologías seleccionadas y las necesidades reales del proyecto.

Las reglas que requieran cambios extensos sobre la implementación actual deberán evaluarse antes de adoptarse definitivamente.

Este documento no sustituye la arquitectura técnica ni el protocolo de colaboración. Define los criterios de calidad y organización que deberán respetarse durante la programación.

## 2. Principios generales

### 2.1. Claridad

El código deberá expresar su propósito mediante nombres descriptivos, responsabilidades identificables y estructuras comprensibles.

Se evitarán abreviaturas innecesarias, nombres ambiguos y soluciones excesivamente complejas.

### 2.2. Consistencia

Se utilizarán convenciones uniformes de nombres, formato y organización.

Cuando exista una diferencia entre el código actual y una convención propuesta, deberá evaluarse si conviene adaptar el código o conservar temporalmente su estructura.

La consistencia no justifica por sí sola una reescritura extensa.

### 2.3. Simplicidad

Se preferirán soluciones que satisfagan los requisitos sin incorporar abstracciones, dependencias o patrones innecesarios.

No se crearán clases, servicios o módulos únicamente para aparentar una arquitectura más compleja.

### 2.4. Separación de responsabilidades

La presentación, las validaciones, las reglas de negocio y las operaciones de persistencia deberán mantener responsabilidades diferenciadas cuando corresponda.

La organización deberá facilitar las pruebas y los cambios futuros.

### 2.5. Reutilización razonable

Se evitará duplicar lógica relevante cuando pueda centralizarse de manera sencilla.

Sin embargo, no toda repetición requiere una abstracción. La reutilización deberá aportar claridad y mantenimiento.

### 2.6. Cambios controlados

Las modificaciones deberán tener una finalidad definida y un alcance identificable.

No se realizarán refactorizaciones extensas durante una corrección puntual sin evaluar y autorizar sus consecuencias.

### 2.7. Verificación

Los cambios deberán comprobarse mediante las pruebas apropiadas.

No se considerará correcto un cambio únicamente porque el código pueda ejecutarse sin errores sintácticos.

## 3. Convenciones de nomenclatura

### 3.1. Idioma del código

Se utilizará inglés para los identificadores técnicos del código nuevo, conforme a las convenciones ratificadas para Tazza Du Vita.

Ejemplos:

```js
const productList = [];
const totalPrice = 0;

function validateLogin() {}
function calculateTotal() {}
```

La adopción definitiva de esta convención dependerá del análisis del código existente.

No se realizarán renombramientos masivos únicamente para traducir identificadores.

### 3.2. Variables y funciones

Se utilizará `camelCase` como convención propuesta para variables y funciones de JavaScript.

```js
const productName = "Producto";
let selectedQuantity = 1;

function calculateTotal() {}
function validateProduct() {}
```

Los nombres deberán expresar su responsabilidad.

Se evitarán identificadores ambiguos como:

```js
let x;
let data2;

function doStuff() {}
```

Se admitirán nombres breves cuando su significado sea evidente por el contexto, como índices locales de iteración.

### 3.3. Constantes

Se utilizará `const` para variables que no necesiten reasignación.

El uso de `const` no obliga a utilizar nombres completamente en mayúsculas.

```js
const productList = [];
const loginForm = document.querySelector("#login-form");
```

Se propone reservar `UPPER_SNAKE_CASE` para constantes de configuración o valores fijos relevantes.

```js
const MAX_ITEMS_PER_PAGE = 20;
const DEFAULT_PAGE_SIZE = 20;
```

Estos ejemplos no establecen valores funcionales aprobados para el proyecto.

### 3.4. Clases

Cuando se utilicen clases, sus nombres seguirán la convención `PascalCase`.

```js
class Product {}

class ShoppingCart {}
```

No será obligatorio representar cada entidad mediante una clase.

Se utilizarán clases cuando permitan organizar adecuadamente un comportamiento o estado.

### 3.5. Archivos y carpetas

Se utilizará `kebab-case` para los nombres de archivos y carpetas propios del proyecto.

Ejemplos:

```text
product-card.js
product-service.js
login-form.css
admin-products.html
```

Se respetarán los nombres especiales requeridos por herramientas, frameworks o convenciones externas.

No se renombrarán archivos existentes sin comprobar sus dependencias.

### 3.6. Identificadores HTML y clases CSS

Se utilizará nombres descriptivos en `kebab-case`.

```html
<section class="product-list">
  <button id="add-product-button">
    Agregar producto
  </button>
</section>
```

Las clases deberán describir componentes, funciones o estados de manera coherente.

No se establecerá obligatoriamente una metodología como BEM hasta comprobar si aporta valor al proyecto.

### 3.7. Base de datos

Las convenciones de nombres de tablas, columnas, claves e índices se establecerán al seleccionar el motor de base de datos y aprobar el diseño físico.

No se asumirán como definitivos los nombres del SQL histórico.

La nomenclatura deberá ser consistente y permitir identificar claramente las relaciones.

## 4. Estándares de HTML

### 4.1. Estructura semántica

Se utilizarán elementos HTML adecuados al contenido.

Entre ellos:

- `header` para encabezados.
- `nav` para navegación.
- `main` para el contenido principal.
- `section` para agrupaciones temáticas.
- `article` cuando corresponda a contenido independiente.
- `button` para ejecutar acciones.
- `form` para formularios.
- `label` para identificar campos.

No se utilizarán elementos genéricos cuando exista una alternativa semántica apropiada.

### 4.2. Jerarquía

Las páginas deberán mantener una estructura comprensible de encabezados y secciones.

Se evitarán contenedores innecesarios y estructuras que dificulten el mantenimiento.

### 4.3. Formularios

Los campos deberán contar con etiquetas asociadas y mecanismos de validación apropiados.

Los mensajes de error deberán permitir identificar y corregir problemas.

Se utilizarán atributos HTML nativos cuando aporten funcionalidad, sin depender únicamente de ellos para garantizar la validez de los datos.

### 4.4. Accesibilidad

El HTML deberá facilitar la navegación mediante teclado y tecnologías de asistencia.

Las imágenes informativas deberán tener alternativas textuales adecuadas.

Los controles deberán conservar su comportamiento semántico y presentar estados comprensibles.

### 4.5. Separación de responsabilidades

Se evitará incorporar lógica compleja directamente en atributos HTML.

La interacción y el comportamiento se organizarán mediante los módulos JavaScript correspondientes.

## 5. Estándares de CSS

### 5.1. Organización

Los estilos deberán agruparse según responsabilidades identificables.

Se podrá utilizar una organización por estilos generales, componentes, páginas y utilidades.

La estructura definitiva dependerá de la implementación actual.

### 5.2. Consistencia visual

Se utilizarán valores coherentes de colores, tipografía, espaciado y dimensiones.

Cuando existan valores reutilizados, se favorecerá su centralización mediante propiedades personalizadas.

```css
:root {
  --color-background: #121212;
  --color-text: #ffffff;
}
```

Los valores anteriores son ilustrativos y no representan la paleta oficial aprobada.

### 5.3. Selectores

Se preferirán selectores comprensibles y suficientemente específicos.

Se evitará crear cadenas de selectores excesivamente complejas o aumentar innecesariamente su especificidad.

### 5.4. Diseño responsive

Las interfaces deberán adaptarse a los tamaños de pantalla previstos.

Se favorecerán unidades y técnicas de distribución que permitan interfaces flexibles.

Los puntos de adaptación se establecerán según las necesidades de los componentes.

### 5.5. Reutilización

Los componentes visuales equivalentes deberán compartir estilos cuando sea razonable.

Se evitarán declaraciones contradictorias y duplicaciones que dificulten el mantenimiento.

### 5.6. Accesibilidad visual

Los estilos deberán conservar indicadores de foco visibles y contrastes adecuados.

No se eliminarán características importantes de accesibilidad únicamente por razones estéticas.

### 5.7. Animaciones

Las animaciones deberán aportar información o mejorar la interacción.

Se evitarán movimientos innecesarios y se tendrán en cuenta las preferencias de reducción de movimiento cuando corresponda.

## 6. Estándares de JavaScript

### 6.1. Declaración de variables

Se preferirá `const` cuando no sea necesaria la reasignación y `let` cuando corresponda.

Se evitará `var` en código nuevo.

### 6.2. Funciones

Las funciones deberán tener responsabilidades claras.

Se evitarán funciones excesivamente extensas que mezclen validación, modificación del DOM, persistencia y reglas de negocio sin una razón justificada.

No se establecerá un número máximo obligatorio de líneas por función.

### 6.3. Módulos

Se mantendrá el uso de módulos de JavaScript cuando sea apropiado.

La organización deberá permitir importar funcionalidades sin crear dependencias circulares innecesarias.

### 6.4. Manipulación del DOM

El código de interfaz deberá localizar y modificar elementos de manera comprensible.

Se evitará duplicar lógica de renderizado o vincular reglas comerciales directamente a la estructura visual cuando puedan mantenerse separadas.

La utilización de componentes existentes tendrá prioridad sobre su reemplazo innecesario.

### 6.5. Validaciones

Las entradas deberán validarse según su contexto.

Se comprobarán tipos, formatos, valores permitidos y condiciones de negocio.

Las validaciones del navegador no sustituirán las comprobaciones del backend.

### 6.6. Manejo de errores

Las operaciones que puedan fallar deberán contemplar respuestas apropiadas.

Los errores no deberán ocultarse mediante bloques vacíos de captura.

```js
try {
  await loadProducts();
} catch (error) {
  showError("No fue posible cargar los productos.");
}
```

El ejemplo representa un patrón general. El tratamiento definitivo dependerá de los servicios y componentes disponibles.

### 6.7. Programación asíncrona

Se utilizarán mecanismos asíncronos apropiados para solicitudes y operaciones que lo requieran.

Se evitarán condiciones de carrera, respuestas obsoletas y cambios de interfaz que no correspondan al resultado real de la operación.

### 6.8. Datos y estructuras

Se utilizarán objetos, arreglos, mapas u otras estructuras según las necesidades concretas.

No se impondrá programación orientada a objetos o funcional como estilo exclusivo.

### 6.9. Valores fijos

Se evitarán valores repetidos sin significado claro.

Cuando un valor represente una regla relevante, deberá declararse mediante una constante o una configuración apropiada.

### 6.10. Dependencias

No se instalarán bibliotecas únicamente para resolver problemas que puedan solucionarse de manera sencilla con las herramientas existentes.

Antes de incorporar una dependencia deberá evaluarse su utilidad, mantenimiento, compatibilidad y costo de integración.

## 7. Comentarios y documentación del código

### 7.1. Criterio general

Los comentarios deberán explicar información que no resulte evidente por la estructura del código.

Se priorizará explicar el motivo de una decisión cuando este no pueda deducirse fácilmente.

### 7.2. Comentarios innecesarios

Se evitarán comentarios que únicamente repitan las instrucciones.

Ejemplo innecesario:

```js
// Sumar uno al contador
counter++;
```

### 7.3. Comentarios útiles

Podrán documentarse reglas comerciales, condiciones especiales, decisiones temporales y comportamientos que requieran contexto.

Los comentarios deberán mantenerse actualizados cuando cambie el código.

### 7.4. Documentación de funciones

Las funciones complejas o destinadas a uso compartido podrán documentar sus parámetros, resultados y condiciones especiales.

No será obligatorio escribir documentación extensa para funciones pequeñas cuyo comportamiento sea evidente.

### 7.5. Código temporal

Las soluciones provisionales deberán identificarse cuando sea necesario.

No se mantendrán comentarios o marcadores de tareas pendientes indefinidamente sin seguimiento.

## 8. Estándares de seguridad

### 8.1. Credenciales

No se incluirán contraseñas reales, tokens privados ni claves de servicios dentro del código fuente.

Los secretos deberán gestionarse mediante mecanismos adecuados para cada entorno.

### 8.2. Autenticación

La autenticación deberá implementarse mediante un mecanismo seguro y verificable.

No se aceptará como solución definitiva una comprobación de credenciales escrita únicamente en JavaScript del navegador.

### 8.3. Contraseñas

Las contraseñas deberán procesarse mediante algoritmos de hash específicos para contraseñas y configuraciones apropiadas.

No se almacenarán ni registrarán en texto plano.

### 8.4. Autorización

Las operaciones protegidas deberán verificar permisos en el backend.

No se confiará en valores de roles manipulables desde el navegador.

### 8.5. Validación de datos

Los datos de entrada deberán tratarse como información no confiable hasta ser validados.

Las consultas a la base de datos deberán utilizar mecanismos apropiados para evitar inyecciones.

La información presentada en interfaces deberá tratarse adecuadamente para prevenir la interpretación no deseada de contenido como código ejecutable.

### 8.6. Operaciones comerciales

El backend deberá verificar precios, cantidades, permisos y reglas de negocio antes de registrar operaciones.

No se utilizarán totales enviados desde el frontend como valores confiables sin comprobación.

### 8.7. Datos personales

El sistema deberá limitar el acceso a la información personal según las responsabilidades de cada usuario.

No se registrarán datos sensibles innecesarios en mensajes de error o archivos de diagnóstico.

### 8.8. Pagos

Si se implementan pagos en línea, deberán utilizarse los mecanismos seguros del proveedor seleccionado.

No se considerará válido un pago únicamente por una respuesta visual del navegador.

## 9. Control de versiones

### 9.1. Herramientas

Git será el sistema de control de versiones.

GitHub podrá utilizarse como plataforma de alojamiento y colaboración del repositorio, de acuerdo con la configuración existente.

### 9.2. Organización de ramas

Se propone una estrategia sencilla:

| Rama | Propósito |
|---|---|
| `main` | Mantener una versión estable |
| `develop` | Integración de cambios durante el desarrollo |
| `feature/...` | Desarrollo de funcionalidades |
| `fix/...` | Correcciones específicas |

Ejemplos:

```text
feature/shopping-cart
feature/user-authentication
fix/product-validation
```

La estrategia definitiva se establecerá después de revisar la estructura y el historial del repositorio.

Se conservará inicialmente la rama develop existente. Su utilización definitiva se comprobará al revisar el estado actual del repositorio. No se crearán ramas adicionales sin una necesidad concreta.

### 9.3. Commits

Los commits deberán describir cambios concretos.

Se favorecerán mensajes breves y comprensibles.

Ejemplos:

```text
feat: add product validation
fix: correct cart total calculation
docs: update authentication requirements
test: add product service tests
```

Se propone utilizar prefijos descriptivos como `feat`, `fix`, `docs`, `test`, `refactor` y `chore`.

No se considera obligatorio adoptar íntegramente Conventional Commits hasta revisar las convenciones actuales.

### 9.4. Alcance de los commits

Se procurará que cada commit represente un cambio coherente.

Se evitará mezclar modificaciones independientes cuando puedan registrarse por separado.

### 9.5. Archivos excluidos

No deberán versionarse secretos, credenciales, archivos temporales ni recursos generados innecesarios.

Las reglas de exclusión se establecerán según las herramientas utilizadas.

No se eliminarán archivos del repositorio sin comprobar su función.

### 9.6. Integración de cambios

Antes de integrar cambios relevantes se deberán revisar los archivos modificados, su comportamiento y las pruebas disponibles.

No se realizarán integraciones que sustituyan trabajo existente sin evaluar las diferencias.

### 9.7. Resolución de conflictos

Los conflictos de Git deberán resolverse comprendiendo las modificaciones involucradas.

No se aceptarán automáticamente todos los cambios de una rama sin revisar sus consecuencias.

### 9.8. Integración continua

Podrá incorporarse una herramienta como GitHub Actions si aporta valor a las pruebas y verificaciones del proyecto.

No se declarará implementada hasta comprobar su configuración y funcionamiento.

## 10. Pruebas y verificación

### 10.1. Pruebas unitarias

Se utilizarán para comprobar funciones y reglas que puedan evaluarse de forma aislada.

Entre ellas:

- Validaciones.
- Cálculos comerciales.
- Transformación de datos.
- Reglas de cantidades.
- Transiciones de estados.

### 10.2. Pruebas de integración

Comprobarán la interacción entre componentes relacionados.

Se priorizarán operaciones que afecten autenticación, permisos, persistencia y pedidos.

### 10.3. Pruebas funcionales

Se verificarán los recorridos principales establecidos en el Documento 02.

Entre ellos:

- Registro e inicio de sesión.
- Consulta de productos.
- Gestión del carrito.
- Confirmación de pedidos.
- Administración de productos.
- Administración de pedidos.

### 10.4. Escenarios negativos

Además de los recorridos exitosos, deberán considerarse:

- Datos inválidos.
- Accesos no autorizados.
- Productos inexistentes.
- Cantidades incorrectas.
- Cambios de disponibilidad.
- Errores de comunicación.
- Solicitudes duplicadas.
- Fallos de almacenamiento.

### 10.5. Pruebas existentes

Las pruebas identificadas en el diagnóstico anterior deberán revisarse antes de considerarlas suficientes.

No se eliminarán pruebas funcionales únicamente porque se modifique la arquitectura.

### 10.6. Resultados

Los resultados deberán distinguir claramente entre:

- Pruebas ejecutadas y satisfactorias.
- Pruebas ejecutadas con fallos.
- Pruebas no ejecutadas.
- Verificaciones manuales.
- Funcionalidades todavía no verificadas.

No se declararán resultados exitosos sin evidencia.

## 11. Revisión y refactorización

### 11.1. Objetivo

La refactorización deberá mejorar la estructura interna del código sin modificar involuntariamente su comportamiento esperado.

### 11.2. Justificación

Podrá proponerse una refactorización cuando existan problemas comprobados de:

- Duplicación relevante.
- Acoplamiento excesivo.
- Complejidad innecesaria.
- Dificultad para realizar pruebas.
- Riesgos de mantenimiento.
- Dependencias mal organizadas.

### 11.3. Conservación de funcionalidades

Antes de modificar componentes existentes deberán identificarse los comportamientos que necesitan conservarse.

Cuando resulte posible, se utilizarán pruebas para comprobar que la refactorización no introdujo regresiones.

### 11.4. Cambios de arquitectura

Las modificaciones estructurales importantes deberán contar con una justificación técnica y aprobación del responsable del proyecto.

No se cambiará de framework, lenguaje o patrón arquitectónico únicamente por preferencias de implementación.

### 11.5. Código heredado

El código existente deberá evaluarse según su comportamiento, calidad y compatibilidad con los requisitos.

No se asumirá que una implementación anterior debe eliminarse por ser diferente de la propuesta actual.

## 12. Configuración y dependencias

### 12.1. Entornos

Se distinguirán las configuraciones destinadas al desarrollo, las pruebas y la producción cuando corresponda.

### 12.2. Variables de entorno

Los valores que dependan del entorno podrán gestionarse mediante mecanismos de configuración apropiados.

Los secretos no deberán incluirse en archivos públicos ni en el repositorio.

### 12.3. Dependencias externas

Las dependencias deberán incorporarse y actualizarse de forma controlada.

Antes de una actualización importante se deberán evaluar posibles incompatibilidades.

### 12.4. Reproducibilidad

El proyecto deberá disponer de instrucciones suficientes para instalar sus dependencias, configurar el entorno y ejecutar las verificaciones disponibles.

Estas instrucciones se mantendrán en el README o en los recursos técnicos correspondientes.

## 13. Criterios para aceptar cambios

Un cambio podrá considerarse listo para integrarse cuando:

1. Responda a una necesidad o tarea identificada.
2. Respete el alcance y las decisiones aprobadas.
3. Mantenga las convenciones aplicables.
4. No introduzca dependencias innecesarias.
5. Conserve los comportamientos que no debían modificarse.
6. Contemple los controles de seguridad correspondientes.
7. Haya sido revisado.
8. Cuente con verificaciones apropiadas.
9. No presente defectos críticos conocidos relacionados con el cambio.
10. Actualice la documentación afectada cuando corresponda.

No se exigirá un proceso idéntico para cambios triviales y modificaciones estructurales.

La profundidad de la revisión deberá ser proporcional al riesgo.

## 14. Colaboración y revisión de aportes

Todos los cambios, independientemente de quién los proponga o implemente, deberán respetar los estándares del proyecto.

Los aportes técnicos deberán permitir identificar:

- Objetivo del cambio.
- Archivos afectados.
- Comportamiento modificado.
- Justificación de decisiones relevantes.
- Pruebas ejecutadas.
- Resultados y limitaciones.
- Riesgos o tareas pendientes.

Las decisiones importantes sobre alcance, arquitectura o reglas de negocio deberán contar con aprobación.

El procedimiento detallado para asignar tareas, revisar aportes e integrar modificaciones se establecerá en el Documento 08 — Protocolo de Colaboración y Gestión de Cambios.

## 15. Decisiones pendientes

Las siguientes cuestiones deberán revisarse durante el diagnóstico del código:

| Asunto | Estado |
|---|---|
| Idioma predominante de identificadores | Inglés aprobado para identificadores técnicos |
| Convención definitiva de archivos | kebab-case ratificado |
| Organización de módulos y carpetas | Pendiente |
| Estrategia de ramas | Propuesta simplificada |
| Convención de commits | Propuesta |
| Formateador y herramientas de análisis estático | Pendiente |
| Framework o entorno de pruebas | Revisar herramientas existentes y definir pruebas del backend |
| Convenciones del backend | Node.js + Express aprobados; detalles pendientes |
| Convenciones del modelo físico de datos | MySQL aprobado; nomenclatura pendiente |
| Automatización de pruebas | Por verificar |

Las decisiones pendientes no impedirán continuar con la documentación.

Deberán resolverse antes de realizar cambios extensos que dependan de ellas.

### 15.1. Convenciones ratificadas tras revisión de código

Se ratifican para el código nuevo: identificadores JavaScript y funciones en inglés con `camelCase`, clases `PascalCase`, archivos y clases/IDs HTML/CSS en `kebab-case`, y constantes de configuración en `UPPER_SNAKE_CASE` cuando corresponda. Estas reglas no justifican renombramientos masivos sin beneficio funcional.

El responsable reportó correcciones de nomenclatura en su copia local y funcionamiento normal de la página; aún falta verificarlas mediante pruebas y el siguiente estado del repositorio. La selección tecnológica para V1 es Node.js + Express y MySQL. Convenciones específicas del backend y herramientas de calidad deberán definirse al configurarlos.

## 16. Relación con los demás documentos

**Documento 00 — Dirección del Proyecto:** establece el alcance y las decisiones generales.

**Documento 01 — Requisitos y Backlog:** determina qué funcionalidades y condiciones deben cumplirse.

**Documento 02 — Procesos y Casos de Uso:** describe las reglas y comportamientos esperados.

**Documento 03 — Arquitectura Técnica:** establece las responsabilidades de los componentes.

**Documento 04 — Modelo de Datos:** define la estructura conceptual de la información.

**Documento 05 — Diseño de Interfaces:** establece los criterios visuales y de interacción.

**Documento 07 — Implementación y Calidad:** organiza el trabajo y registra las verificaciones.

**Documento 08 — Protocolo de Colaboración y Gestión de Cambios:** define los procedimientos para coordinar, revisar y aceptar aportes.

## 17. Mantenimiento del documento

Este documento deberá actualizarse cuando:

- Se definan las tecnologías principales.
- Se revise el código actual.
- Se aprueben convenciones definitivas.
- Se incorporen herramientas de desarrollo.
- Se modifique la estrategia de control de versiones.
- Se identifiquen nuevos riesgos de seguridad.
- Se cambien los procedimientos de prueba o revisión.

Los cambios deberán mantener coherencia con las decisiones y estándares previamente aprobados.

No se modificarán las convenciones de manera arbitraria durante el desarrollo.

## 18. Consideraciones finales

Los estándares de desarrollo de Tazza Du Vita deberán contribuir a construir un sistema comprensible, consistente y seguro.

Se priorizará la calidad del comportamiento y la claridad del código sobre el cumplimiento mecánico de convenciones que no aporten valor.

Las reglas propuestas deberán contrastarse con la implementación existente antes de realizar modificaciones extensas.

El desarrollo se realizará mediante cambios controlados, verificables y coherentes con las necesidades de la primera versión.

Estos estándares servirán como referencia común para el trabajo de programación, revisión y mantenimiento del proyecto.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| 1.2 | 27/11/2026 | Correciones de consistencia documental
| 1.1 | 24/11/2026 | Actualización tras el diagnóstico del repositorio y acuerdos sobre tecnologías, navegación y proceso comercial. |
| 1.0 | 23/11/2026 | Creación del documento rector a partir de la revisión documental y las decisiones iniciales de alcance. |

**Próxima revisión prevista:** al configurar el backend Node.js + Express, establecer las herramientas de calidad y verificar la organización del repositorio.