import React from 'react';
import {Section} from './section';
import classes from '../style.scss';

export const Section5 = () => {
   
const paragraphText1 = 'Por último necesitamos analizar nuestro bundler, y el peso de cada libreria dentro de él. Para ello utilizaremos el plugin bundle-analyzer.';
const code1 = 'npm install webpack-bundle-analyzer --save-dev';
const paragraphText2 = 'Una vez instalado, tendremos que crear una nueva configuración de webpack que se extienda a partir de la configuracion de producción. Para ello volveremos a utilizar Merge, e incluiremos el nuevo plugin en esta configuración.';
const code2 = `const {merge} = require("webpack-merge");
const base = require("./webpack.prod");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge( base, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})`;
const paragraphText3  = 'Una vez preparado todo, volvemos al package.json y añadimos un nuevo script para lanzarlo.';
const code3 = `"build:analyzer":"webpack --config webpack.analyzer.js"`;
const paragraphText4  = 'Por ultimo, vamos a realizar una pequeña optimización. Separando por un lado nuestra aplicación y por otro las librerias de terceros. Simplemente hay que añadirlo a la configuración de producción. De esta forma la descarga se hará en paralelo.';
const code4 = `const base = require("./webpack.config");
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
`;



    ; 
 
  const sectionData = {
    title: 'Analyzer',
    content: [
      { type: 'paragraph', text: paragraphText1 },
      { type: 'code', code: code1 },
      { type: 'paragraph', text: paragraphText2 },
      { type: 'code', code: code2 },
      { type: 'paragraph', text: paragraphText3 },
      { type: 'code', code: code3 },
      { type: 'paragraph', text: paragraphText4 },          
      { type: 'code', code: <pre className={classes.prod}>{code4}</pre> },
    ],
  };

  return <Section {...sectionData} />;
};


