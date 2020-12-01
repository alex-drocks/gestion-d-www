import React from "react";
import "./Liens.css";

// Components
import Banner from "../../Components/Banner/Banner";
import LazyImage from "../../Components/LazyImage/LazyImage";

// Images
import financeD from "../../images/25_previewRevenus.png";

export default function Liens({ pageTitle, pageDescription }) {
  return (
    <div className="route-container container page-liens">
      <Banner pageTitle={pageTitle} pageDescription={pageDescription} />

      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <h2>Numéros de téléphones</h2>
          GOUVERNEMENT DU QUÉBEC
          <ul className="spacer-bottom">
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
          </ul>
        </div>
        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <h2>Sites du gouvernement</h2>
          <ul>
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
          <div className="content-block spacer-top">
            <h2 className="flex-row">Logiciel de facturation</h2>
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
              <a className="blue-text" href="https://finance-d.com">
                <LazyImage
                  classNames={"finance-d-screenshot"}
                  height={1040}
                  width={1920}
                  src={financeD}
                  alt={"Logiciel Finance D"}
                />
                <br />
                <br />
                <button>Logiciel Finance D</button>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="content-block"></div>
    </div>
  );
}
