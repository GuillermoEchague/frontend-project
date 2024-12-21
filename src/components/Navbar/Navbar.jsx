import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c61baa111f78475c8a8849c/1575379691978-JD2I875A4IEQ6DB3ULHJ/OtakuAnime-logo-SHIRT.png?format=2500w"
          alt="OtakuAnime Logo"
          className="navbar__logo-img"
        />
      </div>
      <button className="navbar__toggle" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Series</a></li>
          <li><a href="#">Películas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
