import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { en, uk } from './translation'

const languageDetector = new LanguageDetector()
const isBrowser = typeof window !== 'undefined'

export const defaultNS = 'translation'

export const resources = {
  en: { translation: en },
  uk: { translation: uk },
}

languageDetector.init({
  order: ['localStorage', 'cookie', 'path', 'subdomain'],
  caches: ['localStorage'],
})

let detectedLang = 'uk'

if (isBrowser) {
  const browserDetected = languageDetector.detect() as string | undefined
  if (browserDetected) {
    detectedLang = browserDetected
  }

  if (detectedLang === 'ru') {
    detectedLang = 'uk'
    localStorage.setItem('i18nextLng', 'uk')
  }

  if (!['uk', 'en'].some((lang) => detectedLang.startsWith(lang))) {
    detectedLang = 'uk'
  }
}

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: detectedLang,
    fallbackLng: ['uk', 'en'],
    supportedLngs: ['uk', 'en'],
    load: 'languageOnly',
    defaultNS,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'cookie', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage'],
    },
    resources,
  })
  .catch(console.error)
