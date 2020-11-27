/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_"
  },
  plugins: [
    [
      "@snowpack/plugin-webpack",
      {
        sourceMap: false,
        manifest: true
      }
    ],
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv"
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {},
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  }
};
