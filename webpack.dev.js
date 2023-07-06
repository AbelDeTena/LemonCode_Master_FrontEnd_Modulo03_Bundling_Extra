const base = require("./webpack.config");
const {merge} = require("webpack-merge") ;
const DotEnv = require("dotenv-webpack");
const path = require("path");

module.exports = merge(base,{
  mode: 'development',
  devtool: 'eval-source-map', 
  devServer: {
    port: 8081,
  },
  module: {
    rules: [    
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ["style-loader",
         {
          loader: "css-loader",
          options: {
            modules: {
              exportLocalsConvention: "camelCase",
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
              localIdentContext: path.resolve(__dirname, "src"),
            },
          },
        },
         "sass-loader"],
      },   
     
    ],
  }, 
  plugins: [       
    new DotEnv({
      path: "./dev.env"
    })
  ],
});

