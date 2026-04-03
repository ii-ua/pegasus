import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: [
      { title: 'Блог Pegasus Arms | Новини, аналітика, кейси' },
      {
        name: 'description',
        content:
          'Блог Pegasus Arms: новини компанії, кейси бойового застосування, аналітика ринку та матеріали про українські оборонні технології.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/blog' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
