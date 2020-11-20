import React, { useState } from "react";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

import "./Header.css";
import logo from "../../images/Gestion-Desroches-Logo-hr.webp";

export default function Header(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleClickMobileMenu() {
    isMobileMenuOpen && setIsMobileMenuOpen(false);
  }

  return (
    <header className={isMobileMenuOpen ? "header container isMobileMenuOpen" : "header container"}>
      <CustomNavLink to="/" className="branding">
        <img className={"branding-logo"} src={logo} alt="Logo" width={40} height={40} />
      </CustomNavLink>

      <nav>
        <button className="toggle-mobile-menu-btn"
                name="Afficher ou cacher le menu de navigation"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="toggle-mobile-menu-btn--open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 6H0V2h24v4zm0 4H0v4h24v-4zm0 8H0v4h24v-4z" />
          </svg>
          <svg className="toggle-mobile-menu-btn--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 20l-8-8 8-8-4-4-8 8-8-8-4 4 8 8-8 8 4 4 8-8 8 8z" />
          </svg>
        </button>
        <ul onClick={handleClickMobileMenu}>
          <li><CustomNavLink to="/apropos">À propos</CustomNavLink></li>
          <li><CustomNavLink to="/services">Services</CustomNavLink></li>
          {/*<li><CustomNavLink to="/impots-particuliers">Impôts particuliers</CustomNavLink></li>*/}
          {/*<li><CustomNavLink to="/impots-societes">Impôts sociétés</CustomNavLink></li>*/}
          {/*<li><CustomNavLink to="/impots-societes">Comptabilité d'entreprise</CustomNavLink></li>*/}
          <li><CustomNavLink to="/liens-utiles">Liens utiles</CustomNavLink></li>
          <li><CustomNavLink to="/contact">Contact</CustomNavLink></li>
          <li><a href="https://calendly.com/danieldesroches/30min">☎ Rendez-vous</a></li>
        </ul>
      </nav>
    </header>
  );
}
