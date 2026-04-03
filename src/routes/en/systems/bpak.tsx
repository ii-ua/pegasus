import { BpakPage } from '@/pages/systems/BpakPage'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en/systems/bpak`
const alternateUk = `${SITE_URL}/systems/bpak`

export const Route = createFileRoute('/en/systems/bpak')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Pegasus Arms UAC | Unmanned Aviation Complex',
      description:
        'UAC by Pegasus Arms: complex composition, components, advantages and technical solutions for defense units.',
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
  return <BpakPage />
}
