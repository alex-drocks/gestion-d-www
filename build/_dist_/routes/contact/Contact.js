import React from "../../../web_modules/react.js";
import Banner2 from "../../Components/Banner/Banner.js";
import ContactezNous2 from "../../Components/ContactezNous/ContactezNous.js";
import ContactForm2 from "../../Components/ContactForm/ContactForm.js";
export default function Contact({pageTitle, pageDescription}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "route-container container"
  }, /* @__PURE__ */ React.createElement(Banner2, {
    pageTitle,
    pageDescription
  }), /* @__PURE__ */ React.createElement("div", {
    className: "content-block spacer-top"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--50w flex--justify-left"
  }, /* @__PURE__ */ React.createElement("h2", null, "Contactez-nous"), /* @__PURE__ */ React.createElement("p", null, "Pour nous contacter ou obtenir plus d'informations, n'h\xE9sitez pas \xE0 utiliser le formulaire ci-dessous. Il s'agit du moyen le plus efficace pour nous. Autrement, vous pouvez aussi nous joindre avec nos coordonn\xE9es directes. Il nous fera plaisir de vous r\xE9pondre dans les plus brefs d\xE9lais."), /* @__PURE__ */ React.createElement(ContactForm2, {
    fetchUrl: "https://gestiond.finance-d.com/api/submit-contact-form.php",
    classNames: "spacer-top flex-col"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex-col flex-col--40w flex-margin-left--10w flex--justify-left"
  }, /* @__PURE__ */ React.createElement(ContactezNous2, {
    renderTitle: false,
    renderDirects: true,
    renderParagraph: false,
    renderRendezVous: true,
    renderNotification: true,
    renderLink: false
  }))));
}
