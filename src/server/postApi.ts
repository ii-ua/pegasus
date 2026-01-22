import { createServerFn } from '@tanstack/react-start'

type GetPostsInput = {
  lang: string
  page: number
  limit: number
}

export const getPublishedPosts = createServerFn({ method: 'GET' })
  .inputValidator((d: GetPostsInput) => d)
  .handler(async ({ data }) => {
    const { page, limit } = data!

    const offset = (page - 1) * limit

    const url =
      `https://admin.pegasusarms.com.ua/items/posts` +
      `?fields=*,translations.*` +
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
}

export const getPostBySlug = createServerFn({ method: 'GET' })
  .inputValidator((d: GetPostBySlugInput) => d)
  .handler(async ({ data }) => {
    const { slug } = data!

    const url =
      `https://admin.pegasusarms.com.ua/items/posts` +
      `?filter[status][_eq]=published` +
      `&filter[slug_url][_eq]=${slug}` +
      `&fields=*,translations.*` +
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
