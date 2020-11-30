import React from "react";

//Components
import Banner from "../../../Components/Banner/Banner";

export default function ImpotsSocietes({
                                         pageTitle,
                                         pageDescription,
                                         nombreClients,
                                         establishedDate
                                       }) {
  return (
    <div className="route-container container">
      <Banner pageTitle={pageTitle} pageDescription={pageDescription} />

      <div className="content-block">

      </div>
    </div>
  );
}
