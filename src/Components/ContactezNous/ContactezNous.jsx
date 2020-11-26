import React from "react";
import CustomNavLink from "../CustomNavLink/CustomNavLink";
import NotificationCard from "../NotificationCard/NotificationCard";

export default function ContactezNous({ renderParagraph, renderNotification, renderLink }) {
  return (
    <div className="contactez-nous">
      <h2>Contactez-nous</h2>
      <div className="no-wrap">☎ (514) 293-0200</div>
      <div className="no-wrap">✉ daniel@gestiondesroches.com</div>
      {renderParagraph
        ? <p>
          Pour plus d'informations sur nos services et notre entreprise,
          ou tout simplement pour nous poser une question,
          n'hésitez pas à nous contacter.</p>
        : ""
      }
      {renderNotification
        ?
        <NotificationCard>
          Veuillez noter que pour la période actuelle,
          notre capacité est à son maximum.
          Nous sommes dans l'impossibilité d'accepter de nouveaux clients.
          Merci de votre compréhension.
        </NotificationCard>
        : ""
      }
      {renderLink
        ? <CustomNavLink to="/contact" className="text-link blue-text">
          Formulaire de Contact
        </CustomNavLink>
        : ""
      }

    </div>
  );
}