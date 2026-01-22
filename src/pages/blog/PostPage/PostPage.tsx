import MainContainer from '@/components/container/MainContainer'
import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { getRouteApi, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Route as BlogRoute } from '@/routes/blog/index'
import { formatDate } from '@/common/utils/dateTime'

export interface PostPageProps {
  cover: string
  translation: {
    id: number
    posts_id: number
    title: string
    languages_code: string
    content_short: string

    content: string
  }
  date_created: string
}

export const PostPage = ({
  cover,
  translation,
  date_created,
}: PostPageProps) => {
  const { page } = getRouteApi('/blog').useSearch();
  const { t } = useTranslation()

  return (
    <main className="page-bg">
      <MainContainer>
        <SectionContainer
          as="section"
          className="relative flex pt-[90px] tablet:pt-24 desktop:pt-[122px] overflow-hidden pb-0 tablet:pb-0 desktop:pb-0 gap-6"
        >
          <div className="flex flex-col gap-6 max-w-3xl desktop:max-w-[1011px]  pb-6">
            <Link
              to="/blog"
              search={{ page }}
              className="decoration-[#FF6600] decoration-1 underline-offset-1 bg-gradient-to-r from-[#CE4906] via-[#FF6600] to-[#FF8B20] bg-clip-text text-transparent mt-2 inline-flex items-center gap-2  font-normal text-[16px] tablet:text-[20px] desktop:text-[24px] 
                          hover:opacity-80 transition"
            >
              <span aria-hidden>←</span>
              {t('blog.back')}
              
            </Link>
            <SectionTitle
              title={translation.title}
              className="text-left text-[36px] leading-none tablet:text-[48px] desktop:text-[72px]"
            />
            <img
              src={`https://admin.pegasusarms.com.ua/assets/${cover}`}
              decoding="async"
              alt={translation.title}
              className="w-full h-auto"
            />
            <Paragraph variant="grey" className="text-[#939393]" text={formatDate(date_created)} />
             <div className='h-[2px] w-full mb-4 desktop:mb-6 bg-[repeating-linear-gradient(to_right,#5A5A5A_0_8px,transparent_8px_13px)]'/>
            <div
              className="prose prose-invert font-normal 
              [&_.MsoNormal_span]:![font-size:inherit]
              [&_.MsoNormal_span]:![line-height:inherit] [&_p]:!m-0 text-[16px] tablet:text-[20px] desktop:text-[24px] max-w-none text-[#d9d9d9] flex flex-col gap-4"
              dangerouslySetInnerHTML={{ __html: translation.content }}
            />
          </div>
        </SectionContainer>
      </MainContainer>
    </main>
  )
}
