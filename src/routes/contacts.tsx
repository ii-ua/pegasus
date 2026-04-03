import { ContactsPage } from '@/pages/ContactsPage/ContactsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacts')({
  head: () => ({
    meta: [
      { title: 'Контакти Pegasus Arms | Зв’язок з виробником' },
      {
        name: 'description',
        content:
          'Контакти Pegasus Arms для співпраці, запитів та консультацій щодо ударних дронів, навчання операторів і оборонних рішень.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/contacts' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <ContactsPage />
}
