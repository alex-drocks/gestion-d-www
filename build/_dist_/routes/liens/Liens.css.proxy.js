// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".page-liens ul li {\r\n  margin-top: 1vh;\r\n  margin-bottom: 4vh;\r\n}\r\n\r\n.page-liens ul li span {\r\n  font-weight: 700;\r\n}\r\n\r\n.page-liens ul li a {\r\n  text-transform: none;\r\n}\r\n\r\n.finance-d-screenshot {\r\n  width: 100%;\r\n  max-width: calc(100vw - (var(--horizontal-spacing) * 2));\r\n  height: auto;\r\n  box-shadow: 1px 2px 10px rgba(0, 8, 27, .25);\r\n}\r\n\r\n.finance-d-screenshot:hover {\r\n  box-shadow: 1px 2px 7px rgba(0, 8, 27, .5);\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}