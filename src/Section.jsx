// src/components/Section.jsx
import React from 'react';
import './Section.css';

function Section() {
   return (
      <div className="section-container">
         <img
            src="./public/eu.JPG"
            alt="Imagem de Exemplo"
            className="section-image"
         />
         <div className="section-text">
            <h1 className='my-name' >Gabrie de Almeida Rodrigues</h1>
            <p>
               <strong> Desenvolvedor Full-Stack</strong>
            </p>
            <p>
               HTML | CSS | JS | TS | REACT | NODE | MONGODB
            </p>
            <hr />   
         </div>
      </div>
   );
}

export default Section;
