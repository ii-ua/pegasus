import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const defaultStyles =
  'text-white font-normal text-[20px] px-4 py-2 cursor-pointer transition-colors duration-200 border border-transparent '
const activeStyles = 'border-white'

export const LangSelect = () => {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLang = i18n.language
  const onLang = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('i18nextLng', lang)
  }

  return (
    <div className="flex gap-2">
      {['uk', 'en'].map((lang) => (
        <button
          key={lang}
          className={clsx(defaultStyles, {
            [activeStyles]: mounted && currentLang === lang,
          })}
          onClick={() => onLang(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
