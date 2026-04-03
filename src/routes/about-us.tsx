import { AboutPegasusPage } from '@/pages/AboutPegasusPage/AboutPegasusPage'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-us')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Про Pegasus Arms | Український виробник ударних БпЛА',
      description:
        'Дізнайтесь більше про Pegasus Arms: команду, підхід до розробки та виробництво ударних безпілотних систем для Сил оборони України.',
      canonical: `${SITE_URL}/about-us`,
    })

    return {
      ...baseSeo,
      links: [
        ...baseSeo.links,
        { rel: 'alternate', hrefLang: 'uk', href: `${SITE_URL}/about-us` },
        { rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/en/about-us` },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutPegasusPage />
}
