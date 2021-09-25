export default {
  target: "static",
  head: {
    title: "Airbound",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Airbound is a group of young individuals that share a passion to innovate within the logistics industry to dramatically improve drone delivery accessibility and infrastructure."
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Airbound is a group of young individuals that share a passion to innovate within the logistics industry to dramatically improve drone delivery accessibility and infrastructure."
      },
      { hid: "og:site_name", name: "og:site_name", content: "Airbound" },
      { hid: "og:title", name: "og:title", content: "Airbound" },
      { hid: "og:image", name: "og:image", content: "/icon.svg" },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Airbound - Drone Delivery For Every Business"
      },
      { hid: "twitter:site", name: "twitter:site", content: "@airbound_co" },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@airbound_co"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "Airbound | Drone Delivery For Every Business"
      },
      { hid: "twitter:image", name: "twitter:image", content: "/icon.svg" },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Airbound is a group of young individuals that share a passion to innovate within the logistics industry to dramatically improve drone delivery accessibility and infrastructure."
      },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "Airbound"
      },
      {
        hid: "mobile-mobile-web-app-capable",
        name: "apple-mobile-web-app-capable",
        content: "Airbound"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "drone, drone delivery, teenagers, drone tech, green technology, last mile delivery, fast delivery, vocal for local, instant delivery"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }]
  },

  css: [],

  plugins: [],

  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeCofig: false,
    config: {}
  },

  modules: ["@nuxtjs/pwa", "@nuxt/content"],

  pwa: {
    manifest: {
      lang: "en"
    },
    icon: {
      source: "/icon.svg"
    }
  },

  content: {},

  build: {}
};
