import type { BlogPostResponse, BlogPostSeo } from '@/common/interfaces/posts'
import { DEFAULT_OG_IMAGE } from '@/common/utils/seo'
import { PostPage } from '@/pages/blog/PostPage/PostPage'
import { getPostBySlug, getPublishedPosts } from '@/server/postApi'
import { createFileRoute } from '@tanstack/react-router'

const SITE_URL = 'https://pegasusarms.com.ua'
const ADMIN_ASSETS_URL = 'https://admin.pegasusarms.com.ua/assets'

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
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const findTranslationByLang = (
  post: BlogPostResponse | null | undefined,
  lang: string,
) => post?.translations?.find((t) => t.languages_code?.startsWith(lang))

const toAssetUrl = (value?: string | null): string | undefined => {
  const normalized = value?.trim()
  if (!normalized) return undefined

  if (normalized.startsWith('http://') || normalized.startsWith('https://')) {
    return normalized
  }

  if (normalized.startsWith('/assets/'))
    return `${ADMIN_ASSETS_URL}${normalized.slice('/assets'.length)}`
  if (normalized.startsWith('/')) return `${SITE_URL}${normalized}`

  return `${ADMIN_ASSETS_URL}/${normalized}`
}

export const Route = createFileRoute('/en/blog/$slug')({
  validateSearch: (search) => ({
    page: parsePage(search.page),
  }),
  loader: async ({ params }) => {
    const lastThreePosts = await getPublishedPosts({
      data: {
        lang: 'all',
        page: 1,
        limit: 3,
      },
    })

    const post = await getPostBySlug({ data: { slug: params.slug, lang: 'en' } })
    return { post, lastThreePosts }
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post as BlogPostResponse | null | undefined
    const seo = post?.seo
    const enTranslation =
      findTranslationByLang(post, 'en') ??
      findTranslationByLang(post, 'uk') ??
      post?.translations?.[0]
    const title =
      enTranslation?.title?.trim() ||
      seo?.title?.trim() ||
      'Pegasus Arms Blog Article'
    const description =
      stripHtml(enTranslation?.content_short) ||
      seo?.meta_description?.trim() ||
      'Pegasus Arms blog article.'
    const keywords = stringifyKeywords(seo)
    const canonical = `${SITE_URL}/en/blog/${params.slug}`
    const alternateUk = `${SITE_URL}/blog/${params.slug}`
    const image = toAssetUrl(seo?.og_image || post?.cover) ?? DEFAULT_OG_IMAGE

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
        ...(seo?.no_index
          ? [{ name: 'robots', content: 'noindex,follow' }]
          : []),
        { property: 'og:type', content: 'article' },
        { property: 'og:site_name', content: 'Pegasus Arms' },
        { property: 'og:url', content: canonical },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        ...(image ? [{ property: 'og:image', content: image }] : []),
        ...(image ? [{ property: 'og:image:secure_url', content: image }] : []),
        ...(image ? [{ property: 'og:image:alt', content: title }] : []),
        { name: 'twitter:url', content: canonical },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        {
          name: 'twitter:card',
          content: image ? 'summary_large_image' : 'summary',
        },
        ...(image ? [{ name: 'twitter:image', content: image }] : []),
      ],
      links: [
        { rel: 'canonical', href: canonical },
        { rel: 'alternate', hrefLang: 'uk', href: alternateUk },
        { rel: 'alternate', hrefLang: 'en', href: canonical },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { post, lastThreePosts } = Route.useLoaderData()
  const enTranslation =
    findTranslationByLang(post, 'en') ??
    findTranslationByLang(post, 'uk') ??
    post?.translations?.[0]

  if (!post || !enTranslation) return null

  return (
    <PostPage
      cover={post.cover}
      translation={enTranslation}
      date_created={post.date_created}
      lastThreePosts={lastThreePosts?.data}
    />
  )
}
