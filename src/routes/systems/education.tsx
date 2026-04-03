import { EducationPage } from '@/pages/systems'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/education')({
  head: () => ({
    meta: [
      { title: 'Навчання операторів БпЛА | Pegasus Arms' },
      {
        name: 'description',
        content:
          'Навчання операторів БпЛА від Pegasus Arms: програми підготовки, практичні заняття та отримання бойових навичок роботи з ударними системами.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/systems/education' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <EducationPage />
}
