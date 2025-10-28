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
        title={`// ${t('oursAboutPegasus.title')}`}
        className="text-left w-full"
      />
      <div className="w-full mt-[42px]">
        <div className="flex justify-between w-full">
          <ArrowCard
            title={t('oursAboutPegasus.cards.reliability.title')}
            description={t('oursAboutPegasus.cards.reliability.description')}
            icon={<Reliability width={100} height={100} />}
          />
          <ArrowCard
            title={t('oursAboutPegasus.cards.fast.title')}
            description={t('oursAboutPegasus.cards.fast.description')}
            arrowPosition="bottomLeft"
            icon={<Fast width={100} height={100} />}
          />
        </div>
        <div className="w-full flex justify-center">
          <img src="big_logo.svg" />
        </div>
        <div className="flex justify-between w-full">
          <ArrowCard
            title={t('oursAboutPegasus.cards.stability.title')}
            description={t('oursAboutPegasus.cards.stability.description')}
            arrowPosition="topRight"
            icon={<Stability width={100} height={100} />}
          />
          <ArrowCard
            title={t('oursAboutPegasus.cards.locked.title')}
            description={t('oursAboutPegasus.cards.locked.description')}
            arrowPosition="topLeft"
            icon={<Locked width={100} height={100} />}
          />
        </div>
      </div>
    </SectionContainer>
  )
}
