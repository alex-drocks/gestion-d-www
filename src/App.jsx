import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Main Styles
import "./styles/globals.css";

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AnnouncementBar from "./Components/AnnouncementBar/AnnouncementBar";

// Pages (Routes)
const Home = lazy(() => import("./routes/home/Home"));
const About = lazy(() => import("./routes/about/About"));
const Liens = lazy(() => import("./routes/liens/Liens"));
const Contact = lazy(() => import("./routes/contact/Contact"));
const RendezVous = lazy(() => import("./routes/rendez-vous/RendezVous"));
const Services = lazy(() => import("./routes/services/Services"));
const ImpotsParticuliers = lazy(() =>
  import("./routes/services/impots-particuliers/ImpotsParticuliers")
);
const ProduireDeclarationParticuliers = lazy(() =>
  import(
    "./routes/services/impots-particuliers/ProduireDeclarationParticuliers"
    )
);
const ImpotsSocietes = lazy(() =>
  import("./routes/services/impots-societes/ImpotsSocietes")
);
const ComptabiliteEntreprises = lazy(() =>
  import("./routes/services/comptabilite-entreprises/ComptabiliteEntreprises")
);

// Meta data from .env file
const {
  SNOWPACK_PUBLIC_WEBSITE_NAME,
  SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION,
  SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
  SNOWPACK_PUBLIC_ESTABLISHED_DATE
} = import.meta.env;

export default function App() {
  //Handle url/#hash to focus elements
  React.useEffect(() => {
    window.onload = () => {
      const { hash } = window.location;
      if (hash) {
        setTimeout(() => {
          const focusElm = document.querySelector(hash);
          if (focusElm) {
            focusElm.scrollIntoView();
          }
        }, 10);
      }
    };
  }, []);

  return (
    <>
      <BrowserRouter>

        <AnnouncementBar />
        <Header />

        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/a-propos">
              <About
                nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
              />
            </Route>

            <Route
              exact
              path="/services/impots-particuliers/produire-declaration"
            >
              <ProduireDeclarationParticuliers />
            </Route>

            <Route exact path="/services/impots-particuliers">
              <ImpotsParticuliers
                establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
              />
            </Route>

            <Route exact path="/services/impots-societes">
              <ImpotsSocietes />
            </Route>

            <Route exact path="/services/comptabilite-entreprises">
              <ComptabiliteEntreprises />
            </Route>

            <Route exact path="/services">
              <Services
                nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE}
              />
            </Route>

            <Route exact path="/liens">
              <Liens />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/rendez-vous">
              <RendezVous />
            </Route>

            <Route path="/">
              <Home
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
