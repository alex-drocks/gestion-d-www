import React from "react";

// Components
import Banner from "../../Components/Banner/Banner";
import ContactezNous from "../../Components/ContactezNous/ContactezNous";


export default function Contact({ pageTitle, pageDescription, nombreClients, establishedDate }) {
  return (
    <div className="route-container container">

      <Banner pageTitle={pageTitle}
              pageDescription={pageDescription} />

      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <h2>Hello</h2>
          <p>
            Gestion Desroches Inc., est une société familiale de services
            comptables établie et dirigée par Daniel Desroches,
            expert dans le domaine de la comptabilité depuis
            plus de {(new Date().getFullYear() - establishedDate)} ans.
            Fondée en {establishedDate}, l'entreprise familiale sert aujourd'hui plus de
            {nombreClients} particuliers et entreprises par année.
          </p>
        </div>
        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <ContactezNous
            renderTitle={true}
            renderDirects={false}
            renderParagraph={true}
            renderNotification={true}
            renderLink={true}
          />
        </div>
      </div>


    </div>
  );
}