## **Actividad en Clase: “About Me” con React + Vite + Tailwind y deploy en Netlify**

⏳ **Duración total:** 90 min  
🎯 **Objetivo:** crear una página “About Me” simple y estética con React + Vite
+ Tailwind, versionarla con Git y publicarla en Netlify.

---

* **Modalidad de trabajo:** Individual
* **Requisitos previos:** [Node.js][nodejs] > 24; cuenta en [GitHub][github] y
[Netlify][netlify-docs].
* **Base del proyecto:** usar la plantilla ya creada en la actividad anterior o
partir desde cero (a elección).

---

### **📋 Instrucciones Generales**

1. Trabaja sobre el proyecto base (Vite + React + Tailwind).
2. Estructura el código en `src/components/`, `src/assets/` y `src/pages/`.

---

## **🧩 Actividad**

### 1) Composición de la página “About Me”

**Meta:** landing personal clara, responsive y estética.

1. Crea `src/pages/About.jsx` con: hero, foto/avatar, nombre, rol, bio breve,
   enlaces (GitHub/LinkedIn/Email/RRSS) y grilla de skills.
2. Componentes en `src/components/`:

   * `Avatar.jsx` (imagen circular con borde/sombra)
   * `Tag.jsx` (pill para skills)
   * `Section.jsx` (wrapper con ancho máximo y spacing)
3. Ensambla en `src/App.jsx` o vista principal.
4. Usa utilidades Tailwind para colores y tipografía (`bg-neutral-900
   text-neutral-100` o tema claro; `text-4xl md:text-5xl`, `space-y-6`,
`gap-4`).
5. Revisa responsividad y contraste visual.

> 💡 **Tip:** si agregas más páginas, considera `react-router-dom`, aunque no
> es obligatorio.

---

### 2) Preparación para Deploy y variables

**Meta:** build funcional y variables públicas listas.

1. Ejecuta:

   ```bash
   yarn build
   yarn preview
   ```  
2. Si usas config pública, define `VITE_API_BASE_URL` y léela con
   `import.meta.env.VITE_API_BASE_URL`.
3. Verifica estructura `dist/` y rutas de assets.

> 💡 **Tip:** no expongas secretos; solo `VITE_*`.

---

### 3) Publicación en Netlify

**Meta:** sitio online con CI/CD por push a `master`.

1. Sube tu proyecto a GitHub:

   ```bash
   git init
   git add .
   git commit -m "feat: about me page"
   git remote add origin <url>
   git push -u origin master
   ```  
2. En Netlify: **Add new site → Import an existing project**, conecta GitHub y
   selecciona el repo.
3. Configura:

   * **Build command:** `yarn build`
   * **Publish directory:** `dist`
4. Si usas `VITE_*`, define variables en **Site settings → Environment
   variables**.
5. Verifica el deploy en `https://<sitio>.netlify.app` y cambia el dominio si
   quieres.

> 💡 **SPA redirect (si usas Router):** crea `public/_redirects` con:
>
> ```
> /* /index.html 200
> ```

---

## **🧪 Criterios de aceptación**

1. **Funcional:** carga sin errores en Netlify; layout responsive; enlaces
   externos operativos.
2. **Contenido:** nombre, rol/título, bio breve, avatar/foto, lista de skills
   con tags y links de contacto.
3. **UI/UX:** jerarquía tipográfica coherente, contraste adecuado, spacing
   uniforme, sin overflow horizontal.
4. **Accesibilidad:** `alt` en imágenes, headings semánticos, foco visible.

---

## **✨ Extensiones opcionales**

* Dark/Light Mode con toggle o `prefers-color-scheme`.
* Sección “Proyectos” con cards.
* Animaciones suaves (`transition`, `hover:`).
* Badge de build/versión desde JSON público.
* Formulario de contacto sin exponer secretos.

---

## **🔗 Recursos útiles**

* [Vite – guía de build][vite]
* [Tailwind – instalación con Vite][tailwind-vite]
* [Netlify – deploy de sitios][netlify-docs]
* [Netlify – variables de entorno][netlify-env]
* [Netlify – SPA redirects][netlify-redirects]
* [MDN – accesibilidad esencial][mdn-a11y]

[vite]: https://vitejs.dev/guide/build.html "Cómo compilar y previsualizar proyectos Vite"
[tailwind-vite]: https://tailwindcss.com/docs/guides/vite "Integrar Tailwind con Vite"
[netlify-docs]: https://docs.netlify.com/site-deploys/create-deploys/ "Deploys desde repos"
[netlify-env]: https://docs.netlify.com/environment-variables/overview/ "Variables de entorno en Netlify"
[netlify-redirects]: https://docs.netlify.com/routing/redirects/ "Redirects para SPAs"
[mdn-a11y]: https://developer.mozilla.org/en-US/docs/Learn/Accessibility "Fundamentos de accesibilidad web"
[github]: https://github.com "GitHub"
[nodejs]: https://nodejs.org "Node.js"

<!-- gist -->
