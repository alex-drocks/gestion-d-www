import React from "react";

// Components
import Page from "../../Components/Page/Page";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactezNous from "../../Components/ContactezNous/ContactezNous";

export default function Contact() {
  return (
    <Page
      pageTitle="Contact"
      pageDescription="Il est simple de nous joindre"
      metaDescription={
        "Pour nous contacter, n'hésitez pas à utiliser " +
        "notre formulaire de contact. " +
        "Vous pouvez aussi nous contacter avec nos coordonnées directes."
      }
      bgImage={null}
      canonicalLink="/contact/"
    >
      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <ContactForm
            classNames={"flex-col"}
            fetchUrl="https://gestiondesroches.com/api/submit-contact-form.php"
          />
        </div>

        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          {/*Coordonnées directes*/}
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
    </Page>
  );
}
