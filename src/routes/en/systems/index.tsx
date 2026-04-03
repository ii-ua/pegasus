import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en/systems`
const alternateUk = `${SITE_URL}/systems`

export const Route = createFileRoute('/en/systems/')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Pegasus Arms Systems | Solutions for Defense Forces',
      description:
        'Overview of Pegasus Arms systems: strike UAVs, unmanned aviation complexes and operator training solutions.',
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
  component: () => null,
})
