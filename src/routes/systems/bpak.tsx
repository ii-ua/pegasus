import { BpakPage } from '@/pages/systems/BpakPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/bpak')({
  head: () => ({
    meta: [
      { title: 'БпАК Pegasus Arms | Безпілотний авіаційний комплекс' },
      {
        name: 'description',
        content:
          'БпАК від Pegasus Arms: склад комплексу, компоненти, переваги та технічні рішення для підрозділів Сил оборони України.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/systems/bpak' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <BpakPage />
}
