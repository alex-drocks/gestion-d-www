import React from "react";
import "./Contact.css";

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
          <h2>Contactez-nous.</h2>
          <p>
            Si vous avez besoin de plus d'informations concernant nos
            différents services, n'hésitez pas à nous contacter directement
            ou avec le formulaire ci-dessous.
            Nous nous ferons un grand plaisir de vous répondre dans
            les plus brefs délais.
          </p>

          <ContactezNous
            renderTitle={false}
            renderDirects={false}
            renderParagraph={false}
            renderNotification={true}
            renderLink={false}
          />

          <form action="" className="flex-col">
            <div className="form-field contact--nom flex-col flex-col--100w">
              <h3 className="form-field--title">Nom complet:</h3>
              <input type="text" name="name"
                     className="form-field--control"
                     spellCheck={false} maxLength={70} aria-required={true}
                     placeholder="Votre prénom et nom de famille..." />
            </div>

            <div className="form-field contact--courriel flex-col flex-col--100w">
              <h3 className="form-field--title">Adresse courriel:</h3>
              <input type="email" name="email"
                     className="form-field--control"
                     spellCheck={false} maxLength={70} aria-required={true}
                     placeholder="Votre adresse e-mail..." />
            </div>

            <div className="form-field contact--phone flex-col flex-col--100w">
              <h3 className="form-field--title">Numéro de téléphone:</h3>
              <input type="tel" name="tel"
                     className="form-field--control"
                     spellCheck={false} maxLength={70} aria-required={true}
                     placeholder="Votre numéro de téléphone..." />
            </div>

            <div className="form-field contact--sujet flex-col flex-col--100w">
              <h3 className="form-field--title">Sujet:</h3>
              <label className="checkbox" htmlFor="impots-particuliers">
                <input type="checkbox" id="impots-particuliers" />
                Déclaration d'impôts de particuliers
              </label>
              <label className="checkbox" htmlFor="impots-societes">
                <input type="checkbox" id="impots-societes" />
                Déclaration d'impôts de sociétés
              </label>
              <label className="checkbox" htmlFor="comptabilite-entreprise">
                <input type="checkbox" id="comptabilite-entreprise" />
                Comptabilité d'entreprise & Tenue de livres
              </label>
              <label className="checkbox" htmlFor="autres">
                <input type="checkbox" id="autres" />
                Autres
              </label>
            </div>

            <div className="form-field contact--message flex-col flex-col--100w">
              <h3 className="form-field--title">Message:</h3>
              <textarea className="form-field--control"
                        name="" id="" cols="30" rows="4" placeholder="Votre message (max. 500 caractères)" maxLength={500} />
            </div>

            <div className="form-field contact--send-btn">
              <a href="#">
                <input type="submit" className="form-field--control" />
              </a>
            </div>
          </form>

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