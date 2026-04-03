import { ContactsPage } from '@/pages/ContactsPage/ContactsPage'
import { SITE_URL, buildWebsiteSeo } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

const canonical = `${SITE_URL}/en/contacts`
const alternateUk = `${SITE_URL}/contacts`

export const Route = createFileRoute('/en/contacts')({
  head: () => {
    const baseSeo = buildWebsiteSeo({
      title: 'Pegasus Arms Contacts | Get in Touch with the Manufacturer',
      description:
        'Pegasus Arms contacts for partnership, inquiries and consultations on strike drones, operator training and defense solutions.',
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
  return <ContactsPage />
}
