

import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
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
  appConfig: {
    analyze: {
      analyzerMode: 'static'
    }
  },
  vite:{
    server:{
      hmr:{
        overlay:false //#禁用vite错误提示
      }
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  }
})
