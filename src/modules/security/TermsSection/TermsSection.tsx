import SectionContainer from '@/components/container/SectionContainer'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const TermsSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="relative pt-[90px] tablet:pt-24 desktop:pt-[122px] overflow-hidden"
    >
      <SectionTitle
        title={`${t('terms.title')}`}
        className="text-left max-w-[600px] desktop:max-w-[760px]"
      />
    </SectionContainer>
  )
}
