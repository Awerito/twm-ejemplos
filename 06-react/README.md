## **Actividad en Clase: SPA “Coffee Kiosk” (React + Vite)**

⏳ **Duración total:** ~120 minutos  
🎯 **Objetivo:** Construir una **single-page app** sin librerías adicionales
que practique **componentes, props, estado, lifting state up y (un poco) prop
drilling**: listado de productos, carrito y checkout con propina.

---

- **Trabajo individual** (apoyo en parejas opcional).  
- Requiere **Node.js ≥ 23 ** y **Yarn**.  
- Proyecto con **Vite + React** (JavaScript).  
- **Sin** librerías externas ni router: navegación por estado.

---

### **📋 Setup**

```bash
yarn create vite coffee-kiosk
# Framework: React
# Variant:   JavaScript
cd coffee-kiosk
yarn
yarn dev
````

Estructura sugerida:

```
src/
  App.jsx
  data.js
  components/
    Header.jsx
    TabBar.jsx
    ProductList.jsx
    ProductCard.jsx
    Cart.jsx
    Checkout.jsx
  styles.css (opcional, simple)
```

---

## **🧩 Requisitos**

### 1) Datos y estado global (en `App.jsx`)

* Crea un arreglo base de productos (o usa `data.js`):

```js
export const PRODUCTS = [
  { id: 1, name: "Espresso",  price: 2.5 },
  { id: 2, name: "Latte",     price: 3.8 },
  { id: 3, name: "Capuccino", price: 4.2 },
  { id: 4, name: "Americano", price: 2.9 }
];
```

* En `App`, define:

  * `const [tab, setTab] = useState("menu")`  // "menu" | "cart" | "checkout"
  * `const [cart, setCart] = useState([])`    // [{id, name, price, qty}]
* **Lifting state up**: el carrito vive en `App` y se pasa a hijos mediante props.

---

### 2) Navegación por estado (SPA sin router)

* Componente `TabBar` con 3 botones: **Menu**, **Cart**, **Checkout**.
* Cambian `tab` en `App` (prop drilling mínimo: pasar `setTab` o un `onSelect(tab)`).

**Condición de render en `App`:**

* `tab === "menu"` → `<ProductList .../>`
* `tab === "cart"` → `<Cart .../>`
* `tab === "checkout"` → `<Checkout .../>`

---

### 3) Menu: listar y agregar al carrito

* `ProductList` recibe `products` y `onAdd(item)` (función desde `App`).
* Renderiza `ProductCard` por cada producto.
* `ProductCard` muestra **nombre, precio y botón “Add”**.
* Al click en “Add”: llamar `onAdd(prod)` y:

  * Si el producto **no** está en el carrito → agregar `{ ...prod, qty: 1 }`.
  * Si **sí** está → incrementar `qty` (inmutable: `map`).

---

### 4) Cart: ver y modificar cantidades

* `Cart` recibe `cart`, `onInc(id)`, `onDec(id)`, `onRemove(id)` desde `App`.
* Muestra línea por producto: `Nombre — $precio — Qty: [–] qty [+]  (Remove)`
* `onInc` suma 1; `onDec` resta 1 (mínimo 1); `onRemove` elimina del carrito.
* Muestra **Subtotal** (suma de `price * qty`).

---

### 5) Checkout: propina y total

* `Checkout` recibe `cart` (para calcular subtotal).
* Usa **estado local** con `useState` para **tip (%)**: presets **10/15/20** + **Custom**.
* Muestra:

  * **Subtotal**
  * **Tip** (monto = `subtotal * tip/100`)
  * **Total** (`subtotal + tip`)

Reglas simples:

* Si `cart` está vacío, mostrar texto “Cart is empty” y deshabilitar la acción final.
* Formato con 2 decimales (ej: `toLocaleString`).

---

### 6) Comunicación de datos (resumen)

* Padre → Hijo (**props**): `products`, `cart`, `subtotal`, callbacks (`onAdd`, `onInc`, etc.).
* Hijo → Padre (**lifting**): botones en hijos llaman funciones que **actualizan estado en `App`**.
* Si necesitas pasar algo a un nieto, hazlo **a través del hijo** (prop drilling básico).

---

## **🧪 Criterios de aceptación (mínimos)**

1. Puedo cambiar de pestaña **Menu / Cart / Checkout** sin recargar la página.
2. Desde **Menu**, puedo **agregar** productos y ver el **carrito** actualizado.
3. En **Cart**, puedo **sumar/restar** cantidades y **eliminar** productos.
4. En **Checkout**, elijo un **porcentaje de propina** (10/15/20 o Custom) y veo **Tip** y **Total** correctos.
5. Toda la lógica de carrito está en **`App.jsx`** (lifting state up).
6. No se usan librerías externas (solo React).

---

## **✨ Extensiones opcionales (si sobra tiempo)**

* **Badge** en `TabBar` mostrando la cantidad total de ítems del carrito.
* Input de **búsqueda** en `Menu` que filtre productos por nombre.
* Botón **“Clear cart”** en `Cart`.
* **Split** en `Checkout`: input “Personas” → “Total por persona”.

---

## 🔗 Enlaces

* React Docs: [https://react.dev/](https://react.dev/)
* `useState`: [https://react.dev/reference/react/useState](https://react.dev/reference/react/useState)
* Vite (guía): [https://vitejs.dev/guide/](https://vitejs.dev/guide/)

<!-- gist -->
