## **Proyecto: Desarrollo de Aplicación Móvil – Técnico en Terreno**

**Duración: semanas 23 a 33 (RA2)**

**Objetivo:** Aplicar conocimientos sobre desarrollo de aplicaciones móviles
nativas con React Native para implementar el cliente del técnico en terreno,
consumiendo el mismo backend del RA1.

---

1. **Trabajo grupal (mismo equipo del RA1)**
2. **Proyecto:** Desarrollar una **aplicación móvil en React Native** que
   consuma el [**backend ULA Monitors**](https://ulamonitors-uat-back.grye.org/docs),
implementando la aplicación del técnico que visita los centros de cultivo
para resolver intervenciones y registrar sensores.

---

### **Instrucciones Generales**

1. Consumir el mismo API del RA1 (basado en FastAPI y MongoDB).
2. Crear un nuevo repositorio donde almacenarán el código del proyecto móvil.
3. No se debe modificar el backend. El objetivo es construir un **cliente
   móvil nativo funcional**.
4. Cada grupo recibe credenciales de **técnico**, distintas a las del RA1.

---

### **Enunciado**

En el RA1 construyeron el panel del administrador: una aplicación que lee casi
todo y cuya única escritura es abrir una intervención cuando detecta un
problema. Esa intervención queda abierta hasta que alguien va al centro de
cultivo y la resuelve.

Ese alguien es el técnico en terreno, y esta aplicación es su herramienta de
trabajo. El técnico **escribe**: cierra intervenciones y registra sensores.
La lectura es solo la necesaria para saber qué tiene que hacer y dónde.

Los usuarios deben poder:

* Autenticarse con usuario y contraseña de técnico, y mantener la sesión.
* Ver las intervenciones abiertas, que son su trabajo pendiente, con filtro
  por centro.
* Ver el detalle de una intervención: centro, sensor afectado si lo hay,
  motivo, quién la abrió y cuándo.
* Cerrar una intervención indicando el resultado y notas opcionales.
* Ver un centro con sus sensores y el estado de cada uno, para saber qué
  revisar al llegar.
* Registrar un sensor nuevo en un centro: nombre, posición, profundidad y
  rango de oxígeno.

El API ya dispone de las siguientes rutas:

* `/token` → autenticación, devuelve un JWT
* `/interventions` → listar intervenciones; `?status=open` es el trabajo
  pendiente
* `/interventions/{id}` → cerrar una intervención
* `/sites` → listar centros y ver su detalle con sensores
* `/sensors` → registrar un sensor en un centro

Cerrar una intervención requiere el `outcome`: `back_online`, `replaced`,
`reconfigured` o `no_fault_found`. El servidor registra quién la cerró y
cuándo a partir del token. Una intervención ya cerrada responde 409.

Registrar un sensor requiere `oxygen_min` menor que `oxygen_max`; si no,
el API responde 400. La posición es `jaula` o `ponton`.

Las credenciales del RA1 **no sirven** para escribir: el scope `field` es
exclusivo del técnico.

---

### **Requerimientos mínimos**

* Pantalla de login y manejo del token en las peticiones siguientes.
* Lista de intervenciones abiertas con filtro por centro.
* Detalle de intervención con formulario de cierre.
* Vista de centro con sus sensores y estado.
* Formulario para registrar un sensor.
* Manejo de las respuestas de error del API en pantalla: credenciales o
  scope inválidos, intervención ya cerrada, rango de oxígeno inválido.
* Manejo correcto del estado y asincronía (React Hooks).
* Navegación móvil nativa y diseño coherente.

El API habla en hora de Chile en los dos sentidos: se consulta en hora chilena
y responde en hora chilena. No hay conversiones que hacer.

---

**Fechas e Instrucciones de Entrega:**

1. **Avance 1 (15%)**

   * **Fecha:** jueves 26 de noviembre
   * **Descripción:** Presentación de avance.

2. **Avance 2 (15%)**

   * **Fecha:** jueves 10 de diciembre
   * **Descripción:** Presentación de avance.

3. **Entrega Móvil (20%)**

   * **Fecha:** martes 22 de diciembre
   * **Descripción:** Entrega del url del repositorio en GitHub del código
   fuente implementado.

> **Nota:** La build se probará en un dispositivo Android, para asegurar que
> funciona en ese dispositivo a la hora de entregar.
