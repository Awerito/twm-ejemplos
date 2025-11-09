## **Actividad en Clase: JavaScript + DOM — Mini catálogo interactivo**

⏳ **Duración total:** ~120 minutos  

🎯 **Objetivo:** Practicar manipulación del DOM, arrays, funciones puras e inmutabilidad implementando un pequeño catálogo de productos con interacción básica.

---

* **Trabajo individual.**
* Se recomienda guardar el trabajo en repositorios **Git**.
* Usa navegador con consola.
* Sin bibliotecas externas.

---

### **📋 Instrucciones Generales**

* Crea un archivo `index.html` con los bloques indicados.
* Conecta la lógica implementada en `app.js`.
* Mantén funciones puras para renderizar y actualizar datos.
* Trabaja con arrays inmutables (`map`, `filter`, `...`).

---

## **🧩 Ejercicio único: Catálogo de productos**

HTML base:

```html
<section>
  <h2>Catálogo</h2>
  <form id="form">
    <input id="newName" placeholder="Nombre del producto">
    <input id="newStock" type="number" placeholder="Stock inicial">
    <button type="submit">Agregar</button>
  </form>

  <label>
    <input type="checkbox" id="onlyStock">
    Mostrar solo con stock
  </label>

  <div id="catalog"></div>
</section>
````

Datos iniciales en `app.js`:

```js
let products = [
  { id: 1, name: "Cuaderno", stock: 3 },
  { id: 2, name: "Lápiz", stock: 0 },
  { id: 3, name: "Mochila", stock: 5 }
];
```

Tareas:

1. Implementa `addProduct(list, name, stock)` → retorna un nuevo arreglo con el producto agregado.

2. Implementa `toggleStock(list, id)` → retorna un nuevo arreglo que cambia `stock` entre 0 y 1 (agotado/disponible mínimo).

3. Implementa `removeProduct(list, id)` → retorna un nuevo arreglo sin ese producto.

4. Implementa `ProductCard({ id, name, stock })` → devuelve un string HTML con el formato:

   ```html
   <div class="product" data-id="1">
     <h3>Cuaderno</h3>
     <p>Stock: 3</p>
     <button data-action="toggle">Cambiar stock</button>
     <button data-action="remove">Eliminar</button>
   </div>
   ```

5. Implementa `renderCatalog(list)` → pinta en `#catalog` con `map(ProductCard).join("")`.

6. Conecta el formulario para agregar productos (usar `trim` y `Number`).

7. Conecta el checkbox `#onlyStock` para filtrar los productos con `stock > 0`.

8. Usa delegación de eventos en `#catalog` para manejar clicks en botones `toggle` y `remove`.

9. Llama a `renderCatalog(products)` al cargar la página.

---

## 🔗 Enlaces

* [DOM en MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
* [addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
* [Array.map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Array.filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
