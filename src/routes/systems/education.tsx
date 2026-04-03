import { EducationPage } from '@/pages/systems'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/education')({
  head: () =>
    buildWebsiteSeo({
      title: 'Навчання операторів БпЛА | Pegasus Arms',
      description:
        'Навчання операторів БпЛА від Pegasus Arms: програми підготовки, практичні заняття та отримання бойових навичок роботи з ударними системами.',
      canonical: `${SITE_URL}/systems/education`,
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return <EducationPage />
}
