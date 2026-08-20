## **Actividad en Clase: Formulario de Registro de Alumno (HTML + CSS, sin JS)**

⏳ **Duración total:** 120 minutos  
🎯 **Objetivo:** Construir un formulario accesible y validado solo con HTML5 y
CSS, que envíe la información a una página de confirmación (`done.html`) usando
**método GET**. Se trabajará semántica, validación nativa, estilos de enfoque y
responsividad básica.

---

* **Trabajo individual**
* Guardar el trabajo en un repositorio en **GitHub**.

---

### **📋 Instrucciones Generales**

* Crear al menos **tres archivos**: `index.html`, `done.html` y `styles.css`.
* **Prohibido JavaScript** en la versión base.
* En `index.html`, usar un `<form>` que envíe a `done.html` con `method="get"`.
* Aprovechar validación nativa: `required`, `type="email"`, `pattern`,
`minlength/maxlength`, `autocomplete`.
* Accesibilidad: usar `<label for>`, `id/name` coherentes.
* Estilos: usar `:focus-visible`, `:invalid`, `:valid`, y diseño fluido con CSS
(ej. `max-width`, `grid` o `flex`).
* **Nota importante sobre “ver los datos”**: sin JS ni backend, `done.html` no
puede mostrar dinámicamente los valores enviados; los verás en la **barra de
direcciones** como parámetros de consulta. La página `done.html` debe presentar
un mensaje de confirmación.

---

## **🧩 Actividad Paso a Paso**

### 1) Estructura y base visual

**Meta:** Armar el esqueleto del proyecto.

* Crear `index.html` con estructura mínima (`<!doctype html>`, `lang="es"`,
`<meta charset="utf-8">`, viewport).
* Vincular `styles.css`.
* Definir un contenedor principal centrado, tipografía base legible y paleta
simple.

---

### 2) Formulario: campos y semántica

**Meta:** Formulario completo y accesible.
En `index.html`, crear un `<form action="done.html" method="get">`. Debe
incluir:

* **Identificación del alumno**

  * Nombre completo (`text`, `required`, `autocomplete="name"`)
  * RUT chileno (`text`, `required`, `inputmode="numeric"`, `maxlength`
  razonable)
  * Correo electrónico (`email`, `required`, `autocomplete="email"`)
  * Teléfono (`tel`, `autocomplete="tel"`)

* **Datos académicos**

  * Carrera/Programa (`select`, con al menos 4 opciones)
  * Jornada (`radio`: Diurna / Vespertina)
  * Sede o Ciudad (`select` o `datalist`)

* **Confirmaciones**

  * Aceptación de términos (`checkbox`, `required`)

* **Botones**

  * Enviar (tipo `submit`)
  * Limpiar (tipo `reset`)

---

### 3) Validación nativa y ayudas

**Meta:** Validar sin JS.

* Añadir `required` a campos obligatorios.
* **RUT**:
  * Da pista al usuario del formato que esperas para el RUT.
  * Desafio totalmente opcional, validar un rut (pista: regex)
* Usar `placeholder` y/o texto de ayuda bajo los campos más sensibles.
* Verificar comportamiento del navegador al enviar con errores.

---

### 4) Estilos y UX

**Meta:** Visual limpio, accesible y adaptable para web, no necesitas
considerar móvil.

* Estilos para `:focus-visible` claros y accesibles.
* Diferenciar `:invalid` y `:valid` con bordes/sombras sutiles.
* Espaciado consistente entre controles y etiquetas.
* Botones con estados `:hover` y `:active`.

---

### 5) Página de confirmación (done.html)

**Meta:** Confirmación clara del envío.

* Crear `done.html` con un mensaje de éxito, fecha/hora y enlaces:

  * “Volver al formulario” (link a `index.html`)
* Añadir una **plantilla de resumen** (sección con títulos y filas para “Nombre
completo”, “RUT”, “Correo”, etc.) para que el estudiante entienda qué
**debería** verse si hubiera procesamiento dinámico.
* Explicar al final de la página: “Los datos enviados aparecen en la barra de
direcciones como parámetros. Sin JavaScript ni backend, esta página no puede
mostrarlos automáticamente.”

---

### 6) Retroalimentación continua

Comparar con compañeros y profesor diseño y usabilidad (cuando trabajas X horas
en algo un desarrollaros se ciega muy facil en lo que implementa y no vé que
deja cosas anti-intuitivas sin querer).

---

## ✅ Criterios de Aceptación

* Proyecto con `index.html`, `done.html` y `styles.css`.
* Formulario accesible: etiquetas asociadas, `name`/`id` coherentes,
agrupaciones semánticas.
* Validación nativa activa (`required`, `type="email"`, `pattern` para RUT).
* `form` con `action="done.html"` y `method="get"`.
* Estilos de foco y estados de validación (`:focus-visible`, `:invalid`,
`:valid`).
* Diseño responsive básico y estilos de impresión en `done.html`.
* **Sin JavaScript** en la versión base.

---

## 🔗 Enlaces

* [Formularios HTML (MDN)](https://developer.mozilla.org/es/docs/Learn/Forms)
* [Elementos `<input>` y tipos (MDN)](https://developer.mozilla.org/es/docs/Web/HTML/Element/input)
* [Atributo `pattern` y validación (MDN)](https://developer.mozilla.org/es/docs/Web/HTML/Attributes/pattern)
* [Pseudoclases `:valid` / `:invalid` (MDN)](https://developer.mozilla.org/es/docs/Web/CSS/:valid)
* [Accesibilidad en formularios (MDN)](https://developer.mozilla.org/es/docs/Learn/Forms/Form_accessibility)
* [Guía de impresión con CSS (MDN)](https://developer.mozilla.org/es/docs/Web/CSS/@media/print)

---

### ✍️ Sugerencia de estructura de carpetas

```
.
├─ index.html
├─ done.html
├─ README.md
└─ styles.css
```

<!-- gist -->
