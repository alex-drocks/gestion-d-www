import React from "react";
import "./Footer.css";

import CustomNavLink from "../CustomNavLink/CustomNavLink";
import LazyImage from "../LazyImage/LazyImage";

import logo from "../../images/logo192.png";

export default function Footer({ copyrightName, establishedDate }) {
  return (
    <footer className="footer spacer-top spacer-bottom">
      <div className="footer-top container">
        <div className="footer-row">
          <h3 className="footer-top--text">
            Services comptables sur la rive-sud de Montréal
          </h3>
          <LazyImage
            src={logo}
            alt={"logo"}
            width={192}
            height={192}
            classNames="footer-top--logo"
          />
        </div>
      </div>
      <div className="footer-bottom container">
        <nav className="footer-bottom--nav">
          <CustomNavLink to="/">Accueil</CustomNavLink>
          <CustomNavLink to="/a-propos">À propos de nous</CustomNavLink>
          <CustomNavLink to="/services">Services</CustomNavLink>
          <CustomNavLink to="/liens">Liens utiles</CustomNavLink>
          <CustomNavLink to="/contact">Contactez-nous</CustomNavLink>
          <a href="https://calendly.com/comptable-daniel-desroches/30min">
            Prendre un rendez-vous
          </a>
        </nav>

        <div className="footer-bottom--right">
          <i className="footer-bottom--text">
            Depuis {establishedDate}, Gestion Desroches se spécialise dans les
            déclarations d'impôts de particuliers et de sociétés ainsi que dans
            la comptabilité de petites et moyennes entreprises. Grâce à nos
            conseils et à notre expertise, nous avons avons permis à des
            milliers de personnes et d'entreprises d'économiser de l'argent.
          </i>
          <div className="footer-bottom--copyright">
            &copy; {new Date().getFullYear()} {copyrightName}
          </div>
        </div>
      </div>
    </footer>
  );
}
