import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React, {Suspense, lazy} from "../web_modules/react.js";
import {BrowserRouter, Route, Switch} from "../web_modules/react-router-dom.js";
import "./styles/globals.css.proxy.js";
import Header2 from "./Components/Header/Header.js";
import Footer2 from "./Components/Footer/Footer.js";
const Home = lazy(() => import("./routes/home/Home.js"));
const About = lazy(() => import("./routes/about/About.js"));
const Contact = lazy(() => import("./routes/contact/Contact.js"));
const Liens = lazy(() => import("./routes/liens/Liens.js"));
const Services = lazy(() => import("./routes/services/Services.js"));
const ImpotsParticuliers = lazy(() => import("./routes/services/impots-particuliers/ImpotsParticuliers.js"));
const DeclarationParticuliers = lazy(() => import("./routes/services/impots-particuliers/DeclarationParticuliers.js"));
const ImpotsSocietes = lazy(() => import("./routes/services/impots-societes/ImpotsSocietes.js"));
const ComptabiliteEntreprises = lazy(() => import("./routes/services/comptabilite-entreprises/ComptabiliteEntreprises.js"));
const {
  SNOWPACK_PUBLIC_WEBSITE_NAME,
  SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION,
  SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
  SNOWPACK_PUBLIC_ESTABLISHED_DATE
} = import.meta.env;
export default function App() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement(Suspense, {
    fallback: /* @__PURE__ */ React.createElement(React.Fragment, null)
  }, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/a-propos"
  }, /* @__PURE__ */ React.createElement(About, {
    pageTitle: "\xC0 propos",
    pageDescription: "Expertise. Experience. Excellence.",
    nombreClients: SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
    establishedDate: SNOWPACK_PUBLIC_ESTABLISHED_DATE
  })), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/services"
  }, /* @__PURE__ */ React.createElement(Services, {
    pageTitle: "Services",
    pageDescription: "Nos principaux services",
    nombreClients: SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
    establishedDate: SNOWPACK_PUBLIC_ESTABLISHED_DATE
  })), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/services/impots-particuliers"
  }, /* @__PURE__ */ React.createElement(ImpotsParticuliers, {
    pageTitle: "Imp\xF4ts des particuliers",
    pageDescription: "D\xE9claration d'imp\xF4ts des particuliers",
    nombreClients: SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
    establishedDate: SNOWPACK_PUBLIC_ESTABLISHED_DATE
  })), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/services/impots-particuliers/produire-declaration"
  }, /* @__PURE__ */ React.createElement(DeclarationParticuliers, {
    pageTitle: "Produire ma d\xE9claration",
    pageDescription: "Les 4 \xE9tapes pour produire vos imp\xF4ts",
    nombreClients: SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
    establishedDate: SNOWPACK_PUBLIC_ESTABLISHED_DATE
  })), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/services/impots-societes"
  }, /* @__PURE__ */ React.createElement(ImpotsSocietes, {
    pageTitle: "IMP\xD4TS DES SOCI\xC9T\xC9S",
    pageDescription: "D\xE9claration d'imp\xF4ts pour incorporations",
    nombreClients: SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
    establishedDate: SNOWPACK_PUBLIC_ESTABLISHED_DATE
  })), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/services/comptabilite-entreprises"
  }, /* @__PURE__ */ React.createElement(ComptabiliteEntreprises, {
    pageTitle: "COMPTABILIT\xC9 D'ENTREPRISE",
    pageDescription: "Services comptables pour entreprises",
    nombreClients: SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
    establishedDate: SNOWPACK_PUBLIC_ESTABLISHED_DATE
  })), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/liens"
  }, /* @__PURE__ */ React.createElement(Liens, {
    pageTitle: "Services utiles",
    pageDescription: "Outils & ressources pratiques"
  })), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/contact"
  }, /* @__PURE__ */ React.createElement(Contact, {
    pageTitle: "Contact",
    pageDescription: "Il est simple de nous joindre"
  })), /* @__PURE__ */ React.createElement(Route, {
    path: "/"
  }, /* @__PURE__ */ React.createElement(Home, {
    pageTitle: SNOWPACK_PUBLIC_WEBSITE_NAME,
    pageDescription: SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION,
    nombreClients: SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
    establishedDate: SNOWPACK_PUBLIC_ESTABLISHED_DATE
  }))), /* @__PURE__ */ React.createElement(Footer2, {
    copyrightName: `${SNOWPACK_PUBLIC_WEBSITE_NAME} Inc.`,
    establishedDate: SNOWPACK_PUBLIC_ESTABLISHED_DATE
  }))));
}
