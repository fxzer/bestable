

import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  // app: {
  //   baseURL:'/bestable/',
  // },
  devServer: {
    port: 9898,
  },
  modules: ['@unocss/nuxt', '@nuxtjs/i18n'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {}
    },
  },
  css: [
    'assets/css/main.scss',
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  app: {
    // baseURL:'/bestable/',
    head: {
      script: [
        { src: 'https://smtpjs.com/v3/smtp.js' }
      ],
    }
  }
  
})
