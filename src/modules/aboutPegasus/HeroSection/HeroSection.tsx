import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex pt-[90px] tablet:pt-[64px] flex-col justify-center items-center"
    >
      <div className="w-full flex flex-col gap-6">
        <p
          className="font-light bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent uppercase tex-[32px]
"
        >
          {t('navMain.aboutPegasus')}
        </p>
        <SectionTitle
          title={`${t('heroAboutPegasus.title')}`}
          className="text-left w-full"
        />
        <p className="font-light uppercase max-w-[1011px] bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent text-[24px]">
          {t('heroAboutPegasus.paragraphs.0')}
        </p>
      </div>
      <img src="plug.png" className="my-[82px]" />
      <div className="w-full flex justify-end">
        <p className="font-light uppercase max-w-[1011px] bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent text-[24px]">
          {t('heroAboutPegasus.paragraphs.1')}
        </p>
      </div>
    </SectionContainer>
  )
}
