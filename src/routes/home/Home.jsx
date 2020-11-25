import React from "react";

// Components
import Banner from "../../Components/Banner/Banner";
import CustomNavLink from "../../Components/CustomNavLink/CustomNavLink";

// Images...
import banner from "../../images/rapport_dimpots_quebec.webp";


export default function Home({ siteName, siteDescription }) {
  return (
    <div className="route-container container">

      <Banner image={banner} alt="Un comptable au travail"
              width={2000} height={800}
              pageTitle={siteName}
              pageDescription={siteDescription}
      />
      <div className="content-block spacer-top">

        <div className="flex-col flex-col--50w flex-col--justify-left">
          <h2>Nous aidons les particuliers et les entreprises à économiser de l'impôt depuis 2004.</h2>
          <p>
            Gestion Desroches a vu le jour en 2004 alors Daniel Desroches,
            notre fondateur, avait à cœur d'aider les travailleurs autonomes
            qui se retrouvaient à payer des honoraires professionnels élevés
            dans un contexte de revenu très bas.
          </p>
          <p>
            Avec les années, la croissance de l'entreprise a été constante
            et aujourd'hui, nous desservons plus de 1500 clients individuels
            et commerciaux pour des dossiers de tenue de livres, services de paie,
            fiscalités et conseils personnalisés. Nous avons toujours voulu
            servir comme nous aimons nous-même être servis.
          </p>
          <p>
            Aujourd'hui, l'entreprise est familiale et chaque personne
            de la famille Desroches possède un rôle au sein de l'entreprise.
          </p>
          <CustomNavLink to="/apropos">
            <button aria-label='En savoir plus sur nous'>En savoir plus sur nous</button>
          </CustomNavLink>
        </div>

        <div className="flex-col flex-col--40w flex-margin-left--10w flex-col--justify-left">
          <div className="contactez-nous">
            <h2>Contactez-nous</h2>
            <div className="no-wrap">☎ (514) 293-0200</div>
            <div className="no-wrap">✉ daniel@gestiondesroches.com</div>
          </div>
          <p>
            <br />
            Pour plus d'informations sur nos services et notre entreprise, ou tout simplement pour nous poser une
            question, n'hésitez pas à nous contacter.
          </p>
          <p>
            Veuillez noter que pour la période actuelle, nous sommes dans
            l'impossibilité d'accepter de nouveaux clients. Notre capacité
            maximale est atteinte. Merci de votre compréhension.
          </p>
        </div>

      </div>
    </div>
  );
}