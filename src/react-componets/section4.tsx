import React from 'react';
import {Section} from './section';
import classes from '../style.scss';

export const Section4 = () => {
   
const paragraphText1 = 'Antes de abordar la cuestión final sobre cómo ver el peso de las librerías, vamos a realizar unos ajustes. En primer lugar, veremos cómo modificar los archivos para que incorporen un hash para evitar problemas con la caché de los navegadores y además añadiremos Css Modules para que encapsule los estilos evitando colisiones.';
const paragraphText2 = 'Para agregar los hash, simplemente tendremos que ajustar la configuración de output en el bundler e instalar CleanWebpackPlugin para que se encargue de mantener solo la última versión de cada archivo.';
const code1 = 'npm install clean-webpack-plugin --save-dev';
const paragraphText3  = 'Una vez instalado tendremos que ajustar la configuración base de webpack para añadirle los hash y el plugin:';
const code2 = `
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
`;
const paragraphText4  = 'Ahora aplicaremos css modules. En este caso, vamos a crear configuraciones distintas para cada entorno, ya que en desarrollo nos intera ver los nombres de los archivos de estilo y las clases y en producción no es tan conveniente. Estos ajustes se los aplicaremos en la sección rules, configurando css-loader:';
const code3 = `
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
};
`;
const code4 = `
const base = require("./webpack.config");
const {merge} = require("webpack-merge") ;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotEnv = require("dotenv-webpack");

module.exports = merge(base,{
  mode: "production",  
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
`;



    ; 
 
  const sectionData = {
    title: 'Hash y Css Modules',
    content: [
      { type: 'paragraph', text: paragraphText1 },
      { type: 'paragraph', text: paragraphText2 },
      { type: 'code', code: code1 },
      { type: 'paragraph', text: paragraphText3 },
      { type: 'code', code: code2 },
      { type: 'paragraph', text: paragraphText4 },
      { type: 'code', code: <pre className={classes.dev}>{code3}</pre> },      
      { type: 'code', code: <pre className={classes.prod}>{code4}</pre> },
    ],
  };

  return <Section {...sectionData} />;
};


