import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Main Styles
import "./styles/globals.css";

const { SNOWPACK_PUBLIC_WEBSITE_NAME, SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION } = import.meta.env;

// Components
// import Loading from "./Components/Loading/Loading";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

// Pages (Routes)
const Home = lazy(() => import("./routes/home/Home"));
const About = lazy(() => import("./routes/about/About"));

export default function App() {
  return (<>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/apropos">
              <About siteName={SNOWPACK_PUBLIC_WEBSITE_NAME} />
            </Route>
            <Route path="/">
              <Home siteName={SNOWPACK_PUBLIC_WEBSITE_NAME} siteDescription={SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION} />
            </Route>
          </Switch>
          <Footer siteName={SNOWPACK_PUBLIC_WEBSITE_NAME} />
        </Suspense>
      </BrowserRouter>
    </>
  );
}
