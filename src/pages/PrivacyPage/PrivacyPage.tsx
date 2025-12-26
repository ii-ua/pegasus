import MainContainer from '@/components/containers/MainContainer'
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
