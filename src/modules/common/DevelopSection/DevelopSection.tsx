import { ButtonLink } from '@/components/buttons/ButtonLink'
import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const DevelopSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex flex-col gap-[42px] develop-bg"
    >
      <div className="flex flex-col gap-6">
        <SectionTitle
          title={`${t('developMain.title')}`}
          className="text-left max-w-[1000px]"
        />
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-9">
            <p className="font-[300] text-[#FDFFFF] max-w-[665px] text-2xl uppercase text-left">
              {t('developMain.description')}
            </p>
            <ButtonLink to="/career">{t('developMain.button')}</ButtonLink>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
