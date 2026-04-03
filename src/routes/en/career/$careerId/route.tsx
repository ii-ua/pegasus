import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/en/career/$careerId')({
  head: ({ params }) => ({
    ...buildWebsiteSeo({
      title: `Pegasus Arms Job | ${params.careerId}`,
      description: 'Pegasus Arms job vacancy page.',
      canonical: `${SITE_URL}/en/career/${params.careerId}`,
      noIndex: true,
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/en/career/$careerId"!</div>
}
