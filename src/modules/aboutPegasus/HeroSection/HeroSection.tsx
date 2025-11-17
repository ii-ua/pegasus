import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex pt-[104px] tablet:pt-[122px] desktop:pt-[166px] flex-col justify-center gap-[54px] tablet:gap-[65px] desktop:gap-[82px] items-center"
    >
      <div className="w-full flex flex-col gap-5 desktop:gap-6">
        <Paragraph
          className="font-light"
          variant="grey"
          text={t('navMain.aboutUs')}
        />
        <SectionTitle
          title={`${t('heroAboutPegasus.title')}`}
          className="text-left w-full"
        />
        <Paragraph
          className="w-full tablet:max-w-[798px] desktop:max-w-[1011px]"
          variant="grey"
          text={t('heroAboutPegasus.paragraphs.0')}
        />
      </div>
      <img src="plug.png" />
      <div className="w-full flex justify-end">
        <Paragraph
          className="w-full tablet:max-w-[798px] desktop:max-w-[1011px]"
          variant="grey"
          text={t('heroAboutPegasus.paragraphs.1')}
        />
      </div>
    </SectionContainer>
  )
}
