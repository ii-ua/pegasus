import { PrivacyPage } from '@/pages/PrivacyPage/PrivacyPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Політика конфіденційності | Pegasus Arms' },
      {
        name: 'description',
        content:
          'Політика конфіденційності Pegasus Arms: умови обробки персональних даних, зберігання інформації та права користувачів сайту.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/privacy' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <PrivacyPage />
}
