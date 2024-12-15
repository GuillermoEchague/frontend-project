import React from 'react';
import './Footer.css'; // Importamos los estilos desde el archivo CSS

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        <strong>TODOS LOS DERECHOS RESERVADOS</strong> © 
        <span id="currentYear"> {currentYear}</span>
      </p>
      <p>
        Este proyecto consume datos de la API de <a href="https://nekos.life/" target="_blank" rel="noopener noreferrer">Nekos</a>.
      </p>
      <p>Creado por: Luis Serreno y Guillermo Echagüe</p>
    </footer>
  );
};

export default Footer;
