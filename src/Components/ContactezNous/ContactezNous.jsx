import React from "react";

import "./ContactezNous.css";

import CustomNavLink from "../CustomNavLink/CustomNavLink";
import NotificationCard from "../NotificationCard/NotificationCard";

export default function ContactezNous({
  renderTitle,
  renderDirects,
  renderParagraph,
  renderNotification,
  renderLink,
}) {
  return (
    <div className="contactez-nous">
      {renderTitle ? <h2>Contactez-nous</h2> : ""}
      {renderDirects ? (
        <>
          <h2>Comptabilité</h2>
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

          <div className="info-item cellphone no-wrap">
            <svg
              width={"1em"}
              height={"1em"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 2c0-1.104-.896-2-2-2H7C5.896 0 5 .896 5 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2V2zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zM12 22c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3H7V4.976h10V19z" />
            </svg>
            (514) 293-0200
          </div>

          {/*<div className="info-item homephone no-wrap">*/}
          {/*  <svg width={"1em"} height={"1em"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026L8.396 0 6.29 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>*/}
          {/*  (450) 795-3994*/}
          {/*</div>*/}

          {/*<div className="info-item adresse no-wrap">*/}
          {/*  <svg width={"1em"} height={"1em"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
          {/*    <path*/}
          {/*      d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />*/}
          {/*  </svg>*/}
          {/*  Ste-Madeleine, QC*/}
          {/*</div>*/}
        </>
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
