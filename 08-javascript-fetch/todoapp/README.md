## **Actividad en Clase: “Todo API” (React + FastAPI)**

⏳ **Duración:** 120 minutos  
🎯 **Objetivo:** Consumir una API REST real con `useEffect`, manejando
carga/errores y un CRUD mínimo de tareas.

---

* Trabajo individual (apoyo en parejas opcional).
* Requiere **Node.js ≥ 24.x** y **Yarn**.
* Proyecto con **Vite + React (JS)**.
* Backend disponible en `https://todo.grye.org`

---

### **📋 Setup front**

```bash
yarn create vite todo --template react-swc
cd todo
yarn
yarn dev
```

Setea el api con un archivo `.env`:

```env
VITE_API_URL=https://todo.grye.org
```

---

## **🧩 Lo que debes implementar con la API**

1. **Healthcheck (banner para clases, quitar en producción)**

   * Hacer `GET /` al cargar la app.
   * Mostrar el JSON de salud del backend en un banner claramente marcado:
   “healthcheck para clases — quitar en producción”.

2. **Listado de Todos**

   * Consumir `GET /todos` al montar.
   * Renderizar la lista.
   * Manejar estados de **carga**, **error** y **lista vacía**.

3. **Crear Todo**

   * Enviar `POST /todos` con JSON `{ "title": string }` (puedes incluir
   `description` opcional).
   * Tras crear, **refrescar** el listado o insertar el nuevo ítem en pantalla.

4. **Toggle de completado**

   * Enviar `PUT /todos/{id}/toggle`.
   * Actualizar inmediatamente el estado del ítem en pantalla.

5. **Eliminar Todo**

   * Enviar `DELETE /todos/{id}`.
   * Remover el ítem del listado.

6. **Estados y UX mínima**

   * Indicadores visibles de **cargando** / **error**.
   * Deshabilitar controles mientras se envían solicitudes.
   * Validar que el título no esté vacío antes de crear.

---

## **🔗 Base URL**

```
BASE = VITE_API_URL  (ej: https://todo.grye.org)
```

Todas las rutas de abajo son relativas a `BASE`.

---

## **📚 Documentación del API**

### 1) `GET /` — Healthcheck

**Respuesta 200**

```json
{
  "status": "ok",
  "name": "Todo API",
  "version": "1.0.1",
  "env": "prod"
}
```

---

### 2) `GET /todos` — Listar todos

**Respuesta 200**

```json
[
  {
    "id": "68fa7f93504fdd58bf2593a4",
    "title": "Buy milk",
    "description": null,
    "completed": false,
    "created_at": "2025-10-23T12:34:56Z",
    "updated_at": "2025-10-23T12:34:56Z"
  }
]
```

---

### 3) `POST /todos` — Crear todo

**Body (application/json)**

```json
{
  "title": "Read a book",
  "description": "Chapter 1 tonight",
  "completed": false
}
```

**Respuestas**

* **201**: objeto `TodoOut` creado (misma forma que en el listado).
* **422**: validación (p. ej., título vacío).

---

### 4) `PUT /todos/{todo_id}/toggle` — Cambiar completado

**Parámetros**

* `todo_id`: `string` (ObjectId válido)

**Respuesta 200**

```json
{
  "id": "68fa7f93504fdd58bf2593a4",
  "title": "Read a book",
  "description": "Chapter 1 tonight",
  "completed": true,
  "created_at": "2025-10-23T12:34:56Z",
  "updated_at": "2025-10-23T13:10:01Z"
}
```

---

### 5) `DELETE /todos/{todo_id}` — Eliminar todo

**Respuestas**

* **204** sin cuerpo si se eliminó.
* **404** si no existe.

---

## **🧪 Criterios de aceptación (mínimos)**

1. La app consulta `GET /` al cargar y muestra un **banner** de healthcheck con
   la advertencia: **“quitar en producción”**.
2. La app lista tareas con `GET /todos`, mostrando estados de **carga**,
   **error** y **vacío**.
3. Crear tarea con `POST /todos` y **actualizar** el listado inmediatamente.
4. Toggle con `PUT /todos/{id}/toggle` y **reflejar el cambio** en UI.
5. Borrar con `DELETE /todos/{id}` y **remover** de la lista.
6. Validación básica del título y controles deshabilitados durante solicitudes.

---

## **🧪 Pruebas rápidas (opcional con Swagger)**

Entra a [todo docs](https://todo.grye.org/docs) para probar los endpoints con
cURL o Postman.

---

## **Notas**

* Usa `VITE_API_URL` para apuntar al backend.
* Los `id` son **ObjectId** hexadecimales; una forma inválida devolverá
**400/422**.

El diseño y modelado de la web app es libre: define estructura, estilos y
organización a tu criterio.
