import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const ArticleZeroSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="relative flex pt-[90px] tablet:pt-24 desktop:pt-[122px] overflow-hidden pb-0 tablet:pb-0 desktop:pb-0 gap-6"
    >
      <div className="flex flex-col gap-6 max-w-3xl desktop:max-w-[1011px] border-dashed border-b-2 border-b-[#5A5A5A] pb-6">
        <SectionTitle title={`${t('blog.title')}`} className="text-left" />
        <Paragraph
          variant="grey"
          className="text-[#939393]"
          text={t('blog.articleZero.date')}
        />
        <img
          src="/images/main/system/d_education@1x.avif"
          decoding="async"
          srcSet="/images/main/system/d_education@1x.avif 1x, /images/main/system/d_education@2x.avif 2x"
          alt={t('blog.articleZero.title')}
          className="w-full h-auto"
        />

        <Paragraph
          variant="light"
          className="font-semibold text-[20px] tablet:text-[24px] desktop:text-[32px] "
          text={t('blog.articleZero.title')}
        />
        {t('blog.articleZero.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`articleZero.paragraphs-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <div>
          <ul>
            {t('blog.articleZero.lists.items', { returnObjects: true }).map(
              (paragraph: string, index: number) => (
                <Paragraph
                  key={`access-${index}`}
                  variant="grey"
                  text={paragraph}
                />
              ),
            )}
          </ul>
        </div>
        <div>
          <Paragraph variant="grey" text={t('blog.articleZero.links.title')} />
          <a
            href={t('blog.articleZero.links.link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Paragraph
              variant="grey"
              className="text-[#FF6600] underline"
              text={t('blog.articleZero.links.link')}
            />
          </a>
        </div>
      </div>
    </SectionContainer>
  )
}
