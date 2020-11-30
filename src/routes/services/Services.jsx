import React from "react";

// Components
import Banner from "../../Components/Banner/Banner";
import CustomNavLink from "../../Components/CustomNavLink/CustomNavLink";

export default function Services({
                                   pageTitle,
                                   pageDescription,
                                   nombreClients,
                                   establishedDate
                                 }) {
  return (
    <div className="route-container container page-services">
      <Banner pageTitle={pageTitle} pageDescription={pageDescription} />

      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <div className="content-block card">
            <h2>Déclaration d'impôts des particuliers</h2>
            <p>
              Nous produisons des déclarations de revenus de particuliers depuis
              plus de {new Date().getFullYear() - establishedDate} ans et aidons
              plus de {nombreClients} personnes à chaque année.
              <br />
              <br />
              <CustomNavLink
                to="/services/impots-particuliers"
                className="text-link blue-text"
              >
                Impôts particuliers
              </CustomNavLink>
            </p>
          </div>
          <div className="content-block spacer-top">
            <h2>Déclaration d'impôts de sociétés</h2>
            <p>
              Si vous êtes propriétaire d'une société incorporée, nous avons
              l'expertise pour produire vos déclarations d'impôts T2 (fédéral)
              et CO-17 (provincial). Nous sommes accrédités par l'Agence du
              revenu du Canada et du Québec pour produire vos déclaration
              d'impôts de sociétés.
              <br />
              <br />
              <CustomNavLink
                to="/services/impots-societes"
                className="text-link blue-text"
              >
                Impôts de sociétés
              </CustomNavLink>
            </p>
          </div>

          <div className="content-block spacer-top">
            <h2>Comptabilité d'entreprise et tenue de livres</h2>
            <p>
              Si vous possédez une petite entreprise ou êtes un travailleur
              autonome, nous pouvons prendre en charge la gestion de votre
              comptabilité.
              <br />
              <br />
              <CustomNavLink
                to="/services/comptabilite-entreprises"
                className="text-link blue-text"
              >
                Comptabilité d'entreprises
              </CustomNavLink>
            </p>
          </div>
        </div>
        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <div className="content-block">
            <h2>Création d'incorporations</h2>
            <p>
              Nous offrons un service personnalisé pour la création d'entreprise
              en vous accompagnant du début à la fin.
              <br />
              <br />
              <CustomNavLink
                to="/services/creation-incorporations"
                className="text-link blue-text"
              >
                Création d'incorporations
              </CustomNavLink>
            </p>
          </div>
          <div className="content-block spacer-top">
            <h2>Services de succession</h2>
            <p>
              Nous pouvons prendre en charge un dossier de succession
              en nous adaptant au cas par cas pour bien vous servir.
              <br />
              <br />
              <CustomNavLink
                // to="/services/succession"
                to="/contact"
                className="text-link blue-text"
              >
                Contactez-nous
              </CustomNavLink>
            </p>
          </div>
        </div>
      </div>

      <div className="content-block spacer-top force-flex-align-center">
        <CustomNavLink to="/contact">
          <button>Contactez-nous</button>
        </CustomNavLink>
      </div>
    </div>
  );
}
