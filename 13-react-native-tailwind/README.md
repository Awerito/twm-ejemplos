# **Actividad en Clase: Juego del Impostor con React Native + NativeWind**

⏳ **Duración total:** 60 min  
🎯 **Objetivo:** crear el juego del impostor usando **React Native**, **Expo**
y **NativeWind** (Tailwind), ejecutarlo con **Metro Bundler** y visualizarlo en
el **teléfono real**.

---

## **📋 Requisitos Previos**

* **Node.js ≥ 24.x**  
* **Yarn**  
* Teléfono Android o iPhone con **Expo Go**  
* Ambos dispositivos conectados a la **misma red Wi-Fi**

---

## **Crear el proyecto**

Comando principal:

```bash
npx rn-new --nativewind --yarn
```

* Elegir un nombre de proyecto (ej: `impostor-game`)
* Entrar al directorio:

```bash
cd impostor-game
```

Esto genera un proyecto Expo con:
* NativeWind ya configurado
* Tailwind v3
* Babel + Metro listos para usar

---

## **Ajuste obligatorio de Yarn**

React Native/Expo no funcionan bien con **Plug'n'Play (PnP)** de Yarn moderno.

Crea el archivo **.yarnrc.yml** en el proyecto:

```yaml
nodeLinker: node-modules
```

Luego ejecuta:

```bash
yarn install
```

---

## **Ejecutar el servidor**

Con el proyecto listo:

```bash
yarn start
```

Esto inicia el **Metro Bundler** y muestra:
* QR para abrir en el teléfono
* Opciones LAN / Tunnel / Local
* Botones para refrescar o reiniciar la app

> Tip: `yarn start --tunnel` es útil si la red bloquea conexiones LAN.

---

## **Ver la app en el celular**

**Android**
1. Abre **Expo Go**
2. Toca **Scan QR Code**
3. Escanea el QR del panel de Expo

**iOS**
1. Abre la **cámara**
2. Apunta al QR
3. Toca la notificación que abrirá **Expo Go**

---

## **El Juego del Impostor**

### **Reglas del juego:**

* Varios jugadores participan (3-8 personas recomendado)
* Un jugador es el **impostor** (elegido al azar)
* Todos los demás reciben una **palabra secreta** (ej: "Playa", "Sartén",
"Patata")
* El impostor **NO** sabe cuál es la palabra
* Los jugadores se turnan diciendo conceptos respecto de la palabra
* El impostor debe intentar no delatarse que no la sabe

---

## **Funcionalidad a implementar**

### **Pantalla inicial:**
* Elegir número de jugadores (3, 4, 5, 6, 7, 8)
* "Iniciar Juego"

### **Pantalla de juego:**
* Mostrar "Jugador 1, toca para ver tu rol"
* Revelar la palabra:
  - Si es impostor: "Eres el IMPOSTOR"
  - Si no es impostor: "La palabra es: [palabra]"
* Botón "Siguiente jugador"
* Botón "Reiniciar juego"

---

## **Componentes de React Native a usar**

* `SafeAreaView` - para respetar áreas seguras
* `View` - para contenedores
* `Text` - para mostrar texto
* `Pressable` - para botones interactivos
* `useState` - para manejar el estado del juego

---

## **Hints de implementación**

**Estado del juego:**
* Número de jugadores
* Jugador actual
* Array de roles (quién es impostor, cuál es la palabra)
* Si el juego ha comenzado
* Si se está mostrando el rol

**Lógica:**
* Elegir palabra aleatoria
* Elegir impostor aleatorio
* Pasar de jugador en jugador
* Reiniciar el juego

---

## **🎉 Resultado final esperado**

* Proyecto creado con Expo + NativeWind
* Metro Bundler ejecutándose
* App visible y funcionando en el teléfono
* Juego del impostor funcional con:
  - Selección de número de jugadores
  - Asignación aleatoria de impostor
  - Mostrar roles uno por uno
  - Reiniciar juego
  - Interfaz con Tailwind/NativeWind

<!-- gist -->
