export default function headInjector({pageTitle, metaDescription, canonicalLink}) {

  // <title>%SNOWPACK_PUBLIC_WEBSITE_NAME% | %SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION%</title>
  const title = document.querySelector("title");
  if (title && title.textContent.split("|")[1] !== pageTitle)
    title.textContent = (pageTitle ? pageTitle + " | " : "")
      + import.meta.env.SNOWPACK_PUBLIC_WEBSITE_NAME + " - " + import.meta.env.SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION;

  // <meta name="description" content="%SNOWPACK_PUBLIC_WEBSITE_LONG_DESCRIPTION%"/>
  const meta = document.querySelector("meta[name='description']");
  if (meta && meta.getAttribute("content") !== metaDescription)
    meta.setAttribute("content", metaDescription);

  // <link rel="canonical" href="%SNOWPACK_PUBLIC_WEBSITE_URL%" />
  const link = document.querySelector("link[rel='canonical']");
  if (link && link.getAttribute("href") !== canonicalLink)
    link.setAttribute("href", canonicalLink);
}