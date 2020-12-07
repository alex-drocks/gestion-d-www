import __SNOWPACK_ENV__ from '../../../../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../../../../web_modules/react.js";
import "./ProduireDeclarations.css.proxy.js";
import Banner2 from "../../../Components/Banner/Banner.js";
import CustomNavLink2 from "../../../Components/CustomNavLink/CustomNavLink.js";
import NotificationCard2 from "../../../Components/NotificationCard/NotificationCard.js";
const {SNOWPACK_PUBLIC_WEBSITE_URL} = import.meta.env;
export default function DeclarationParticuliers({
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
    className: "etapes content-block spacer-top"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "etape1",
    className: "etape"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dividing-line full-width"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "\xC9tape #1: Remplir le questionnaire d'imp\xF4ts"), /* @__PURE__ */ React.createElement("p", null, "Vous devrez premi\xE8rement remplir notre questionnaire d'imp\xF4ts en ligne et nous fournir les renseignements n\xE9cessaires concernant votre situation en ", new Date().getFullYear(), "."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "A) T\xE9l\xE9chargez le questionnaire:"), /* @__PURE__ */ React.createElement("a", {
    href: SNOWPACK_PUBLIC_WEBSITE_URL + "/documents/Etape1_Questionnaire-impots.pdf"
  }, /* @__PURE__ */ React.createElement("button", null, "Questionnaire d'imp\xF4ts")), /* @__PURE__ */ React.createElement("p", null, "Il s'agit d'un fichier \xE9lectronique au format PDF que vous pouvez remplir directement \xE0 l'ordinateur (sans imprimer)."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "B) Remplissez le questionnaire:"), /* @__PURE__ */ React.createElement("p", null, "Veuillez remplir au mieux de vos connaissances toutes les sections de ce questionnaire qui s'appliquent \xE0 votre situation."), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Si vous avez un conjoint, remplissez la section sur votre conjoint."), /* @__PURE__ */ React.createElement("li", null, "Si vous avez des enfants, remplissez la section concernant les enfants \xE0 charge."), /* @__PURE__ */ React.createElement("li", null, "Si vous \xEAtes un travailleur autonome ou avez des revenus d'entreprise, remplissez la section 2."), /* @__PURE__ */ React.createElement("li", null, "Si vous avez des d\xE9penses d'emploi, remplissez la section 3."), /* @__PURE__ */ React.createElement("li", null, "Si vous avez un ou plusieurs immeubles \xE0 revenus, remplissez la section 4. Remplissez 1 formulaire par immeuble \xE0 revenus."), /* @__PURE__ */ React.createElement("li", null, "Si vous avez une garderie en milieu familial, remplissez la section 5.")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "C) Enregistrez le questionnaire:"), /* @__PURE__ */ React.createElement("p", null, "Quand vous aurez termin\xE9 de remplir le questionnaire, enregistrez le document sur votre ordinateur. Vous devrez nous le faire parvenir en m\xEAme temps que vos documents d'imp\xF4ts \xE0 l'\xE9tape 3.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "Quand vous \xEAtes pr\xEAt \xE0 continuer, allez \xE0 l'\xE9tape 2.")))), /* @__PURE__ */ React.createElement("div", {
    id: "etape2",
    className: "etape"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dividing-line full-width"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "\xC9tape #2: Pr\xE9parez votre dossier"), /* @__PURE__ */ React.createElement("p", null, "Vous devez ensuite pr\xE9parer votre dossier d'imp\xF4ts en rassemblant vos feuillets et pi\xE8ces justificatives n\xE9cessaires pour votre d\xE9claration. Pour vous aider \xE0 pr\xE9parer votre dossier, voici la liste des feuillets et documents les plus fr\xE9quents \xE0 joindre \xE0 votre d\xE9claration de revenus."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "A) T\xE9l\xE9chargez la liste de documents:"), /* @__PURE__ */ React.createElement("a", {
    href: SNOWPACK_PUBLIC_WEBSITE_URL + "/documents/Etape2_Liste-Documents-a-Fournir.pdf"
  }, /* @__PURE__ */ React.createElement("button", null, "Liste de documents")), /* @__PURE__ */ React.createElement("p", null, "Il s'agit d'un fichier \xE9lectronique au format PDF que vous pouvez imprimer afin de cocher chaque document que vous avez."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "B) Rassemblez vos documents d'imp\xF4ts en vous aidant avec la liste:"), /* @__PURE__ */ React.createElement("p", null, "En vous servant de la liste de documents, rassemblez tous les documents qui s'appliquent \xE0 votre situation et cochez les cases pour vous aider \xE0 savoir o\xF9 vous \xEAtes rendus."), /* @__PURE__ */ React.createElement("p", null, "Vous avez des doutes qu\u2019il vous manque quelque chose ? N\u2019ayez crainte, comme vous avez rempli notre questionnaire d'imp\xF4ts, nous serons en mesure de voir s'il vous manque des feuillets ou documents et prendrons contact avec vous pour vous les demander."), /* @__PURE__ */ React.createElement("p", null, "Lorsque vous avez rassembl\xE9 tous vos papiers, continuer \xE0 l'\xE9tape 3 pour savoir comment nous les acheminer.")))), /* @__PURE__ */ React.createElement("div", {
    id: "etape3",
    className: "etape"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dividing-line full-width"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "\xC9tape #3: Transmettre votre dossier"), /* @__PURE__ */ React.createElement("p", null, "Lorsque votre dossier est pr\xEAt \xE0 \xEAtre envoy\xE9, vous devez nous le faire parvenir par l'un des moyens suivant: (A) par courriel, (B) par la poste, ou (C) en personne. Assurez-vous toutefois de r\xE9unir tous les documents demand\xE9s tel qu'expliqu\xE9 \xE0 l'\xE9tape 2."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "A) Par courriel:"), /* @__PURE__ */ React.createElement("p", null, "Le plus simple et le plus rapide est de nous transmettre votre dossier de fa\xE7on \xE9lectronique. Cela vous \xE9vite le d\xE9placement et acc\xE9l\xE8re le traitement de votre dossier. Pour cela, vous n'avez qu'\xE0 nous envoyer votre dossier par courriel \xE0 l'adresse", " ", /* @__PURE__ */ React.createElement("strong", null, "daniel@gestiondesroches.com"), "."), /* @__PURE__ */ React.createElement("p", null, "Veuillez suivre la proc\xE9dure ci-dessous pour nous transmettre votre dossier par courriel:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Scannez"), " (ou prenez en photo) vos feuillets et documents \xE0 d\xE9clarer (doit \xEAtre visible)."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Cr\xE9ez un dossier compress\xE9 (ZIP)"), " et glissez-y tous vos fichiers ainsi que le questionnaire d'imp\xF4ts que vous avez rempli."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Envoyez-nous"), " le fichier ZIP par courriel.")), /* @__PURE__ */ React.createElement("p", null, "Vous recevrez un accus\xE9 de r\xE9ception dans les 24 heures suivant l'envoi de votre dossier."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "B) Par la poste:"), /* @__PURE__ */ React.createElement("p", null, "Si vous souhaitez nous envoyer vos papiers physiquement, vous pouvez nous les transmettre par la poste \xE0 destination de:"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", {
    style: {borderLeft: "1px solid var(light-gray)"}
  }, "Gestion Desroches Inc. ", /* @__PURE__ */ React.createElement("br", null), "1650, Boulevard Goyer Ste-Madeleine", /* @__PURE__ */ React.createElement("br", null), "Qu\xE9bec, J0H 1S0", /* @__PURE__ */ React.createElement("br", null), "514-293-0200")), /* @__PURE__ */ React.createElement("p", null, "Notez que les frais d'envoi et de retour sont \xE0 votre charge."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "C) En personne:"), /* @__PURE__ */ React.createElement("p", null, "Si vous demeurez sur la Rive-Sud et que vous tenez \xE0 nous transmettre vos documents en personne, vous pouvez venir porter votre dossier d'imp\xF4ts \xE0 notre bureau. Par contre, vous devez d'abord nous contacter pour confirmer notre disponibilit\xE9.", " ", /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/contact",
    className: "text-link blue-text"
  }, "Contactez-nous avant")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement(NotificationCard2, {
    classNames: "align-icon-top"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "blue-text"
  }, "NOTE POUR PREMI\xC8RE D\xC9CLARATION / NOUVEL ARRIVANT:"), /* @__PURE__ */ React.createElement("p", null, "Si vous \xEAtes arriv\xE9s au Canada au cours de l'ann\xE9e et/ou que vous produisez votre premi\xE8re d'imp\xF4ts, vous devrez obligatoirement nous transmettre vos papiers par la poste en ou en personne. La raison est que pour votre premi\xE8re d\xE9claration de revenu, le gouvernement exige qu'on lui transmette votre dossier physiquement et non pas de fa\xE7on \xE9lectronique. Vous devez donc joindre \xE0 votre dossier tous vos feuillets et factures et nous les transmettre physiquement par la poste ou en personne.")))), /* @__PURE__ */ React.createElement("div", {
    id: "etape4",
    className: "etape"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dividing-line full-width"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "\xC9tape #4: Recevoir vos r\xE9sultats et effectuer le paiement"), /* @__PURE__ */ React.createElement("p", null, "\xC0 partir du moment que nous avons re\xE7u votre dossier (physique ou num\xE9rique), vous devez compter un d\xE9lai d'environ 1 \xE0 2 semaines pour que nous compl\xE9tions votre d\xE9claration."), /* @__PURE__ */ React.createElement("p", null, "D\xE8s que votre d\xE9claration d'imp\xF4ts sera termin\xE9e, nous vous contacterons pour vous en aviser et vous transmettre vos r\xE9sultats."), /* @__PURE__ */ React.createElement("p", null, "Lorsque votre d\xE9claration de revenu sera termin\xE9e, nous vous acheminerons vos r\xE9sultats ainsi que votre dossier par le m\xEAme biais que vous nous les aviez envoy\xE9s. Nous vous fournirons \xE9galement une explication sommaire de vos r\xE9sultats ainsi que des recommandations personnalis\xE9es pour \xE9conomiser de l'imp\xF4t l'ann\xE9e suivante. Nous transmettrons ensuite votre d\xE9claration au gouvernement par le biais du service de d\xE9claration en ligne TED."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "A) Si vous nous avez transmis votre dossier par courriel:"), /* @__PURE__ */ React.createElement("p", null, "Vous recevrez alors un courriel incluant:"), /* @__PURE__ */ React.createElement(RecevoirVosResultatsEtPayer, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "B) Si vous nous avez transmis votre dossier par la poste:"), /* @__PURE__ */ React.createElement("p", null, "Nous vous r\xE9achemineront alors votre dossier par la poste en incluant:"), /* @__PURE__ */ React.createElement(RecevoirVosResultatsEtPayer, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "C) Si vous nous avez transmis votre dossier en personne:"), /* @__PURE__ */ React.createElement("p", null, "Nous vous contacterons pour que vous puissiez venir r\xE9cup\xE9rer votre dossier \xE0 notre bureau. Nous vous remettrons alors:"), /* @__PURE__ */ React.createElement(RecevoirVosResultatsEtPayer, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement(NotificationCard2, {
    classNames: "align-icon-top"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "blue-text"
  }, "Note importante: nous donner l'autorisation de compl\xE9ter"), /* @__PURE__ */ React.createElement("p", null, "Pour que nous puissions transmettre votre d\xE9claration de revenu au gouvernement, vous devez absolument nous en donner l'autorisation en signant le formulaire TED. De plus, vous devez avoir effectu\xE9 le paiement complet pour le service de d\xE9claration. D\xE8s que nous aurons re\xE7u votre formulaire TED d\xFBment sign\xE9 ainsi que votre paiement, nous transmettrons votre d\xE9claration de revenu au gouvernement.")))), /* @__PURE__ */ React.createElement("div", {
    id: "etape-terminee",
    className: "etape"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dividing-line full-width"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-row"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Vous avez enfin termin\xE9 :)"), /* @__PURE__ */ React.createElement("p", null, "Nous vous remercions de nous avoir fait confiance pour votre d\xE9claration d'Imp\xF4ts cette ann\xE9e et nous nous tenons \xE0 votre disposition si vous avez besoin d'information suppl\xE9mentaire sur votre d\xE9claration.")), /* @__PURE__ */ React.createElement(CustomNavLink2, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", null, "Contactez-nous au besoin"))))));
}
function RecevoirVosResultatsEtPayer() {
  return /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Explication de vos r\xE9sultats. ")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Formulaire TED \xE0 signer."), " Un formulaire \xE0 signer et \xE0 nous retourner pour nous autoriser \xE0 transmettre votre d\xE9claration par Internet au gouvernement."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Votre d\xE9claration de revenu en format imprim\xE9.")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Facture \xE0 payer. "), " La facture \xE0 payer pour nos services, est payable par en argent ou par virement interac tel qu'indiqu\xE9 sur celle-ci (r\xE9f\xE9rez-vous \xE0 votre facture pour savoir comment nous payer)."));
}
