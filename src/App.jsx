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

// Meta data from .env file
const { SNOWPACK_PUBLIC_WEBSITE_NAME, SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION } = import.meta.env;

export default function App() {
  return (<>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/a-propos">
              <About pageTitle="À propos"
                     pageDescription="Expertise. Experience. Excellence." />
            </Route>
            <Route path="/">
              <Home pageTitle={SNOWPACK_PUBLIC_WEBSITE_NAME}
                    pageDescription={SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION} />
            </Route>
          </Switch>
          <Footer copyrightName={`${SNOWPACK_PUBLIC_WEBSITE_NAME} Inc.`} />
        </Suspense>
      </BrowserRouter>
    </>
  );
}
