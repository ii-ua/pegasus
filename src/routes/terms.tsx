import { TermsPage } from '@/pages/TermsPage/TermsPage'
import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Умови використання | Pegasus Arms',
      description:
        'Ознайомтесь з умовами використання сайту Pegasus Arms, правами та обов’язками користувачів, а також юридичними положеннями.',
      canonical: `${SITE_URL}/terms`,
    })

    return {
      ...baseSeo,
      links: [
        ...baseSeo.links,
        { rel: 'alternate', hrefLang: 'uk', href: `${SITE_URL}/terms` },
        { rel: 'alternate', hrefLang: 'en', href: `${SITE_URL}/en/terms` },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <TermsPage />
}
