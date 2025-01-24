# Micro Frontend Shopping POC - Products App

This is the Products application component of our Micro Frontend Shopping proof of concept. It's built with Next.js and uses Module Federation for micro-frontend integration. This app serves as a standalone product catalog that can be integrated into the main shell application.

## Tech Stack

### Core

- Next.js 15.1.6
- React 19.0.0
- TypeScript 5
- TailwindCSS 3.4.1
- Webpack 5.92.1
- Module Federation (@module-federation/nextjs-mf 8.8.12)

### Development Tools

- ESLint 9
- @types/node
- @types/react
- @types/react-dom
- PostCSS 8

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- Bun (recommended) or npm
- Git

## Getting Started

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd products-app
   ```

2. Install dependencies:

   ```bash
   # Using Bun (recommended)
   bun install

   # Using npm
   npm install
   ```

3. Start the development server:

   ```bash
   # Using Bun
   bun run dev

   # Using npm
   npm run dev
   ```

The application will start on port 3001 (http://localhost:3001)

## Available Scripts

- `dev`: Runs the application in development mode
- `build`: Creates a production build
- `start`: Runs the production build
- `lint`: Runs ESLint to check code quality

## Project Structure

```
products-app/
├── components/     # Reusable React components
├── pages/         # Next.js pages and API routes
├── public/        # Static assets
├── styles/        # Global styles and Tailwind CSS
└── types/         # TypeScript type definitions
```

## Module Federation

This app is configured to expose its components through Webpack Module Federation. The exposed components can be consumed by the shell application or other micro frontends.

## Deployment

This application can be deployed to any platform that supports Next.js applications. Make sure to set the appropriate environment variables and build configuration for your deployment platform.
