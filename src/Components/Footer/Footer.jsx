import React from "react";

import "./Footer.css";

import CustomNavLink from "../CustomNavLink/CustomNavLink";
import LazyImage from "../LazyImage/LazyImage";

import logo from "../../images/logo192.webp";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-row">
          <h3 className="footer-top--text">Services comptables sur la rive-sud de Montréal</h3>
          <LazyImage src={logo} alt={"logo"}
                     width={192} height={192}
                     classNames="footer-top--logo"
          />
        </div>
      </div>

      <div className="footer-bottom container">
        <nav className="footer-bottom--nav">
          <CustomNavLink to="/">Accueil</CustomNavLink>
          <CustomNavLink to="/apropos" className="no-wrap">À propos de nous</CustomNavLink>
          <CustomNavLink to="/impots-particuliers" className="no-wrap">Impôts particuliers</CustomNavLink>
          <CustomNavLink to="/impots-societes" className="no-wrap">Impôts sociétés</CustomNavLink>
          <CustomNavLink to="/impots-societes" className="no-wrap">Comptabilité d'entreprise</CustomNavLink>
          <CustomNavLink to="/liens" className="no-wrap">Liens utiles</CustomNavLink>
          <CustomNavLink to="/contact" className="no-wrap">Contactez-nous</CustomNavLink>
          <a id="link-rendez-vous" className="no-wrap" href="https://calendly.com/danieldesroches/30min">
            Prendre un rendez-vous
          </a>
        </nav>

        <div className="footer-bottom--right">
          <i className="footer-bottom--text">
            Depuis 2004, Gestion Desroches se spécialise dans les déclarations d'impôts
            de particuliers et de sociétés ainsi que dans la comptabilité de
            petites et moyennes entreprises.
            Grâce à nos conseils et à notre expertise,
            nous avons avons permis à des milliers de personnes et d'entreprises
            d'économiser de l'argent.
          </i>
          <div className="footer-bottom--copyright">
            &copy; {new Date().getFullYear()} {props.siteName}
            {" "}-{" "}Tous droits réservés
          </div>
        </div>
      </div>


    </footer>
  );
}
