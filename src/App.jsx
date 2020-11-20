import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Main Styles
import "./styles/globals.css";

const { SNOWPACK_PUBLIC_WEBSITE_NAME } = import.meta.env;

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
        <Header siteName={SNOWPACK_PUBLIC_WEBSITE_NAME} />
        <Suspense fallback={<div>Chargement...</div>}>
          <Switch>
            <Route exact path="/apropos" component={About} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer siteName={SNOWPACK_PUBLIC_WEBSITE_NAME} />
        </Suspense>
      </BrowserRouter>
    </>
  );
}
