import { MainPage } from '@/pages/MainPage'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Ударні дрони Pegasus Arms 25 | Офіційний сайт виробника',
      description:
        'Придбати сертифіковані ударні дрони Pegasus Arms 25 для бойових завдань ЗСУ та Сил оборони. Pegasus Arms — український виробник.',
      canonical: `${SITE_URL}/`,
    })

    return {
      ...baseSeo,
      links: [
        ...baseSeo.links,
        { rel: 'alternate', hrefLang: 'uk', href: `${SITE_URL}/` },
        { rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/en` },
      ],
    }
  },
  component: App,
})

function App() {
  return <MainPage />
}
