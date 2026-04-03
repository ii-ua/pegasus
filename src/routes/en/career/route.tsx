import { CareersPage } from '@/pages/career'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en/career`
const alternateUk = `${SITE_URL}/career`

export const Route = createFileRoute('/en/career')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Careers at Pegasus Arms | Defense Tech Jobs',
      description:
        'Open Pegasus Arms jobs in defense tech: join the team building and scaling Ukrainian strike drone systems.',
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
  return <CareersPage />
}
