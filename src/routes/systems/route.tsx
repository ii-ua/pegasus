import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/systems')({
  head: () => ({
    meta: [
      { title: 'Системи Pegasus Arms | Рішення для Сил оборони' },
      {
        name: 'description',
        content:
          'Огляд систем Pegasus Arms: ударні БпЛА, БпАК та навчальні рішення для ефективного виконання бойових завдань.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/systems' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
