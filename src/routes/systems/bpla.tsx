import { BplaPage } from '@/pages/systems'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/bpla')({
  head: () => ({
    meta: [
      { title: 'Pegasus Arms 25 | Ударний БпЛА' },
      {
        name: 'description',
        content:
          'Pegasus Arms 25 — ударний безпілотний літальний апарат для бойових задач: технічні характеристики, можливості та результати застосування.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/systems/bpla' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <BplaPage />
}
