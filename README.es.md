<div align="center">

# Disclone Frontend

**Un cliente inspirado en Discord con mensajería en tiempo real, construido con React, TypeScript y Socket.io.**

![Licencia](https://img.shields.io/badge/licencia-MIT-blue?style=flat-square)
![Versión](https://img.shields.io/badge/versión-0.0.0-orange?style=flat-square)
![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?style=flat-square&logo=socket.io&logoColor=white)

[🇺🇸 English Version](./README.md) · [Repo del Backend](https://github.com/angelr449/Disclone)

</div>

---

## Características

- 🔐 Autenticación con JWT (registro/inicio de sesión), con el token guardado en una cookie
- 👤 Búsqueda de perfiles de usuario y manejo de sesión
- 💬 Mensajes directos y chats grupales, con actualizaciones en tiempo real vía Socket.io
- 🟢 Presencia en vivo (en línea/desconectado) para amigos
- 🧑‍🤝‍🧑 Sistema de amigos: enviar, aceptar, rechazar y eliminar solicitudes
- 🎨 Interfaz construida con Tailwind CSS v4 y componentes de shadcn/ui
- 🛣️ Enrutamiento del lado del cliente con React Router y guards de rutas protegidas/públicas
- 🗄️ Estado del servidor manejado con TanStack Query

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Build tool | Vite 7 |
| Framework | React 19 |
| Lenguaje | TypeScript 5 |
| Enrutamiento | React Router 7 |
| Estado del servidor | TanStack Query 5 |
| Estilos | Tailwind CSS 4 |
| Componentes UI | shadcn/ui (Radix UI) |
| Tiempo real | Socket.io Client 4 |
| Cliente HTTP | Axios |
| Iconos | lucide-react |

---

## Requisitos Previos

- **Node.js** v18 o superior
- El [backend de Disclone](https://github.com/angelr449/Disclone) corriendo y accesible

---

## Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/angelr449/Disclone-Frontend.git
cd Disclone-Frontend

# 2. Instala las dependencias
npm install

# 3. Configura las variables de entorno
cp .env.template .env
```

Completa el `.env` con tus propios valores:

```env
VITE_API_URL=http://localhost:8081
```

> Esto debe apuntar a la URL base donde está corriendo el [backend de Disclone](https://github.com/angelr449/Disclone) (sin el sufijo `/api/Disclone`, que se agrega automáticamente).

---

## Uso

```bash
# Inicia el servidor de desarrollo
npm run dev
```

La app correrá en `http://localhost:5173` por defecto.

Otros scripts disponibles:

```bash
npm run build     # Type-check y build para producción
npm run preview   # Previsualiza el build de producción localmente
npm run lint       # Ejecuta ESLint
```

---

## Estructura del Proyecto

```
Disclone-Frontend/
├── src/
│   ├── api/            # Instancia de Axios y configuración base de la API
│   ├── app/            # Módulos de features (chat, dashboard, friends, layout)
│   ├── auth/            # Páginas y acciones de login/signup
│   ├── components/      # Componentes UI compartidos (basados en shadcn/ui)
│   ├── helpers/          # Funciones utilitarias (cookies, etc.)
│   ├── hooks/             # Hooks compartidos
│   ├── lib/                # Utilidades compartidas
│   ├── router/             # Configuración de React Router y guards de rutas
│   ├── sockets/             # Configuración del cliente de Socket.io
│   ├── types/                # Tipos de TypeScript compartidos
│   ├── Disclone.tsx           # Componente raíz de la app
│   └── main.tsx                 # Punto de entrada de la app
└── .env.template                # Plantilla de variables de entorno
```

---

## Backend

Este es el cliente frontend de **Disclone**, un backend inspirado en Discord construido con Node.js, Express, PostgreSQL y Socket.io.

🔗 [Repositorio del backend de Disclone](https://github.com/angelr449/Disclone)

---

## Licencia

Distribuido bajo la Licencia MIT.

---

<div align="center">
Hecho por <a href="https://github.com/angelr449">angel_r</a>
</div>
