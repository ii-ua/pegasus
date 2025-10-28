import { SectionContainer } from '@/components/container'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const CareersHero = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex pt-[139px] flex-col justify-center items-left gap-[82px]"
    >
      <div className="flex flex-col gap-6 max-w-[1051px] items-start">
        <p
          className="font-light bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent uppercase tex-[32px]
  "
        >
          {t('navMain.career')}
        </p>
        <SectionTitle
          title={`// ${t('career.title')}`}
          className="text-left w-full"
        />
        <ul className="flex flex-col gap-5">
          {t('career.paragraphs', { returnObjects: true }).map(
            (paragraph: string, index: number) => (
              <li key={index}>
                <Paragraph text={paragraph} />
              </li>
            ),
          )}
        </ul>
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
