import { SectionContainer } from '@/components/container'
import { ParagraphsList } from '@/components/lists/ParagraphsList'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const OfferSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex flex-col justify-center items-left gap-[24px]"
    >
      <div className="flex flex-col tablet:flex-row gap-6 items-center">
        <SectionTitle
          title={`${t('systems.education.offer.title')}`}
          className="text-left w-full flex-2"
        />
        <ul className="flex flex-col gap-6 flex-1/8">
          {t('systems.education.offer.paragraphs', {
            returnObjects: true,
          }).map((offer: string, index: number) => (
            <li key={index}>
              <Paragraph variant="grey" text={offer} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col tablet:flex-row gap-8 tablet:gap-4 desktop:gap-6 items-start">
        <ParagraphsList
          className="flex-1 order-1 tablet:order-0"
          paragraphs={t('systems.education.offer.items', {
            returnObjects: true,
          })}
        />
        <img
          className="flex-1 w-max-[665px] h-max-[579px] object-contain order-0 tablet:order-1"
          src="/images/systems/education/d_@1x.jpg"
          alt={t('systems.education.offer.title')}
          srcSet="/images/systems/education/d_@1x.jpg 1x, /images/systems/education/d_@2x.jpg 2x"
          loading="lazy"
          decoding="async"
        />
      </div>
    </SectionContainer>
  )
}
