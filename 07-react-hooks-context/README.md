## **Actividad en Clase: Coffee Kiosk con Hooks + Context**

⏳ **Duración total:** ~120 minutos  
🎯 **Objetivo:** Reutilizar la SPA del kiosko de café para practicar
**contextos, hooks personalizados y memoización**. Vamos a extraer la lógica
del carrito a un `ShopProvider` con `useContext` para compartir estado y
acciones sin prop drilling.

---

- **Trabajo individual** (colaboración opcional en parejas).
- Requiere **Node.js ≥ 23.x** y **Yarn**.
- Proyecto creado con **Vite + React (JavaScript)**.
- Debes partir del resultado de la unidad anterior o clonar este repo como
base.

---

### **📋 Setup sugerido**

```bash
yarn install
yarn dev
```

Si inicias desde cero:

```bash
yarn create vite coffee-kiosk --template react
cd coffee-kiosk
yarn
```

---

## **🧱 Arquitectura objetivo**

```
src/
  App.jsx
  styles.css
  data.js
  context/
    ShopContext.jsx
  hooks/
    useCartSummary.js (opcional)
  components/
    Header.jsx
    TabBar.jsx
    ProductCard.jsx
    CartSummary.jsx
  pages/
    MenuPage.jsx
    CartPage.jsx
    CheckoutPage.jsx
```

---

## **🧩 Tareas obligatorias**

### 1) Crear el contexto de la tienda
- Implementa `ShopContext.jsx` con `createContext`.
- `ShopProvider` debe recibir `initialProducts` y exponer en su `value`:
  - `products`
  - `cart`
  - acciones `addToCart`, `inc`, `dec`, `remove`
- Usa `useMemo` para evitar recrear el objeto `value` innecesariamente.
- Exporta también un hook `useShop()` que lance un error si se usa fuera del
provider.

### 2) Reemplazar estado local por contexto
- En `App.jsx`, envuelve el layout dentro de `<ShopProvider
initialProducts={PRODUCTS}>`.
- Mantén únicamente el estado de navegación (`tab`) en `App`.
- Las páginas (`MenuPage`, `CartPage`, `CheckoutPage`) deben consumir
`useShop()` para acceder al carrito y acciones.

### 3) Derivar información con hooks
- Crea un hook `useCartSummary()` (opcional pero recomendado) que devuelva:
  - `items` (cart)
  - `count` total de unidades
  - `subtotal`
- Úsalo en `TabBar`, `CartPage` y `CheckoutPage` para mostrar totales sin
repetir cálculos.

### 4) Checkout con propina configurable
- Mantén un estado local `tip` en `CheckoutPage`.
- Calcula montos derivados (`tipAmount`, `total`) con `useMemo`.
- Deshabilita el botón final si el carrito está vacío.

---

## **✨ Extensiones opcionales**

- Persistir el carrito en `localStorage` usando `useEffect`.
- Agregar un contexto separado para preferencia de tema (modo claro/oscuro).
- Crear un hook `useCartActions()` que solo exponga las funciones mutadoras.

---

## 🔗 Recursos útiles

- [React Docs – Context](https://react.dev/reference/react/useContext)
- [React Docs – Memoization Hooks](https://react.dev/reference/react/useMemo)
- [Patterns.dev – Context vs Prop Drilling](https://www.patterns.dev/posts/context/)
