import React from "react";
import "./Footer.scss"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src="https://images.squarespace-cdn.com/content/v1/5c61baa111f78475c8a8849c/1575379691978-JD2I875A4IEQ6DB3ULHJ/OtakuAnime-logo-SHIRT.png?format=2500w" alt="OtakuAnime Logo" className="footer__logo-img" />
        </div>
        <div className="footer__links">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
          </ul>
        </div>
        <div className="footer__socials">
          <a href="#" className="footer__social-link">
            <i className="fab fa-facebook-f"></i> {/* Icono de Facebook */}
          </a>
          <a href="#" className="footer__social-link">
            <i className="fab fa-instagram"></i> {/* Icono de Instagram */}
          </a>
          <a href="#" className="footer__social-link">
            <i className="fab fa-x"></i> {/* Icono de X */}
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2024 OtakuAnime. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
