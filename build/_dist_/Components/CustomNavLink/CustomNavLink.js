import React, {useEffect} from "../../../web_modules/react.js";
import {Link, useLocation} from "../../../web_modules/react-router-dom.js";
export default function CustomNavLink(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const navLinks = document.querySelectorAll("nav a.custom-router-link");
    if (navLinks && navLinks.length) {
      navLinks.forEach((a) => {
        const {pathname} = a.dataset;
        const isExactPath = pathname === location.pathname;
        const isSubRoute = location.pathname.includes(pathname) && pathname !== "/";
        if (isExactPath || isSubRoute) {
          !a.classList.contains("active") && a.classList.add("active");
        } else {
          a.classList.contains("active") && a.classList.remove("active");
        }
      });
    }
  }, [location]);
  return /* @__PURE__ */ React.createElement(Link, {
    to: props.to,
    "data-pathname": props.to,
    className: props.className ? props.className + " no-wrap custom-router-link" : "no-wrap custom-router-link"
  }, props.children);
}
