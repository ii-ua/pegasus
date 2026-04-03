import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career/$careerId')({
  head: ({ params }) => ({
    meta: [
      { title: `Вакансія Pegasus Arms | ${params.careerId}` },
      { name: 'robots', content: 'noindex,follow' },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/career/$careerId"!</div>
}
