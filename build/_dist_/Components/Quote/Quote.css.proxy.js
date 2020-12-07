// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".quote {\r\n  align-content: center;\r\n  padding-top: calc(var(--vertical-spacing) * 0.8);\r\n}\r\n\r\n.quote--text {\r\n  font-size: 1.275em;\r\n  width: 45%;\r\n  letter-spacing: -0.01em;\r\n  line-height: 1.35em;\r\n}\r\n\r\n.quote--author {\r\n  color: var(--blue);\r\n  font-size: 0.55rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.25em;\r\n  filter: brightness(140%);\r\n  text-transform: capitalize;\r\n}\r\n\r\n.quote--author:before {\r\n  content: \"— \";\r\n}\r\n\r\n@media (max-width: 775px) {\r\n  .quote--text {\r\n    width: 70%;\r\n  }\r\n  .quote--author {\r\n    font-size: 0.55em;\r\n  }\r\n}\r\n\r\n@media (max-width: 330px) {\r\n  .quote--text {\r\n    width: 82%;\r\n  }\r\n  .quote--author {\r\n    font-size: 0.66em;\r\n  }\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}