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

      <div className="content-block spacer-top force-flex-align-center">
        <div className="flex-col flex-col--40w">
          <p>
            Au Québec, les entreprises incorporées doivent produire une déclaration d'impôt T2 au fédéral ainsi qu'une
            déclaration d'impôt C0-17 au provincial, et ce, même si elles ne doivent pas payer d'impôts.
          </p>
        </div>

      </div>
    </div>
  );
}
