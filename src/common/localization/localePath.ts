export type SiteLocale = 'uk' | 'en'

export const localeFromPathname = (pathname: string): SiteLocale =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'uk'

export const normalizeToUkPath = (path: string): string => {
  if (!path) return '/'
  if (path === '/en') return '/'
  if (path.startsWith('/en/')) return path.slice(3) || '/'
  return path
}

export const localizePath = (path: string, locale: SiteLocale): string => {
  if (!path) return locale === 'en' ? '/en' : '/'
  if (/^(https?:)?\/\//.test(path)) return path
  if (!path.startsWith('/')) return path

  const [pathWithoutHash, hash = ''] = path.split('#')
  const [pathname = '/', search = ''] = pathWithoutHash.split('?')

  const ukPathname = normalizeToUkPath(pathname || '/')
  const localizedPathname =
    locale === 'en'
      ? ukPathname === '/'
        ? '/en'
        : `/en${ukPathname}`
      : ukPathname

  const querySuffix = search ? `?${search}` : ''
  const hashSuffix = hash ? `#${hash}` : ''
  return `${localizedPathname}${querySuffix}${hashSuffix}`
}

export const switchLocalePath = (
  pathWithSearchAndHash: string,
  locale: SiteLocale,
): string => {
  if (!pathWithSearchAndHash.startsWith('/')) {
    return localizePath('/', locale)
  }

  return localizePath(pathWithSearchAndHash, locale)
}
