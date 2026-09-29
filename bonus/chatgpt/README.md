## **Actividad en Clase: “Mini ChatGPT Markov en React Native”**

**Duración total:** ~120 minutos  
**Objetivo:** portar una cadena de Markov de Python a JavaScript y usarla en una app React Native para simular un “chatbot” muy simple.

---

* **Modalidad de trabajo:** Individual
* **Requisitos previos:**

  * Node.js ≥ 24
  * Expo + Expo Go
  * Proyecto base con React Native + Nativewind funcionando
* **Repositorio recomendado:**

  * Usar Git y un repo personal en GitHub.

---

### **Instrucciones Generales**

1. Trabaja sobre un proyecto Expo existente o crea uno nuevo.
2. Asegúrate de tener Nativewind configurado.
<!-- 3. No usar librerías externas de IA/NLP/Markov: la lógica debe ser propia en JS. -->

---

## **Actividad / Ejercicios**

### 1) Portar la cadena de Markov a JavaScript

**Meta:** tener una función `generateText` en JS que reciba `startWord` y `length` y devuelva texto generado.

* Crea un archivo, por ejemplo `src/lib/markov.js`.
* Implementa en JS funciones equivalentes (o simplificadas) a las del código Python:

  * `tokenizeText(text)`
  * `buildMarkovModel(text)`
  * `generateText(startWord, length, transitionProbs, wordCounts)`
* Usa un string de entrenamiento embebido en el código (puede ser un párrafo cualquiera).
* Maneja el caso en que `startWord` no exista en el modelo (elige una palabra aleatoria o devuelve un mensaje de error controlado).

---

### 2) Interfaz de “chatbot” en React Native

**Meta:** mostrar un pequeño “chat” donde el usuario escribe una palabra inicial y el “bot” responde usando tu cadena de Markov.

1. En `App.js` (o una pantalla principal):

   * Construye el modelo al iniciar la app (`buildMarkovModel`).
   * Mantén en estado:

     * Lista de mensajes (`[{ id, author: "user" | "bot", text }]`).
     * Texto del input (`prompt`).
2. UI mínima con Nativewind:

   * Zona de mensajes (ScrollView o FlatList simple).
   * `TextInput` para que el usuario escriba la palabra inicial.
   * Botón “Enviar” que:

     * Agregue el mensaje del usuario.
     * Llame a `generateText` y agregue el mensaje del bot.
3. Diferencia visualmente usuario y bot usando clases de Nativewind (alineación y color de fondo distintos).

> **Tip:** fija un largo de respuesta, por ejemplo `length = 25`, para no complicar la interfaz.

---

## **Criterios de aceptación**

1. La app corre en Expo Go sin errores.
2. Al escribir una palabra y presionar el botón, se agrega el mensaje del usuario y luego una respuesta generada por el modelo.
3. La lógica de Markov está implementada a mano en JavaScript (sin librerías externas de IA).
4. La interfaz muestra claramente quién es el usuario y quién es el bot.
5. El caso de `startWord` inexistente no rompe la app (se maneja de forma controlada).

---

## **Extensiones opcionales**

* Permitir pegar un texto de entrenamiento distinto en un `TextInput` y reconstruir el modelo.
* Permitir elegir la cantidad de palabras generadas (slider o input numérico).
* Mostrar estadísticas simples (cantidad de palabras únicas, pares, etc.).

---

## **Recursos útiles**

* [Documentación React Native][recurso-principal]
* [Nativewind con Expo][recurso-secundario]
* [Regex en JavaScript][recurso-terciario]

[recurso-principal]: https://reactnative.dev/docs/getting-started "Documentación oficial de React Native"
[recurso-secundario]: https://www.nativewind.dev/quick-starts/expo "Quick start de Nativewind con Expo"
[recurso-terciario]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions "Guía de expresiones regulares en JavaScript"
