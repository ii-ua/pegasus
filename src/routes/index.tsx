import { MainPage } from '@/pages/MainPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Ударні дрони Pegasus Arms 25 | Офіційний сайт виробника' },
      {
        name: 'description',
        content:
          'Придбати сертифіковані ударні дрони Pegasus Arms 25 для бойових завдань ЗСУ та Сил оборони. Pegasus Arms — український виробник.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://pegasusarms.com.ua/' }],
  }),
  component: App,
})

function App() {
  return <MainPage />
}
