import { BlogPage } from '@/pages/blog/BlogPage/BlogPage'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { getPublishedPosts } from '@/server/postApi'
import { createFileRoute } from '@tanstack/react-router'

const parsePage = (value: unknown): number | undefined => {
  const parsed = Number(value)
  if (!Number.isInteger(parsed) || parsed < 1) return undefined
  return parsed
}

export const Route = createFileRoute('/en/blog/')({
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
      },
    })
  },
  head: ({ search }) => {
    const page = search?.page ?? 1
    const isFirstPage = page === 1
    const canonical =
      isFirstPage ? `${SITE_URL}/en/blog` : `${SITE_URL}/en/blog?page=${page}`
    const alternateUk =
      isFirstPage ? `${SITE_URL}/blog` : `${SITE_URL}/blog?page=${page}`

    const baseSeo = buildWebsiteSeo({
      title: isFirstPage
        ? 'Pegasus Arms Blog | News and Analytics'
        : `Pegasus Arms Blog — page ${page}`,
      description:
        'Pegasus Arms blog: news, technologies, field results and analysis of strike UAV operations.',
      canonical,
      noIndex: !isFirstPage,
    })

    return {
      ...baseSeo,
      links: [
        ...baseSeo.links,
        { rel: 'alternate', hrefLang: 'uk', href: alternateUk },
        { rel: 'alternate', hrefLang: 'en', href: canonical },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { page: rawPage } = Route.useSearch()
  const { data, total } = Route.useLoaderData()
  const page = rawPage ?? 1

  return <BlogPage posts={data} meta={{ page, total, limit: 5 }} />
}
