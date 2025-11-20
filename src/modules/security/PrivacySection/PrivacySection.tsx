import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const PrivacySection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="relative  pt-[90px] tablet:pt-24 desktop:pt-[122px] overflow-hidden"
    >
      <div className="flex flex-col gap-6 max-w-3xl desktop:max-w-[1011px]">
        <SectionTitle
          title={`${t('privacy.title')}`}
          className="text-left max-w-[600px] text-[30px] desktop:max-w-[760px]"
        />
        <Paragraph variant="light" text={t('privacy.introduction.title')} />
        {t('privacy.introduction.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`introduction-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <Paragraph variant="light" text={t('privacy.definitions.title')} />
        {t('privacy.definitions.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`definitions-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <Paragraph variant="light" text={t('privacy.subject.title')} />
        {t('privacy.subject.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`subject-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}

        <Paragraph variant="light" text={t('privacy.purposes.title')} />
        {t('privacy.purposes.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`purposes-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}

        <Paragraph variant="light" text={t('privacy.categories.title')} />
        {t('privacy.categories.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`categories-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}

        <Paragraph variant="light" text={t('privacy.methods.title')} />
        {t('privacy.methods.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`methods-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}

        <Paragraph variant="light" text={t('privacy.userRIghts.title')} />
        {t('privacy.userRIghts.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`userRIghts-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}

        <Paragraph variant="light" text={t('privacy.cookie.title')} />
        {t('privacy.cookie.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`cookie-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}

        <Paragraph variant="light" text={t('privacy.personalData.title')} />
        {t('privacy.personalData.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`personalData-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}

        <Paragraph
          variant="light"
          text={t('privacy.additionalInformation.title')}
        />
        {t('privacy.additionalInformation.paragraphs', {
          returnObjects: true,
        }).map((paragraph: string, index: number) => (
          <Paragraph
            key={`additionalInformation-${index}`}
            variant="grey"
            text={paragraph}
          />
        ))}

        <Paragraph variant="light" text={t('privacy.additionalTerms.title')} />
        {t('privacy.additionalTerms.paragraphs', {
          returnObjects: true,
        }).map((paragraph: string, index: number) => (
          <Paragraph
            key={`additionalTerms-${index}`}
            variant="grey"
            text={paragraph}
          />
        ))}

        <Paragraph
          className="text-[#939393]"
          variant="light"
          text={t('privacy.lastUpdate')}
        />
      </div>
    </SectionContainer>
  )
}
