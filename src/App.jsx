import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Main Styles
import "./styles/globals.css";

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// Pages (Routes)
const Home = lazy(() => import("./routes/home/Home"));
const About = lazy(() => import("./routes/about/About"));
const Contact = lazy(() => import("./routes/contact/Contact"));
const Liens = lazy(() => import("./routes/liens/Liens"));
const Services = lazy(() => import("./routes/services/Services"));
const ImpotsParticuliers = lazy(() =>
  import("./routes/services/impots-particuliers/ImpotsParticuliers")
);
const DeclarationParticuliers = lazy(() =>
  import("./routes/services/impots-particuliers/DeclarationParticuliers")
);
const ImpotsSocietes = lazy(() => import("./routes/services/impots-societes/ImpotsSocietes"));
// const ComptabiliteEntreprise = lazy(() => import("./routes/services/ComptabiliteEntreprise"));

// Meta data from .env file
const {
  SNOWPACK_PUBLIC_WEBSITE_NAME,
  SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION,
  SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
  SNOWPACK_PUBLIC_ESTABLISHED_DATE
} = import.meta.env;

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/a-propos">
              <About
                pageTitle="À propos"
                pageDescription="Expertise. Experience. Excellence."
                nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
              />
            </Route>
            <Route exact path="/services">
              <Services
                pageTitle="Services"
                pageDescription="Nos principaux services"
                nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
              />
            </Route>
            <Route exact path="/services/impots-particuliers">
              <ImpotsParticuliers
                pageTitle="Impôts des particuliers"
                pageDescription="Déclaration d'impôts des particuliers"
                nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
              />
            </Route>
            <Route
              exact
              path="/services/impots-particuliers/produire-declaration"
            >
              <DeclarationParticuliers
                pageTitle="Produire ma déclaration"
                pageDescription="Les 4 étapes pour produire vos impôts"
                nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
              />
            </Route>
            <Route exact path="/services/impots-societes">
              <ImpotsSocietes
                pageTitle="IMPÔTS DES SOCIÉTÉS"
                pageDescription="Déclaration d'impôts pour incorporations"
                nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
              />
            </Route>
            <Route exact path="/services/comptabilite-entreprises">
              <h1>comptabilite-entreprises</h1>
            </Route>
            <Route exact path="/services/creation-incorporations">
              <h1>creation-incorporations</h1>
            </Route>
            <Route exact path="/services/succession">
              <h1>succession</h1>
            </Route>
            <Route exact path="/liens">
              <Liens
                pageTitle="Services utiles"
                pageDescription="Outils & ressources pratiques"
              />
            </Route>
            <Route exact path="/contact">
              <Contact
                pageTitle="Contact"
                pageDescription="Besoin d'information&nbsp;?"
              />
            </Route>
            <Route path="/">
              <Home
                pageTitle={SNOWPACK_PUBLIC_WEBSITE_NAME}
                pageDescription={SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION}
                nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
              />
            </Route>
          </Switch>

          <Footer
            copyrightName={`${SNOWPACK_PUBLIC_WEBSITE_NAME} Inc.`}
            establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
          />
        </Suspense>
      </BrowserRouter>
    </>
  );
}
