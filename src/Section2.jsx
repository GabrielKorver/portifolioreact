// src/components/Section.jsx
import React from 'react';
import './Section2.css';

function Section() {
    return (
        <div className='section'>
            <h2 className='habilidade' >Principais Habilidades</h2>
            <div className='cursos' >
                <img className='icon' src="./public/icon-html.png" alt="" />
                <h2>HTML</h2>
                <p>HTML (HyperText Markup Language) é a linguagem padrão para criar páginas web, estruturando conteúdo com elementos como texto, imagens e links.</p>
            </div>
            <div className='cursos' >
                <img className='icon' src="icon-css.png" alt="" />
                <h2>CSS</h2>
                <p>
                    CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de documentos HTML, controlando layout, cores e fontes.</p>
            </div>
            <div className='cursos' >
                <img className='icon' src="icon-javascript.png" alt="" />
                <h2>JS</h2>
                <p>JavaScript é uma linguagem de programação que permite interatividade em páginas web, manipulando elementos, validando formulários e criando aplicações dinâmicas.</p>
            </div>
            <div className='cursos' >
                <img className='icon' src="icon-react.png" alt="" />
                <h2>REACT</h2>
                <p>React é uma biblioteca JavaScript para construir interfaces de usuário, permitindo a criação de componentes reutilizáveis e uma experiência interativa eficiente.
                </p>
            </div>
        </div>
        
    );
}

export default Section;
