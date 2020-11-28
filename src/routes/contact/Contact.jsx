import React, { useState } from "react";
import "./Contact.css";

// Components
import Banner from "../../Components/Banner/Banner";
import ContactezNous from "../../Components/ContactezNous/ContactezNous";

export default function Contact({ pageTitle, pageDescription }) {

  function onSubmit(e) {
    const form = e.target;
    const formData = new FormData(form);
    const urlEncodedQuery = new URLSearchParams(formData);

    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    fetch("https://gestiond.finance-d.com/api/submit-contact-form.php", {
      method: "POST",
      headers: headers,
      body: urlEncodedQuery,
      redirect: "follow"
    })
      .then(response => response.text())
      .then(result => {
        if (result && result === "EMAIL_SENT_SUCCESSFULLY") {
          alert("Votre message a été envoyé avec succès. " +
            "Nous vous répondrons dès que possible. " +
            "Merci.")
        }
      })
      .catch(error => console.log("error", error));

    // Prevent the default form submit
    e.preventDefault();
  }

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

          <form className="flex-col"
                id="formulaire_contact"
                name="formulaire_contact"
                onSubmit={onSubmit}
          >
            <div className="form-field contact--nom flex-col flex-col--100w">
              <h3 className="form-field--title">Nom complet:</h3>
              <input required type="text" name="name"
                     className="form-field--control"
                     spellCheck={false} maxLength={70} aria-required={true}
                     placeholder="Votre prénom et nom de famille..." />
            </div>

            <div className="form-field contact--courriel flex-col flex-col--100w">
              <h3 className="form-field--title">Adresse courriel:</h3>
              <input required type="email" name="email"
                     className="form-field--control"
                     spellCheck={false} maxLength={70} aria-required={true}
                     placeholder="Votre adresse e-mail..." />
            </div>

            <div className="form-field contact--phone flex-col flex-col--100w">
              <h3 className="form-field--title">Numéro de téléphone:</h3>
              <input type="tel"
                     name="phone"
                     className="form-field--control"
                     spellCheck={false}
                     maxLength={17}
                     aria-required={true}
                     placeholder="Votre numéro de téléphone..." />
            </div>

            <div className="form-field contact--sujet flex-col flex-col--100w">
              <h3 className="form-field--title">Sujet:</h3>
              <label className="radio" htmlFor="impots-particuliers">
                <input type="radio"
                       id="impots-particuliers"
                       name="subject"
                       value="Déclaration d'impôts de particuliers"
                />
                Déclaration d'impôts de particuliers
              </label>
              <label className="radio" htmlFor="impots-societes">
                <input type="radio"
                       id="impots-societes"
                       name="subject"
                       value="Déclaration d'impôts de sociétés"
                />
                Déclaration d'impôts de sociétés
              </label>
              <label className="radio" htmlFor="comptabilite-entreprise">
                <input type="radio"
                       id="comptabilite-entreprise"
                       name="subject"
                       value="Comptabilité d'entreprise & Tenue de livres"
                />
                Comptabilité d'entreprise & Tenue de livres
              </label>
              <label className="radio" htmlFor="autres">
                <input type="radio"
                       id="autres"
                       name="subject"
                       value="Autres"
                />
                Autres
              </label>
            </div>

            <div className="form-field contact--message flex-col flex-col--100w">
              <h3 className="form-field--title">Message:</h3>
              <textarea required
                        className="form-field--control"
                        name="message" cols="30" rows="4"
                        placeholder="Votre message (max. 500 caractères)"
                        maxLength={500} />
            </div>

            <div className="form-field contact--send-btn">
              <a href="#">
                <button className="form-field--control" type="submit">Envoyer</button>
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