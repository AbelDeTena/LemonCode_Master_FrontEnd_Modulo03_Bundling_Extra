import React from 'react';
import logo from "../logo_2.png";
import classes from '../style.scss';



export const Header = () => {

    const texto = process.env.Entorno;
    
    return (
        <header>
      <img src={logo} alt="logo" />
      <h1>
      <span className={classes.blackAccent}>&#123;</span> Modulo 03 Extra{' '}
      <span className={classes.blackAccent}>&#125;</span>
      </h1>
      <div id="entorno"></div>
      <h2>Bundling con Webpack</h2>
        <h1 className={classes.blackAccent}>Estamos en el entorno de {texto}</h1>;
    </header>
  );
};


