import React, { useEffect } from "react";
import "./ProduireDeclarations.css";

//Components
import Banner from "../../../Components/Banner/Banner";
import CustomNavLink from "../../../Components/CustomNavLink/CustomNavLink";
import NotificationCard from "../../../Components/NotificationCard/NotificationCard";
import headInjector from "../../../functions/headInjector";

// Meta data from .env file
const { SNOWPACK_PUBLIC_WEBSITE_URL } = import.meta.env;

export default function ProduireDeclarationParticuliers({
  pageTitle,
  pageDescription,
  nombreClients,
  establishedDate,
}) {
  useEffect(() => {
    headInjector({
      pageTitle: "Produire déclaration",
      metaDescription:
        "Les 4 étapes faciles pour produire vos impôts. " +
        "Étape #1: Remplir notre questionnaire d'impôts. " +
        "Étape #2: Préparez votre dossier. " +
        "Étape #3: Transmettre votre dossier. " +
        "Étape #4: Recevoir vos résultats et effectuer le paiement.",
      canonicalLink:
        SNOWPACK_PUBLIC_WEBSITE_URL +
        "/services/impots-particuliers/produire-declaration/",
    });
  }, []);
  return (
    <div className="route-container container">
      <Banner pageTitle={pageTitle} pageDescription={pageDescription} />

      <div className="etapes content-block spacer-top">
        <div id="etape1" className="etape">
          <div className="dividing-line full-width" />
          <div className="flex-row">
            <div>
              <h2>Étape #1: Remplir le questionnaire d'impôts</h2>
              <p>
                Vous devrez premièrement remplir notre questionnaire d'impôts en
                ligne et nous fournir les renseignements nécessaires concernant
                votre situation en {new Date().getFullYear()}.
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>A) Téléchargez le questionnaire:</h3>
              <a
                href={
                  SNOWPACK_PUBLIC_WEBSITE_URL +
                  "/documents/Etape1_Questionnaire-impots.pdf"
                }
              >
                <button>Questionnaire d'impôts</button>
              </a>
              <p>
                Il s'agit d'un fichier électronique au format PDF que vous
                pouvez remplir directement à l'ordinateur (sans imprimer).
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>B) Remplissez le questionnaire:</h3>
              <p>
                Veuillez remplir au mieux de vos connaissances toutes les
                sections de ce questionnaire qui s'appliquent à votre situation.
              </p>
              <ul>
                <li>
                  Si vous avez un conjoint, remplissez la section sur votre
                  conjoint.
                </li>
                <li>
                  Si vous avez des enfants, remplissez la section concernant les
                  enfants à charge.
                </li>
                <li>
                  Si vous êtes un travailleur autonome ou avez des revenus
                  d'entreprise, remplissez la section 2.
                </li>
                <li>
                  Si vous avez des dépenses d'emploi, remplissez la section 3.
                </li>
                <li>
                  Si vous avez un ou plusieurs immeubles à revenus, remplissez
                  la section 4. Remplissez 1 formulaire par immeuble à revenus.
                </li>
                <li>
                  Si vous avez une garderie en milieu familial, remplissez la
                  section 5.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>C) Enregistrez le questionnaire:</h3>
              <p>
                Quand vous aurez terminé de remplir le questionnaire,
                enregistrez le document sur votre ordinateur. Vous devrez nous
                le faire parvenir en même temps que vos documents d'impôts à
                l'étape 3.
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
            <div>
              <h2>Étape #2: Préparez votre dossier</h2>
              <p>
                Vous devez ensuite préparer votre dossier d'impôts en
                rassemblant vos feuillets et pièces justificatives nécessaires
                pour votre déclaration. Pour vous aider à préparer votre
                dossier, voici la liste des feuillets et documents les plus
                fréquents à joindre à votre déclaration de revenus.
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>A) Téléchargez la liste de documents:</h3>
              <a
                href={
                  SNOWPACK_PUBLIC_WEBSITE_URL +
                  "/documents/Etape2_Liste-Documents-a-Fournir.pdf"
                }
              >
                <button>Liste de documents</button>
              </a>
              <p>
                Il s'agit d'un fichier électronique au format PDF que vous
                pouvez imprimer afin de cocher chaque document que vous avez.
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>
                B) Rassemblez vos documents d'impôts en vous aidant avec la
                liste:
              </h3>
              <p>
                En vous servant de la liste de documents, rassemblez tous les
                documents qui s'appliquent à votre situation et cochez les cases
                pour vous aider à savoir où vous êtes rendus.
              </p>
              <p>
                Vous avez des doutes qu’il vous manque quelque chose ? N’ayez
                crainte, comme vous avez rempli notre questionnaire d'impôts,
                nous serons en mesure de voir s'il vous manque des feuillets ou
                documents et prendrons contact avec vous pour vous les demander.
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
            <div>
              <h2>Étape #3: Transmettre votre dossier</h2>
              <p>
                Lorsque votre dossier est prêt à être envoyé, vous devez nous le
                faire parvenir par l'un des moyens suivant: (A) par courriel,
                (B) par la poste, ou (C) en personne. Assurez-vous toutefois de
                réunir tous les documents demandés tel qu'expliqué à l'étape 2.
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>A) Par courriel:</h3>
              <p>
                Le plus simple et le plus rapide est de nous transmettre votre
                dossier de façon électronique. Cela vous évite le déplacement et
                accélère le traitement de votre dossier. Pour cela, vous n'avez
                qu'à nous envoyer votre dossier par courriel à l'adresse{" "}
                <strong>daniel@gestiondesroches.com</strong>.
              </p>
              <p>
                Veuillez suivre la procédure ci-dessous pour nous transmettre
                votre dossier par courriel:
              </p>
              <ul>
                <li>
                  <strong>Scannez</strong> (ou prenez en photo) vos feuillets et
                  documents à déclarer (doit être visible).
                </li>
                <li>
                  <strong>Créez un dossier compressé (ZIP)</strong> et glissez-y
                  tous vos fichiers ainsi que le questionnaire d'impôts que vous
                  avez rempli.
                </li>
                <li>
                  <strong>Envoyez-nous</strong> le fichier ZIP par courriel.
                </li>
              </ul>
              <p>
                Vous recevrez un accusé de réception dans les 24 heures suivant
                l'envoi de votre dossier.
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>B) Par la poste:</h3>
              <p>
                Si vous souhaitez nous envoyer vos papiers physiquement, vous
                pouvez nous les transmettre par la poste à destination de:
              </p>
              <p>
                <i style={{ borderLeft: "1px solid var(light-gray)" }}>
                  Gestion Desroches Inc. <br />
                  1650, Boulevard Goyer Ste-Madeleine
                  <br />
                  Québec, J0H 1S0
                  <br />
                  514-293-0200
                </i>
              </p>
              <p>
                Notez que les frais d'envoi et de retour sont à votre charge.
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>C) En personne:</h3>
              <p>
                Si vous demeurez sur la Rive-Sud et que vous tenez à nous
                transmettre vos documents en personne, vous pouvez venir porter
                votre dossier d'impôts à notre bureau. Par contre, vous devez
                d'abord nous contacter pour confirmer notre disponibilité.{" "}
                <CustomNavLink to="/contact" className="text-link blue-text">
                  Contactez-nous avant
                </CustomNavLink>
              </p>
            </div>
          </div>
          <div className="flex-row">
            <NotificationCard classNames="align-icon-top">
              <h4 className="blue-text">
                NOTE POUR PREMIÈRE DÉCLARATION / NOUVEL ARRIVANT:
              </h4>
              <p>
                Si vous êtes arrivés au Canada au cours de l'année et/ou que
                vous produisez votre première d'impôts, vous devrez
                obligatoirement nous transmettre vos papiers par la poste en ou
                en personne. La raison est que pour votre première déclaration
                de revenu, le gouvernement exige qu'on lui transmette votre
                dossier physiquement et non pas de façon électronique. Vous
                devez donc joindre à votre dossier tous vos feuillets et
                factures et nous les transmettre physiquement par la poste ou en
                personne.
              </p>
            </NotificationCard>
          </div>
        </div>

        <div id="etape4" className="etape">
          <div className="dividing-line full-width" />
          <div className="flex-row">
            <div>
              <h2>Étape #4: Recevoir vos résultats et effectuer le paiement</h2>
              <p>
                À partir du moment que nous avons reçu votre dossier (physique
                ou numérique), vous devez compter un délai d'environ 1 à 2
                semaines pour que nous complétions votre déclaration.
              </p>
              <p>
                Dès que votre déclaration d'impôts sera terminée, nous vous
                contacterons pour vous en aviser et vous transmettre vos
                résultats.
              </p>
              <p>
                Lorsque votre déclaration de revenu sera terminée, nous vous
                acheminerons vos résultats ainsi que votre dossier par le même
                biais que vous nous les aviez envoyés. Nous vous fournirons
                également une explication sommaire de vos résultats ainsi que
                des recommandations personnalisées pour économiser de l'impôt
                l'année suivante. Nous transmettrons ensuite votre déclaration
                au gouvernement par le biais du service de déclaration en ligne
                TED.
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>A) Si vous nous avez transmis votre dossier par courriel:</h3>
              <p>Vous recevrez alors un courriel incluant:</p>
              <RecevoirVosResultatsEtPayer />
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>B) Si vous nous avez transmis votre dossier par la poste:</h3>
              <p>
                Nous vous réachemineront alors votre dossier par la poste en
                incluant:
              </p>
              <RecevoirVosResultatsEtPayer />
            </div>
          </div>
          <div className="flex-row">
            <div>
              <h3>C) Si vous nous avez transmis votre dossier en personne:</h3>
              <p>
                Nous vous contacterons pour que vous puissiez venir récupérer
                votre dossier à notre bureau. Nous vous remettrons alors:
              </p>
              <RecevoirVosResultatsEtPayer />
            </div>
          </div>
          <div className="flex-row">
            <NotificationCard classNames="align-icon-top">
              <h4 className="blue-text">
                Note importante: nous donner l'autorisation de compléter
              </h4>
              <p>
                Pour que nous puissions transmettre votre déclaration de revenu
                au gouvernement, vous devez absolument nous en donner
                l'autorisation en signant le formulaire TED. De plus, vous devez
                avoir effectué le paiement complet pour le service de
                déclaration. Dès que nous aurons reçu votre formulaire TED
                dûment signé ainsi que votre paiement, nous transmettrons votre
                déclaration de revenu au gouvernement.
              </p>
            </NotificationCard>
          </div>
        </div>
        <div id="etape-terminee" className="etape">
          <div className="dividing-line full-width" />
          <div className="flex-row">
            <div>
              <h1>Vous avez enfin terminé :)</h1>
              <p>
                Nous vous remercions de nous avoir fait confiance pour votre
                déclaration d'Impôts cette année et nous nous tenons à votre
                disposition si vous avez besoin d'information supplémentaire sur
                votre déclaration.
              </p>
            </div>

            <CustomNavLink to="/contact">
              <button>Contactez-nous au besoin</button>
            </CustomNavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecevoirVosResultatsEtPayer() {
  return (
    <ul>
      <li>
        <strong>Explication de vos résultats. </strong>
      </li>
      <li>
        <strong>Formulaire TED à signer.</strong> Un formulaire à signer et à
        nous retourner pour nous autoriser à transmettre votre déclaration par
        Internet au gouvernement.
      </li>
      <li>
        <strong>Votre déclaration de revenu en format imprimé.</strong>
      </li>
      <li>
        <strong>Facture à payer. </strong> La facture à payer pour nos services,
        est payable par en argent ou par virement interac tel qu'indiqué sur
        celle-ci (référez-vous à votre facture pour savoir comment nous payer).
      </li>
    </ul>
  );
}
