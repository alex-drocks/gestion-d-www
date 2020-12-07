// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".notification-card {\r\n  position: relative;\r\n  border-left: 0.3em solid var(--blue);\r\n  box-shadow: 2px 2px 7px rgba(0, 0, 0, .25);\r\n  padding: 10px 45px 10px 24px;\r\n  margin-top: calc(2.1rem * 0.83 + 18px);\r\n  margin-bottom: calc(2.1rem * 0.83 + 18px);\r\n  color: black;\r\n  font-size: 18px;\r\n}\r\n\r\n.svg-background {\r\n  background-color: #fff;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  bottom: 8px;\r\n  left: -17px;\r\n  border-radius: 50%;\r\n  width: 28px;\r\n  height: 28px;\r\n}\r\n\r\n.svg-background.align-icon-top {\r\n  top: calc(1em + 12px);\r\n}\r\n\r\n.notification-card svg {\r\n  fill: var(--blue);\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}