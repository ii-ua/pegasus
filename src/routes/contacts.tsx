import { ContactsPage } from '@/pages/ContactsPage/ContactsPage'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacts')({
  head: () =>
    buildWebsiteSeo({
      title: 'Контакти Pegasus Arms | Зв’язок з виробником',
      description:
        'Контакти Pegasus Arms для співпраці, запитів та консультацій щодо ударних дронів, навчання операторів і оборонних рішень.',
      canonical: `${SITE_URL}/contacts`,
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return <ContactsPage />
}
