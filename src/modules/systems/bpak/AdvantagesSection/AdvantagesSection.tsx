import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { ScrollTimeline } from '@/components/ScrollTimeline'

export const AdvantagesSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer as="section" className="flex flex-col">
      <SectionTitle
        title={`// ${t('systems.bpak.advantages.title')}`}
        className="text-left max-w-[800px]"
      />
      <ScrollTimeline
        items={t('systems.bpak.advantages.timeLine', { returnObjects: true })}
      />
    </SectionContainer>
  )
}
