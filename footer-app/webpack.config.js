const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const path = require("path");

const deps = require("./package.json").dependencies;
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index",
  mode: isDevelopment ? "development" : "production",
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
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true
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
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["tailwindcss", "autoprefixer"]
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
      library: { type: "var", name: "footer_app" },
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/components/Footer.js"
      },
      shared: {
        ...deps,
        tailwindcss: {
          singleton: true
        },
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: true
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
          eager: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      publicPath: "/"
    })
  ]
};
