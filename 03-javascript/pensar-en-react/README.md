## **Actividad en Clase: Pensar como React (sin React)**

⏳ **Duración total:** ~120 minutos  
🎯 **Objetivo:** Imitar el modelo mental de React usando JavaScript puro:
funciones puras que reciben "props" y devuelven una vista, estado **inmutable**
(`map` + spread, como `setState`) y la idea de que la vista siempre se arma a
partir del estado (`render = f(estado)`).

---

- **Trabajo individual o en parejas.**
- Requiere **Node.js ≥ 18** (o navegador con consola).
- Sin librerías externas.

---

### **📋 Instrucciones Generales**

1. Crea un archivo `standings.js` y ejecútalo con `node standings.js`.
2. Trabaja de forma **inmutable**: nunca modifiques el arreglo original; las
   funciones devuelven versiones nuevas.
3. Mantén las funciones **puras**: misma entrada → misma salida, sin efectos.

---

## **🧩 Ejercicio único: Tabla de posiciones de tenis de mesa**

Trabajas en consola con un grupo de jugadores que parten en cero. La idea es
imitar cómo funciona React: hay un estado (los jugadores y sus puntos), cada
jugada genera un estado nuevo sin modificar el anterior, y la tabla en pantalla
siempre se arma a partir del estado actual.

Estado inicial (dado):

```js
const players = [
  { name: "Félix Lebrun", points: 0 },
  { name: "Fan Zhendong", points: 0 },
  { name: "Tomokazu Harimoto", points: 0 },
];
```

1. Una función que, dado un jugador, devuelva su línea de texto para la tabla
   (nombre y puntos), por ejemplo `"Félix Lebrun — 3 pts"`.
2. Una función que arme la tabla completa: ordena a los jugadores de más a menos
   puntos y los muestra uno por línea, **sin alterar** el arreglo original.
3. Una función que registre puntos a un jugador y devuelva una **versión nueva**
   del grupo, dejando el original intacto.
4. Simular varias jugadas encadenadas, volviendo a mostrar la tabla después de
   cada una.
5. Al final, mostrar el estado inicial otra vez para comprobar que nunca se
   modificó.

> 💡 **Tip:** `sort` modifica el arreglo en sitio. Si quieres ordenar sin mutar,
> ordena sobre una copia (`[...list].sort(...)`).

---

## **🔗 Recursos útiles**

- [Array: map / filter (MDN)][mdn-array]
- [Spread syntax (MDN)][mdn-spread]
- [Pensar en React (React Docs)][react-thinking]

[mdn-array]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array "Métodos de arreglos"
[mdn-spread]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax "Spread syntax"
[react-thinking]: https://react.dev/learn/thinking-in-react "Thinking in React"

<!-- gist -->
