import { SectionContainer } from '@/components/container'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const BpakHero = () => {
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
          {t('navMain.systems')} / {t('navMain.bpak')}
        </p>
        <SectionTitle
          title={`// ${t('systems.bpak.hero.title')}`}
          className="text-left w-full"
        />
        <Paragraph text={t('systems.bpak.hero.paragraphs.0')} />
      </div>
      <img
        className="w-full"
        src="/plug.png"
        alt="Bpla pegasus arms 25"
        loading="lazy"
        decoding="async"
      />
      <div className="w-full flex flex-col justify-end gap-5 items-end">
        <Paragraph
          className="max-w-[1011px]"
          text={t('systems.bpak.hero.paragraphs.1')}
        />
      </div>
    </SectionContainer>
  )
}
