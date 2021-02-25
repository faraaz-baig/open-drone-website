export default {
  target: 'static',
  head: {
    title: 'The Open Drone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeCofig: false,
    config: {}
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {},


  build: {
  }
}
