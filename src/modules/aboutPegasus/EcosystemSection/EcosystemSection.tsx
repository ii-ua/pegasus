import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { ScrollTimeline } from '@/components/ScrollTimeline'
const items = [
  {
    title: 'Дослідження та розробки',
    description:
      'Команда інженерів та експертів безперервно вдосконалює рішення та створює нові покоління дронів.',
  },
  {
    title: 'Власне виробництво',
    description:
      'Серійна збірка з врахуванням сучасних передових військових технологій та інновацій.',
  },
  {
    title: 'Навчання операторів БпЛА/БпАК',
    description:
      'Повний курс підготовки з нуля або перепідготовка досвідчених фахівців Pegasus Arms 25.',
  },
  {
    title: 'Перевірка боєм',
    description:
      'Pegasus Arms 25 — ударний дрон з реальним бойовим досвідом на передовій.',
  },
]

export const EcosystemSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer as="section" className="flex pt-[139px] flex-col">
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
