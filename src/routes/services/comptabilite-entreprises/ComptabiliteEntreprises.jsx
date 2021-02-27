import React, { useEffect } from "react";

//Components
import Banner from "../../../Components/Banner/Banner";
import CustomNavLink from "../../../Components/CustomNavLink/CustomNavLink";
import headInjector from "../../../functions/headInjector";

export default function ComptabiliteEntreprises({
  pageTitle,
  pageDescription,
  nombreClients,
  establishedDate,
}) {
  useEffect(() => {
    headInjector({
      pageTitle: "Comptabilité entreprises",
      metaDescription:
        "Services comptables pour entreprises. " +
        "Nous vous offrons une gamme complète de services comptables allant " +
        "du démarrage de votre entreprise jusqu'à la gestion complète de " +
        "votre comptabilité. Tenue de livres, déclaration de taxes TPS/TVQ, " +
        "gestion de paie, production d'états financiers, etc.",
      canonicalLink:
        import.meta.env.SNOWPACK_PUBLIC_WEBSITE_URL +
        "/services/comptabilite-entreprises/",
    });
  }, []);
  return (
    <div className="route-container container">
      <Banner pageTitle={pageTitle} pageDescription={pageDescription} />

      <div className="content-block spacer-top flex--justify-center text-align--left">
        <div className="flex-col flex-col--40w no-spacer-top">
          <div>
            <h2>
              Vous êtes un travailleur autonome ou à la tête d'une petite
              entreprise?
            </h2>
            <p>
              Nous pouvons nous occuper de votre comptabilité d'entreprise afin
              que vous puissiez vous concentrer sur vos activités les plus
              importantes et sur ce qui vous passionne réellement. Ne vous
              tracassez plus avec votre paperasse et votre comptabilité et
              faites appel à nos services.
            </p>
            <p>
              Nous vous offrons une gamme complète de services comptables allant
              du démarrage de votre entreprise jusqu'à la gestion complète de
              votre comptabilité.
            </p>
            <h3>Nous vous proposons, entre autres, des services de:</h3>
            <ul>
              <li>Tenue de livres</li>
              <li>Déclaration de TPS/TVQ</li>
              <li>Gestion de la paie</li>
              <li>Production d'états financiers</li>
              <li>Support mensuel pour entrepreneurs</li>
              <li>Démarrage d'entreprise (incorporation ou enregistrée)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-row force-flex-align-center">
        <div className="flex-row flex-col--100w flex--justify-center">
          <div className="">
            <h2>Contactez-nous pour plus d'infos</h2>
            <CustomNavLink to="/contact">
              <button aria-label="Contactez-nous">Contactez-nous</button>
            </CustomNavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
