import type { BlogPostResponse, BlogPostSeo } from '@/common/interfaces/posts'
import { PostPage } from '@/pages/blog/PostPage/PostPage'
import { getPostBySlug, getPublishedPosts } from '@/server/postApi'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const SITE_URL = 'https://pegasusarms.com.ua'

const parsePage = (value: unknown): number | undefined => {
  const parsed = Number(value)
  if (!Number.isInteger(parsed) || parsed < 1) return undefined
  return parsed
}

const stringifyKeywords = (seo?: BlogPostSeo): string | undefined => {
  const fromAdditionalFields = seo?.additional_fields as
    | { keywords?: unknown; meta_keywords?: unknown }
    | undefined

  const raw =
    seo?.keywords ??
    seo?.meta_keywords ??
    fromAdditionalFields?.keywords ??
    fromAdditionalFields?.meta_keywords
  if (!raw) return undefined

  if (Array.isArray(raw)) {
    const values = raw.filter(Boolean).map(String)
    return values.length > 0 ? values.join(', ') : undefined
  }

  if (typeof raw === 'string') {
    const trimmed = raw.trim()
    return trimmed.length > 0 ? trimmed : undefined
  }

  return undefined
}

const stripHtml = (html?: string): string => {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

const upsertMeta = (name: string, content?: string, property = false) => {
  if (!content) return
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let meta = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!meta) {
    meta = document.createElement('meta')
    if (property) meta.setAttribute('property', name)
    else meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

export const Route = createFileRoute('/blog/$slug')({
  validateSearch: (search) => ({
    page: parsePage(search.page),
  }),
  loader: async ({ params }) => {
    const lastThreePosts = await getPublishedPosts({
          data: {
            lang: 'all',
            page: 1,
            limit: 3,
          }
        })
  
  const post = await getPostBySlug({ data: { slug: params.slug, lang: 'all' } })
    return {post, lastThreePosts}
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post as BlogPostResponse | null | undefined
    const seo = post?.seo
    const title = seo?.title?.trim() || 'Стаття блогу Pegasus Arms'
    const description =
      seo?.meta_description?.trim() ||
      post?.translations?.[0]?.content_short?.trim() ||
      'Матеріал блогу Pegasus Arms.'
    const keywords = stringifyKeywords(seo)
    const canonical = `${SITE_URL}/blog/${params.slug}`

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
        ...(seo?.no_index ? [{ name: 'robots', content: 'noindex,follow' }] : []),
        { property: 'og:url', content: canonical },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
      ],
      links: [
        { rel: 'canonical', href: canonical },
        { rel: 'alternate', hrefLang: 'uk', href: canonical },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const {post, lastThreePosts} = Route.useLoaderData()
  const { i18n } = useTranslation()
  const translation =
    post?.translations?.find((t: any) => t.languages_code.includes(i18n.language)) ??
    post?.translations?.[0]

  useEffect(() => {
    if (!post || !translation) return

    const isEn = i18n.language.toLowerCase().startsWith('en')
    const translationDescription = stripHtml(translation.content_short)
    const title = isEn
      ? translation.title
      : (post.seo?.title?.trim() || translation.title)
    const description = isEn
      ? (translationDescription || post.seo?.meta_description?.trim() || '')
      : (post.seo?.meta_description?.trim() || translationDescription)

    document.title = title
    upsertMeta('description', description)
    upsertMeta('og:title', title, true)
    upsertMeta('og:description', description, true)
  }, [i18n.language, post, translation])

  if (translation) {
    return (
      <PostPage
        cover={post.cover}
        translation={translation}
        date_created={post.date_created}
        lastThreePosts={lastThreePosts?.data}
      />
    )
  }
  return null
}
