import zh from './locale/zh'
import en from './locale/en'
import de from './locale/de'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  messages: {
    zh,
    en,
    de
  }
}))
