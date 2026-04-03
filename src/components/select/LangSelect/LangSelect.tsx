import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { cn } from '@/common/utils/cn'
import { useLocation } from '@tanstack/react-router'
import { SiteLocale, switchLocalePath } from '@/common/localization/localePath'

export interface LangSelectProps {
  className?: string
}

const defaultStyles =
  'text-white font-normal text-[20px] px-4 py-2 cursor-pointer transition-colors duration-200 border border-transparent '
const activeStyles = 'border-white'

export const LangSelect = ({ className }: LangSelectProps) => {
  const { i18n } = useTranslation()
  const [mounted, setMounted] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Нормалізація
  const rawLang = i18n.language
  const currentLang =
    rawLang === 'ru' || rawLang === 'ru-RU' || rawLang.startsWith('ru')
      ? 'uk'
      : rawLang

  const onLang = (lang: SiteLocale) => {
    const pathWithQueryAndHash = `${location.pathname}${location.searchStr}${location.hash}`
    const targetPath = switchLocalePath(pathWithQueryAndHash, lang)
    i18n.changeLanguage(lang)
    localStorage.setItem('i18nextLng', lang)
    document.cookie = `i18next=${lang}; path=/; max-age=31536000`
    window.location.assign(targetPath)
  }

  return (
    <div className={cn('flex gap-2', className)}>
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
