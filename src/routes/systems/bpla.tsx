import { BplaPage } from '@/pages/systems'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/bpla')({
  head: () =>
    buildWebsiteSeo({
      title: 'Pegasus Arms 25 | Ударний БпЛА',
      description:
        'Pegasus Arms 25 — ударний безпілотний літальний апарат для бойових задач: технічні характеристики, можливості та результати застосування.',
      canonical: `${SITE_URL}/systems/bpla`,
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return <BplaPage />
}
