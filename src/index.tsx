import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from "./react-componets/header";
import { Introduccion } from "./react-componets/Introduccion";
import {Section1} from "./react-componets/section1"
import {Section2} from "./react-componets/section2"
import {Section3} from "./react-componets/section3"
import {Section4} from "./react-componets/section4"
import {Section5} from "./react-componets/section5"



function App() {
 
  return (
    <>
      <Header /> 
      <Introduccion /> 
      <Section1 />   
      <Section2 />   
      <Section3 />    
      <Section4 /> 
      <Section5 />
    </>
  );
}

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);


