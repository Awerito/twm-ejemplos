## **Actividad en Clase: Mini SPA con React Router**

⏳ **Duración total:** ~90 minutos  
🎯 **Objetivo:** Incorporar **navegación declarativa** con `react-router-dom`,
rutas anidadas y parámetros dinámicos reutilizando componentes existentes.

---

- Trabajo individual (parejas opcional).  
- Requiere **Node.js ≥ 23.x** y **Yarn**.  
- Proyecto basado en **Vite + React (JavaScript)**.

---

### **📋 Setup**

```bash
yarn install
yarn dev
```

Si partes desde cero:

```bash
yarn create vite router-demo --template react
cd router-demo
yarn add react-router-dom
```

---

## **🧩 Requisitos mínimos**

1. **Configurar el router básico**
   - En `main.jsx`, envuelve `<App />` con `<BrowserRouter>`.
   - Crea rutas para: `/` (Home), `/about`, `/user/:id`.
2. **Navegación con `<NavLink>`**
   - Implementa un `NavBar` con enlaces activos que cambian de estilo.
   - Incluye un enlace que apunte a `/user/1` a modo de demo.
3. **Parámetros dinámicos**
   - En la página `User`, usa `useParams()` para obtener el `id`.
   - Muestra información de ejemplo o busca datos desde un arreglo local.
4. **Ruta comodín (`*`)**
   - Renderiza un mensaje 404 para rutas inexistentes.

---

## **✨ Extensiones sugeridas**

- Añadir rutas anidadas para secciones dentro de `/about`.
- Cargar datos asincrónicos con `useEffect` usando el `id` de la URL.
- Implementar rutas protegidas con un wrapper que verifique autenticación.

---

## 🔗 Recursos útiles

- [React Router Docs](https://reactrouter.com/en/main/start/tutorial)
- [Guía oficial de Vite](https://vitejs.dev/guide/)
