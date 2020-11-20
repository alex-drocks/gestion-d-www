import React from "react";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

import "./Footer.css";

export default function Footer(props) {
  return (
    <footer className="footer container">
      <i>
        &copy; {new Date().getFullYear()} {props.siteName}
        {" "}-{" "}Tous droits réservés
      </i>
      <CustomNavLink to="/apropos" className="text-link">
        En savoir plus à propos de nous
      </CustomNavLink>
    </footer>
  )
}
