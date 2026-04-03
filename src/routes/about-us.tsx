import { AboutPegasusPage } from '@/pages/AboutPegasusPage/AboutPegasusPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-us')({
  head: () => ({
    meta: [
      { title: 'Про Pegasus Arms | Український виробник ударних БпЛА' },
      {
        name: 'description',
        content:
          'Дізнайтесь більше про Pegasus Arms: команду, підхід до розробки та виробництво ударних безпілотних систем для Сил оборони України.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/about-us' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutPegasusPage />
}
