import { TermsPage } from '@/pages/TermsPage/TermsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Умови використання | Pegasus Arms' },
      {
        name: 'description',
        content:
          'Ознайомтесь з умовами використання сайту Pegasus Arms, правами та обов’язками користувачів, а також юридичними положеннями.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/terms' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <TermsPage />
}
