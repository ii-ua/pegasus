import MainContainer from '@/components/containers/MainContainer'
import { ArticleOneSection } from '@/modules/blog/ArticleOneSection/ArticleOneSection'
import { ArticleTwoSection } from '@/modules/blog/ArticleTwoSection/ArticleTwoSection'
import { ArticleZeroSection } from '@/modules/blog/ArticleZeroSection/ArticleZeroSection'

export const BlogPage = () => {
  return (
    <main className="page-bg">
      <MainContainer>
        <ArticleZeroSection />
        <ArticleOneSection />
        <ArticleTwoSection />
      </MainContainer>
    </main>
  )
}
