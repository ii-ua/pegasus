import MainContainer from '@/components/container/MainContainer'
import { PrivacySection } from '@/modules/security/PrivacySection/PrivacySection'

export const PrivacyPage = () => {
  return (
    <main className="page-bg bg-privacy">
      <MainContainer>
        <PrivacySection />
      </MainContainer>
    </main>
  )
}
