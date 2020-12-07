import React from "../../../../web_modules/react.js";
import Banner2 from "../../../Components/Banner/Banner.js";
import CustomNavLink2 from "../../../Components/CustomNavLink/CustomNavLink.js";
export default function ImpotsParticuliers({
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
    className: "content-block spacer-top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--50w flex--justify-left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content-block"
  }, /* @__PURE__ */ React.createElement("p", null, "Nous nous sp\xE9cialisons dans la production de d\xE9claration de revenus de particuliers depuis ", establishedDate, " et nous saurons vous conseiller de fa\xE7on professionnelle pour que vous puissiez r\xE9cup\xE9rer le maximum d'imp\xF4ts auquel vous avez droit, et ce, quelque soit votre statut (c\xE9libataire, couple, nouvel arrivant, travailleur autonome, etc.)."), /* @__PURE__ */ React.createElement("div", {
    className: "content-block spacer-top"
  }, /* @__PURE__ */ React.createElement("h2", null, "Tarifs imp\xF4ts des particuliers"), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "\xC9tudiant | 80$"), /* @__PURE__ */ React.createElement("p", null, "\xC9tudiant \xE0 temps plein avec revenu annuel inf\xE9rieur \xE0 15 000$.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "Retrait\xE9 | 75$"), /* @__PURE__ */ React.createElement("p", null, "Par personne \xE0 la retraite.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "Individuel | 90$"), /* @__PURE__ */ React.createElement("p", null, "Personne vivant seule, c\xE9libataire, veuf(ve).")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "Couple | 145$"), /* @__PURE__ */ React.createElement("p", null, "Conjoints de fait, couple mari\xE9 ou couple retrait\xE9 avec ou sans enfant \xE0 charge.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "Travailleur autonome | prix selon le dossier"), /* @__PURE__ */ React.createElement("p", null, "Travailleur autonome ou petite entreprise avec revenus et d\xE9penses d'entreprises.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "D\xE9penses d'emploi | prix selon le dossier"), /* @__PURE__ */ React.createElement("p", null, "Salari\xE9 avec d\xE9penses d'emploi \xE0 d\xE9clarer.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "Immeuble \xE0 revenu | prix selon le dossier"), /* @__PURE__ */ React.createElement("p", null, "Personne ayant un ou plusieurs immeubles \xE0 revenu.")), /* @__PURE__ */ React.createElement("div", {
    className: "content-block"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", null, "Contactez-nous"))))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--40w flex-margin-left--10w flex--justify-left flex-card-border-top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content-block flex-card-border-top--title"
  }, /* @__PURE__ */ React.createElement("h2", null, "Faites vos imp\xF4ts en 4 \xE9tapes"), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "\xC9tape 1: Remplir le questionnaire d'imp\xF4ts"), /* @__PURE__ */ React.createElement("p", null, "Vous devrez premi\xE8rement remplir notre questionnaire d'imp\xF4ts en ligne et nous fournir les renseignements n\xE9cessaires concernant votre situation en ", new Date().getFullYear(), ".")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "\xC9tape 2: Pr\xE9parer votre dossier"), /* @__PURE__ */ React.createElement("p", null, "Vous devrez ensuite pr\xE9parer votre dossier d'imp\xF4ts en rassemblant vos feuillets et pi\xE8ces justificatives n\xE9cessaires pour votre d\xE9claration. Nous vous fournirons un aide-m\xE9moire pour vous aider \xE0 identifier les documents que vous avez besoin de rassembler.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "\xC9tape 3: Transmettre vos documents"), /* @__PURE__ */ React.createElement("p", null, "Lorsque vous aurez rempli le questionnaire d'imp\xF4ts et que vous aurez termin\xE9 de rassembler vos feuillets et pi\xE8ces justificatives, vous pourrez nous transmettre vos documents soit (1) Par courriel, (2) Par la poste ou (3) En personne.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", null, "\xC9tape 4: Recevoir vos r\xE9sultats et effectuer le paiement"), /* @__PURE__ */ React.createElement("p", null, "Lorsque votre d\xE9claration de revenu sera termin\xE9e, nous vous acheminerons vos r\xE9sultats ainsi que votre dossier par le m\xEAme biais que vous nous les aviez envoy\xE9s. Nous vous fournirons \xE9galement une explication sommaire de vos r\xE9sultats ainsi que des recommandations personnalis\xE9es pour \xE9conomiser de l'imp\xF4t l'ann\xE9e suivante. Nous transmettrons ensuite votre d\xE9claration au gouvernement par le biais du service de d\xE9claration en ligne TED."), /* @__PURE__ */ React.createElement("br", null)), /* @__PURE__ */ React.createElement("div", {
    className: "content-block card flex-card-border-top"
  }, /* @__PURE__ */ React.createElement("h2", null, "Pr\xEAt \xE0 faire vos imp\xF4ts?"), /* @__PURE__ */ React.createElement("p", null, "Appuyez sur le bouton ci-dessous pour suivre les 4 \xE9tapes qui vont vous aider \xE0 bien nous transmettre votre dossier de d\xE9claration d'imp\xF4ts."), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/services/impots-particuliers/produire-declaration"
  }, /* @__PURE__ */ React.createElement("button", null, "Commencer")))))));
}
