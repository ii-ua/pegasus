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

if (isBrowser) {
  languageDetector.init({
    order: ['localStorage', 'cookie', 'path', 'subdomain'],
    caches: ['localStorage'],
  })
}

const normalizeLang = (value?: string): 'uk' | 'en' => {
  if (!value) return 'uk'
  const base = value.split('-')[0]
  if (base === 'en') return 'en'
  return 'uk'
}

const getCookieLang = (): string | undefined => {
  if (!isBrowser) return undefined
  const match = document.cookie.match(/(?:^|;\s*)i18next=([^;]+)/)
  return match?.[1]
}

const getInitialLang = (): 'uk' | 'en' => {
  if (!isBrowser) return 'uk'

  const localStorageLang = window.localStorage.getItem('i18nextLng') ?? undefined
  const cookieLang = getCookieLang()
  const lang = normalizeLang(localStorageLang ?? cookieLang)

  if (lang === 'uk' && localStorageLang === 'ru') {
    window.localStorage.setItem('i18nextLng', 'uk')
  }

  return lang
}

const baseInitConfig = {
  lng: getInitialLang(),
  fallbackLng: ['uk', 'en'],
  supportedLngs: ['uk', 'en'],
  load: 'languageOnly',
  defaultNS,
  interpolation: { escapeValue: false },
  resources,
} as const

if (isBrowser) {
  i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      ...baseInitConfig,
      detection: {
        order: ['localStorage', 'cookie', 'path', 'subdomain'],
        caches: ['cookie', 'localStorage'],
      },
    })
    .catch(console.error)
} else {
  i18next.use(initReactI18next).init(baseInitConfig).catch(console.error)
}
