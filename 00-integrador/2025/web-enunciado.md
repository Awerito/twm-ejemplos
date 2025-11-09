## **Proyecto: Desarrollo de Aplicación Web – Sistema de Venta de Tickets**

⏳ **Duración total: 4 semanas x Entregas**

🎯 **Objetivo:** Aplicar conocimientos sobre desarrollo de aplicaciones web y
consumo de APIs REST para implementar una aplicación cliente que interactúe con
un servicio backend real desarrollado en FastAPI.

---

1. **Trabajo grupal (3–4 personas)**
2. **Proyecto:** Desarrollar una **aplicación web en React** que consuma un
   [**backend en FastAPI**](https://tickets.grye.org/docs), implementando un
flujo completo de visualización, reserva y compra de tickets para eventos.

---

### **📋 Instrucciones Generales**

1. Consumir el API público entregado (basado en FastAPI y MongoDB).
2. Crear un repositorio donde almacenarán el código del proyecto (React + Vite).
3. Desplegar la aplicación en línea (por ejemplo, en **Vercel** o **Netlify**).
4. No se debe modificar el backend. El objetivo es construir un **frontend
   funcional**.

---

### **🎟️ Enunciado**

Se requiere desarrollar una aplicación web que permita a los usuarios
visualizar y comprar tickets de distintos eventos.
El sistema debe consumir los endpoints del backend, mostrando la información en
una interfaz moderna y fácil de usar.

Los usuarios deben poder:

* Listar todos los eventos disponibles con su información general (nombre,
categoría, fecha, ubicación e imagen).
* Visualizar los distintos tipos de ticket y su disponibilidad.
* Seleccionar un evento y crear una **reserva temporal** de entradas.
* Confirmar la compra de la reserva a través de un **checkout** simulado.
* Visualizar el historial de compras realizadas (con total, tipo de ticket y fecha).

El API ya dispone de las siguientes rutas:

* `/events` → listar y crear eventos
* `/reservations` → crear reservas temporales
* `/checkout` → confirmar una compra
* `/purchases` → consultar compras realizadas

El objetivo del proyecto es construir la aplicación cliente que consuma
correctamente este flujo.

---

### **🧠 Requerimientos mínimos**

* Página de inicio con listado de eventos y buscador.
* Vista de detalle del evento con tickets y botón de reserva.
* Flujo de reserva y confirmación de compra (checkout).
* Vista de historial de compras.
* Manejo correcto del estado y asincronía (React Hooks).
* Diseño coherente y navegación clara.

---

💬 **Fechas e Instrucciones de Entrega:**

1. **Fecha de Entrega:**

   * **Fecha:** 2025-11-13
   * **Descripción:** Entrega del url de la página levantada en `producción` de
   la aplicación desarrollada + url del repositorio en github del código fuente
   implementado.
