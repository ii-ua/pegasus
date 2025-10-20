import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const MePegasusSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-col max-w-[957px] gap-6">
        <SectionTitle
          title={t('mePegasusMain.title')}
          className="text-center"
        />
        <div className="flex flex-col gap-6">
          {t('mePegasusMain.paragraphs', { returnObjects: true }).map(
            (text: string) => (
              <p
                className="font-[300] text-[#FDFFFF] text-2xl uppercase text-center"
                key={text}
              >
                {text}
              </p>
            ),
          )}
        </div>
        <img width="203" height="203" alt="drone" />
      </div>
    </SectionContainer>
  )
}
