import React, { useState } from "react";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

import "./Header.css";
import logo from "../../images/Gestion-Desroches-Logo-hr.webp";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleClickMobileMenu() {
    isMobileMenuOpen && setIsMobileMenuOpen(false);
  }

  return (
    <header className={isMobileMenuOpen ? "header container isMobileMenuOpen" : "header container"}>
      <CustomNavLink to="/" className="branding">
        <img className={"branding-logo"} src={logo} alt="Logo" width={1500} height={304} />
      </CustomNavLink>

      <nav>
        <button className="toggle-mobile-menu-btn"
                aria-label="Afficher ou cacher le menu de navigation"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="toggle-mobile-menu-btn--open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 18v1H0v-1h24zm0-6v1H0v-1h24zm0-6v1H0V6h24z" />
            <path d="M24 19H0v-1h24v1zm0-6H0v-1h24v1zm0-6H0V6h24v1z" />
          </svg>
          <svg className="toggle-mobile-menu-btn--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 11L22 1l1 1-10 10 10 10-1 1-10-10L2 23l-1-1 10-10L1 2l1-1 10 10z" />
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
          <li><a id="link-rendez-vous" href="https://calendly.com/danieldesroches/30min">☎ Rendez-vous</a></li>
        </ul>
      </nav>
    </header>
  );
}
