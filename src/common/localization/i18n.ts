import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en, uk } from './translation'

const languageDetector = new LanguageDetector()

export const defaultNS = 'translation'

export const resources = {
  en: { translation: en },
  uk: { translation: uk },
}

languageDetector.init({
  order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  caches: ['localStorage'],
})

let detectedLang = languageDetector.detect() as string

if (detectedLang === 'ru') {
  detectedLang = 'uk'
  localStorage.setItem('i18nextLng', 'uk')
}

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: detectedLang,
    fallbackLng: 'uk',
    load: 'languageOnly',
    defaultNS,
    interpolation: { escapeValue: false },
    resources,
  })
  .catch(console.error)
