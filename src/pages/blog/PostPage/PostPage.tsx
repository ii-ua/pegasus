import MainContainer from '@/components/container/MainContainer'
import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { getRouteApi, Link, useLocation } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { formatDate } from '@/common/utils/dateTime'
import { BlogPostResponse, BlogPostTranslation } from '@/common/interfaces/posts'
import BlogInterestingCard from '@/modules/blog/BlogInterestingCard'
import { ButtonPrimary } from '@/components/buttons/ButtonPrimary'

export interface PostPageProps {
  cover: string;
  translation: BlogPostTranslation;
  date_created: string;
  lastThreePosts?: BlogPostResponse[];
}

export const PostPage = ({
  cover,
  translation,
  date_created,
  lastThreePosts
}: PostPageProps) => {
  const route = getRouteApi('/blog');
  const navigate = route.useNavigate()
  const location = useLocation()
  const pageFromState = Number((location.state as { blogPage?: number } | undefined)?.blogPage)
  const page = Number.isInteger(pageFromState) && pageFromState > 1 ? pageFromState : 1
  const { t } = useTranslation();

  const onInterestingPost = (slug: string) => {
    void navigate({
      to: '$slug',
      params: {
        slug: slug,
      },
      state: true,
    })
  }

  return (
    <main className="page-bg">
      <MainContainer>
        <SectionContainer
          as="section"
          className="relative  pt-[90px] tablet:pt-24 desktop:pt-[122px] overflow-hidden pb-[54px] tablet:pb-[64px] desktop:pb-[112px]"
        >
          <div className="flex flex-col gap-6 max-w-3xl desktop:max-w-[1011px]  pb-6">
            <Link
              to="/blog"
              search={page && page > 1 ? { page } : {}}
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
          <SectionTitle
              title={t('blog.interested')}
              className="mt-[54px] tablet:mt-[64px] desktop:mt-[82px] text-left text-[36px] leading-none tablet:text-[48px] desktop:text-[72px]"
          />
          <div className='flex flex-col tablet:flex-row gap-4 desktop:gap-6 mt-8 tablet:mt-[42px] max-w-3xl tablet:max-w-none'>
            {lastThreePosts?.map(post => <BlogInterestingCard key={post.id} cover={post.cover} translations={post.translations} onClick={() => onInterestingPost(post.slug_url)} />)}
          </div>
          <div className="flex justify-center mt-7 tablet:mt-[42px] desktop:mt-[38px]">
            <ButtonPrimary to='/blog'>
              {t('blog.all')}
            </ButtonPrimary>
          </div>
        </SectionContainer>
      </MainContainer>
    </main>
  )
}
