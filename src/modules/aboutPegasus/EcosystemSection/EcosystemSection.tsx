import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { ScrollTimeline } from '@/components/ScrollTimeline'

export const EcosystemSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer as="section" className="flex flex-col">
      <SectionTitle
        title={`// ${t('ecosystemAboutPegasus.title')}`}
        className="text-left w-[700px]"
      />
      <ScrollTimeline
        items={t('ecosystemAboutPegasus.timeLine', { returnObjects: true })}
      />
    </SectionContainer>
  )
}
