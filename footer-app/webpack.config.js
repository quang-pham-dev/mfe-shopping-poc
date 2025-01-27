const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const path = require("path");

const deps = require("./package.json").dependencies;
const isDevelopment = process.env.NODE_ENV !== "production";

const prodConfig = {
  optimization: {
    minimize: true,
    moduleIds: "deterministic",
    chunkIds: "deterministic",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: "single"
  }
};

module.exports = {
  entry: "./src/index",
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "source-map" : false,

  experiments: {
    topLevelAwait: true
  },

  resolve: {
    extensions: [".jsx", ".js", ".json", ".css"],
    fallback: {
      react: require.resolve("react"),
      "react-dom": require.resolve("react-dom")
    }
  },

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
    filename: isDevelopment ? "[name].js" : "[name].[contenthash].js",
    chunkFilename: isDevelopment
      ? "[name].chunk.js"
      : "[name].[contenthash].chunk.js",
    clean: true
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

  ...(isDevelopment ? {} : prodConfig),

  plugins: [
    new ModuleFederationPlugin({
      name: "footer_app",
      library: { type: "var", name: "footer_app" },
      filename: "remoteEntry.js",
      exposes: {
        "./Footer": "./src/components/Footer.js"
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
          eager: true,
          strictVersion: false
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
          eager: true,
          strictVersion: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"]
    })
  ]
};
