import { EducationPage } from '@/pages/systems'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en/systems/education`
const alternateUk = `${SITE_URL}/systems/education`

export const Route = createFileRoute('/en/systems/education')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'UAV Operator Training | Pegasus Arms',
      description:
        'Pegasus Arms UAV operator training: programs, practical sessions and combat-oriented strike system skills.',
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
  return <EducationPage />
}
