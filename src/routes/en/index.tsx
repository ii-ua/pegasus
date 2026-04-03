import { MainPage } from '@/pages/MainPage'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en`
const alternateUk = `${SITE_URL}/`

export const Route = createFileRoute('/en/')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Pegasus Arms 25 Strike Drones | Official Manufacturer Website',
      description:
        'Buy certified Pegasus Arms 25 strike drones for combat tasks of the Armed Forces of Ukraine and the Defense Forces.',
      canonical,
    })

    return {
      ...baseSeo,
      links: [
        ...baseSeo.links,
        { rel: 'alternate', hrefLang: 'uk', href: alternateUk },
        { rel: 'alternate', hrefLang: 'en', href: canonical },
      ],
    }
  },
  component: App,
})

function App() {
  return <MainPage />
}
