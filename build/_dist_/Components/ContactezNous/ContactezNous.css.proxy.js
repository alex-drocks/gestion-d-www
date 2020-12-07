// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".contactez-nous p {\r\n  margin-top: calc(2.1rem * 0.83 + 18px);\r\n}\r\n\r\n.contactez-nous .coordonnees, .link-rendez-vous {\r\n  font-size: 18px;\r\n}\r\n\r\n.contactez-nous .info-item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  flex-wrap: nowrap;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.contactez-nous .info-item svg,\r\n.contactez-nous .link-rendez-vous svg {\r\n  margin-top: 0.11em;\r\n  margin-right: 12px;\r\n}\r\n\r\n.contactez-nous .info-item--margin-top {\r\n  margin-top: calc(2.1rem * 0.83 + 18px);\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n  .contactez-nous .coordonnees, .link-rendez-vous {\r\n    font-size: 16px;\r\n  }\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}