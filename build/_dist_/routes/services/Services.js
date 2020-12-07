import React from "../../../web_modules/react.js";
import Banner2 from "../../Components/Banner/Banner.js";
import CustomNavLink2 from "../../Components/CustomNavLink/CustomNavLink.js";
import ClickableServiceCard2 from "../../Components/ClickableServiceCard/ClickableServiceCard.js";
export default function Services({
  pageTitle,
  pageDescription,
  nombreClients,
  establishedDate
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "route-container container page-services"
  }, /* @__PURE__ */ React.createElement(Banner2, {
    pageTitle,
    pageDescription
  }), /* @__PURE__ */ React.createElement("div", {
    className: "content-block spacer-top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--50w flex--justify-left"
  }, /* @__PURE__ */ React.createElement(ClickableServiceCard2, {
    serviceName: "D\xE9claration d'imp\xF4ts de particuliers",
    linkText: "Imp\xF4ts particuliers",
    linkTo: "/services/impots-particuliers",
    classNames: ""
  }, "Nous produisons des d\xE9clarations de revenus de particuliers depuis plus de ", new Date().getFullYear() - establishedDate, " ans et aidons plus de ", nombreClients, " personnes \xE0 chaque ann\xE9e."), /* @__PURE__ */ React.createElement(ClickableServiceCard2, {
    serviceName: "D\xE9claration d'imp\xF4ts de soci\xE9t\xE9s",
    linkText: "Imp\xF4ts de soci\xE9t\xE9s",
    linkTo: "/services/impots-societes",
    classNames: "spacer-top"
  }, "Si vous \xEAtes propri\xE9taire d'une soci\xE9t\xE9 incorpor\xE9e, nous avons l'expertise pour produire vos d\xE9clarations d'imp\xF4ts T2 (f\xE9d\xE9ral) et CO-17 (provincial)."), /* @__PURE__ */ React.createElement(ClickableServiceCard2, {
    serviceName: "Comptabilit\xE9 d'entreprise et tenue de livres",
    linkText: "Comptabilit\xE9",
    linkTo: "/services/comptabilite-entreprises",
    classNames: "spacer-top"
  }, "Si vous poss\xE9dez une petite entreprise ou \xEAtes un travailleur autonome, nous pouvons prendre en charge la gestion de votre comptabilit\xE9.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--40w flex-margin-left--10w flex--justify-left"
  }, /* @__PURE__ */ React.createElement(ClickableServiceCard2, {
    serviceName: "Cr\xE9ation d'une incorporation",
    linkText: "Contactez-nous",
    linkTo: "/contact",
    classNames: ""
  }, "Nous offrons un service personnalis\xE9 pour la cr\xE9ation d'entreprise en vous accompagnant du d\xE9but \xE0 la fin."), /* @__PURE__ */ React.createElement(ClickableServiceCard2, {
    serviceName: "Services de succession",
    linkText: "Contactez-nous",
    linkTo: "/contact",
    classNames: "spacer-top"
  }, "Nous pouvons prendre en charge un dossier de succession en nous adaptant au cas par cas pour bien vous servir."))), /* @__PURE__ */ React.createElement("div", {
    className: "content-block spacer-top force-flex-align-center"
  }, /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", null, "Contactez-nous"))));
}
