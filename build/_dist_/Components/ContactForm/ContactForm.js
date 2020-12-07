import React, {useState} from "../../../web_modules/react.js";
import "./ContactForm.css.proxy.js";
import NotificationCard2 from "../NotificationCard/NotificationCard.js";
export default function ContactForm2({classNames, fetchUrl}) {
  const [formSent, setFormSent] = useState("");
  const [isSending, setIsSending] = useState(false);
  function onSubmit(e) {
    if (!window.fetch || formSent)
      return;
    setIsSending(true);
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
    }).then((response) => response.text()).then((result) => {
      setIsSending(false);
      if (result && result !== "EMAIL_SENT_SUCCESSFULLY") {
        setFormSent("ERROR");
        return;
      }
      form.reset();
      setFormSent("EMAIL_SENT_SUCCESSFULLY");
    }).catch((error) => {
      setFormSent("ERROR");
    });
    e.preventDefault();
  }
  return /* @__PURE__ */ React.createElement("form", {
    className: classNames,
    id: "formulaire_contact",
    name: "formulaire_contact",
    action: "",
    onSubmit
  }, /* @__PURE__ */ React.createElement("h2", null, "Formulaire de contact"), /* @__PURE__ */ React.createElement("div", {
    className: "form-field contact--nom flex-col flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "form-field--title"
  }, "Nom complet:"), /* @__PURE__ */ React.createElement("input", {
    required: true,
    type: "text",
    name: "name",
    className: "form-field--control",
    spellCheck: false,
    maxLength: 70,
    "aria-required": true,
    placeholder: "Votre pr\xE9nom et nom de famille..."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-field contact--courriel flex-col flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "form-field--title"
  }, "Adresse courriel:"), /* @__PURE__ */ React.createElement("input", {
    required: true,
    type: "email",
    name: "email",
    className: "form-field--control",
    spellCheck: false,
    maxLength: 70,
    "aria-required": true,
    placeholder: "Votre adresse e-mail..."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-field contact--phone flex-col flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "form-field--title"
  }, "Num\xE9ro de t\xE9l\xE9phone:"), /* @__PURE__ */ React.createElement("input", {
    type: "tel",
    name: "phone",
    className: "form-field--control",
    spellCheck: false,
    maxLength: 17,
    "aria-required": true,
    placeholder: "Votre num\xE9ro de t\xE9l\xE9phone..."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-field contact--sujet flex-col flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "form-field--title"
  }, "Sujet:"), /* @__PURE__ */ React.createElement("label", {
    className: "radio",
    htmlFor: "impots-particuliers"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "impots-particuliers",
    name: "subject",
    value: "D\xE9claration d'imp\xF4ts de particuliers"
  }), "D\xE9claration d'imp\xF4ts de particuliers"), /* @__PURE__ */ React.createElement("label", {
    className: "radio",
    htmlFor: "impots-societes"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "impots-societes",
    name: "subject",
    value: "D\xE9claration d'imp\xF4ts de soci\xE9t\xE9s"
  }), "D\xE9claration d'imp\xF4ts de soci\xE9t\xE9s"), /* @__PURE__ */ React.createElement("label", {
    className: "radio",
    htmlFor: "comptabilite-entreprise"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "comptabilite-entreprise",
    name: "subject",
    value: "Comptabilit\xE9 d'entreprise & Tenue de livres"
  }), "Comptabilit\xE9 d'entreprise & Tenue de livres"), /* @__PURE__ */ React.createElement("label", {
    className: "radio",
    htmlFor: "dossier-succession"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "dossier-succession",
    name: "subject",
    value: "Prise en charge de succession"
  }), "Prise en charge de succession"), /* @__PURE__ */ React.createElement("label", {
    className: "radio",
    htmlFor: "creation-incorporation"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "creation-incorporation",
    name: "subject",
    value: "Cr\xE9ation d'une incorporation"
  }), "Cr\xE9ation d'une incorporation"), /* @__PURE__ */ React.createElement("label", {
    className: "radio",
    htmlFor: "autres"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    id: "autres",
    name: "subject",
    value: "Autres"
  }), "Autres")), /* @__PURE__ */ React.createElement("div", {
    className: "form-field contact--message flex-col flex-col--100w"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "form-field--title"
  }, "Message:"), /* @__PURE__ */ React.createElement("textarea", {
    required: true,
    className: "form-field--control",
    name: "message",
    cols: "10",
    rows: "4",
    placeholder: "Votre message (max. 500 caract\xE8res)",
    maxLength: 500
  })), formSent && formSent === "EMAIL_SENT_SUCCESSFULLY" ? /* @__PURE__ */ React.createElement(NotificationCard2, null, /* @__PURE__ */ React.createElement("h3", null, "Votre message a \xE9t\xE9 envoy\xE9 avec succ\xE8s."), "Nous vous r\xE9pondrons d\xE8s que possible. Merci.") : formSent && formSent === "ERROR" ? /* @__PURE__ */ React.createElement(NotificationCard2, null, /* @__PURE__ */ React.createElement("h3", null, "Une erreur s'est produite."), "Veuillez SVP nous contacter directement. Merci.") : /* @__PURE__ */ React.createElement("div", {
    className: "form-field contact--send-btn"
  }, !isSending && /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "form-field--control",
    type: "submit"
  }, "Envoyer")), isSending && /* @__PURE__ */ React.createElement(NotificationCard2, null, "Envoi en cours...")));
}
