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
  "routes": [
    {"match": "routes", "src": ".*", "dest": "/index.html"}
  ],
  devOptions: {
    /* ... */
  },
  buildOptions: {},
  alias: {
    /* ... */
  }
};
