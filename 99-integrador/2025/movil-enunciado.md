# **Proyecto: Desarrollo de Aplicación Móvil – Sistema de Venta de Tickets**

**Duración total: 3 semanas**

**Objetivo:** Aplicar conocimientos sobre desarrollo de aplicaciones móviles nativas con React Native para implementar una versión móvil completa de la aplicación web desarrollada en el Proyecto Integrador 1, consumiendo la misma API REST del backend en FastAPI.

---

1. **Trabajo grupal (mismo equipo del Proyecto 1: 3–4 personas)**
2. **Proyecto:** Desarrollar una **aplicación móvil nativa con React Native y NativeWind** que replique todas las funcionalidades de la aplicación web del Proyecto Integrador 1, consumiendo el mismo [**backend en FastAPI**](https://tickets.grye.org/docs).

---

### **Instrucciones Generales**

1. Consumir el mismo API público del Proyecto 1 (basado en FastAPI y MongoDB).
2. Crear un nuevo repositorio donde almacenarán el código del proyecto móvil (React Native + NativeWind).
3. Implementar **todas las funcionalidades** disponibles en la versión web.
4. No se debe modificar el backend. El objetivo es construir un **cliente móvil nativo funcional**.

---

### **Enunciado**

Se requiere desarrollar una aplicación móvil nativa que permita a los usuarios visualizar y comprar tickets de distintos eventos directamente desde sus dispositivos móviles.

La aplicación debe ser un **port nativo** de la versión web desarrollada en el Proyecto Integrador 1, manteniendo todas sus funcionalidades y consumiendo los mismos endpoints del backend.

Los usuarios deben poder:

* Listar todos los eventos disponibles con su información general (nombre, categoría, fecha, ubicación e imagen).
* Visualizar los distintos tipos de ticket y su disponibilidad.
* Seleccionar un evento y crear una **reserva temporal** de entradas.
* Confirmar la compra de la reserva a través de un **checkout** simulado.
* Visualizar el historial de compras realizadas (con total, tipo de ticket y fecha).

El API ya dispone de las siguientes rutas:

* `/events` → listar y crear eventos
* `/reservations` → crear reservas temporales
* `/checkout` → confirmar una compra
* `/purchases` → consultar compras realizadas

El objetivo del proyecto es construir la aplicación móvil nativa que consuma correctamente este flujo.

---

### **Requerimientos mínimos**

* Pantalla de inicio con listado de eventos y buscador.
* Vista de detalle del evento con tickets y botón de reserva.
* Flujo de reserva y confirmación de compra (checkout).
* Vista de historial de compras.
* Manejo correcto del estado y asincronía (React Hooks).
* Navegación móvil nativa y diseño coherente.

---

**Fechas e Instrucciones de Entrega:**

1. **Fecha de Entrega:**

   * **Fecha:** 2025-12-11
   * **Descripción:** Entrega del url del repositorio en GitHub del código fuente implementado de la aplicación móvil con React Native + NativeWind.
   * **Método de Entrega:** [email](mailto:diego.munozviveros@ulagos.cl)

> **Nota 1:** La build se probará en un dispositivo Android (Xiaomi 14T), para asegurar que funciona en ese dispositivo a la hora de entregar.  
> **Nota 2:** Jueves se muestran avances en clase (presetación simple 'donde estamos - hacia donde vamos - que nos falta').

---

**Recomendación:** Comienza configurando el proyecto base con React Native +
NativeWind lo antes posible. Reutiliza la lógica de negocio de la versión web
adaptándola a React Native, pero respeta las convenciones y mejores prácticas
del desarrollo móvil nativo. ¿Algo de lo que usaron anteriormente sirve acá?
