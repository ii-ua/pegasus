import { TermsPage } from '@/pages/TermsPage/TermsPage'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en/terms`
const alternateUk = `${SITE_URL}/terms`

export const Route = createFileRoute('/en/terms')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Terms of Use | Pegasus Arms',
      description:
        'Read the Pegasus Arms website terms of use, user rights and obligations, and legal provisions.',
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
  component: RouteComponent,
})

function RouteComponent() {
  return <TermsPage />
}
