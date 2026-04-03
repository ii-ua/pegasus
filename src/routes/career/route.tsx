import { CareersPage } from '@/pages/career'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Кар’єра в Pegasus Arms | Вакансії в Defense Tech',
      description:
        'Актуальні вакансії Pegasus Arms у сфері defense tech: приєднуйтесь до команди, що розробляє та масштабує українські ударні дронові системи.',
      canonical: `${SITE_URL}/career`,
    })

    return {
      ...baseSeo,
      links: [
        ...baseSeo.links,
        { rel: 'alternate', hrefLang: 'uk', href: `${SITE_URL}/career` },
        { rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/en/career` },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <CareersPage />
}
