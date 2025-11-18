import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { ParagraphsList } from '@/components/lists/ParagraphsList'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const CompositionSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer as="section" className="flex  gap-6 flex-col">
      <div className="flex flex-col tablet:flex-row gap-6">
        <SectionTitle
          title={`${t('systems.bpak.composition.title')}`}
          className="text-left max-w-[852px]"
        />
        <div className="flex flex-col flex-1/3 justify-center gap-5">
          {t('systems.bpak.composition.paragraphs', {
            returnObjects: true,
          }).map((paragraph: string, index: number) => (
            <Paragraph key={index} variant="grey" text={paragraph} />
          ))}
        </div>
      </div>
      <div className="flex flex-col tablet:flex-row gap-6 items-start">
        <ParagraphsList
          className="flex-1 order-1 tablet:order-0"
          paragraphs={t('systems.bpak.composition.items', {
            returnObjects: true,
          })}
        />
        <img
          className="flex-1 w-max-[665px] h-max-[452px] object-contain order-0 tablet:order-1"
          src="/images/systems/bpka/d_bpka_composition@1x.jpg"
          alt={t('systems.bpak.composition.title')}
          srcSet="/images/systems/bpka/d_bpka_composition@1x.jpg 1x, /images/systems/bpka/d_bpka_composition@2x.jpg 2x"
          loading="lazy"
          decoding="async"
        />
      </div>
    </SectionContainer>
  )
}
