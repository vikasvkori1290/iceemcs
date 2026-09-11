# ICEEMCS - Professional MERN Stack Architecture

A modern, scalable MERN (MongoDB, Express, React, Node.js) stack repository structure designed following industry best practices with separate frontend (`client/`) and backend (`server/`) environments, clean separation of concerns, and centralized orchestration.

---

## 📁 Project Structure

```
iceemcs/
├── client/                     # React Frontend (Vite + Vanilla CSS)
│   ├── public/                 # Static assets & public resources
│   ├── src/
│   │   ├── assets/             # Brand logos, icons, illustrations
│   │   ├── components/         # Reusable UI components
│   │   ├── context/            # React Context / Global State
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Views and page components
│   │   ├── services/           # API service layer (Fetch / Axios)
│   │   ├── styles/             # Global design tokens and styles
│   │   ├── utils/              # Frontend helper functions
│   │   ├── App.jsx             # Main Application screen
│   │   ├── App.css             # Component styling
│   │   ├── index.css           # Global design system & theme variables
│   │   └── main.jsx            # React root mount
│   ├── index.html              # HTML entry point
│   ├── vite.config.js          # Vite config & API reverse proxy
│   ├── .env.example            # Client environment templates
│   └── package.json            # Client dependencies and scripts
│
├── server/                     # Express & Node.js Backend with MongoDB
│   ├── src/
│   │   ├── config/             # DB connection (Mongoose) & configuration
│   │   ├── controllers/        # Request handlers & controllers
│   │   ├── middleware/         # Custom middlewares (auth, error handler, logger)
│   │   ├── models/             # Mongoose schemas and data models
│   │   ├── routes/             # Modular API routes
│   │   ├── services/           # Business logic and external service integrations
│   │   ├── utils/              # Utility functions and API response formatters
│   │   ├── app.js              # Express app setup and middleware configuration
│   │   └── server.js           # Server bootstrap and port listener
│   ├── .env.example            # Server environment templates
│   ├── .env                    # Active server environment file
│   └── package.json            # Backend dependencies and scripts
│
├── .gitignore                  # Git ignore patterns
├── package.json                # Root orchestration scripts
└── README.md                   # Project documentation
```

---

## 🚀 Quick Start

### 1. Install Dependencies
Run the command in the project root to install dependencies for root, client, and server:
```bash
npm run install:all
```

### 2. Configure Environment
- **Server**: Copy `server/.env.example` to `server/.env` (default is already configured for local dev at `PORT=5000`).
- **Client**: Copy `client/.env.example` to `client/.env`.

### 3. Run Development Servers
To start both backend and frontend concurrently:
```bash
npm run dev
```

Or run them individually:
- **Server only**: `npm run dev:server` (Starts Express at [http://localhost:5000](http://localhost:5000))
- **Client only**: `npm run dev:client` (Starts Vite at [http://localhost:5173](http://localhost:5173))

---

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite, Vanilla CSS Design System with dark mode & glassmorphism
- **Backend**: Node.js, Express.js, Mongoose (MongoDB ODM), Cors, Dotenv
- **Tooling**: Concurrently, Nodemon
