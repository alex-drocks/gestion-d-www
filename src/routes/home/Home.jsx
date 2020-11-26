import React from "react";

// Components
import Banner from "../../Components/Banner/Banner";
import CustomNavLink from "../../Components/CustomNavLink/CustomNavLink";
import Quote from "../../Components/Quote/Quote";

// Images...
import banner from "../../images/rapport_dimpots_quebec.webp";
import ContactezNous from "../../Components/ContactezNous/ContactezNous";


export default function Home({ pageTitle, pageDescription, nombreClients, establishedDate }) {
  return (
    <div className="route-container container">
      <Banner image={banner} alt="Un comptable au travail"
              width={2000} height={800}
              pageTitle={pageTitle}
              pageDescription={pageDescription}
      />
      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <h2>Nous aidons les particuliers et les entreprises à économiser de
            l'impôt depuis {establishedDate}.</h2>
          <p>
            Gestion Desroches a vu le jour en {establishedDate} alors que
            Daniel Desroches, avait à cœur d'aider les travailleurs autonomes
            qui se retrouvaient à payer des honoraires professionnels trop
            élevés malgré leur contexte de faibles revenus.
          </p>
          <p>
            Avec les années, la croissance de l'entreprise a été constante
            et aujourd'hui, nous desservons plus de {nombreClients} clients individuels
            et commerciaux pour des dossiers de tenue de livres, services de paie,
            fiscalités et conseils personnalisés. Nous avons toujours voulu
            servir comme nous aimons nous-même être servis.
          </p>
          <p>
            Aujourd'hui, l'entreprise est familiale et chaque personne
            de la famille Desroches possède un rôle au sein de l'entreprise.
          </p>
          <CustomNavLink to="/a-propos">
            <button aria-label='En savoir plus sur nous'>En savoir plus sur nous</button>
          </CustomNavLink>
        </div>

        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <ContactezNous renderParagraph={true} renderLink={true} renderNotification={true} />
        </div>
      </div>

      <div className="content-block spacer-top">
        <h2 className="flex-row">Notre expertise</h2>
      </div>
      <div className="content-block">
        <div className="flex-row">
          <div className="flex-col flex-col--30w flex-card-border-top">
            <h3 className="flex-card-border-top--title">Déclaration d'impôts de particuliers</h3>
            <p className="flex-card-border-top--text">
              Nous produisons des déclarations de revenus de particuliers
              depuis plus de {new Date().getFullYear() - establishedDate} ans
              et aidons plus de {nombreClients} personnes
              à chaque année.
            </p>
            <CustomNavLink to="/impots-particuliers" className="text-link blue-text">
              Impôts de particuliers
            </CustomNavLink>
          </div>
          <div className="flex-col flex-col--30w flex-card-border-top">
            <h3 className="flex-card-border-top--title">Déclaration d'impôts de sociétés</h3>
            <p className="flex-card-border-top--text">
              Si vous avez une société incorporée, nous avons l'expertise
              pour produire vos déclarations d'impôts T2 (fédéral)
              et CO-17 (provincial).
            </p>
            <CustomNavLink to="/impots-societes" className="text-link blue-text">
              Impôts de sociétés
            </CustomNavLink>
          </div>
          <div className="flex-col flex-col--30w flex-card-border-top">
            <h3 className="flex-card-border-top--title">Comptabilité pour entreprises</h3>
            <p className="flex-card-border-top--text">
              Si vous possédez une petite entreprise ou êtes un travailleur
              autonome, nous pouvons prendre en charge la gestion
              de votre comptabilité.
            </p>
            <CustomNavLink to="/comptabilite-entreprise" className="text-link blue-text">
              Comptabilité d'entreprise
            </CustomNavLink>
          </div>
        </div>
      </div>

      <Quote author="Jean Yanne">
        J’ai déjà essayé de payer mes impôts avec le sourire,
        ils préfèrent un chèque.
      </Quote>


    </div>
  );
}