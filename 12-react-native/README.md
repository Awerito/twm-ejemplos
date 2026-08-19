# **Actividad en Clase: “Hola Mundo” con React Native (Expo)**

⏳ **Duración total:** 60 min  
🎯 **Objetivo:** crear un proyecto React Native usando **Expo**, ejecutarlo con
**Metro Bundler** y visualizarlo en el **teléfono real**.

---

## **📋 Requisitos Previos**

* **Node.js ≥ 24.x**  
* **Yarn**  
* Teléfono Android o iPhone con **Expo Go**  
* Ambos dispositivos conectados a la **misma red Wi-Fi**

---

# **1) Crear el proyecto**

## Comando principal

```bash
yarn create expo hello-rn
cd hello-rn
yarn start
```

Esto abrirá **Expo Dev Tools** (el panel de desarrollo) en el navegador.

---

# **2) Ajuste obligatorio de Yarn**

React Native/Expo no funcionan bien con **Plug’n’Play (PnP)** de Yarn moderno.

Crea el archivo **.yarnrc.yml** en el proyecto:

```yaml
nodeLinker: node-modules
```

Luego ejecuta:

```bash
yarn install
```

---

# **3) Ejecutar el servidor**

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

# **4) Ver la app en el celular**

## Android

1. Abre **Expo Go**
2. Toca **Scan QR Code**
3. Escanea el QR del panel de Expo

## iOS

1. Abre la **cámara**
2. Apunta al QR
3. Toca la notificación que abrirá **Expo Go**

---

# **5) Editar el Hola Mundo**

Abre `App.js`:

```js
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native</Text>
      <Text style={styles.subtitle}>Running on my phone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: { fontSize: 28 },
  subtitle: { fontSize: 18, opacity: 0.8, marginTop: 8 }
});
```

Guarda el archivo y la app se recargará automáticamente en el celular.

---

# **🎉 Resultado final esperado**

* Proyecto creado con Expo
* Metro Bundler ejecutándose
* App visible y funcionando en el teléfono
* Primer render `"Hello React Native"` personalizado
