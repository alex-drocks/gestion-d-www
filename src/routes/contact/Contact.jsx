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
          <h2>Contactez-nous.</h2>
          <p>
            Si vous avez besoin de plus d'informations concernant nos différents
            services, n'hésitez pas à nous contacter directement ou avec le
            formulaire ci-dessous. Nous nous ferons un grand plaisir de vous
            répondre dans les plus brefs délais.
          </p>
          <ContactezNous
            renderTitle={false}
            renderDirects={false}
            renderParagraph={false}
            renderNotification={true}
            renderLink={false}
          />
          <ContactForm
            fetchUrl="https://gestiond.finance-d.com/api/submit-contact-form.php"
            classNames={"flex-col"}
          />
        </div>

        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <ContactezNous
            renderTitle={false}
            renderDirects={true}
            renderParagraph={false}
            renderNotification={false}
            renderLink={false}
          />
        </div>
      </div>
    </div>
  );
}
