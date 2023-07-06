const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");


module.exports = {
  context: path.resolve(__dirname,  "./src"),
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },  
  entry: ["./index.tsx"],  
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  }, 
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },      
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      scriptLoading: "blocking",
    }),
    new CleanWebpackPlugin(),    
  ],
};
