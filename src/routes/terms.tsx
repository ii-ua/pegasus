import { TermsPage } from '@/pages/TermsPage/TermsPage'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  head: () =>
    buildWebsiteSeo({
      title: 'Умови використання | Pegasus Arms',
      description:
        'Ознайомтесь з умовами використання сайту Pegasus Arms, правами та обов’язками користувачів, а також юридичними положеннями.',
      canonical: `${SITE_URL}/terms`,
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return <TermsPage />
}
