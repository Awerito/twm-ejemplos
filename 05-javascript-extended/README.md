## **Actividad en Clase: JavaScript + DOM — Catálogo interactivo**

⏳ **Duración total:** ~120 minutos  
🎯 **Objetivo:** Dar el salto de la consola al navegador: pintar una lista en la
página a partir de un arreglo y reaccionar a un evento del usuario, reutilizando
lo ya visto (`map`, `filter`, funciones puras).

---

- **Trabajo individual.**
- Se trabaja con `index.html` + `app.js` (abrir el HTML en el navegador).
- Sin librerías externas.

---

### **📋 Instrucciones Generales**

1. Crea `index.html` con una casilla "Mostrar solo con stock" y un `<div>` donde
   se pinta el catálogo.
2. Conecta la lógica en `app.js`.
3. Pinta el catálogo a partir del arreglo; no escribas el HTML a mano.

---

## **🧩 Ejercicio único: Catálogo de tenis de mesa**

Partes de un arreglo de productos (con nombre y stock) y lo muestras en la
página. Una casilla permite ver solo los productos disponibles.

Arreglo inicial (dado):

```js
const products = [
  { name: "Paleta Lebrun", stock: 3 },
  { name: "Pelotas (x6)", stock: 0 },
  { name: "Goma Tenergy", stock: 5 },
];
```

1. Una función `ProductCard(producto)` que reciba un producto y devuelva el HTML
   de su tarjeta (nombre y stock) como string.
2. Una función `renderCatalog(list)` que pinte el catálogo dentro del `<div>`,
   transformando el arreglo con `map` y uniéndolo con `join`.
3. Conectar la casilla **"Mostrar solo con stock"**: cuando está marcada, se
   pintan solo los productos con `stock > 0`; cuando no, se pintan todos.
4. Pintar el catálogo completo al cargar la página.

---

## **🔗 Recursos útiles**

- [Document.querySelector (MDN)][mdn-qs]
- [EventTarget.addEventListener (MDN)][mdn-listener]
- [Element.innerHTML (MDN)][mdn-innerhtml]

[mdn-qs]: https://developer.mozilla.org/es/docs/Web/API/Document/querySelector "querySelector"
[mdn-listener]: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener "addEventListener"
[mdn-innerhtml]: https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML "innerHTML"
