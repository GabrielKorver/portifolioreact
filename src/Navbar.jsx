import React from "react";
import './navbar.css'; // Importando o arquivo CSS

function Navbar() {
    return (
        <div className="navbar">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="https://github.com/GabrielKorver" target="_blank" rel="noopener noreferrer">Git Hub</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
        </div>
    );
}

export default Navbar;

