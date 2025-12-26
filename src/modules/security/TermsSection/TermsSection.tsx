import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const TermsSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="relative  pt-[90px] tablet:pt-24 desktop:pt-[122px] overflow-hidden"
    >
      <div className="flex flex-col gap-6 max-w-3xl desktop:max-w-[1011px]">
        <SectionTitle
          title={`${t('terms.title')}`}
          className="text-left max-w-[600px] text-[36px] desktop:max-w-[760px]"
        />
        <Paragraph variant="light" text={t('terms.access.title')} />
        {t('terms.access.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`access-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <Paragraph variant="light" text={t('terms.contents.title')} />
        {t('terms.contents.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`contents-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <Paragraph variant="light" text={t('terms.accessWebsite.title')} />
        {t('terms.accessWebsite.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`accessWebsite-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <Paragraph variant="light" text={t('terms.relationship.title')} />
        {t('terms.relationship.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`relationship-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <Paragraph variant="light" text={t('terms.limitation.title')} />
        {t('terms.limitation.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`limitation-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <Paragraph variant="light" text={t('terms.intellectual.title')} />
        {t('terms.intellectual.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`intellectual-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <Paragraph variant="light" text={t('terms.changesTerms.title')} />
        {t('terms.changesTerms.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`changesTerms-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}

        <Paragraph
          className="text-[#939393]"
          variant="light"
          text={t('terms.lastUpdate')}
        />
      </div>
    </SectionContainer>
  )
}
