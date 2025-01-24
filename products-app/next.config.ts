import NextFederationPlugin from "@module-federation/nextjs-mf";

const SHELL_APP_MFE_URL = "https://mfe-shopping-poc.vercel.app";

const nextConfig = {
  reactStrictMode: true,
  // Optimize images
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  async headers() {
    // https://vercel.com/guides/how-to-enable-cors
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*"
          }
        ]
      }
    ];
  },
  webpack(
    config: { plugins: NextFederationPlugin[] },
    options: { isServer: boolean }
  ) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "products_app",
        remotes: {
          shell_app: `shell_app@${
            process.env.NODE_ENV === "development"
              ? "http://localhost:3000"
              : SHELL_APP_MFE_URL
          }/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Products": "./pages/index.tsx"
        },
        extraOptions: {
          debug: false, // `false` by default
          exposePages: false // `false` by default
        },
        shared: {}
      })
    );

    return config;
  }
};

export default nextConfig;
