import { BplaPage } from '@/pages/systems'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/bpla')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Pegasus Arms 25 | Ударний БпЛА',
      description:
        'Pegasus Arms 25 — ударний безпілотний літальний апарат для бойових задач: технічні характеристики, можливості та результати застосування.',
      canonical: `${SITE_URL}/systems/bpla`,
    })

    return {
      ...baseSeo,
      links: [
        ...baseSeo.links,
        { rel: 'alternate', hrefLang: 'uk', href: `${SITE_URL}/systems/bpla` },
        {
          rel: 'alternate',
          hrefLang: 'en',
          href: `${SITE_URL}/en/systems/bpla`,
        },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <BplaPage />
}
