import React, { useEffect } from "react";

// Components
import Banner from "../../Components/Banner/Banner";
import headInjector from "../../functions/headInjector";

export default function Page(
  {
    pageTitle,
    pageDescription,
    metaDescription,
    bgImage,
    canonicalLink,
    children
  }
) {

  useEffect(() => {
    headInjector({
      pageTitle: pageTitle,
      metaDescription: metaDescription,
      canonicalLink: import.meta.env.SNOWPACK_PUBLIC_WEBSITE_URL + canonicalLink
    });
  }, []);

  return (
    <div className="route-container container">

      <Banner
        pageTitle={pageTitle || import.meta.env.SNOWPACK_PUBLIC_WEBSITE_NAME}
        pageDescription={pageDescription}
        bgImage={bgImage}
      />

      {children}

    </div>
  );
}
