import { SectionContainer } from '@/components/container'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import Brave from '@/assets/logos/brave.svg?react'
import DotChain from '@/assets/logos/dot_chain.svg?react'

export const IntegrationSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex justify-center items-center gap-[42px]"
    >
      <div className="flex flex-col w-full">
        <SectionTitle
          title={`${t('systems.bpla.integration.title')}`}
          className="text-left max-w-[600px]"
        />
        <div className="w-full flex justify-end">
          <Paragraph
            text={t('systems.bpla.integration.description')}
            className="max-w-[540px] block"
          />
        </div>
      </div>
      <div>
        <Brave />
        <DotChain />
      </div>
    </SectionContainer>
  )
}
