import { AboutPegasusPage } from '@/pages/AboutPegasusPage/AboutPegasusPage'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-us')({
  head: () =>
    buildWebsiteSeo({
      title: 'Про Pegasus Arms | Український виробник ударних БпЛА',
      description:
        'Дізнайтесь більше про Pegasus Arms: команду, підхід до розробки та виробництво ударних безпілотних систем для Сил оборони України.',
      canonical: `${SITE_URL}/about-us`,
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutPegasusPage />
}
