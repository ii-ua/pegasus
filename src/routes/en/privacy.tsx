import { PrivacyPage } from '@/pages/PrivacyPage/PrivacyPage'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en/privacy`
const alternateUk = `${SITE_URL}/privacy`

export const Route = createFileRoute('/en/privacy')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Privacy Policy | Pegasus Arms',
      description:
        'Pegasus Arms privacy policy: terms of personal data processing, information storage and user rights.',
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
  return <PrivacyPage />
}
