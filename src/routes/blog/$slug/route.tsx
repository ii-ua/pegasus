import type { BlogPostResponse, BlogPostSeo } from '@/common/interfaces/posts'
import { DEFAULT_OG_IMAGE } from '@/common/utils/seo'
import { PostPage } from '@/pages/blog/PostPage/PostPage'
import { getPostBySlug, getPublishedPosts } from '@/server/postApi'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

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

const keepOnlyUkTranslations = (post: BlogPostResponse | null | undefined) => {
  if (!post?.translations) return post

  const ukTranslations = post.translations.filter((t) =>
    t.languages_code?.startsWith('uk'),
  )

  if (ukTranslations.length === 0) return post

  return {
    ...post,
    translations: ukTranslations,
  }
}

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

const upsertMeta = (name: string, content?: string, property = false) => {
  if (!content) return
  const selector = property
    ? `meta[property="${name}"]`
    : `meta[name="${name}"]`
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
        lang: 'uk',
        page: 1,
        limit: 3,
      },
    })

    const post = keepOnlyUkTranslations(
      await getPostBySlug({ data: { slug: params.slug, lang: 'uk' } }),
    )
    const sanitizedLastThree = {
      ...lastThreePosts,
      data: (lastThreePosts?.data ?? []).map((item) =>
        keepOnlyUkTranslations(item),
      ),
    }
    return { post, lastThreePosts: sanitizedLastThree }
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post as BlogPostResponse | null | undefined
    const seo = post?.seo
    const ukTranslation =
      findTranslationByLang(post, 'uk') ?? post?.translations?.[0]
    const title =
      ukTranslation?.title?.trim() ||
      seo?.title?.trim() ||
      'Стаття блогу Pegasus Arms'
    const description =
      stripHtml(ukTranslation?.content_short) ||
      seo?.meta_description?.trim() ||
      'Матеріал блогу Pegasus Arms.'
    const keywords = stringifyKeywords(seo)
    const canonical = `${SITE_URL}/blog/${params.slug}`
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
        { rel: 'alternate', hrefLang: 'uk', href: canonical },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { post, lastThreePosts } = Route.useLoaderData()
  const { i18n } = useTranslation()
  const ukTranslation = findTranslationByLang(post, 'uk')
  const defaultTranslation = ukTranslation ?? post?.translations?.[0]
  const [translation, setTranslation] = useState(defaultTranslation)

  useEffect(() => {
    setTranslation(defaultTranslation)
  }, [defaultTranslation])

  useEffect(() => {
    const lang = i18n.language?.split('-')[0] ?? 'uk'
    if (!post || lang !== 'en') {
      setTranslation(defaultTranslation)
      return
    }

    let isCancelled = false
    void (async () => {
      try {
        const postEn = await getPostBySlug({ data: { slug: post.slug_url, lang: 'en' } })
        if (isCancelled) return

        const enTranslation =
          findTranslationByLang(postEn, 'en') ?? postEn?.translations?.[0]
        setTranslation(enTranslation ?? defaultTranslation)
      } catch {
        if (!isCancelled) setTranslation(defaultTranslation)
      }
    })()

    return () => {
      isCancelled = true
    }
  }, [i18n.language, post, defaultTranslation])

  useEffect(() => {
    if (!post || !translation) return

    const translationDescription = stripHtml(translation.content_short)
    const title = translation.title || post.seo?.title?.trim() || ''
    const description =
      translationDescription || post.seo?.meta_description?.trim() || ''
    const image =
      toAssetUrl(post.seo?.og_image || post.cover) ?? DEFAULT_OG_IMAGE

    document.title = title
    upsertMeta('description', description)
    upsertMeta('og:title', title, true)
    upsertMeta('og:description', description, true)
    upsertMeta('og:type', 'article', true)
    upsertMeta('og:site_name', 'Pegasus Arms', true)
    const canonical = `${SITE_URL}/blog/${post.slug_url}`
    upsertMeta('og:url', canonical, true)
    upsertMeta('og:image', image, true)
    upsertMeta('og:image:secure_url', image, true)
    upsertMeta('og:image:alt', title, true)
    upsertMeta('twitter:url', canonical)
    upsertMeta('twitter:title', title)
    upsertMeta('twitter:description', description)
    upsertMeta('twitter:card', image ? 'summary_large_image' : 'summary')
    upsertMeta('twitter:image', image)
  }, [post, translation])

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
