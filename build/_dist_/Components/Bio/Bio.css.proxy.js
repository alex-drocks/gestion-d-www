// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".bio-container {\r\n  padding: 5vw;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.bio-image-container {\r\n  width: 25%;\r\n  margin-right: 4vw;\r\n  align-items: center;\r\n}\r\n\r\n.bio-image-container img {\r\n  width: 100%;\r\n  height: auto;\r\n  max-width: 250px;\r\n  margin-top: 2.5vw;\r\n  margin-bottom: 2.5vw;\r\n}\r\n\r\n.bio-info-container {\r\n  width: 60%;\r\n}\r\n\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}