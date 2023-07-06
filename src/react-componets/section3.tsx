import React from 'react';
import {Section} from './section';
import classes from '../style.scss';

export const Section3 = () => {
   
    const paragraphText1 = 'Puede haber ocasiones en las que necesitemos realizar una personalización de algunos parámetros específicos en función del entorno en el que ejecutamos webpack. Por ejemplo para las credenciales, como claves de API o contraseñas en general.';
    const paragraphText2 = 'Para estos casos podemos crear unas variables de entorno en archivos terminados en .env como los siguientes:';
    const code1 = 'Entorno="Desarrollo";';
    const code2 = 'Entorno="Producción";';
    const paragraphText3 = 'Ahora para que puedan ser interpretados tendremos que instalar dotenv-webpack.';
    const code3 = 'npm install dotenv-webpack --save-dev';
    const paragraphText4 = 'Y por último tendremos que vincular cada variable a su entorno mediante el plugin. Obteniendo como resultado las siguientes configuraciones:';
    const code4 = `
  const base = require("./webpack.config");
  const {merge} = require("webpack-merge") ;
  const DotEnv = require("dotenv-webpack");
  
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
          use: ["style-loader", "css-loader", "sass-loader"],
        },   
      ],
    }, 
    plugins: [       
      new DotEnv({
        path: "./dev.env"
      })
    ],
  });
  `;
  
    const code5 = `
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
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
 
  const sectionData = {
    title: 'Variables de entorno',
    content: [
      { type: 'paragraph', text: paragraphText1 },
      { type: 'paragraph', text: paragraphText2 },
      { type: 'code', code: <pre className={classes.dev}>{code1}</pre> },
      { type: 'code', code: <pre className={classes.prod}>{code2}</pre> },
      { type: 'paragraph', text: paragraphText3 },
      { type: 'code', code: code3 },      
      { type: 'paragraph', text: paragraphText4 },
      { type: 'code', code: <pre className={classes.dev}>{code4}</pre> },
      { type: 'code', code: <pre className={classes.prod}>{code5}</pre> },
    ],
  };

  return <Section {...sectionData} />;
};


