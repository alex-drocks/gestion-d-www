import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";

export default function CustomNavLink(props) {
  const location = useLocation();
  useEffect(() => {
    //1- Scroll to Top of page
    window.scrollTo(0, 0);

    //2- Set link "active" class
    const activeNavLink = document.querySelector(`header nav ul a[href='${location.pathname}']`);
    if (activeNavLink) {
      document.querySelectorAll(`header nav ul a[href]`).forEach(a => {
        // Set active link class
        !activeNavLink.classList.contains("active") && activeNavLink.classList.add("active");
        // Remove previous link class
        a !== activeNavLink && a.classList.contains("active") && a.classList.remove("active");
      })
    }
  }, [location]);

  return (
    <Link to={props.to} className={props.className}>
      {props.children}
    </Link>
  )
}

/*
Renders a Component that updates the active className for styling purposes.
 */