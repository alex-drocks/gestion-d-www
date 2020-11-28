import React, { useState } from "react";
import "../../Components/ContactForm/ContactForm.css";

import NotificationCard from "../NotificationCard/NotificationCard";


export default function ContactForm({ classNames, fetchUrl }) {
  const [formSent, setFormSent] = useState("");

  function onSubmit(e) {
    if (!window.fetch || formSent) return; //internet explorer does not support fetch

    const form = e.target;
    const formData = new FormData(form);
    const urlEncodedQuery = new URLSearchParams(formData);

    fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      body: urlEncodedQuery
    })
      .then(response => response.text())
      .then(result => {
        if (result && result !== "EMAIL_SENT_SUCCESSFULLY") {
          setFormSent("ERROR");
          return;
        }
        form.reset();
        setFormSent("EMAIL_SENT_SUCCESSFULLY");
      })
      .catch(error => {
        setFormSent("ERROR");
      });

    // Prevent the default form submit
    e.preventDefault();
  }

  return (
    <form className={classNames}
          id="formulaire_contact"
          name="formulaire_contact"
          action=""
          onSubmit={onSubmit}
    >
      {/*Nom complet*/}
      <div className="form-field contact--nom flex-col flex-col--100w">
        <h3 className="form-field--title">Nom complet:</h3>
        <input required type="text" name="name"
               className="form-field--control"
               spellCheck={false} maxLength={70} aria-required={true}
               placeholder="Votre prénom et nom de famille..." />
      </div>

      {/*Courriel*/}
      <div className="form-field contact--courriel flex-col flex-col--100w">
        <h3 className="form-field--title">Adresse courriel:</h3>
        <input required type="email" name="email"
               className="form-field--control"
               spellCheck={false} maxLength={70} aria-required={true}
               placeholder="Votre adresse e-mail..." />
      </div>

      {/*Numéro de tel*/}
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

      {/*Sujet*/}
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

      {/*Message*/}
      <div className="form-field contact--message flex-col flex-col--100w">
        <h3 className="form-field--title">Message:</h3>
        <textarea required
                  className="form-field--control"
                  name="message" cols="10" rows="4"
                  placeholder="Votre message (max. 500 caractères)"
                  maxLength={500} />
      </div>

      {/*Submit*/}
      {formSent && formSent === "EMAIL_SENT_SUCCESSFULLY"
        ?
        <NotificationCard>
          <h3>Votre message a été envoyé avec succès.</h3>
          Nous vous répondrons dès que possible.
          Merci.
        </NotificationCard>
        :
        formSent && formSent === "ERROR"
          ?
          <NotificationCard>
            <h3>Une erreur s'est produite.</h3>
            Veuillez SVP nous contacter directement.
            Merci.
          </NotificationCard>
          :
          <div className="form-field contact--send-btn">
            <a href="#">
              <button className="form-field--control" type="submit">Envoyer</button>
            </a>
          </div>
      }

    </form>
  );
}
