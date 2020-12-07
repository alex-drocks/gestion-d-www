// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".lazy-image.loaded:not(.has-error) {\r\n  transition: opacity .5s ease-in, transform .7s;\r\n  opacity: 1;\r\n}\r\n\r\n.lazy-image.zoom-hover-fx:not(is-full-width):hover {\r\n  transform: scale(1.015);\r\n  transform-origin: 50% 50%;\r\n}\r\n\r\n.lazy-image.zoom-hover-fx.is-full-width:hover {\r\n  transform: scale(1);\r\n  transform-origin: 50% 50%;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}