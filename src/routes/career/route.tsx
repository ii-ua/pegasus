import { CareersPage } from '@/pages/career'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career')({
  head: () =>
    buildWebsiteSeo({
      title: 'Кар’єра в Pegasus Arms | Вакансії в Defense Tech',
      description:
        'Актуальні вакансії Pegasus Arms у сфері defense tech: приєднуйтесь до команди, що розробляє та масштабує українські ударні дронові системи.',
      canonical: `${SITE_URL}/career`,
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return <CareersPage />
}
