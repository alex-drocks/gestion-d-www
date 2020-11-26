import React from "react";

// Components
import Banner from "../../Components/Banner/Banner";
import CustomNavLink from "../../Components/CustomNavLink/CustomNavLink";
import Quote from "../../Components/Quote/Quote";
import ContactezNous from "../../Components/ContactezNous/ContactezNous";
import Bio from "../../Components/Bio/Bio";

// Images
import daniel from "../../images/daniel-bio.webp";
import alex from "../../images/alex-bio.webp";
import will from "../../images/will-bio.webp";
import matt from "../../images/matt-bio.webp";


export default function About({ pageTitle, pageDescription }) {
  return (
    <div className="route-container container">

      <Banner pageTitle={pageTitle}
              pageDescription={pageDescription} />

      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <h2>Notre histoire</h2>
          <p>
            Gestion Desroches inc. est une société familiale de services
            comptables fondée et dirigée par Daniel Desroches,
            expert dans le domaine de la comptabilité depuis plus de 20 ans.
            Fondée en 2004, l'entreprise familiale sert aujourd'hui plus de 1500
            particuliers et entreprises par année.
          </p>
          <p>
            Notre équipe offre un service personnalisé de déclaration d'impôts
            de particuliers et de sociétés ainsi qu'une gamme de services
            comptables destinés à soutenir les entrepreneurs
            et travailleurs autonomes.
          </p>
          <p>
            Notre mission est de vous offrir un service personnalisé
            et de qualité. Conscient de vos questions, nous prenons le temps
            de bien vous diriger dans vos décisions et nous nous assurons que
            vous compreniez bien les impacts fiscaux de vos projets.
            Nous vous accompagnons dans toutes les étapes
            afin de maximiser vos résultats.
          </p>
        </div>
        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <ContactezNous renderParagraph={true} renderNotification={true} renderLink={true} />
        </div>
      </div>

      <div className="content-block spacer-top">
        <h2 className="flex-row">Notre équipe</h2>
      </div>
      <div className="content-block">
        <Bio image={daniel}
             name="Daniel Desroches"
             role="PRÉSIDENT & FONDATEUR"
        >
          Daniel est le président et fondateur de
          Gestion Desroches Inc. Passionné par la comptabilité depuis l'âge
          de 16 ans, il s'est toujours intéressé à la fiscalité et a décroché
          un diplôme en comptabilité à l'Université du Québec à Trois-Rivières.
          En 2004, il a décidé de fonder son propre cabinet et il sert
          aujourd'hui plus de 1500 clients satisfaits.
        </Bio>
        <Bio image={alex}
             name="Alexandre Desroches"
             role="TENUE DE LIVRES, DÉVELOPPEMENT INFORMATIQUE"
        >
          Alexandre détient une attestation professionnelle en comptabilité
          et s'occupe de la tenue de livres de plus de 60 entreprises.
          Il est rapide, perfectionniste et capable de trouver des solutions
          pour améliorer la situation de ses clients. Il est également passionné
          par la programmation et la musique. Il développe actuellement un
          logiciel de tenue de livres simplifiée pour les petites entreprises
          du Québec. Vous pouvez visiter son site pour le logiciel Finance D,
          ou celui du studio D Rocks Records.
        </Bio>
        <Bio image={will}
             name="William Desroches"
             role="SERVICE DE PAIE, TENUE DE LIVRES, IMPÔTS DES PARTICULIERS"
        >
          William possède une technique en comptabilité et gestion.
          Il a commencé à travailler en 2019 dans la société familiale
          et il est formé auprès de Daniel et Alexandre afin de connaitre
          tous les aspects du métier. En date du dernier trimestre de 2020,
          il se spécialise dans nos services de paies et la tenue de livres
          avec Sage50, ainsi que pour les impôts des particuliers en
          collaboration avec Daniel. Parmi ses nombreuses compétences
          remarquables, il est entre autres précis dans son travail et
          habile pour communiquer.
        </Bio>
        <Bio image={matt}
             name="Matthieu Desroches"
             role="COMPTABLE, IMPÔTS DES PARTICULIERS"
        >
          Matthieu a rejoint l'entreprise familiale en 2015 après la fin de
          ses études en comptabilité. Il détient un baccalauréat en Sciences
          Comptables qu'il a décroché à l'École des Sciences de la Gestion et
          se spécialise aujourd'hui dans les déclarations d'impôts de
          particuliers. Matthieu est également formateur en organisation et
          gestion du temps et publie des articles chaque semaine sur son blog.
        </Bio>
      </div>

    </div>
  );
}