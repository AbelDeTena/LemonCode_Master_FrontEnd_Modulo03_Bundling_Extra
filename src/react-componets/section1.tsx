import React from 'react';
import {Section} from './section';


export const Section1 = () => {
    
  const paragraphText1 = 'Para comenzar a trabajar con React, en primer lugar instalaremos react y react-dom.';
  const code1 = 'npm install react react-dom --save';
  const paragraphText2 = 'Una vez instalado necesitaremos añadir los preset de babel para que se encargue de que webpack pueda trabajar con ellos.';
  const code2 = 'npm install @babel/preset-react --save-dev';
  const paragraphText3 = 'Y lo añadimos a la configuración de babel, con el resultado final:';
  const code3 = `{
  "presets": [
    "@babel/preset-typescript",
    "@babel/preset-react",
    "@babel/preset-env"
  ]
}`;
  const paragraphText4 = 'A continuación tendremos que cambiar la extensión de los ficheros que antes teniamos como .ts a .tsx. Y una vez cambiados tendremos que ajustar la configuración de webpack. Estos ajustes se enfocarán en tres apartados, resolve, entry y rules.';
  const paragraphText5 = 'Siendo el resultado el siguiente:';
  const code4 = `
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: ["./index.tsx"],
  resolve: {
    extensions: [".ts", ".js", "jsx"],
  },
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};`;

  const sectionData = {
    title: 'React',
    content: [
      { type: 'paragraph', text: paragraphText1 },
      { type: 'code', code: code1 },
      { type: 'paragraph', text: paragraphText2 },
      { type: 'code', code: code2 },
      { type: 'paragraph', text: paragraphText3 },
      { type: 'code', code: code3 },
      { type: 'paragraph', text: paragraphText4 },
      { type: 'paragraph', text: paragraphText5 },
      { type: 'code', code: code4 },
    ],
  };

  return <Section {...sectionData} />;
};


