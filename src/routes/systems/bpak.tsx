import { BpakPage } from '@/pages/systems/BpakPage'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/bpak')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'БпАК Pegasus Arms | Безпілотний авіаційний комплекс',
      description:
        'БпАК від Pegasus Arms: склад комплексу, компоненти, переваги та технічні рішення для підрозділів Сил оборони України.',
      canonical: `${SITE_URL}/systems/bpak`,
    })

    return {
      ...baseSeo,
      links: [
        ...baseSeo.links,
        { rel: 'alternate', hrefLang: 'uk', href: `${SITE_URL}/systems/bpak` },
        {
          rel: 'alternate',
          hrefLang: 'en',
          href: `${SITE_URL}/en/systems/bpak`,
        },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <BpakPage />
}
