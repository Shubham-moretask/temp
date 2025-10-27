# Prakritya - React + Vite + Tailwind CSS

A modern React application built with Vite and styled with Tailwind CSS.

## Features

- ⚡️ React 19 with Vite for fast development
- 🎨 Tailwind CSS for utility-first styling
- 🔥 Hot Module Replacement (HMR)
- 📦 Modern build tooling
- 🎯 ESLint configuration

## Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── assets/          # Static assets
├── App.jsx         # Main App component
├── main.jsx        # Application entry point
├── index.css       # Global styles with Tailwind directives
└── App.css         # Component-specific styles
```

## Technologies Used

- [React](https://react.dev/) - UI library
- [Vite](https://vite.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [ESLint](https://eslint.org/) - Linting

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
