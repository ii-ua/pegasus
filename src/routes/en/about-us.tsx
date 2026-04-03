import { AboutPegasusPage } from '@/pages/AboutPegasusPage/AboutPegasusPage'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en/about-us`
const alternateUk = `${SITE_URL}/about-us`

export const Route = createFileRoute('/en/about-us')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'About Pegasus Arms | Ukrainian Strike UAV Manufacturer',
      description:
        'Learn more about Pegasus Arms: team, engineering approach and production of strike unmanned systems for Ukraine’s Defense Forces.',
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
  return <AboutPegasusPage />
}
