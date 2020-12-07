// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".etapes {\r\n  justify-content: center;\r\n}\r\n\r\n.etapes .etape {\r\n  max-width: 820px;\r\n}\r\n\r\n.etapes .etape .dividing-line {\r\n  max-width: 100vw;\r\n  border-top: 3px solid var(--light-gray);\r\n}\r\n\r\n.etapes .etape ul li {\r\n  margin-bottom: .5em;\r\n}\r\n\r\n.etapes .etape:not(:first-of-type) {\r\n  margin-top: var(--vertical-spacing);\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}