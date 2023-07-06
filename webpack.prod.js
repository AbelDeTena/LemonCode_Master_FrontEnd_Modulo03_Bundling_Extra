const base = require("./webpack.config");
const {merge} = require("webpack-merge") ;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotEnv = require("dotenv-webpack");


module.exports = merge(base,{
  mode: "production",  
  optimization:{
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        }
      }
    }
  },
  module: {    
    rules: [      
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader"],
      },      
    ],
  },
  plugins: [   
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new DotEnv({
      path: "./prod.env"
    })
  ],
});
