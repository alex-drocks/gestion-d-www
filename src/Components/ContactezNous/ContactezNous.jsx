import React from "react";

import "./ContactezNous.css";

import CustomNavLink from "../CustomNavLink/CustomNavLink";
import NotificationCard from "../NotificationCard/NotificationCard";

export default function ContactezNous({
                                        renderTitle,
                                        renderDirects,
                                        renderParagraph,
                                        renderRendezVous,
                                        renderNotification,
                                        renderLink
                                      }) {
  return (
    <div className="contactez-nous">
      {renderTitle ? <h2>Contactez-nous</h2> : ""}
      {renderDirects ? (
        <div className="coordonnees">
          <h2>Nos coordonnées</h2>
          <div className="info-item--margin-top">
            <a href="https://goo.gl/maps/dstRK5tmC55AiGf46">
              <div className="info-item adresse">
                <svg
                  width={"1em"}
                  height={"1em"}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                Gestion Desroches Inc.
                <br />
                1650, Boul. Goyer
                <br />
                Ste-Marie-Madeleine
                <br />
                (Québec) J0H 1S0
              </div>
            </a>
          </div>
          <div className="info-item--margin-top">
            <div className="info-item cellphone">
              <svg width={"1.1em"} height={"1.1em"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026L8.396 0 6.29 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
              </svg>
              <span>
              Daniel Desroches | <span className="no-wrap">(514) 293-0200</span>
            </span>
            </div>
            <div className="info-item email no-wrap">
              <svg
                width={"1em"}
                height={"1em"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
              </svg>
              daniel@gestiondesroches.com
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {renderParagraph ? (
        <p>
          Pour plus d'informations sur nos services et notre entreprise, ou tout
          simplement pour nous poser une question, n'hésitez pas à nous
          contacter.
        </p>
      ) : (
        ""
      )}

      {renderRendezVous ? (
        <div className="info-item--margin-top">

          <a
            className="link-rendez-vous"
            href="https://calendly.com/danieldesroches/30min"
          >
            <svg
              width={"1em"} height={"1em"}
              style={{ paddingTop: "3px" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zM8 16H4v4h4v-4zm6 0h-4v4h4v-4zm-6-6H4v4h4v-4zm16-8v22H0V2h3v1a2 2 0 004 0V2h10v1a2 2 0 004 0V2h3zm-2 6H2v14h20V8zm-2-7a1 1 0 10-2 0v2a1 1 0 102 0V1zM6 3a1 1 0 11-2 0V1a1 1 0 112 0v2z" />
            </svg>
            Prendre un rendez-vous
          </a>
        </div>

      ) : (
        ""
      )}

      {renderNotification ? (
        <NotificationCard>
          Veuillez noter que pour la période actuelle, notre capacité est à son
          maximum. Nous sommes dans l'impossibilité d'accepter de nouveaux
          clients. Merci de votre compréhension.
          {renderLink ? (
            <>
              <br />
              <br />
              <CustomNavLink to="/contact" className="text-link blue-text">
                Contact
              </CustomNavLink>
            </>
          ) : (
            ""
          )}
        </NotificationCard>
      ) : (
        ""
      )}
    </div>
  );
}
