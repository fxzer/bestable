

import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devServer: {
    port: 9898,
  },
  modules: ['@unocss/nuxt', '@nuxtjs/i18n','@element-plus/nuxt','@vueuse/nuxt',],
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
    vueI18n: './i18n.config.ts' 
  },
  app: {
    head: {
      title: 'Bestable百乐适',
      script: [
        { src: 'https://smtpjs.com/v3/smtp.js' }
      ],
    }
  }
  
})
