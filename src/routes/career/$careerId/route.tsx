import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career/$careerId')({
  head: ({ params }) => ({
    ...buildWebsiteSeo({
      title: `Вакансія Pegasus Arms | ${params.careerId}`,
      description: 'Сторінка вакансії Pegasus Arms.',
      canonical: `${SITE_URL}/career/${params.careerId}`,
      noIndex: true,
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/career/$careerId"!</div>
}
