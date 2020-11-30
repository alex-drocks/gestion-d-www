import React from "react";

// Components
import Banner from "../../Components/Banner/Banner";
import ContactezNous from "../../Components/ContactezNous/ContactezNous";
import ContactForm from "../../Components/ContactForm/ContactForm";

export default function Contact({ pageTitle, pageDescription }) {
  return (
    <div className="route-container container">
      <Banner pageTitle={pageTitle} pageDescription={pageDescription} />

      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <h2>Contactez-nous</h2>
          <p>
            Pour nous contacter ou obtenir plus d'informations, n'hésitez pas à
            utiliser le formulaire ci-dessous. Il s'agit du moyen le plus
            efficace pour nous. Autrement, vous pouvez aussi nous joindre avec
            nos coordonnées directes. Il nous fera plaisir de vous répondre dans
            les plus brefs délais.
          </p>
          <ContactForm
            fetchUrl="https://gestiond.finance-d.com/api/submit-contact-form.php"
            classNames={"spacer-top flex-col"}
          />
        </div>

        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <ContactezNous
            renderTitle={false}
            renderDirects={true}
            renderParagraph={false}
            renderRendezVous={true}
            renderNotification={true}
            renderLink={false}
          />
        </div>
      </div>
    </div>
  );
}
