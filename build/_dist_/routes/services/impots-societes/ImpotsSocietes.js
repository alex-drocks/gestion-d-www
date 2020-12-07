import React from "../../../../web_modules/react.js";
import Banner2 from "../../../Components/Banner/Banner.js";
import CustomNavLink2 from "../../../Components/CustomNavLink/CustomNavLink.js";
export default function ImpotsSocietes({
  pageTitle,
  pageDescription,
  nombreClients,
  establishedDate
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "route-container container"
  }, /* @__PURE__ */ React.createElement(Banner2, {
    pageTitle,
    pageDescription
  }), /* @__PURE__ */ React.createElement("div", {
    className: "content-block flex--justify-center text-align--left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--40w no-spacer-top"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Au Qu\xE9bec, les entreprises incorpor\xE9es doivent produire une d\xE9claration d'imp\xF4t T2 au f\xE9d\xE9ral ainsi qu'une d\xE9claration d'imp\xF4t C0-17 au provincial, et ce, m\xEAme si elles ne doivent pas payer d'imp\xF4ts."), /* @__PURE__ */ React.createElement("h3", null, "Depuis plusieurs ann\xE9es, la gestion des incorporations nous passionne."), /* @__PURE__ */ React.createElement("p", null, "Afin de maximiser les b\xE9n\xE9fices pour votre soci\xE9t\xE9, nous pouvons prendre en charge votre dossier d'imp\xF4ts et vous aider \xE0 prendre de bonnes d\xE9cisions pour l'avenir."), /* @__PURE__ */ React.createElement("p", null, "Nous sommes accr\xE9dit\xE9s par l'Agence du revenu du Canada et du Qu\xE9bec pour produire vos d\xE9claration d'imp\xF4ts de soci\xE9t\xE9s et nous pouvons \xE9galement prendre en charge votre tenue de livres, service de paie et d\xE9clarations de taxes.")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row force-flex-align-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-row flex-col--100w flex--justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Contactez-nous pour plus d'infos"), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", null, "En savoir plus"))))));
}
