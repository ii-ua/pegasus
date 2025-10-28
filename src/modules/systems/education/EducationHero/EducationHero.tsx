import { SectionContainer } from '@/components/container'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const EducationHero = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex pt-[139px] flex-col justify-center items-left gap-[82px]"
    >
      <div className="flex flex-col gap-6 max-w-[1011px] items-start">
        <p
          className="font-light bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent uppercase tex-[32px]
  "
        >
          {t('navMain.systems')} / {t('navMain.education')}
        </p>
        <SectionTitle
          title={`// ${t('systems.education.hero.title')}`}
          className="text-left w-full"
        />
        <Paragraph text={t('systems.education.hero.description')} />
      </div>
      <img
        className="w-full"
        src="/plug.png"
        alt="Bpla pegasus arms 25"
        loading="lazy"
        decoding="async"
      />
    </SectionContainer>
  )
}
