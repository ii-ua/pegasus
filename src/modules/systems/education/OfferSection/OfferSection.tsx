import { SectionContainer } from '@/components/container'
import { ParagraphsList } from '@/components/lists/ParagraphsList'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const OfferSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex pt-[139px] flex-col justify-center items-left gap-[82px]"
    >
      <div className="flex">
        <SectionTitle
          title={`// ${t('systems.education.offer.title')}`}
          className="text-left w-full flex-2"
        />
        <ul className="flex flex-col gap-5 flex-1/8">
          {t('systems.education.offer.paragraphs', {
            returnObjects: true,
          }).map((offer: string, index: number) => (
            <li key={index}>
              <Paragraph text={offer} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6 items-start">
        <ParagraphsList
          className="flex-1"
          paragraphs={t('systems.education.offer.items', {
            returnObjects: true,
          })}
        />
        <img
          className="flex-1 w-max-[665px] h-max-[579px] object-contain"
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
