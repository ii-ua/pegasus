import { BlogPage } from '@/pages/blog/BlogPage/BlogPage'
import { getPublishedPosts } from '@/server/postApi'
import { createFileRoute } from '@tanstack/react-router'
import { useLocation } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  validateSearch: (search) => ({
    page: Number(search.page ?? 1),
  }),
  loaderDeps: ({ search }) => ({
    page: search.page,
  }),
  loader: async ({ deps }) => {
    return await getPublishedPosts({
      data: {
        lang: 'uk',
        page: deps.page,
        limit: 5,
      }
    })
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { page } = Route.useSearch()
  const { data, total } = Route.useLoaderData()
  const location = useLocation()
  console.log('Blog route location:', location)
  return <BlogPage
    posts={data}
    meta={{ page, total, limit: 5 }}
  />
}
