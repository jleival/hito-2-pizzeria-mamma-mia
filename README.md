# 🍕 Pizzería Mamma Mía! - Hito 2 (Estados y Eventos en React)

> Aplicación web desarrollada en React que simula una pizzería, enfocada en la gestión de estados locales (`useState`), manejo de formularios, eventos de usuario y validaciones robustas.

---

## 📋 Descripción del Proyecto

Este proyecto corresponde al **Hito 2** del curso de desarrollo frontend. Su objetivo principal es implementar la lógica interactiva de la aplicación mediante la creación de componentes independientes para el **Registro de Usuarios** (`Register`) y el **Inicio de Sesión** (`Login`), asegurando una correcta validación de datos a través de reglas de negocio en JavaScript y React.

---

## 💻 Vista Previa y Despliegue (Preview)

Puedes visualizar la aplicación en funcionamiento directamente desde el siguiente enlace de despliegue en GitHub Pages:

🔗 [Pizzería Mamma Mía - Hito 2 en Vivo](https://jleival.github.io/hito-2-pizzeria-mamma-mia/)

---

## ✨ Características Principales

* **Formulario de Registro (`Register.jsx`):**
  * Validación de campos obligatorios (evitando espacios en blanco con `.trim()`).
  * Verificación de longitud mínima de contraseña (6 caracteres).
  * Comprobación de coincidencia exacta entre la contraseña y la confirmación de la misma.
  * Alertas dinámicas ante errores o éxito en el registro.

* **Formulario de Login (`Login.jsx`):**
  * Validación de campos obligatorios (Email y Password).
  * Control de longitud mínima de contraseña.
  * Mensajes de autenticación exitosa.

* **Arquitectura Modular y Componentes Reutilizables:**
  * Uso de componentes estructurales (`Navbar`, `Header`, `Home`, `Footer`).
  * Estilizados y componentes adaptados con **React Bootstrap**.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

* **React 18** (Functional Components & Hooks: `useState`)
* **Vite** (Entorno de desarrollo rápido)
* **React Bootstrap & Bootstrap 5** (Diseño responsivo y componentes visuales)
* **JavaScript (ES6+)**
* **Git & GitHub** (Control de versiones)

---

## 🚀 Guía de Instalación y Ejecución Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/jleival/hito-2-pizzeria-mamma-mia.git](https://github.com/jleival/hito-2-pizzeria-mamma-mia.git)

2. Entrar al directorio del proyecto:
cd hito-2-pizzeria-mamma-mia

3. Instalar las dependencias:
npm install

4. Ejecutar el servidor de desarrollo:
npm run dev

5. Abre tu navegador y accede a la URL local indicada en la terminal (usualmente http://localhost:5173).

---

## 💻 Vista Previa / Preview
🔹 Vista de Login
Validación de campos obligatorios y control de seguridad en contraseñas.

<br>

🔹 Vista de Registro
Control de coincidencia de contraseñas y mensajes de alerta.


---

## 📁 Estructura Del Proyecto

```text
src/
│
├── assets/
│   └── img/                 # 🖼️ Recursos visuales e imágenes
│
├── components/
│   ├── CardPizza.jsx        # 🍕 Tarjeta reutilizable de pizzas
│   ├── Footer.jsx           # 📄 Pie de página institucional
│   ├── Header.jsx           # 🏠 Banner principal de la pizzería
│   ├── Home.jsx             # 🍕 Vista principal con catálogo
│   ├── Login.jsx            # 🔐 Inicio de sesión con validación
│   ├── Navbar.jsx           # 🧭 Barra de navegación
│   └── Register.jsx         # 📝 Registro de usuarios y validaciones
│
├── App.jsx                  # ⚛️ Componente raíz de la aplicación
└── main.jsx                 # 🚀 Punto de entrada de React
```

---

## 👤 Autor
Jorge Alfredo Leiva López

GitHub: @jleival

Desarrollado como parte de las evaluaciones prácticas de Frontend React.
