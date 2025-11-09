## **🔗 Setup básico de JavaScript en Windows**

La mayoría usará **Windows** y **Visual Studio Code**. Estos son los pasos iniciales para preparar el entorno de desarrollo con JavaScript.

---

### **1. Instalar Node.js y npm**
- [Descarga oficial de Node.js para Windows (LTS recomendado)](https://nodejs.org/en/download/)  
- Node incluye **npm**, que permite instalar paquetes.  
- Verificar la instalación en **PowerShell** o **CMD**:  
  ```bash
  node -v
  npm -v
  ```


👉 En Linux/macOS se recomienda usar **nvm**: [Guía oficial de nvm](https://github.com/nvm-sh/nvm)

---

### **2. Instalar Visual Studio Code**

* [Descarga oficial de VS Code](https://code.visualstudio.com/)

---

### **3. Extensiones recomendadas en VS Code**

* [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) (atajos para escribir más rápido)
* [Prettier – Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (formatea automáticamente el código)
* [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) (plantillas de código JS)

---

### **4. Configuración recomendada en VS Code**

En **Configuración → Guardar** activa:

* **Format on Save** (para que Prettier ordene tu código automáticamente al guardar).
* Usa siempre `UTF-8` como codificación.

---

### **5. Habilitar ejecución de scripts en PowerShell**

Abre **PowerShell** como administrador y ejecuta:

```bash
Set-ExecutionPolicy RemoteSigned
```

---

# Enlaces de interes

- [Repositorio de apuntes](https://github.com/Awerito/tecnologias-web-apuntes)
- [Repositorio de plantilla React + TailwindCSS](https://github.com/Awerito/react-vite-tailwind-template.git) ***NEW!***
- [Repositorio de plantilla React + Mantine](https://github.com/Awerito/react-mantine-template) ***DEPRECATED!***
- [Repositorio de ejemplos](https://github.com/Awerito/react-examples) ***DEPRECATED!***
