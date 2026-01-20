import { createServerFn } from '@tanstack/react-start'

type GetPostsInput = {
  lang: string
}

export const getPublishedPosts = createServerFn({ method: 'GET' })
  .inputValidator((d: GetPostsInput) => d)
  .handler(async (ctx: { data?: GetPostsInput }) => {
    const url = `https://admin.pegasusarms.com.ua/items/posts?fields=*,translations.*&filter[status][_eq]=published&sort=-date_created`

    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    })

    if (!res.ok) {
      console.error('Failed to fetch posts:', res.statusText)
      return []
    }

    const json = await res.json()
    return json.data
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
