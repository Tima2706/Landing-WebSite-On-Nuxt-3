// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      svgLoader(),
    ],
    optimizeDeps: {
      exclude: [
        'vue-select-3'
      ]
    }
  },
  swiper: {
    modules: ['*'],
  },
  modules: [
    ['nuxt-swiper', {}],

    '@pinia/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
      }
    ],
    'nuxt-aos'
    // '@nuxtjs/i18n',
  ],
  css: ["@/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
