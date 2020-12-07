import React from "../../../../web_modules/react.js";
import Banner2 from "../../../Components/Banner/Banner.js";
import CustomNavLink2 from "../../../Components/CustomNavLink/CustomNavLink.js";
export default function ComptabiliteEntreprises({
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
    className: "content-block spacer-top flex--justify-center text-align--left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--40w no-spacer-top"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Vous \xEAtes un travailleur autonome ou \xE0 la t\xEAte d'une petite entreprise?"), /* @__PURE__ */ React.createElement("p", null, "Nous pouvons nous occuper de votre comptabilit\xE9 d'entreprise afin que vous puissiez vous concentrer sur vos activit\xE9s les plus importantes et sur ce qui vous passionne r\xE9ellement. Ne vous tracassez plus avec votre paperasse et votre comptabilit\xE9 et faites appel \xE0 nos services."), /* @__PURE__ */ React.createElement("p", null, "Nous vous offrons une gamme compl\xE8te de services comptables allant du d\xE9marrage de votre entreprise jusqu'\xE0 la gestion compl\xE8te de votre comptabilit\xE9."), /* @__PURE__ */ React.createElement("h3", null, "Nous vous proposons, entre autres, des services de:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Tenue de livres"), /* @__PURE__ */ React.createElement("li", null, "D\xE9claration de TPS/TVQ"), /* @__PURE__ */ React.createElement("li", null, "Gestion de la paie"), /* @__PURE__ */ React.createElement("li", null, "Production d'\xE9tats financiers"), /* @__PURE__ */ React.createElement("li", null, "Support mensuel pour entrepreneurs"), /* @__PURE__ */ React.createElement("li", null, "D\xE9marrage d'entreprise (incorporation ou enregistr\xE9e)"))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row force-flex-align-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-row flex-col--100w flex--justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Contactez-nous pour plus d'infos"), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", null, "En savoir plus"))))));
}
