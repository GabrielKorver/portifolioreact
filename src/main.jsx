import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Navbar.css'; // Certifique-se de que este caminho está correto
import Navbar from './Navbar.jsx'; // Verifique o caminho e o nome do arquivo
import Section from './Section.jsx';
import Section2 from './Section2.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Section />
    <Section2 />
  </StrictMode>,
);
