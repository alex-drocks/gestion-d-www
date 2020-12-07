import React from "../../../web_modules/react.js";
import Banner2 from "../../Components/Banner/Banner.js";
import Bio2 from "../../Components/Bio/Bio.js";
import Quote2 from "../../Components/Quote/Quote.js";
import CustomNavLink2 from "../../Components/CustomNavLink/CustomNavLink.js";
import ModernImage2 from "../../Components/ModernImage/ModernImage.js";
import daniel from "../../images/daniel-bio.png.proxy.js";
import danielWebp from "../../images/daniel-bio.webp.proxy.js";
import alex from "../../images/alex-bio.png.proxy.js";
import alexWebp from "../../images/alex-bio.webp.proxy.js";
import will from "../../images/will-bio.png.proxy.js";
import willWebp from "../../images/will-bio.webp.proxy.js";
import matt from "../../images/matt-bio.png.proxy.js";
import mattWebp from "../../images/matt-bio.webp.proxy.js";
import graphiqueClients from "../../images/graphique-clients-2019.png.proxy.js";
import graphiqueClientsWebp from "../../images/graphique-clients-2019.webp.proxy.js";
export default function About({
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
  }, /* @__PURE__ */ React.createElement("h2", null, "Notre histoire"), /* @__PURE__ */ React.createElement("p", null, "Gestion Desroches Inc., est une soci\xE9t\xE9 familiale de services comptables \xE9tablie et dirig\xE9e par Daniel Desroches, expert dans le domaine de la comptabilit\xE9 depuis plus de", " ", new Date().getFullYear() - establishedDate, " ans. Fond\xE9e en", " ", establishedDate, ", l'entreprise familiale sert aujourd'hui plus de", nombreClients, " particuliers et entreprises par ann\xE9e."), /* @__PURE__ */ React.createElement("p", null, "Notre \xE9quipe offre un service personnalis\xE9 de d\xE9claration d'imp\xF4ts de particuliers et de soci\xE9t\xE9s ainsi qu'une gamme de services comptables destin\xE9s \xE0 soutenir les entrepreneurs et travailleurs autonomes."), /* @__PURE__ */ React.createElement("p", null, "Notre mission est de vous offrir un service personnalis\xE9 et de qualit\xE9. Conscient de vos questions, nous prenons le temps de bien vous diriger dans vos d\xE9cisions et nous nous assurons que vous compreniez bien les impacts fiscaux de vos projets. Nous vous accompagnons dans toutes les \xE9tapes afin de maximiser vos r\xE9sultats.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--40w flex-margin-left--10w flex--justify-left"
  }, /* @__PURE__ */ React.createElement("h2", null, "Croissance de notre client\xE8le"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(ModernImage2, {
    lazyload: false,
    altText: "Graphique de nos clients",
    classNames: "graphique-clients",
    srcWebp: graphiqueClientsWebp,
    srcFallback: graphiqueClients,
    cancelInitialGrowFx: true,
    width: 781,
    height: 390
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "content-block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content-block spacer-top"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "flex-row"
  }, "Notre \xE9quipe")), /* @__PURE__ */ React.createElement(Bio2, {
    image: {webp: danielWebp, fallback: daniel},
    name: "Daniel Desroches",
    role: "PR\xC9SIDENT & FONDATEUR"
  }, "Daniel est le pr\xE9sident et fondateur de Gestion Desroches Inc. Passionn\xE9 par la comptabilit\xE9 depuis l'\xE2ge de 16 ans, il s'est toujours int\xE9ress\xE9 \xE0 la fiscalit\xE9 et a d\xE9croch\xE9 un dipl\xF4me en comptabilit\xE9 \xE0 l'Universit\xE9 du Qu\xE9bec \xE0 Trois-Rivi\xE8res. En", " ", establishedDate, ", il a d\xE9cid\xE9 de fonder son propre cabinet et il sert aujourd'hui plus de ", nombreClients, " clients satisfaits."), /* @__PURE__ */ React.createElement(Bio2, {
    image: {webp: willWebp, fallback: will},
    name: "William Desroches",
    role: "SERVICE DE PAIE, TENUE DE LIVRES, IMP\xD4TS DES PARTICULIERS"
  }, "William poss\xE8de une technique en comptabilit\xE9 et gestion. Il a commenc\xE9 \xE0 travailler en 2019 dans la soci\xE9t\xE9 familiale et il est form\xE9 aupr\xE8s de Daniel et Alexandre afin de connaitre tous les aspects du m\xE9tier. En date du dernier trimestre de 2020, il se sp\xE9cialise dans nos services de paies et la tenue de livres avec Sage50, ainsi que pour les imp\xF4ts des particuliers en collaboration avec Daniel. Parmi ses nombreuses comp\xE9tences remarquables, il est entre autres pr\xE9cis dans son travail et habile pour communiquer."), /* @__PURE__ */ React.createElement(Bio2, {
    image: {webp: mattWebp, fallback: matt},
    name: "Matthieu Desroches",
    role: "COMPTABLE, IMP\xD4TS DES PARTICULIERS"
  }, "Matthieu a rejoint l'entreprise familiale en 2015 apr\xE8s la fin de ses \xE9tudes en comptabilit\xE9. Il d\xE9tient un baccalaur\xE9at en Sciences Comptables qu'il a d\xE9croch\xE9 \xE0 l'\xC9cole des Sciences de la Gestion et se sp\xE9cialise aujourd'hui dans les d\xE9clarations d'imp\xF4ts de particuliers. Matthieu est \xE9galement formateur en organisation et gestion du temps et publie des articles/podcasts chaque semaine sur", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://matthieudesroches.com/",
    className: "blue-text text-link no-wrap"
  }, "son site internet"), "."), /* @__PURE__ */ React.createElement(Bio2, {
    image: {webp: alexWebp, fallback: alex},
    name: "Alexandre Desroches",
    role: "TENUE DE LIVRES, D\xC9VELOPPEMENT INFORMATIQUE & LOGICIEL FINANCE D"
  }, "Alexandre d\xE9tient une attestation professionnelle en comptabilit\xE9 et s'occupe de la tenue de livres de plus de 60 entreprises. Il est rapide, innovateur, perfectionniste et capable de trouver des solutions pour am\xE9liorer la situation de ses clients. Il est \xE9galement passionn\xE9 par la programmation. Son logiciel de facturation et tenue de livres a \xE9t\xE9 con\xE7u d'apr\xE8s son exp\xE9rience chez Gestion Desroches et est accessible \xE0 partir de", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://finance-d.com/",
    className: "blue-text text-link no-wrap"
  }, "Finance-D.com"), ".")), /* @__PURE__ */ React.createElement(Quote2, {
    author: "Gestion Desroches"
  }, "Nous avons toujours voulu servir comme nous aimons nous-m\xEAme \xEAtre servis."), /* @__PURE__ */ React.createElement("div", {
    className: "content-block spacer-top force-flex-align-center"
  }, /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/services"
  }, /* @__PURE__ */ React.createElement("button", null, "Voir nos services"))));
}
