import colors from 'vuetify/es5/util/colors'

// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
      router: {
        base: '/portfolio/'
      }
    }
    : {}

export default {
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/portfolio/favicon.ico" }
    ]
  },
  ...routerBase,
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    publicPath: "/portfolio/_nuxt/"
  }
};
// if (process.env.DEPLOY_ENV === "LOCAL") {
//   module.exports["router"] = { base: "/" };
// }