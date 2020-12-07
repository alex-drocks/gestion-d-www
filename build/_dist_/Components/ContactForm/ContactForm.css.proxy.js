// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".form-field:not(:first-of-type) {\r\n  margin-top: 20px;\r\n}\r\n\r\n.form-field .form-field--title {\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.form-field .form-field--control {\r\n  font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n  font-size: 16px;\r\n  padding: 1.25em 1.5em;\r\n}\r\n\r\n.form-field .radio {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-field .radio input[type=\"radio\"] {\r\n  margin-right: 0.7rem;\r\n  min-width: 24px;\r\n  min-height: 24px;\r\n}\r\n\r\n.form-field input[type=\"submit\"],\r\n.form-field button {\r\n  font-weight: 700;\r\n}\r\n\r\n.form-field textarea {\r\n  resize: none;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}