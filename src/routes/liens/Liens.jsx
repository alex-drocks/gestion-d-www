import React from "react";

//unique styles for this page
import "./Liens.css";

// Components
import Page from "../../Components/Page/Page";
import ModernImage from "../../Components/ModernImage/ModernImage";

// Images
import financeDWebp from "../../images/1_boxmockup-windows-mac-1920w.webp";
import financeDFallback from "../../images/1_boxmockup-windows-mac-1920w.png";

export default function Liens() {
  return (
    <Page
      pageTitle="Liens utiles"
      pageDescription="Outils et ressources pratiques"
      metaDescription={
        "Liens et numéros de téléphones gouvernementaux, " +
        "Finance D : calculatrice de taxes en ligne, " +
        "et logiciel de facturation gratuit."
      }
      bgImage={null}
      additionnalClassNames="page-liens-utiles"
      canonicalLink="/liens/"
    >
      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <h2 id="sites-gouvernement">Sites du gouvernement</h2>
          <ul className="spacer-bottom">
            <li>
              <a
                className="blue-text text-link"
                href="https://www.revenuquebec.ca/fr/"
              >
                Ministère du revenu du Québec
              </a>
            </li>
            <li>
              <a
                className="blue-text text-link"
                href="http://www.registreentreprises.gouv.qc.ca/fr/"
              >
                Registraire des entreprises du Québec
              </a>
            </li>
            <li>
              <a
                className="blue-text text-link"
                href="https://www.canada.ca/fr/agence-revenu.html"
              >
                Agence du revenu Canada
              </a>
            </li>
            <li>
              <a
                className="blue-text text-link"
                href="https://www.canada.ca/en/services/business.html"
              >
                Entreprises Canada
              </a>
            </li>
          </ul>
          <h2 id="numeros-telephones">Numéros de téléphones</h2>
          GOUVERNEMENT DU QUÉBEC
          <ul>
            <li>
              Revenu Québec (particuliers) |{" "}
              <span className="no-wrap">514-864-6299</span>
            </li>
            <li>
              Revenu Québec (sociétés) |{" "}
              <span className="no-wrap">514-873-4692</span>
            </li>
            <li>
              Crédit d’impôt pour solidarité |{" "}
              <span className="no-wrap">514-940-1481</span>
            </li>
            <li>
              Régie des rentes du Québec |{" "}
              <span className="no-wrap">514-873-2433</span>
            </li>
            <li>
              Régie de l’assurance maladie du Québec |{" "}
              <span className="no-wrap">514-864-3411</span>
            </li>
            <li>
              Programme allocation-logement |{" "}
              <span className="no-wrap">514-864-6299</span>
            </li>
            <li>
              Info-remboursement |{" "}
              <span className="no-wrap">1-888-811-7362</span>
            </li>
            <li>
              CNESST |{" "}
              <span className="no-wrap">1-844-838-0808</span>
            </li>
            <li>
              Allocation famille QUÉBEC |{" "}
              <span className="no-wrap">514-864-3873</span>
            </li>
          </ul>
          GOUVERNEMENT DU CANADA
          <ul>
            <li>
              Revenu Canada (particuliers) |{" "}
              <span className="no-wrap">1-800-959-7383</span>
            </li>
            <li>
              Revenu Canada (sociétés) |{" "}
              <span className="no-wrap">1-800-959-7775</span>
            </li>
            <li>
              TPS | <span className="no-wrap">1-800-959-1954</span>
            </li>
            <li>
              Prestation fiscale canadienne pour enfants |{" "}
              <span className="no-wrap">1-800-387-1194</span>
            </li>
            <li>
              Sécurité de la vieillesse |{" "}
              <span className="no-wrap">1-800-277-9915</span>
            </li>
            <li>
              Supplément de revenu garanti |{" "}
              <span className="no-wrap">1-800-277-9915</span>
            </li>
            <li>
              Assurance emploi | <span className="no-wrap">1-800-808-6352</span>
            </li>
            <li>
              Téléremboursement (Revenu Canada) |{" "}
              <span className="no-wrap">1-800-959-1958</span>
            </li>
          </ul>
        </div>
        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <h2 id="calculatrice-taxes">Calculatrice de taxes</h2>
          <p>
            Une calculatrice de taxes accessible sur n'importe quel appareil connecté à internet.
            Taux pour l'ensemble des provinces et
            territoires du Canada, avec le mode de calcul taxes incluses et
            l'exportation des résultats vers Excel.
          </p>
          <p>
            <a
              className="blue-text text-link"
              href="https://taxes.finance-d.com"
            >
              Calculatrice de taxes pour la TPS/TVQ
            </a>
          </p>

          <div className="content-block spacer-top">
            <h2 id="logiciel-facturation-gratuit" className="flex-row">
              Logiciel de facturation gratuit
            </h2>
            <p>
              Nous avons conçu le logiciel Finance D pour répondre
              spécifiquement aux besoin de nos clients du Québec.
              <br />
              <br />
              En équilibrant efficacité et facilité, ce logiciel vous aide à
              mieux facturer vos clients, à bien suivre la réception des
              paiements qui vous sont dus et à comptabiliser vos dépenses
              efficacement.
              <br />
              <br />
              Le logiciel Finance D est un outil pour facturer vos clients et
              faire votre propre tenue de livres en collaborant avec nous pour
              les aspects plus complexes de votre comptabilité d'entreprise.
              <br />
              <br />
              <strong>Idéal pour travailleurs autonomes.</strong>
              <br />
              <br />
              <a className="blue-text" href="https://finance-d.com">
                <ModernImage
                  lazyload={true}
                  srcWebp={financeDWebp}
                  srcFallback={financeDFallback}
                  classNames={"finance-d-screenshot"}
                  height={1040}
                  width={1920}
                  cancelInitialGrowFx={true}
                  altText={"Logiciel Finance D"}
                />
                <br />
                <br />
                <button aria-label="Obtenir le logiciel Finance D">
                  Obtenir le logiciel Finance D
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
