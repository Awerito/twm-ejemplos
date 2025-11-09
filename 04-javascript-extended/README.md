## **Actividad en Clase: Introducción práctica a JavaScript (ES6+)**

⏳ **Duración total:** 60 minutos  
🎯 **Objetivo:** Familiarizarse con la sintaxis de JavaScript y aplicar
conceptos básicos (tipos, ámbito, funciones, arrays y objetos) resolviendo
problemas cortos.  

---

- **Trabajo individual**  
- No es necesaria una entrega formal, pero se recomienda desde ya ir guardando
los ejercicios en repositorios **Git** y, mejor aún, en **GitHub**.  

---

### **📋 Instrucciones Generales**

- Usa **ES6+** con `let` y `const` cuando corresponda.  
- Puedes trabajar en **Node.js ≥ 18** o en el navegador con consola.  
- No uses librerías externas.  
- Crea archivos mínimos por ejercicio (p. ej., `index.js`).  

---

## **🧩 Ejercicios**

### 1) Tipos, coerción y comparación estricta
**Meta:** Identificar resultados y explicar por qué.  

1. Predice el resultado y luego ejecútalo para verificar:
   - `"5" + 3`
   - `"5" - 3`
   - `true + true`
   - `[] == 0`
   - `[] === 0`
   - `null == undefined`
   - `Number("  42 ")`
   - `Boolean("false")`

2. Explica **dos** casos donde tu predicción haya fallado y qué regla de
   coerción lo justifica.

---

### 2) Ámbito y mutabilidad: `var` vs `let` vs `const`
**Meta:** Comprender diferencias de declaración.  

1. Crea un archivo que defina tres variables con `var`, `let` y `const` dentro
   de un bloque (`{ }`) y muestra si son accesibles fuera del bloque.  
2. Demuestra con un ejemplo qué ocurre al **redeclara**r con `var` y al
   **reasigna**r una `const`. Explica el error real obtenido.  

---

### 3) Funciones y contador simple
**Meta:** Practicar funciones normales y anónimas.  

1. Declara una función normal `makeCounter` que reciba un número inicial y
   devuelva un objeto con dos funciones anónimas:  
   - `next`: suma 1 al contador y lo devuelve.  
   - `reset`: reinicia el contador al valor inicial.  

2. Prueba el contador mostrando al menos tres llamadas a `next()` y luego un
   `reset()`.  

---

### 4) Arrays: map/filter/reduce con dataset
**Meta:** Transformaciones funcionales.  

```js
const users = [
  { id: 1, name: "Ana",  age: 22, active: true },
  { id: 2, name: "Luis", age: 19, active: false },
  { id: 3, name: "Sol",  age: 27, active: true },
  { id: 4, name: "Max",  age: 27, active: false }
];
````

1. Obtén un arreglo con los **nombres** de quienes `active === true`.
2. Calcula la **edad promedio** (número con 1 decimal).
3. Construye un **mapa por edad**: `{ 22: ["Ana"], 19: ["Luis"], 27: ["Sol","Max"] }` usando `reduce`.

---

### 5) Objetos, destructuring y spread

**Meta:** Inmutabilidad y combinación.

```js
const base = { retries: 3, timeout: 1000, headers: { "X-App": "demo" } };
const override = { timeout: 3000, headers: { Authorization: "Bearer token" } };
```

1. Crea `merged` sin mutar `base`:

   * `timeout` debe ser `3000`
   * `headers` debe contener **ambos** pares (`"X-App"` y `Authorization`)

2. Usa destructuring para extraer `timeout` y el resto en otro objeto `rest`.

---

### 6) Funciones anónimas en callbacks

**Meta:** Comprender uso de funciones anónimas.

1. Crea un arreglo de números del 1 al 10.
2. Usa `forEach` con una función anónima para imprimir solo los números pares.
3. Usa `map` con una función anónima para devolver un nuevo arreglo con cada
   número elevado al cuadrado.

---

## 🔗 Enlaces

* [MDN Web Docs – JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
* [Tipos y gramática en JS (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types)
* [Funciones en JS (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions)
* [Array y métodos map/filter/reduce (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Destructuring y spread (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Guía rápida de Git y GitHub](https://guides.github.com/introduction/git-handbook/)
