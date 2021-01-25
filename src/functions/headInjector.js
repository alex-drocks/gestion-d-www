export default function headInjector({
  pageTitle,
  metaDescription,
  canonicalLink,
}) {
  if (typeof window === "undefined") {
    return;
  }

  // <title>
  const title = document.querySelector("title");
  if (title && title.textContent.split("|")[0] !== pageTitle) {
    const {
      SNOWPACK_PUBLIC_WEBSITE_NAME,
      SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION,
    } = import.meta.env;
    const common =
      SNOWPACK_PUBLIC_WEBSITE_NAME +
      " - " +
      SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION;
    title.textContent = (pageTitle ? pageTitle + " | " : "") + common;
  }

  // <meta name="description"/>
  const meta = document.querySelector("meta[name='description']");
  if (meta && meta.getAttribute("content") !== metaDescription) {
    meta.setAttribute("content", metaDescription);
  }

  // <link rel="canonical" href="" />
  const link = document.querySelector("link[rel='canonical']");
  if (link && link.getAttribute("href") !== canonicalLink) {
    link.setAttribute("href", canonicalLink);
  }
}
