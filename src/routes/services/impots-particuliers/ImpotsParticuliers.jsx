import React from "react";

//Components
import CustomNavLink from "../../../Components/CustomNavLink/CustomNavLink";
import Page from "../../../Components/Page/Page";

export default function ImpotsParticuliers({ establishedDate }) {
  return (
    <Page
      pageTitle="Impôts particuliers"
      pageDescription="Déclaration d'impôts des particuliers"
      metaDescription={
        "Déclarations d'impôts des particuliers. Nous nous " +
        "spécialisons dans la production de déclaration de revenus de " +
        "particuliers depuis 2004 et nous saurons vous conseiller de façon " +
        "professionnelle pour que vous puissiez récupérer le maximum d'impôts " +
        "auquel vous avez droit."
      }
      bgImage={null}
      canonicalLink="/services/impots-particuliers/"
    >
      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <div className="content-block">
            <p>
              Nous nous spécialisons dans la production de déclaration de
              revenus de particuliers depuis {establishedDate} et nous saurons
              vous conseiller de façon professionnelle pour que vous puissiez
              récupérer le maximum d'impôts auquel vous avez droit, et ce,
              quelque soit votre statut (célibataire, couple, nouvel arrivant,
              travailleur autonome, etc.).
            </p>

            <div className="content-block spacer-top">
              <h2>Tarifs impôts des particuliers</h2>
              <div className="flex-col--100w">
                <h3>Étudiant | 110&nbsp;$</h3>
                <p>
                  Étudiant à temps plein avec revenu annuel inférieur à 15 000$.
                </p>
              </div>
              <div className="flex-col--100w">
                <h3>Retraité | 110&nbsp;$</h3>
                <p>Par personne à la retraite.</p>
              </div>
              <div className="flex-col--100w">
                <h3>Individuel | 130&nbsp;$</h3>
                <p>Personne vivant seule, célibataire, veuf(ve).</p>
              </div>
              <div className="flex-col--100w">
                <h3>Couple | 230&nbsp;$</h3>
                <p>
                  Conjoints de fait, couple marié ou couple retraité avec ou
                  sans enfant à charge.
                </p>
              </div>
              <div className="flex-col--100w">
                <h3>Travailleur autonome | Prix selon le dossier</h3>
                <p>
                  Travailleur autonome ou petite entreprise avec revenus et
                  dépenses d'entreprises.
                </p>
              </div>
              <div className="flex-col--100w">
                <h3>Dépenses d'emploi | Prix selon le dossier</h3>
                <p>Salarié avec dépenses d'emploi à déclarer.</p>
              </div>
              <div className="flex-col--100w">
                <h3>Immeuble à revenu | Prix selon le dossier</h3>
                <p>Personne ayant un ou plusieurs immeubles à revenu.</p>
              </div>
              <div className="content-block">
                <p>
                  <CustomNavLink to="/contact">
                    <button aria-label="Contactez-nous">Contactez-nous</button>
                  </CustomNavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <div className="content-block">
            <h2>Faites vos impôts en 4 étapes</h2>
            <div className="flex-col--100w">
              <h3>Étape 1: Remplir le questionnaire d'impôts</h3>
              <p>
                Vous devrez premièrement remplir notre questionnaire d'impôts en
                ligne et nous fournir les renseignements nécessaires concernant
                votre situation en {new Date().getFullYear() - 1}.
              </p>
            </div>

            <div className="flex-col--100w">
              <h3>Étape 2: Préparer votre dossier</h3>
              <p>
                Vous devrez ensuite préparer votre dossier d'impôts en
                rassemblant vos feuillets et pièces justificatives nécessaires
                pour votre déclaration. Nous vous fournirons un aide-mémoire
                pour vous aider à identifier les documents que vous avez besoin
                de rassembler.
              </p>
            </div>

            <div className="flex-col--100w">
              <h3>Étape 3: Transmettre vos documents</h3>
              <p>
                Lorsque vous aurez rempli le questionnaire d'impôts et que vous
                aurez terminé de rassembler vos feuillets et pièces
                justificatives, vous pourrez nous transmettre vos documents soit
                (1) Par courriel, (2) Par la poste ou (3) En personne.
              </p>
            </div>

            <div className="flex-col--100w">
              <h3>Étape 4: Recevoir vos résultats et effectuer le paiement</h3>
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
              <br />
            </div>

            <a
              href="/services/impots-particuliers/produire-declaration"
              className="content-block card flex-card-border-top"
            >
              <h2>Prêt à faire vos impôts?</h2>
              <p>
                Appuyez sur le bouton ci-dessous pour suivre les 4 étapes qui
                vont vous aider à bien nous transmettre votre dossier de
                déclaration d'impôts.
              </p>
              <button aria-label="Commencer">Commencer</button>
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
}
