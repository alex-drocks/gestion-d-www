import React, {useState} from "../../../web_modules/react.js";
import CustomNavLink2 from "../CustomNavLink/CustomNavLink.js";
import "./Header.css.proxy.js";
import logo from "../../images/Gestion-Desroches-Logo-small.jpg.proxy.js";
export default function Header2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ React.createElement("header", {
    className: isMobileMenuOpen ? "header container isMobileMenuOpen" : "header container"
  }, /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/",
    className: "branding"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "branding-logo",
    src: logo,
    alt: "Logo",
    width: 987,
    height: 200,
    onClick: () => isMobileMenuOpen && setIsMobileMenuOpen(false)
  })), /* @__PURE__ */ React.createElement("button", {
    className: "toggle-mobile-menu-btn",
    "aria-label": "Afficher ou cacher le menu de navigation",
    onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen)
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "toggle-mobile-menu-btn--open",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M24 18v1H0v-1h24zm0-6v1H0v-1h24zm0-6v1H0V6h24z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M24 19H0v-1h24v1zm0-6H0v-1h24v1zm0-6H0V6h24v1z"
  })), /* @__PURE__ */ React.createElement("svg", {
    className: "toggle-mobile-menu-btn--close",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 11L22 1l1 1-10 10 10 10-1 1-10-10L2 23l-1-1 10-10L1 2l1-1 10 10z"
  }))), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", {
    onClick: () => isMobileMenuOpen && setIsMobileMenuOpen(false)
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/a-propos"
  }, "\xC0 propos")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/services"
  }, "Services")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/liens"
  }, "Liens utiles")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/contact"
  }, "Contact")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    id: "link-rendez-vous",
    href: "https://calendly.com/danieldesroches/30min"
  }, /* @__PURE__ */ React.createElement("svg", {
    style: {maxWidth: "25px"},
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zM8 16H4v4h4v-4zm6 0h-4v4h4v-4zm-6-6H4v4h4v-4zm16-8v22H0V2h3v1a2 2 0 004 0V2h10v1a2 2 0 004 0V2h3zm-2 6H2v14h20V8zm-2-7a1 1 0 10-2 0v2a1 1 0 102 0V1zM6 3a1 1 0 11-2 0V1a1 1 0 112 0v2z"
  })), "Rendez-vous")))));
}
