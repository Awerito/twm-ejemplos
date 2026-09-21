## **Actividad en Clase: “Todo API” (React + JSONPlaceholder)**

⏳ **Duración:** 120 minutos  
🎯 **Objetivo:** Consumir una API REST real desde eventos del usuario,
manejando carga/errores y un CRUD mínimo de tareas.

---

* Trabajo individual (apoyo en parejas opcional).
* Requiere **Node.js ≥ 24.x** y **pnpm**.
* Proyecto con **Vite + React (JS)**.
* API pública: **JSONPlaceholder**, la misma de la clase. Sin key y sin setup.

---

### **📋 Setup front**

```bash
pnpm create vite todo --template react-swc
cd todo
pnpm install
pnpm dev
```

Setea el api con un archivo `.env`:

```env
VITE_API_URL=https://jsonplaceholder.typicode.com
```

---

## **⚠️ Esta API finge las escrituras**

`POST`, `PATCH` y `DELETE` responden como corresponde, pero **no guardan nada**.
El `POST` siempre devuelve `id: 201` y ese recurso no existe después.

Eso no es un problema para la actividad, es parte del ejercicio: la UI se
actualiza con **lo que responde el servidor**, no recargando la lista. Si
recargas, vuelven los datos originales.

---

## **🧩 Lo que debes implementar con la API**

1. **Listado de Todos**

   * Consumir `GET /todos` desde un botón "Cargar tareas".
   * Renderizar la lista.
   * Manejar estados de **carga**, **error** y **lista vacía**.

2. **Crear Todo**

   * Enviar `POST /todos` con JSON `{ "title": string, "completed": false,
   "userId": 1 }`.
   * Insertar en pantalla el objeto que devuelve la respuesta.

3. **Toggle de completado**

   * Enviar `PATCH /todos/{id}` con `{ "completed": true|false }`.
   * Actualizar el ítem en pantalla con la respuesta.

4. **Eliminar Todo**

   * Enviar `DELETE /todos/{id}`.
   * Remover el ítem del listado.

5. **Estados y UX mínima**

   * Indicadores visibles de **cargando** / **error**.
   * Validar `response.ok` antes de leer el JSON.
   * Deshabilitar controles mientras se envían solicitudes.
   * Validar que el título no esté vacío antes de crear.

---

## **🔗 Base URL**

```
BASE = VITE_API_URL  (https://jsonplaceholder.typicode.com)
```

Todas las rutas de abajo son relativas a `BASE`.

---

## **📚 Documentación del API**

### 1) `GET /todos` — Listar todos

**Respuesta 200**

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
]
```

Son 200 tareas. Para la actividad puedes quedarte con las primeras usando
`GET /todos?_limit=10`.

---

### 2) `POST /todos` — Crear todo

**Body (application/json)**

```json
{
  "title": "Leer",
  "completed": false,
  "userId": 1
}
```

**Respuesta 201**

```json
{
  "title": "Leer",
  "completed": false,
  "userId": 1,
  "id": 201
}
```

El `id` es siempre `201`, sin importar cuántas veces lo llames.

---

### 3) `PATCH /todos/{id}` — Cambiar completado

**Body (application/json)**

```json
{ "completed": true }
```

**Respuesta 200**: el todo completo con el campo ya cambiado.

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": true
}
```

---

### 4) `DELETE /todos/{id}` — Eliminar todo

**Respuesta 200** con cuerpo vacío `{}`.

---

### 5) Códigos que vas a ver

* `200` lectura o actualización correcta.
* `201` creación correcta.
* `404` id inexistente, por ejemplo `GET /todos/9999`.

Recuerda que `fetch` **no lanza error** con un `404`. Hay que revisar
`response.ok` a mano.

---

## **🧪 Criterios de aceptación (mínimos)**

1. La app lista tareas con `GET /todos` desde un botón, mostrando estados de
   **carga**, **error** y **vacío**.
2. Crear tarea con `POST /todos` e insertar en pantalla lo que devuelve la
   respuesta.
3. Toggle con `PATCH /todos/{id}` y **reflejar el cambio** en UI.
4. Borrar con `DELETE /todos/{id}` y **remover** de la lista.
5. Se valida `response.ok` y se muestra el código cuando falla.
6. Validación básica del título y controles deshabilitados durante solicitudes.

---

## **🧪 Pruebas rápidas**

Antes de escribir React, prueba los endpoints desde la terminal:

```bash
curl -s https://jsonplaceholder.typicode.com/todos/1
curl -s -X POST https://jsonplaceholder.typicode.com/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Leer","completed":false,"userId":1}'
```

---

## **Notas**

* Usa `VITE_API_URL` para apuntar al backend.
* Los `id` son números. Uno inexistente devuelve `404`.

El diseño y modelado de la web app es libre: define estructura, estilos y
organización a tu criterio.

<!-- gist -->
