import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function CustomNavLink(props) {
  const location = useLocation();
  useEffect(() => {
    //1- Scroll to Top of page
    window.scrollTo(0, 0);

    //2- Set route link "active" class
    const navLinks = document.querySelectorAll("nav a.custom-router-link");
    if (navLinks && navLinks.length) {
      navLinks.forEach((a) => {
        const { pathname } = a.dataset;
        const isExactPath = pathname === location.pathname;
        const isSubRoute = location.pathname.includes(pathname) && pathname !== "/";
        if (isExactPath || isSubRoute) {
          // Set active link class
          !a.classList.contains("active") && a.classList.add("active");
        } else {
          // Remove previous link class
          a.classList.contains("active") && a.classList.remove("active");
        }
      });
    }
  }, [location]);

  return (
    <Link
      to={props.to}
      data-pathname={props.to}
      className={
        props.className
          ? props.className + " no-wrap custom-router-link"
          : "no-wrap custom-router-link"
      }
    >
      {props.children}
    </Link>
  );
}

/*
Renders a Component that updates the active className for styling purposes.
 */
