import { PrimaryButton } from '@/components/buttons/PrimaryButton'
import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { useTranslation } from 'react-i18next'

export const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer as="section" className="pt-[139px] hero-bg h-svh">
      <div className="flex flex-col justify-between h-full">
        <h1
          className="
      font-[Tektur] font-bold text-[128px] text-white
      w-full text-center tracking-widest z-30
    "
        >
          {t('heroMain.title')}
        </h1>
        <div className="flex flex-col max-w-[410px] gap-9">
          <p className="font[300] text-[white] text-[16px] text-left uppercase">
            {t('heroMain.description')}
          </p>
          <PrimaryButton>{t('heroMain.buttons.learnMore')}</PrimaryButton>
        </div>
      </div>
    </SectionContainer>
  )
}
