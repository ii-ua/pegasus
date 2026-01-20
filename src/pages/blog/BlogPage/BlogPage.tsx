import MainContainer from '@/components/container/MainContainer'
import SectionContainer from '@/components/container/SectionContainer'
import { SectionTitle } from '@/components/text'
import { BlogCard } from '@/modules/blog/BlogCard/BlogCard'
import { BlogCardFirst } from '@/modules/blog/BlogCardFirst/BlogCardFirst'
import { useTranslation } from 'react-i18next'

export interface BlogPageProps {
  posts: {
    id: number
    slug_url: string
    cover: string
    translations: {
      id: number
      posts_id: number
      title: string
      languages_code: string
      content_short: string

      content: string
    }[]
    date_created: string
  }[]
}
export const BlogPage = ({ posts }: BlogPageProps) => {
  const { i18n, t } = useTranslation()
  return (
    <main className="page-bg">
      <MainContainer>
        <SectionContainer
          as="section"
          className="relative flex flex-col pt-[90px] tablet:pt-24 desktop:pt-[122px] overflow-hidden pb-0 tablet:pb-0 desktop:pb-0 gap-6"
        >
          <div className="flex flex-col gap-6 max-w-3xl desktop:max-w-[1011px]  pb-6">
            <SectionTitle title={`${t('blog.title')}`} className="text-left" />
            <article className="flex flex-col gap-6">
              {posts.length > 0 &&
                posts.map((post, index) => {
                  const translation = post.translations.find((t) =>
                    t.languages_code.includes(i18n.language),
                  )
                  if (!translation) return null
                  return (
                    <>
                      <BlogCardFirst
                        key={post.id}
                        cover={`https://admin.pegasusarms.com.ua/assets/${post.cover}`}
                        title={translation.title}
                        description={translation.content_short}
                        date={formatDate(post.date_created)}
                        slug={post.slug_url}
                      />
                      {index < posts.length - 1 && (
                        <div
                          key={post.id}
                          className="border-dashed border-b-2 border-b-[#5A5A5A]"
                        ></div>
                      )}
                    </>
                  )
                })}
            </article>
          </div>
        </SectionContainer>
      </MainContainer>
    </main>
  )
}

const formatDate = (iso: string) => {
  const d = new Date(iso)

  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()

  return `${day}.${month}.${year}`
}
