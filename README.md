<div align="center">

# Disclone Frontend

**A Discord-inspired client with real-time messaging, built with React, TypeScript, and Socket.io.**

![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Version](https://img.shields.io/badge/version-0.0.0-orange?style=flat-square)
![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?style=flat-square&logo=socket.io&logoColor=white)

[🇪🇸 Versión en Español](./README.es.md) · [Backend Repo](https://github.com/angelr449/Disclone)

</div>

---

## Features

- 🔐 JWT-based authentication (signup/login), with the token stored in a cookie
- 👤 User profile lookup and session handling
- 💬 Direct messages and group chats, with real-time updates via Socket.io
- 🟢 Live presence (online/offline) for friends
- 🧑‍🤝‍🧑 Friend system: send, accept, reject, and remove friend requests
- 🎨 UI built with Tailwind CSS v4 and shadcn/ui components
- 🛣️ Client-side routing with React Router and protected/public route guards
- 🗄️ Server state managed with TanStack Query

---

## Tech Stack

| Layer | Technology |
|---|---|
| Build tool | Vite 7 |
| Framework | React 19 |
| Language | TypeScript 5 |
| Routing | React Router 7 |
| Server state | TanStack Query 5 |
| Styling | Tailwind CSS 4 |
| UI components | shadcn/ui (Radix UI) |
| Real-time | Socket.io Client 4 |
| HTTP client | Axios |
| Icons | lucide-react |

---

## Prerequisites

- **Node.js** v18 or higher
- The [Disclone backend](https://github.com/angelr449/Disclone) running and reachable

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/angelr449/Disclone-Frontend.git
cd Disclone-Frontend

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.template .env
```

Fill in `.env` with your own values:

```env
VITE_API_URL=http://localhost:8081
```

> This should point to the base URL where the [Disclone backend](https://github.com/angelr449/Disclone) is running (without the `/api/Disclone` suffix, which is appended automatically).

---

## Usage

```bash
# Start the dev server
npm run dev
```

The app will run on `http://localhost:5173` by default.

Other available scripts:

```bash
npm run build     # Type-check and build for production
npm run preview   # Preview the production build locally
npm run lint       # Run ESLint
```

---

## Project Structure

```
Disclone-Frontend/
├── src/
│   ├── api/            # Axios instance and base API config
│   ├── app/            # Feature modules (chat, dashboard, friends, layout)
│   ├── auth/            # Login/signup pages and actions
│   ├── components/      # Shared UI components (shadcn/ui based)
│   ├── helpers/          # Utility functions (cookies, etc.)
│   ├── hooks/             # Shared hooks
│   ├── lib/                # Shared lib utilities
│   ├── router/             # React Router setup and route guards
│   ├── sockets/             # Socket.io client setup
│   ├── types/                # Shared TypeScript types
│   ├── Disclone.tsx           # Root app component
│   └── main.tsx                 # App entry point
└── .env.template                # Environment variable template
```

---

## Backend

This is the frontend client for **Disclone**, a Discord-inspired backend built with Node.js, Express, PostgreSQL, and Socket.io.

🔗 [Disclone backend repository](https://github.com/angelr449/Disclone)

---

## License

Distributed under the MIT License.

---

<div align="center">
Made by <a href="https://github.com/angelr449">angel_r</a>
</div>
