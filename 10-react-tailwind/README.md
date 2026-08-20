## **Actividad en Clase: “Landing de Producto” (React + Tailwind)**

⏳ **Duración:** 120 minutos  
🎯 **Objetivo:** Crear desde cero una **landing page profesional y responsive**
usando `React + Vite + Tailwind`, aplicando una estructura limpia de
componentes y modo oscuro.

---

* Trabajo individual (colaboración opcional).
* Requiere **Node.js ≥ 24.x** y **Yarn**.
* Proyecto con **Vite + React (JS)**.
* No hay backend, el foco es **estructura y presentación**.

---

### **📋 Setup inicial**

1. Crea un nuevo repositorio:
   `landing-template`

2. Crea el proyecto base:

```bash
yarn create vite landing-template --template react-swc
cd landing
yarn add -D tailwindcss @tailwindcss/vite
```

3. Configura Tailwind en `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

4. Reemplaza el contenido de `src/index.css`:

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
```

5. Actualiza el `body` del `index.html`:

```html
  <body class="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
```


6. Verifica el arranque:

```bash
yarn dev
```

---

## **🧩 Desafío: crea una landing moderna**

Implementa una **landing page ficticia** de un producto o servicio.  
Debe contener al menos **cinco secciones** clave y funcionar tanto en claro
como en oscuro.

---

### **📐 Estructura mínima (requerida)**

1. **Navbar fija**

   * Logo ficticio o nombre del proyecto.
   * Enlaces ancla (`#inicio`, `#servicios`, `#contacto`).
   * Botón para **modo oscuro** (`toggle` de clase `.dark`).

2. **Hero principal**

   * Título grande, subtítulo breve y botón destacado.
   * Imagen o ilustración opcional.
   * Centrado y responsive.

3. **Bloque de servicios o features**

   * Tres tarjetas (`Card`) con ícono, título y descripción.
   * Usa **grid responsiva** (`grid-cols-1 sm:grid-cols-3`).

4. **Formulario de contacto**

   * Campos: nombre, correo y mensaje.
   * Al enviar, mostrar `alert("Mensaje enviado")` (simulado).
   * Validar que los campos no estén vacíos.

5. **Footer**

   * Texto simple: “© [año] Usuario de Github”.
   * Links o redes sociales opcionales.

---

## **🧪 Criterios de aceptación**

1. La app arranca sin errores (`yarn dev` ok).
2. Usa **componentes reutilizables** (`Button`, `Card`, `Input`, `Navbar`, etc.).
3. Diseño totalmente **responsive**.
4. Modo oscuro funcional mediante toggle.
5. Estructura de carpetas clara (`components/`, `sections/`, `App.jsx`).
6. Commits descriptivos (`feat:`, `fix:`, `style:`).

---

## **💾 Entrega**

* Enlace al repositorio GitHub.
* (Opcional) Despliegue en Netlify.

---

## **📚 Referencias útiles de Tailwind**

### 🔹 Clases más usadas en esta actividad

| Tipo                   | Ejemplos                                                                | Uso común                                    |
| ---------------------- | ----------------------------------------------------------------------- | -------------------------------------------- |
| **Layout y espaciado** | `mx-auto`, `px-4`, `py-8`, `gap-4`, `max-w-6xl`                         | Centrar, márgenes y paddings, contenedores.  |
| **Tipografía**         | `text-3xl`, `font-bold`, `text-gray-600`, `dark:text-gray-300`          | Tamaños, peso y color de texto.              |
| **Flex y grid**        | `flex`, `items-center`, `justify-between`, `grid-cols-1 sm:grid-cols-3` | Estructura y alineación.                     |
| **Bordes y fondos**    | `rounded-xl`, `border`, `bg-white`, `dark:bg-gray-900`                  | Tarjetas, fondos, separación visual.         |
| **Interacción**        | `hover:bg-indigo-500`, `transition`, `focus:ring-2`                     | Efectos al pasar o enfocar.                  |
| **Modo oscuro**        | `dark:` (prefijo), `@custom-variant dark ...`                           | Estilos alternos cuando `.dark` está activa. |

---

### 🔹 Dónde buscar más

📘 **Documentación oficial:**
👉 [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

* Sección **“Layout”** → contenedores, espaciado, grid, flex.
* Sección **“Typography”** → fuentes, tamaños, colores.
* Sección **“Backgrounds & Borders”** → colores, redondeos, sombras.
* Sección **“Pseudo-classes”** → `hover:`, `focus:`, `dark:` y variantes.
* Sección **“Customization”** → cómo extender el tema o usar plugins.

---

> 🧠 Consejo: entra a la documentación y escribe en el buscador lo que quieras hacer
> (por ejemplo: *border radius*, *grid columns*, *hover background*).
> Tailwind tiene ejemplos claros y en vivo de cada clase.

<!-- gist -->
