import MainContainer from '@/components/container/MainContainer'
import { ArticleOneSection } from '@/modules/blog/ArticleOneSection/ArticleOneSection'
import { ArticleTwoSection } from '@/modules/blog/ArticleTwoSection/ArticleTwoSection'

export const BlogPage = () => {
  return (
    <main className="page-bg">
      <MainContainer>
        <ArticleOneSection />
        <ArticleTwoSection />
      </MainContainer>
    </main>
  )
}
