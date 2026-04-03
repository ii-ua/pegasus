import { BplaPage } from '@/pages/systems'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en/systems/bpla`
const alternateUk = `${SITE_URL}/systems/bpla`

export const Route = createFileRoute('/en/systems/bpla')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Pegasus Arms 25 | Strike UAV',
      description:
        'Pegasus Arms 25 is a strike unmanned aerial vehicle for combat missions: technical specs, capabilities and field results.',
      canonical,
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
  return <BplaPage />
}
