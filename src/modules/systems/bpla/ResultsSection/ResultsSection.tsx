import { SectionContainer } from '@/components/container'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const ResultsSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex flex-col justify-center items-center gap-[42px]"
    >
      <SectionTitle
        title={`${t('systems.bpla.results.title')}`}
        className="text-left w-full"
      />
      <div className="flex gap-6 w-full">
        <ul className="flex flex-1 flex-col gap-6">
          {t('systems.bpla.results.paragraphs', { returnObjects: true }).map(
            (text: string, index: number) => (
              <li key={index}>
                <Paragraph text={text} />
              </li>
            ),
          )}
        </ul>
        <img
          className="flex-1"
          width={666}
          src="/images/systems/bpla/d_bpla_results@1x.jpg"
          alt={t('systems.bpla.results.title')}
          srcSet="/images/systems/bpla/d_bpla_results@1x.jpg 1x, /images/systems/bpla/d_bpla_results@2x.jpg 2x"
          loading="lazy"
          decoding="async"
        />
      </div>
    </SectionContainer>
  )
}
