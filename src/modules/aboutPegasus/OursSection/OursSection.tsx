import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import Reliability from '@/assets/icons/reliability.svg?react'
import Fast from '@/assets/icons/fast.svg?react'
import Stability from '@/assets/icons/stability.svg?react'
import Locked from '@/assets/icons/locked.svg?react'
import { ArrowCard } from '@/components/cards'

export const OursSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex flex-col justify-center items-center"
    >
      <SectionTitle
        title={`${t('oursAboutPegasus.title')}`}
        className="text-left w-full"
      />
      <div className="w-full flex flex-col gap-[60px]">
        <div className="flex flex-col tablet:flex-row gap-4 justify-between w-full">
          <ArrowCard
            title={t('oursAboutPegasus.cards.reliability.title')}
            description={t('oursAboutPegasus.cards.reliability.description')}
            arrowClassName="hidden tablet:block"
            icon={
              <Reliability
                className="w-full h-full"
                preserveAspectRatio="none"
              />
            }
          />
          <ArrowCard
            title={t('oursAboutPegasus.cards.fast.title')}
            description={t('oursAboutPegasus.cards.fast.description')}
            arrowClassName=" max-tablet:rotate-[0deg] max-tablet:left-0 max-tablet:top-[100%]"
            arrowPosition="bottomLeft"
            className="ml-8 tablet:ml-0"
            icon={<Fast className="w-full h-full" preserveAspectRatio="none" />}
          />
        </div>
        <div className="w-full flex justify-center">
          <img src="big_logo.svg" />
        </div>
        <div className="flex flex-col tablet:flex-row gap-4 justify-between w-full">
          <ArrowCard
            title={t('oursAboutPegasus.cards.stability.title')}
            className="ml-8 tablet:ml-0"
            description={t('oursAboutPegasus.cards.stability.description')}
            arrowClassName="max-tablet:rotate-[180deg] max-tablet:top-[-17] max-tablet:right-0"
            arrowPosition="topRight"
            icon={
              <Stability className="w-full h-full" preserveAspectRatio="none" />
            }
          />
          <ArrowCard
            title={t('oursAboutPegasus.cards.locked.title')}
            description={t('oursAboutPegasus.cards.locked.description')}
            arrowClassName="hidden tablet:block"
            arrowPosition="topLeft"
            icon={
              <Locked className="w-full h-full" preserveAspectRatio="none" />
            }
          />
        </div>
      </div>
    </SectionContainer>
  )
}
