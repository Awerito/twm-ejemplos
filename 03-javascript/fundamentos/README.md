## **Actividad en Clase: Introducción práctica a JavaScript (ES6+)**

⏳ **Duración total:** ~60 minutos  
🎯 **Objetivo:** Familiarizarse con la sintaxis moderna de JavaScript (tipos,
funciones, `map`/`filter`/`reduce`, destructuring, spread y closures)
construyendo un pequeño reporte de **estadísticas de lectura** en consola.

---

- **Trabajo individual.**
- Requiere **Node.js ≥ 18** (o navegador con consola).
- Sin librerías externas.
- Se recomienda guardar el trabajo en repositorios **Git/GitHub**.

---

### **📋 Instrucciones Generales**

1. Crea un archivo `stats.js` y ejecútalo con `node stats.js`.
2. Usa **ES6+**: `const`/`let`, arrow functions, template strings.
3. Trabaja de forma **inmutable** (`map`, `filter`, spread); no modifiques el
   arreglo original.
4. Ve imprimiendo el resultado de cada paso con `console.log`.

---

## **🧩 Ejercicio único: Estadísticas de lectura**

**Meta:** procesar un arreglo de libros y construir un reporte, paso a paso.

Dataset inicial (dado):

```js
const books = [
  { title: "El Quijote", pages: 863, year: 1605, read: true },
  { title: "Clean Code", pages: 464, year: 2008, read: false },
  { title: "Fahrenheit 451", pages: 256, year: 1953, read: true },
  { title: "El Hobbit", pages: 310, year: 1937, read: false },
];
```

1. **Pendientes vs leídos** — con `filter`, separa los leídos de los pendientes
   e imprime cuántos hay de cada uno.
2. **Formato** — con `map` + destructuring, transforma cada libro a una línea
   `"El Quijote (1605) — 863 págs"`.
3. **Totales** — con `reduce`, calcula el total de páginas leídas y el promedio
   de páginas por libro (1 decimal).
4. **Inmutabilidad** — marca `"Clean Code"` como leído **sin mutar** el arreglo
   original (`map` + spread). Imprime el original y la copia para comprobar que
   el original no cambió.
5. **Closure** — implementa `makeReadingTracker()` que devuelva
   `{ add(pages), total() }` con un acumulador interno; úsalo para sumar las
   páginas de dos sesiones de lectura.

> 💡 **Tip:** un *closure* es una función que "recuerda" una variable de su
> ámbito (`total`) aunque ya haya terminado de ejecutarse la función externa.
> Es la misma idea detrás del estado en React.

---

## **🔗 Recursos útiles**

- [MDN – JavaScript][mdn-js]
- [Array: map / filter / reduce (MDN)][mdn-array]
- [Destructuring y spread (MDN)][mdn-destructuring]
- [Closures (MDN)][mdn-closures]

[mdn-js]: https://developer.mozilla.org/es/docs/Web/JavaScript "Documentación de JavaScript"
[mdn-array]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array "Métodos de arreglos"
[mdn-destructuring]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment "Destructuring assignment"
[mdn-closures]: https://developer.mozilla.org/es/docs/Web/JavaScript/Closures "Closures en JavaScript"
