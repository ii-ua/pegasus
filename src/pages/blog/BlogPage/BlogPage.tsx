import { IPaginationMeta } from '@/common/interfaces/common'
import { BlogPostResponse } from '@/common/interfaces/posts'
import { formatDate } from '@/common/utils/dateTime'
import MainContainer from '@/components/container/MainContainer'
import SectionContainer from '@/components/container/SectionContainer'
import SocialIcons from '@/components/lists/SocialIcons'
import Pagination from '@/components/Pagination'
import { Paragraph, SectionTitle } from '@/components/text'
import { BlogCardFirst } from '@/modules/blog/BlogCardFirst/BlogCardFirst'
import { getRouteApi } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export interface BlogPageProps {
  posts: BlogPostResponse[],
  meta: IPaginationMeta;
};

export const BlogPage = ({ posts, meta }: BlogPageProps) => {
  const { i18n, t } = useTranslation();
  const route = getRouteApi('/blog/');

  const navigate = route.useNavigate();

  return (
    <main className="page-bg">
      <MainContainer>
        <SectionContainer
          as="section"
          className="relative flex flex-col pt-[90px] tablet:pt-24 desktop:pt-[122px] overflow-hidden pb-0 tablet:pb-0 desktop:pb-0 gap-6"
        >
          <div className="flex flex-col gap-6 w-[calc(100%-140px)] tablet:max-w-[788px] desktop:max-w-[1011px]  pb-6">
            <SectionTitle title={`${t('blog.title')}`} className="text-left" />
            <article className="flex flex-col gap-6">
              {posts.length > 0 &&
                posts.map((post, index) => {
                  const translation = post.translations.find((t) =>
                    t.languages_code.includes(i18n.language),
                  )
                  if (!translation) return null
                  return (
                    <div key={post.slug_url}>
                      <BlogCardFirst
                        cover={`https://admin.pegasusarms.com.ua/assets/${post.cover}`}
                        title={translation.title}
                        description={translation.content_short}
                        date={formatDate(post.date_created)}
                        slug={post.slug_url}
                      />
                      {index < posts.length - 1 && (
                        <div className='h-[2px] w-full mb-4 desktop:mb-6 mt-5 tablet:mt-4 desktop:mt-6 bg-[repeating-linear-gradient(to_right,#5A5A5A_0_8px,transparent_8px_13px)]'/>
                      )}
                    </div>
                  )
                })}
            </article>
          </div>
          <div className='absolute right-0 top-[179px] tablet:top-[256px] desktop:top-[311px] w-[100px] tablet:w-[255px]' >
            <div className='h-[2px] w-full mb-4 desktop:mb-6 bg-[repeating-linear-gradient(to_right,#5A5A5A_0_8px,transparent_8px_13px)]'/>
            <Paragraph
              className="mb-4 desktop:mb-6 text-[16px] tablet:text-[20px] desktop:text-[24px]"
            >
              {t('blog.socLinks')}
            </Paragraph>
            <SocialIcons className='grid col-2grid grid-cols-2 w-[96px] tablet:w-fit tablet:flex' />
          </div>
        </SectionContainer>
        <Pagination
          page={meta.page}
          total={meta.total}
          limit={meta.limit}
          onPageChange={(p) =>
            navigate({
              search: () => ({ page: p, limit: meta.limit }),
            })
          }
        />
      </MainContainer>
    </main>
  )
}
