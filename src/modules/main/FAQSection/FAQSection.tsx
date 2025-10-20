import { SectionContainer } from '@/components/container'
import { Tabs } from '@/components/select'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const FAQSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex flex-col gap-[42px] develop-bg"
    >
      <div className="flex flex-col gap-6">
        <SectionTitle
          title={`// ${t('faqMain.title')}`}
          className="text-left max-w-[1000px]"
        />
        <Tabs />
      </div>
    </SectionContainer>
  )
}
