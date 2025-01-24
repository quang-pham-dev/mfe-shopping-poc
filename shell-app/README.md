# Micro Frontend Shopping POC - Shell App

A simple implementation of Module Federation with Next.js and React. This is the shell (host) application that integrates various micro frontends into a cohesive shopping experience.

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
   cd shell-app
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

The shell application will start on port 3000 (http://localhost:3000)

## Available Scripts

- `dev`: Runs the application in development mode
- `build`: Creates a production build
- `start`: Runs the production build
- `lint`: Runs ESLint to check code quality

## Project Structure

```
shell-app/
├── components/     # Reusable React components
├── pages/         # Next.js pages and API routes
├── public/        # Static assets
├── styles/        # Global styles and Tailwind CSS
└── types/         # TypeScript type definitions
```

## Module Federation Configuration

This shell application is configured to consume components from various micro frontends:

- Products App (port 3001): Product catalog and listing functionality
- [Other micro frontends to be added]

Make sure all micro frontend applications are running for the shell app to work properly.

## Development Workflow

1. Start all micro frontend applications first
2. Start the shell application
3. Access http://localhost:3000 to see the integrated application

## Deployment

The shell application can be deployed to any platform that supports Next.js applications. Ensure that:

1. All micro frontend applications are deployed and accessible
2. The Module Federation configuration points to the correct production URLs
3. Environment variables are properly configured
