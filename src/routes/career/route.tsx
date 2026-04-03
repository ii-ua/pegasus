import { CareersPage } from '@/pages/career'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career')({
  head: () => ({
    meta: [
      { title: 'Кар’єра в Pegasus Arms | Вакансії в Defense Tech' },
      {
        name: 'description',
        content:
          'Актуальні вакансії Pegasus Arms у сфері defense tech: приєднуйтесь до команди, що розробляє та масштабує українські ударні дронові системи.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/career' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <CareersPage />
}
