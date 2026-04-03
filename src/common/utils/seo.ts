export const SITE_URL = 'https://pegasusarms.com.ua'
export const SITE_NAME = 'Pegasus Arms'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/big_logo.png`

type BuildWebsiteSeoArgs = {
  title: string
  description: string
  canonical?: string
  image?: string
  noIndex?: boolean
}

export const buildWebsiteSeo = ({
  title,
  description,
  canonical,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: BuildWebsiteSeoArgs) => {
  const normalizedImage = image.startsWith('http')
    ? image
    : `${SITE_URL}${image}`

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      ...(noIndex ? [{ name: 'robots', content: 'noindex,follow' }] : []),
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      ...(canonical ? [{ property: 'og:url', content: canonical }] : []),
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: normalizedImage },
      { property: 'og:image:secure_url', content: normalizedImage },
      { property: 'og:image:alt', content: title },
      { name: 'twitter:card', content: 'summary_large_image' },
      ...(canonical ? [{ name: 'twitter:url', content: canonical }] : []),
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: normalizedImage },
    ],
    links: canonical ? [{ rel: 'canonical', href: canonical }] : [],
  }
}
