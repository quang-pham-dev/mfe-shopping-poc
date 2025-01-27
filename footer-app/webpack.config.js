const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const path = require("path");

const deps = require("./package.json").dependencies;
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index",
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "source-map" : false,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    static: {
      directory: path.join(__dirname, "dist")
    },
    port: 3003,
    hot: true,
    historyApiFallback: true
  },
  output: {
    publicPath:
      process.env.NODE_ENV === "production"
        ? "https://mfe-shopping-poc-footer.vercel.app/"
        : "http://localhost:3003/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js"
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "footer_app",
      library: { type: "umd", name: "footer_app" },
      globalObject: "this",
      publicPath: "auto",
      clean: true,
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/components/Footer.js"
      },
      shared: {
        react: {
          requiredVersion: deps.react,
          singleton: true,
          eager: true,
          strictVersion: true
        },
        "react-dom": {
          requiredVersion: deps["react-dom"],
          singleton: true,
          eager: true,
          strictVersion: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
