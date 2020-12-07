import React from "../../../web_modules/react.js";
import Banner2 from "../../Components/Banner/Banner.js";
import CustomNavLink2 from "../../Components/CustomNavLink/CustomNavLink.js";
import Quote2 from "../../Components/Quote/Quote.js";
import ContactezNous2 from "../../Components/ContactezNous/ContactezNous.js";
import bannerBackgroundWebp from "../../images/rapport_dimpots_quebec.webp.proxy.js";
import bannerBackgroundFallback from "../../images/rapport_dimpots_quebec.jpg.proxy.js";
export default function Home({
  pageTitle,
  pageDescription,
  nombreClients,
  establishedDate
}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "route-container container"
  }, /* @__PURE__ */ React.createElement(Banner2, {
    pageTitle,
    pageDescription,
    bgImage: {
      srcWebp: bannerBackgroundWebp,
      srcFallback: bannerBackgroundFallback,
      alt: "Un comptable au travail",
      width: 2e3,
      height: 800
    }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "content-block spacer-top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--50w flex--justify-left"
  }, /* @__PURE__ */ React.createElement("h2", null, "Nous aidons les particuliers et les entreprises \xE0 \xE9conomiser de l'imp\xF4t depuis ", establishedDate, "."), /* @__PURE__ */ React.createElement("p", null, "Gestion Desroches Inc., a vu le jour en ", establishedDate, " alors que Daniel Desroches avait \xE0 c\u0153ur d'aider les travailleurs autonomes qui se retrouvaient \xE0 payer des honoraires professionnels trop \xE9lev\xE9s, malgr\xE9 leur contexte de faibles revenus."), /* @__PURE__ */ React.createElement("p", null, "Avec les ann\xE9es, la croissance de l'entreprise a \xE9t\xE9 constante et maintenant, chaque personne de la famille Desroches poss\xE8de un r\xF4le au sein de l'entreprise. Aujourd'hui, nous desservons plus de", " ", nombreClients, " clients individuels et commerciaux pour des dossiers de tenue de livres, services de paie, fiscalit\xE9s et conseils personnalis\xE9s."), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/a-propos"
  }, /* @__PURE__ */ React.createElement("button", {
    "aria-label": "En savoir plus sur nous"
  }, "En savoir plus sur nous"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--40w flex-margin-left--10w flex--justify-left"
  }, /* @__PURE__ */ React.createElement(ContactezNous2, {
    renderTitle: true,
    renderDirects: false,
    renderParagraph: true,
    renderNotification: true,
    renderLink: true
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "content-block spacer-top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content-block"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "flex-row"
  }, "Notre expertise")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--30w flex-card-border-top"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "flex-card-border-top--title"
  }, "D\xE9claration d'imp\xF4ts de particuliers"), /* @__PURE__ */ React.createElement("p", {
    className: "flex-card-border-top--text"
  }, "Nous produisons des d\xE9clarations de revenus de particuliers depuis plus de ", new Date().getFullYear() - establishedDate, " ans et aidons plus de ", nombreClients, " personnes \xE0 chaque ann\xE9e."), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/services/impots-particuliers",
    className: "text-link blue-text"
  }, "Imp\xF4ts de particuliers")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--30w flex-card-border-top"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "flex-card-border-top--title"
  }, "D\xE9claration d'imp\xF4ts de soci\xE9t\xE9s"), /* @__PURE__ */ React.createElement("p", {
    className: "flex-card-border-top--text"
  }, "Si vous avez une soci\xE9t\xE9 incorpor\xE9e, nous avons l'expertise pour produire vos d\xE9clarations d'imp\xF4ts T2 (f\xE9d\xE9ral) et CO-17 (provincial)."), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/services/impots-societes",
    className: "text-link blue-text"
  }, "Imp\xF4ts de soci\xE9t\xE9s")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--30w flex-card-border-top"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "flex-card-border-top--title"
  }, "Comptabilit\xE9 pour entreprises"), /* @__PURE__ */ React.createElement("p", {
    className: "flex-card-border-top--text"
  }, "Si vous poss\xE9dez une petite entreprise ou \xEAtes un travailleur autonome, nous pouvons prendre en charge la gestion de votre comptabilit\xE9."), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/services/comptabilite-entreprises",
    className: "text-link blue-text"
  }, "Comptabilit\xE9 d'entreprise"))), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/services"
  }, /* @__PURE__ */ React.createElement("button", null, "Voir tous nos services"))), /* @__PURE__ */ React.createElement(Quote2, {
    author: "Jean Yanne"
  }, "J\u2019ai d\xE9j\xE0 essay\xE9 de payer mes imp\xF4ts avec le sourire, ils pr\xE9f\xE8rent un ch\xE8que."));
}
