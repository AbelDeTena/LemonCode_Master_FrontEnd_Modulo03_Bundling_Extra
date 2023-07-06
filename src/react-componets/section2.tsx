import React from 'react';
import {Section} from './section';
import classes from '../style.scss';

export const Section2 = () => {
   
const paragraphText1 = 'Alcanzado este punto vemos como surgen discrepancias a la hora de hacer crecer el bundler, ya que algunas opciones favorecen al entorno de desarrollo y otras al entorno de producción. Para evitar estos conflictos y sacar el máximo partido al bundler, crearemos dos configuraciones independientes.';
const paragraphText2 = 'El enfoque será el siguiente. Tendremos tres configuraciones, una configuración base con los aspectos comunes y otras dos configuraciones de desarrollo y producción que importarán el contenido de la base. Para facilitar este proceso, utilizaremos webpack-merge.';
const code1 = 'npm install webpack-merge --sava-dev';
const paragraphText3 = 'Para la configuracion de desarrollo instalaremos style-loader. Así como otros pequeños ajustes.';
const code2 = 'npm install style-loader';
const paragraphText4 = 'De forma que despues este proceso nos quedan los siguientes tres archivos:';
const code3 = `BASE

const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
context: path.resolve(__dirname, "src"),
entry: ["./index.tsx"],
resolve: {
  extensions: [".ts", ".js", ".jsx", ".tsx"],
},
module: {
  rules: [
    {
      test: /\.(t|j)sx?$/,
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
],
};`;
const code4 = `DESARROLLO

const base = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(base, {
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
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
},
});`; 
const code5 = `PRODUCCIÓN

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
  ],
});
`; 

 
  const sectionData = {
    title: 'Build de producción y desarrollo',
    content: [
      { type: 'paragraph', text: paragraphText1 },
      { type: 'paragraph', text: paragraphText2 },
      { type: 'code', code: code1 },
      { type: 'paragraph', text: paragraphText3 },
      { type: 'code', code: code2 },
      { type: 'paragraph', text: paragraphText4 },
      { type: 'code', code: code3 },      
      { type: 'code', code: <pre className={classes.dev}>{code4}</pre>},
      { type: 'code', code: <pre className={classes.prod}>{code5}</pre> },
    ],
  };

  return <Section {...sectionData} />;
};


