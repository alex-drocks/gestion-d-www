import React from "react";
import "./ProduireDeclarations.css";

//Components
import Banner from "../../../Components/Banner/Banner";
import CustomNavLink from "../../../Components/CustomNavLink/CustomNavLink";


// Meta data from .env file
const { SNOWPACK_PUBLIC_WEBSITE_URL } = import.meta.env;


export default function DeclarationParticuliers({
                                                  pageTitle,
                                                  pageDescription,
                                                  nombreClients,
                                                  establishedDate
                                                }) {
  return (
    <div className="route-container container">
      <Banner pageTitle={pageTitle} pageDescription={pageDescription} />

      <div className="etapes content-block spacer-top">

        <div id="etape1" className="etape">
          <div className="dividing-line full-width" />

          <div className="flex-row">
            <h2>Étape #1: Complétez notre questionnaire d'impôts</h2>
            <p>
              Vous devrez premièrement remplir notre questionnaire d'impôts
              en ligne et nous fournir les renseignements nécessaires
              concernant votre situation en {new Date().getFullYear()}.
            </p>
          </div>
          <div className="flex-row">
            <div>
              <h3>A) Téléchargez le questionnaire ci-dessous:</h3>
              <a href={SNOWPACK_PUBLIC_WEBSITE_URL + "/documents/Questionnaire-impots.pdf"}>
                <button>Questionnaire d'impôts</button>
              </a>
              <p>
                Il s'agit d'un fichier électronique au format PDF que vous pouvez
                remplir directement à l'ordinateur (sans imprimer).
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>B) Remplissez le questionnaire</h3>
              <p>
                Veuillez remplir au mieux de vos connaissances toutes les
                sections de ce questionnaire qui s'appliquent à votre situation.
              </p>
              <ul>
                <li>Si vous avez un conjoint, remplissez la section sur votre conjoint.</li>
                <li>Si vous avez des enfants, remplissez la section concernant les enfants à charge.</li>
                <li>Si vous êtes un travailleur autonome ou avez des revenus d'entreprise, remplissez la section 2.</li>
                <li>Si vous avez des dépenses d'emploi, remplissez la section 3.</li>
                <li>Si vous avez un ou plusieurs immeubles à revenus, remplissez la section 4. Remplissez 1 formulaire
                  par
                  immeuble à revenus.
                </li>
                <li>Si vous avez une garderie en milieu familial, remplissez la section 5.</li>
              </ul>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>C) Enregistrez le questionnaire</h3>
              <p>
                Quand vous aurez terminé de remplir le questionnaire, enregistrez
                le document sur votre ordinateur.
                Vous devrez nous le faire parvenir en même temps que vos
                documents d'impôts à l'étape 3.
                <br />
                <br />
                Quand vous êtes prêt à continuer, allez à l'étape 2.
              </p>
            </div>
          </div>
        </div>

        <div id="etape2" className="etape">
          <div className="dividing-line full-width" />

          <div className="flex-row">
            <h2>Étape #2: Préparez votre dossier</h2>
            <p>
              Vous devez ensuite préparer votre dossier d'impôts en rassemblant vos feuillets et pièces justificatives
              nécessaires pour votre déclaration. Pour vous aider à préparer votre dossier, voici la liste des feuillets
              et documents les plus fréquents à joindre à votre déclaration de revenus.
            </p>
          </div>
          <div className="flex-row">
            <div>
              <h3>A) Téléchargez la liste de documents</h3>
              <a href={SNOWPACK_PUBLIC_WEBSITE_URL + "/documents/Liste-documents-a-fournir-pour-impots.pdf"}>
                <button>Liste de documents</button>
              </a>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>B) Rassemblez vos documents d'impôts en vous aidant avec la liste</h3>
              <p>
                En vous servant la la liste de documents, rassemblez tous les documents
                qui s'appliquent à votre situation et cochez les cases pour vous aider
                à savoir où vous êtes rendus.
              </p>
              <p>
                Vous avez des doutes qu’il vous manque quelque chose ?
                N’ayez crainte, comme vous avez rempli notre questionnaire d'impôts,
                nous serons en mesure de voir s'il
                vous manque des feuillets ou documents et prendrons contact avec
                vous pour vous les demander.
              </p>
              <p>
                Lorsque vous avez rassemblé tous vos papiers, continuer à
                l'étape 3 pour savoir comment nous les acheminer.
              </p>
            </div>
          </div>
        </div>

        <div id="etape3" className="etape">
          <div className="dividing-line full-width" />

          <div className="flex-row">
            <h2>Étape #3: Transmettre votre dossier</h2>
            <p>
              Lorsque votre dossier est prêt à être envoyé, vous devez nous
              le faire parvenir par l'un des moyens
              suivant: (1) par courriel, (2) par la poste, ou (3) en personne.
              Assurez-vous toutefois de réunir tous les
              documents demandés tel qu'expliqué à l'étape 2.
            </p>
          </div>
          <div className="flex-row">
            <div>
              <h3>A) Téléchargez la liste de documents</h3>
              <a href={SNOWPACK_PUBLIC_WEBSITE_URL + "/documents/Liste-documents-a-fournir-pour-impots.pdf"}>
                <button>Liste de documents</button>
              </a>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>B) Rassemblez vos documents d'impôts en vous aidant avec la liste</h3>
              <p>
                En vous servant la la liste de documents, rassemblez tous les documents
                qui s'appliquent à votre situation et cochez les cases pour vous aider
                à savoir où vous êtes rendus.
              </p>
              <p>
                Vous avez des doutes qu’il vous manque quelque chose ?
                N’ayez crainte, comme vous avez rempli notre questionnaire d'impôts,
                nous serons en mesure de voir s'il
                vous manque des feuillets ou documents et prendrons contact avec
                vous pour vous les demander.
              </p>
              <p>
                Lorsque vous avez rassemblé tous vos papiers, continuer à
                l'étape 3 pour savoir comment nous les acheminer.
              </p>
            </div>
          </div>
        </div>


        <div id="etape4" className="etape">
          <div className="dividing-line full-width" />

          <div className="flex-row">
            <h2>Étape #4: Obtenir vos résultats et effectuer le paiement</h2>
            <p>
              À partir du moment que nous avons reçu votre dossier (physique ou numérique), vous devez compter un délai
              d'environ 1 à 2 semaines pour que nous complétions votre déclaration.
            </p>
            <p>
              Dès que votre déclaration d'impôts sera terminée, nous vous contacterons pour vous en aviser et vous
              transmettre vos résultats.
            </p>
          </div>
          <div className="flex-row">
            <div>
              <h3>A) Téléchargez la liste de documents</h3>
              <a href={SNOWPACK_PUBLIC_WEBSITE_URL + "/documents/Liste-documents-a-fournir-pour-impots.pdf"}>
                <button>Liste de documents</button>
              </a>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>B) Rassemblez vos documents d'impôts en vous aidant avec la liste</h3>
              <p>
                En vous servant la la liste de documents, rassemblez tous les documents
                qui s'appliquent à votre situation et cochez les cases pour vous aider
                à savoir où vous êtes rendus.
              </p>
              <p>
                Vous avez des doutes qu’il vous manque quelque chose ?
                N’ayez crainte, comme vous avez rempli notre questionnaire d'impôts,
                nous serons en mesure de voir s'il
                vous manque des feuillets ou documents et prendrons contact avec
                vous pour vous les demander.
              </p>
              <p>
                Lorsque vous avez rassemblé tous vos papiers, continuer à
                l'étape 3 pour savoir comment nous les acheminer.
              </p>
            </div>
          </div>

          <div id="etape-terminee" className="etape">
            <div className="dividing-line full-width" />
            <div className="flex-row">
              <h1>Vous avez enfin terminé :)</h1>
              <p>
                Nous vous remercions de nous avoir fait confiance pour votre
                déclaration d'Impôts cette année et nous nous tenons à votre
                disposition si vous avez besoin d'information supplémentaire sur
                votre déclaration.
              </p>
              <CustomNavLink to="/contact">
                <button>Contactez-nous au besoin</button>
              </CustomNavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}