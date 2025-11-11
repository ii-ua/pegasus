import { ButtonLink } from '@/components/buttons/ButtonLink'
import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { Paragraph } from '@/components/text'
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
        <div className="flex flex-col max-w-[465px] gap-9">
          <Paragraph
            className="font-normal text-[20px] text-[#D9D9D9] text-left"
            text={t('heroMain.description')}
          />

          <ButtonLink to="/systems/bpla">
            {t('heroMain.buttons.learnMore')}
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  )
}
