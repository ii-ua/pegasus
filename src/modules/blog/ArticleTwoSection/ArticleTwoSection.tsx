import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const ArticleTwoSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="relative  pt-0 tablet:pt-0 desktop:pt-0 overflow-hidden pb-0 tablet:pb-0 desktop:pb-0"
    >
      <div className="flex flex-col gap-6 max-w-3xl desktop:max-w-[1011px]">
        <Paragraph
          variant="grey"
          className="text-[#939393]"
          text={t('blog.articleTwo.date')}
        />
        <img
          src="/images/blog/article2_@1x.jpg"
          srcSet="/images/blog/article2_@1x.jpg 1x, /images/blog/article2_@2x.jpg 2x"
          alt={t('blog.articleTwo.title')}
          className="w-full h-auto"
        />

        <Paragraph
          variant="light"
          className="font-semibold text-[20px] tablet:text-[24px] desktop:text-[32px] "
          text={t('blog.articleTwo.title')}
        />
        {t('blog.articleTwo.paragraphs', { returnObjects: true }).map(
          (paragraph: string, index: number) => (
            <Paragraph
              key={`rticleOne.paragraphs-${index}`}
              variant="grey"
              text={paragraph}
            />
          ),
        )}
      </div>
    </SectionContainer>
  )
}
