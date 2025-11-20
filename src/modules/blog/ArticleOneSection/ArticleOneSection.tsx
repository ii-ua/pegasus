import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const ArticleOneSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="relative  pt-[90px] tablet:pt-24 desktop:pt-[122px] overflow-hidden pb-0 tablet:pb-0 desktop:pb-0"
    >
      <div className="flex flex-col gap-6 max-w-3xl desktop:max-w-[1011px] border-dashed border-b-2 border-b-[#5A5A5A] pb-6">
        <SectionTitle title={`${t('blog.title')}`} className="text-left" />
        <Paragraph
          variant="grey"
          className="text-[#939393]"
          text={t('blog.articleOne.date')}
        />
        <img
          src="/images/blog/article1_@1x.jpg"
          srcSet="/images/blog/article1_@1x.jpg 1x, /images/blog/article1_@2x.jpg 2x"
          alt={t('blog.articleOne.title')}
          className="w-full h-auto"
        />

        <Paragraph
          variant="light"
          className="font-semibold text-[20px] tablet:text-[24px] desktop:text-[32px] "
          text={t('blog.articleOne.title')}
        />
        {t('blog.articleOne.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`rticleOne.paragraphs-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
        <div>
          <Paragraph variant="grey" text={t('blog.articleOne.lists.title')} />
          <ul>
            {t('blog.articleOne.lists.items', { returnObjects: true }).map(
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
          <Paragraph variant="grey" text={t('blog.articleOne.links.title')} />
          <a
            href={t('blog.articleOne.links.link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Paragraph
              variant="grey"
              className="text-[#FF6600] underline"
              text={t('blog.articleOne.links.link')}
            />
          </a>
        </div>
      </div>
    </SectionContainer>
  )
}
