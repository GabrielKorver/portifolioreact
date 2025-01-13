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
               ReactJS | JavaScript | TypeScript | NodeJS
            </p>
            <hr />   
         </div>
      </div>
   );
}

export default Section;
