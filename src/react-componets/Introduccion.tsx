import React from 'react';
import classes from '../style.scss';


export const Introduccion: React.FC = () => {
  return (
    <section>
      <h3>Introducción <span className={classes.blackAccent}>: &#123;</span></h3>
      <p>Los objetivos a cumplir en esta entrega del módulo 03 Bundling son:</p>
      <ul>
        <li>Habilitar uso de React</li>
        <li>Tener build de producción y desarrollo</li>
        <li>Tener variables de entorno</li>
        <li>Medir cuánto ocupa nuestro código y cada librería</li>
      </ul>
      <h3><span className={classes.blackAccent}>&#125; ,</span></h3>
    </section>
  );
}






