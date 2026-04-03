import { buildWebsiteSeo, SITE_URL } from '@/common/utils/seo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/')({
  head: () =>
    buildWebsiteSeo({
      title: 'Системи Pegasus Arms | Рішення для Сил оборони',
      description:
        'Огляд систем Pegasus Arms: ударні БпЛА, БпАК та навчальні рішення для ефективного виконання бойових завдань.',
      canonical: `${SITE_URL}/systems`,
    }),
  component: () => null,
})
