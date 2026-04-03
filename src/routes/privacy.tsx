import { PrivacyPage } from '@/pages/PrivacyPage/PrivacyPage'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  head: () =>
    buildWebsiteSeo({
      title: 'Політика конфіденційності | Pegasus Arms',
      description:
        'Політика конфіденційності Pegasus Arms: умови обробки персональних даних, зберігання інформації та права користувачів сайту.',
      canonical: `${SITE_URL}/privacy`,
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return <PrivacyPage />
}
