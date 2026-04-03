import { createServerFn } from '@tanstack/react-start'

type GetPostsInput = {
  lang?: string
  page: number
  limit: number
}

export const getPublishedPosts = createServerFn({ method: 'GET' })
  .inputValidator((d: GetPostsInput) => d)
  .handler(async ({ data }) => {
    const { page, limit, lang } = data!
    const languageCode = (lang?.trim() || 'all').toLowerCase()
    const translationsFilter =
      languageCode === 'all'
        ? ''
        : `&deep[translations][_filter][languages_code][_starts_with]=${languageCode}`

    const offset = (page - 1) * limit

    const url =
      `https://admin.pegasusarms.com.ua/items/posts` +
      `?fields=*,translations.*` +
      translationsFilter +
      `&filter[status][_eq]=published` +
      `&sort=-date_created` +
      `&limit=${limit}` +
      `&offset=${offset}` +
      `&meta=total_count`;
    
    
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    })

    if (!res.ok) {
      console.error('Failed to fetch posts:', res.statusText)
      return { data: [], total: 0 }
    }

    const json = await res.json()
    return {
      data: json.data,
      total: json.meta?.total_count ?? 0,
    }
  })

type GetPostBySlugInput = {
  slug: string
  lang?: string
}

export const getPostBySlug = createServerFn({ method: 'GET' })
  .inputValidator((d: GetPostBySlugInput) => d)
  .handler(async ({ data }) => {
    const { slug, lang } = data!
    const languageCode = (lang?.trim() || 'all').toLowerCase()
    const translationsFilter =
      languageCode === 'all'
        ? ''
        : `&deep[translations][_filter][languages_code][_starts_with]=${languageCode}`

    const url =
      `https://admin.pegasusarms.com.ua/items/posts` +
      `?filter[status][_eq]=published` +
      `&filter[slug_url][_eq]=${slug}` +
      `&fields=*,translations.*` +
      translationsFilter +
      `&limit=1`

    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch post')
    }

    const json = await res.json()

    // Directus → завжди масив
    return json.data?.[0] ?? null
  })
