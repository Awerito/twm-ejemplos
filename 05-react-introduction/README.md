## **Actividad en Clase: Simulador de Propinas (Tip Calculator)**

⏳ **Duración total:** ~120 minutos  

🎯 **Objetivo:** Practicar React con Vite (estado, eventos, props) construyendo
un simulador de propinas tipo “pantalla de pago”.

---

- **Trabajo individual** (apoyo en parejas opcional).  
- Requiere **Node.js ≥ 23.x.x** y **Yarn**.  
- Proyecto con **Vite + React**.  

---

### **📋 Instrucciones Generales**

1. Crea un proyecto con Vite + React (`yarn create vite`).  
2. Limpia la plantilla inicial (borra logos y CSS innecesarios).  
3. Crea un componente `TipCalculator` y úsalo en `App.jsx`.  
4. Mantén estado con `useState`; no necesitas validaciones complejas.  

---

## **🧩 Ejercicios**

### 1) Monto y porcentaje
- Input para **monto** de la cuenta.  
- Botones de porcentaje: **15%**, **20%**, **25%**, y un botón **Custom**.  
- Muestra en pantalla:  
  - **Propina calculada**  
  - **Total = monto + propina**

---

### 2) Mensaje “meme”
- Si el porcentaje elegido **no es 20%**, muestra debajo:  
  - `"Most people tip 20% 😉"`  
- Si es 20%, no muestres nada.

---

### 3) Custom tip
- Si el usuario selecciona **Custom**, aparece un input adicional para escribir
el porcentaje.  
- Ese valor reemplaza al cálculo.  

---

### 4) Mejoras opcionales
- Marcar visualmente cuál botón está seleccionado.  
- Formatear los números con dos decimales.  
- (Extensión) Input “Split” para dividir la cuenta entre varias personas.  

---

## 🔗 Enlaces

- [Documentación oficial de React](https://react.dev/)  
- [useState (React Docs)](https://react.dev/reference/react/useState)  
- [Vite – Getting Started](https://vitejs.dev/guide/)
