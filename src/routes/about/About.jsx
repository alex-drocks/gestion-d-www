import React from "react";

// Components
import Page from "../../Components/Page/Page";
import Bio from "../../Components/Bio/Bio";
import Quote from "../../Components/Quote/Quote";
import CustomNavLink from "../../Components/CustomNavLink/CustomNavLink";
import ModernImage from "../../Components/ModernImage/ModernImage";

// Images
import daniel from "../../images/daniel-bio.png";
import danielWebp from "../../images/daniel-bio.webp";
import alex from "../../images/alex-bio.png";
import alexWebp from "../../images/alex-bio.webp";
import will from "../../images/will-bio.png";
import willWebp from "../../images/will-bio.webp";
import matt from "../../images/matt-bio.png";
import mattWebp from "../../images/matt-bio.webp";
import graphiqueClients from "../../images/graphique-clients-2019.png";
import graphiqueClientsWebp from "../../images/graphique-clients-2019.webp";

export default function About({ nombreClients, establishedDate }) {
  return (
    <Page
      pageTitle="À propos"
      pageDescription="En savoir plus à propos de l'entreprise"
      metaDescription={
        "Gestion Desroches Inc. est une société familiale de " +
        "services comptables établie et dirigée par Daniel Desroches, expert " +
        "dans le domaine de la comptabilité depuis plus de 16 ans. Fondée en " +
        "2004, l'entreprise familiale sert aujourd'hui plus de1300 particuliers " +
        "et entreprises par année."
      }
      bgImage={null}
      canonicalLink="/a-propos/"
    >
      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <h2>Notre histoire</h2>
          <p>
            Gestion Desroches Inc, est une société familiale de services
            comptables établie et dirigée par Daniel Desroches, expert dans le
            domaine de la comptabilité depuis plus de{" "}
            {new Date().getFullYear() - establishedDate} ans. Fondée en{" "}
            {establishedDate}, l'entreprise familiale sert aujourd'hui plus de{" "}
            {nombreClients} particuliers et entreprises par année.
          </p>
          <p>
            Notre équipe offre un service personnalisé de déclaration d'impôts
            de particuliers et de sociétés ainsi qu'une gamme de services
            comptables destinés à soutenir les entrepreneurs et travailleurs
            autonomes.
          </p>
          <p>
            Notre mission est de vous offrir un service personnalisé et de haute
            qualité. Nous prenons le temps de bien vous diriger dans vos
            décisions et nous nous assurons que vous compreniez bien les impacts
            fiscaux de vos projets. Nous vous accompagnons afin de maximiser vos
            résultats.
          </p>
        </div>
        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <h2>Croissance de notre clientèle</h2>
          <p>
            <ModernImage
              lazyload={false}
              altText={"Graphique de nos clients"}
              classNames={"graphique-clients"}
              srcWebp={graphiqueClientsWebp}
              srcFallback={graphiqueClients}
              cancelInitialGrowFx={false}
              width={781}
              height={390}
            />
          </p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block spacer-top">
          <h2 className="flex-row">Notre équipe</h2>
        </div>

        <Bio
          image={{ webp: danielWebp, fallback: daniel }}
          name="Daniel Desroches"
          role="PRÉSIDENT & FONDATEUR, COMPTABLE"
        >
          Daniel est le président et fondateur de Gestion Desroches Inc.
          Passionné par la comptabilité depuis l'âge de 16 ans, il s'est toujours intéressé à la fiscalité 
          et a obtenu un diplôme en comptabilité à l'Université du Québec à Trois-Rivières. En {establishedDate}, 
          il a décidé de fonder son propre cabinet, qui accompagne aujourd'hui plus de {nombreClients} clients satisfaits.
        </Bio>
        <Bio
          image={{ webp: willWebp, fallback: will }}
          name="William Desroches"
          role="COMPTABLE, SERVICE DE PAIE, TENUE DE LIVRES, IMPÔTS DES PARTICULIERS"
        >
          William est titulaire d'un baccalauréat en sciences comptables de l'Université du Québec à Montréal.
          Ayant débuté sa carrière en 2019 dans l'entreprise familiale, il a rapidement bâti sa propre clientèle.
          Passionné par la fiscalité et la comptabilité, il accompagne ses clients avec rigueur afin de les aider à prospérer,
          tant sur le plan personnel que professionnel. Son approche personnalisée et son souci du détail font de lui un
          partenaire de confiance pour ceux qui souhaitent assurer la croissance de leur entreprise.
        </Bio>
        <Bio
          image={{ webp: alexWebp, fallback: alex }}
          name="Alexandre Desroches"
          role="TENUE DE LIVRES, DÉVELOPPEMENT INFORMATIQUE & LOGICIEL FINANCE D"
        >
          Alexandre détient une attestation professionnelle en comptabilité et assure la tenue de livres de plus de 60 entreprises.
          Rapide, innovateur et perfectionniste, il sait trouver des solutions efficaces pour améliorer la situation de ses clients.
          Passionné par la programmation, il a développé un logiciel de facturation et de tenue de livres gratuit, basé sur son expérience chez Gestion Desroches.
          Ce logiciel est accessible sur{" "}
          <a
            href="https://finance-d.com/"
            className="blue-text text-link no-wrap"
          >
            Finance-D.com
          </a>
        </Bio>
        <Bio
          image={{ webp: mattWebp, fallback: matt }}
          name="Matthieu Desroches"
          role="COMPTABLE, IMPÔTS DES PARTICULIERS"
        >
          Matthieu a rejoint l'entreprise familiale en 2015 après avoir terminé ses études en comptabilité.
          Il détient un baccalauréat en sciences comptables de l'École des sciences de la gestion et se 
          spécialise aujourd'hui dans les déclarations d'impôts pour les particuliers. 
          Matthieu est également formateur en organisation et gestion du temps. 
          Chaque semaine, il publie des articles et des podcasts sur son site&nbsp;:{" "}
          <a
            href="https://matthieudesroches.com"
            className="blue-text text-link no-wrap"
          >
            matthieudesroches.com
          </a>
        </Bio>
      </div>

      <Quote author="Gestion Desroches">
        Nous avons toujours voulu servir comme nous aimons nous-même être
        servis.
      </Quote>

      <div className="content-block spacer-top force-flex-align-center">
        <CustomNavLink to="/services">
          <button aria-label="Voir tous nos services">Voir nos services</button>
        </CustomNavLink>
      </div>
    </Page>
  );
}
