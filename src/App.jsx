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

// Meta data from .env file
const {
  SNOWPACK_PUBLIC_WEBSITE_NAME,
  SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION,
  SNOWPACK_PUBLIC_NOMBRE_CLIENTS,
  SNOWPACK_PUBLIC_ESTABLISHED_DATE
} = import.meta.env;

export default function App() {
  return (<>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/a-propos">
              <About pageTitle="À propos"
                     pageDescription="Expertise. Experience. Excellence."
                     nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                     establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE} />
            </Route>
            <Route exact path="/contact">
              <Contact pageTitle="Contact"
                       pageDescription="Besoin d'information&nbsp;?"
              />
            </Route>
            <Route path="/">
              <Home pageTitle={SNOWPACK_PUBLIC_WEBSITE_NAME}
                    pageDescription={SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION}
                    nombreClients={SNOWPACK_PUBLIC_NOMBRE_CLIENTS}
                    establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE} />
            </Route>
          </Switch>
          <Footer copyrightName={`${SNOWPACK_PUBLIC_WEBSITE_NAME} Inc.`}
                  establishedDate={SNOWPACK_PUBLIC_ESTABLISHED_DATE} />
        </Suspense>
      </BrowserRouter>
    </>
  )
    ;
}
