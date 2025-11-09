## **Actividad en Clase: JavaScript práctico con patrones de React**

⏳ **Duración total:** \~120 minutos  
🎯 **Objetivo:** Aplicar funciones, closures, arrays funcionales, inmutabilidad
y destructuring para construir mini-programas que imitan cómo React maneja
estado, props y renderizado.

---

* **Trabajo individual o en parejas (recomendado).**
* Se recomienda guardar el trabajo en repositorios **Git**.
* Usa **Node.js ≥ 23** o navegador con consola.
* Sin bibliotecas externas.

---

### **📋 Instrucciones Generales**

* Crea un archivo nuevo por ejercicio (`ej1.js`, `ej2.js`, …).
* Al terminar cada ejercicio, usa `console.log` para probar resultados.
* No mutar arrays/objetos originales: trabaja de forma inmutable.

---

## **🧩 Ejercicios**

### 1) Contadores y estado interno

**Meta:** Practicar closures para encapsular valores.

1. Implementa `makeCounter(initial=0)` con métodos `next` y `reset`.
2. Implementa `makeToggle(initial=false)` con métodos `get` y `toggle`.
3. Crea dos instancias de cada uno y demuestra que funcionan de manera
   independiente.

---

### 2) Lista de tareas

**Meta:** Practicar inmutabilidad y arrays funcionales.

```js
const tasks = [
  { id: 1, text: "Leer", done: false },
  { id: 2, text: "Ejercitar", done: true }
];
```

1. Marca como hecha la tarea con `id=1` sin mutar `tasks`.
2. Agrega una tarea nueva con id=3.
3. Borra la tarea con id=2.
4. Usa `map` para devolver un arreglo de strings:

   * `"✅ Texto"` si `done === true`
   * `"⬜ Texto"` si `done === false`

---

### 3) Productos y render condicional

**Meta:** Transformar datos con `filter` y condicionales.

```js
const products = [
  { id: 1, name: "Laptop", stock: 3 },
  { id: 2, name: "Mouse", stock: 0 },
  { id: 3, name: "Teclado", stock: 5 }
];
```

1. Filtra los productos con stock > 0.
2. Devuelve un arreglo de strings:

   * `"Laptop (3 disponibles)"`
   * `"Producto agotado: Mouse"`
3. Haz una función `renderProducts(arr)` que reciba el array y devuelva todos
   los strings unidos con `\n`.

---

### 4) Usuarios y “props”

**Meta:** Usar destructuring como si fueran props.

```js
const users = [
  { id: 1, name: "Ana", age: 22, active: true },
  { id: 2, name: "Luis", age: 19, active: false }
];
```

1. Haz una función `formatUser({ name, age })` que devuelva `"Ana (22)"`.
2. Usa `map` para formatear todos los usuarios.
3. Extiende `formatUser` para incluir `"Activo"` o `"Inactivo"`.
4. Haz `renderUsers(list)` que devuelva un string con cada usuario en una
   línea.

---

### 5) Pequeño “renderizador de tarjetas”

**Meta:** Simular componentes con funciones puras.

```js
const articles = [
  { id: 1, title: "Intro a JS", content: "Variables, funciones y arrays." },
  { id: 2, title: "Patrones de React", content: "Estado y props." }
];
```

1. Haz una función `Card({ title, content })` que devuelva un string:

   ```
   === Intro a JS ===
   Variables, funciones y arrays.
   ```

2. Usa `map` para transformar todos los artículos en tarjetas.

3. Crea una función `render(list)` que devuelva todas las tarjetas
   concatenadas.

---

## 🔗 Enlaces

* [Closures en JS (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)
* [Array map/filter/reduce (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Destructuring assignment (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
