# Micro Frontend Shopping POC

A proof of concept implementation of a micro frontend architecture using Next.js and Module Federation. This project demonstrates how to build a scalable e-commerce application using micro frontends. Currently using Next.js Pages Router due to compatibility issues between Next.js App Router and Module Federation (see [issue #799](https://github.com/module-federation/core/issues/799)).

## Live Demo

- Shell App (Host): https://mfe-shopping-poc.vercel.app
- Products App (Remote): https://mfe-shopping-poc-gdtu.vercel.app

## Project Structure

```
mfe-shopping-poc/
├── shell-app/       # Host application that integrates all micro frontends
└── products-app/    # Product catalog micro frontend
```

## Applications

### Shell App (Host)
- Main application that serves as the container
- Handles routing and layout
- Integrates all micro frontends
- Runs on port 3000

### Products App (Remote)
- Standalone product catalog application
- Exposes product listing components
- Can be developed and deployed independently
- Runs on port 3001

## Tech Stack

- Next.js 15.1.6
- React 19.0.0
- TypeScript 5
- Webpack Module Federation
- TailwindCSS 3.4.1

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/quang-pham-dev/mfe-shopping-poc.git
   cd mfe-shopping-poc
   ```

2. Install dependencies for both applications:
   ```bash
   # Install shell app dependencies
   cd shell-app
   npm install

   # Install products app dependencies
   cd ../products-app
   npm install
   ```

3. Start the development servers:
   ```bash
   # Start products app first (in products-app directory)
   npm run dev

   # Start shell app (in shell-app directory)
   npm run dev
   ```

4. Access the applications:
   - Shell App: http://localhost:3000
   - Products App: http://localhost:3001

## Development

### Local Development
- Each application can be developed independently
- Run the products app first, then the shell app
- Changes in the products app will be reflected in the shell app

### Production Build
```bash
# Build products app
cd products-app
npm run build

# Build shell app
cd ../shell-app
npm run build
```

## Deployment

Both applications are deployed on Vercel:

1. Products App is deployed first
2. Shell App is configured to consume the deployed Products App
3. Environment variables in `.env.prod` are updated with production URLs

## Module Federation Configuration

### Shell App
- Acts as host
- Consumes Products component from products app
- Configured in `next.config.ts`

### Products App
- Acts as remote
- Exposes Products component
- Configured in `next.config.ts`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for their amazing framework
- Module Federation team for making micro frontends possible with webpack
- Vercel for their excellent deployment platform