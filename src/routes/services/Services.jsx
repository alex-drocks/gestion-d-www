import React from "react";

// Components
import CustomNavLink from "../../Components/CustomNavLink/CustomNavLink";
import ClickableServiceCard from "../../Components/ClickableServiceCard/ClickableServiceCard";
import Page from "../../Components/Page/Page";

export default function Services({ nombreClients, establishedDate }) {
  return (
    <Page
      pageTitle="Services"
      pageDescription="Nos services principaux"
      metaDescription={
        "Gestion Desroches se spécialise dans les " +
        "déclaration d'impôts de particuliers et de sociétés, " +
        "la comptabilité d'entreprise et la tenue de livres, " +
        "la création d'incorporation, ainsi que la prise en charge de " +
        "succession."
      }
      bgImage={null}
      canonicalLink="/services/"
    >
      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <ClickableServiceCard
            serviceName="Déclaration d'impôts de particuliers"
            linkText="Impôts particuliers"
            linkTo="/services/impots-particuliers"
            classNames=""
          >
            Nous produisons des déclarations de revenus de particuliers depuis
            plus de {new Date().getFullYear() - establishedDate} ans et aidons
            plus de {nombreClients} personnes à chaque année.
          </ClickableServiceCard>
          <ClickableServiceCard
            serviceName="Déclaration d'impôts de sociétés"
            linkText="Impôts de sociétés"
            linkTo="/services/impots-societes"
            classNames="spacer-top"
          >
            Si vous êtes propriétaire d'une société incorporée, nous avons
            l'expertise pour produire vos déclarations d'impôts T2 (fédéral) et
            CO-17 (provincial).
          </ClickableServiceCard>
          <ClickableServiceCard
            serviceName="Comptabilité d'entreprise et tenue de livres"
            linkText="Comptabilité"
            linkTo="/services/comptabilite-entreprises"
            classNames="spacer-top"
          >
            Si vous possédez une petite entreprise ou êtes un travailleur
            autonome, nous pouvons prendre en charge la gestion de votre
            comptabilité.
          </ClickableServiceCard>
        </div>
        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <ClickableServiceCard
            serviceName="Création d'une incorporation"
            linkText="Contactez-nous"
            linkTo="/contact"
            classNames=""
          >
            Nous offrons un service personnalisé pour la création d'entreprise
            en vous accompagnant du début à la fin.
          </ClickableServiceCard>
          <ClickableServiceCard
            serviceName="Services de succession"
            linkText="Contactez-nous"
            linkTo="/contact"
            classNames="spacer-top"
          >
            Nous pouvons prendre en charge un dossier de succession en nous
            adaptant au cas par cas pour bien vous servir.
          </ClickableServiceCard>
        </div>
      </div>

      {/*<div className="content-block spacer-top force-flex-align-center">*/}
      {/*   */}
      {/*</div>*/}

      <div className="content-block spacer-top force-flex-align-center">
        <CustomNavLink to="/contact">
          <button aria-label="Contactez-nous">Contactez-nous</button>
        </CustomNavLink>
      </div>
    </Page>
  );
}
