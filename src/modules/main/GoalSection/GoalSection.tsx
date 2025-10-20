import { StatCard } from '@/components/cards'
import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const GoalSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer as="section" className="flex flex-col gap-[42px]">
      <div className="flex flex-col gap-6">
        <SectionTitle
          title={`// ${t('goalMain.title')}`}
          className="text-left"
        />
        <div className="flex flex-col gap-6 items-end">
          {t('goalMain.paragraphs', { returnObjects: true }).map(
            (text: string) => (
              <p
                className="font-[300] text-[#FDFFFF] max-w-[665px] text-2xl uppercase text-left"
                key={text}
              >
                {text}
              </p>
            ),
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-6">
          <StatCard
            value={t('goalMain.cards.bpla.title')}
            description={t('goalMain.cards.bpla.description')}
          />
          <StatCard
            value={t('goalMain.cards.defence.title')}
            description={t('goalMain.cards.defence.description')}
          />
        </div>
        <StatCard
          value={t('goalMain.cards.team.title')}
          description={t('goalMain.cards.team.description')}
        />
      </div>
    </SectionContainer>
  )
}
