import { BlogPage } from '@/pages/blog/BlogPage/BlogPage'
import { getPublishedPosts } from '@/server/postApi'
import { createFileRoute } from '@tanstack/react-router'
import { useLocation } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
  loader: async () => {
    return await getPublishedPosts({ data: { lang: 'uk' } })
  },
})

function RouteComponent() {
  const location = useLocation()
  console.log('Blog route location:', location)
  const posts = Route.useLoaderData()
  return <BlogPage posts={posts} />
}
