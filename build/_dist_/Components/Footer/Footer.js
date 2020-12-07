import React from "../../../web_modules/react.js";
import "./Footer.css.proxy.js";
import CustomNavLink2 from "../CustomNavLink/CustomNavLink.js";
import LazyImage2 from "../LazyImage/LazyImage.js";
import logo from "../../images/logo192.png.proxy.js";
export default function Footer2({copyrightName, establishedDate}) {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "footer spacer-top spacer-bottom"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-top container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-row"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "footer-top--text"
  }, "Services comptables sur la rive-sud de Montr\xE9al"), /* @__PURE__ */ React.createElement(LazyImage2, {
    src: logo,
    alt: "logo",
    width: 192,
    height: 192,
    classNames: "footer-top--logo"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "footer-bottom container"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "footer-bottom--nav"
  }, /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/"
  }, "Accueil"), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/a-propos"
  }, "\xC0 propos de nous"), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/services"
  }, "Services"), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/liens"
  }, "Liens utiles"), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/contact"
  }, "Contactez-nous"), /* @__PURE__ */ React.createElement("a", {
    href: "https://calendly.com/danieldesroches/30min"
  }, "Prendre un rendez-vous")), /* @__PURE__ */ React.createElement("div", {
    className: "footer-bottom--right"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "footer-bottom--text"
  }, "Depuis ", establishedDate, ", Gestion Desroches se sp\xE9cialise dans les d\xE9clarations d'imp\xF4ts de particuliers et de soci\xE9t\xE9s ainsi que dans la comptabilit\xE9 de petites et moyennes entreprises. Gr\xE2ce \xE0 nos conseils et \xE0 notre expertise, nous avons avons permis \xE0 des milliers de personnes et d'entreprises d'\xE9conomiser de l'argent."), /* @__PURE__ */ React.createElement("div", {
    className: "footer-bottom--copyright"
  }, "\xA9 ", new Date().getFullYear(), " ", copyrightName))));
}
