import { BlogPage } from '@/pages/blog/BlogPage/BlogPage'
import { getPublishedPosts } from '@/server/postApi'
import { createFileRoute } from '@tanstack/react-router'

const BLOG_CANONICAL_URL = 'https://pegasusarms.com.ua/blog'

const parsePage = (value: unknown): number | undefined => {
  const parsed = Number(value)
  if (!Number.isInteger(parsed) || parsed < 1) return undefined
  return parsed
}

export const Route = createFileRoute('/blog/')({
  validateSearch: (search) => ({
    page: parsePage(search.page),
  }),
  loaderDeps: ({ search }) => ({
    page: search.page ?? 1,
  }),
  loader: async ({ deps }) => {
    return await getPublishedPosts({
      data: {
        lang: 'all',
        page: deps.page,
        limit: 5,
      }
    })
  },
  head: ({ search }) => {
    const page = search?.page ?? 1
    const isFirstPage = page === 1
    const canonical = isFirstPage ? BLOG_CANONICAL_URL : `${BLOG_CANONICAL_URL}?page=${page}`

    return {
      meta: [
        {
          title: isFirstPage
            ? 'Блог Pegasus Arms | Новини та аналітика'
            : `Блог Pegasus Arms — сторінка ${page}`,
        },
        {
          name: 'description',
          content:
            'Блог Pegasus Arms: новини, технології, результати роботи та аналітика щодо застосування ударних БПЛА.',
        },
        ...(isFirstPage ? [] : [{ name: 'robots', content: 'noindex,follow' }]),
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
  const { page: rawPage } = Route.useSearch()
  const { data, total } = Route.useLoaderData()
  const page = rawPage ?? 1

  return <BlogPage
    posts={data}
    meta={{ page, total, limit: 5 }}
  />
}
