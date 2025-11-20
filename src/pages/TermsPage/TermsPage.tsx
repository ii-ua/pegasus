import MainContainer from '@/components/container/MainContainer'
import { TermsSection } from '@/modules/security/TermsSection/TermsSection'

export const TermsPage = () => {
  return (
    <main className="page-bg">
      <MainContainer>
        <TermsSection />
      </MainContainer>
    </main>
  )
}
