import { PostPage } from '@/pages/blog/PostPage/PostPage'
import { getPostBySlug, getPublishedPosts } from '@/server/postApi'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/blog/$slug')({
  validateSearch: (search) => ({
    page: Number(search.page ?? 1),
  }),
  loader: async ({ params }) => {
    const lastThreePosts = await getPublishedPosts({
          data: {
            lang: 'uk',
            page: 1,
            limit: 3,
          }
        })
  
  const post = await getPostBySlug({ data: { slug: params.slug } })
    return {post, lastThreePosts}
  },
  component: RouteComponent,
})

function RouteComponent() {
  const {post, lastThreePosts} = Route.useLoaderData()
  const { i18n } = useTranslation()
  const translation = post?.translations?.find((t: any) =>
    t.languages_code.includes(i18n.language),
  )

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
