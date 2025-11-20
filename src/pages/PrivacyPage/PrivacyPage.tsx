import MainContainer from '@/components/container/MainContainer'
import { PrivacySection } from '@/modules/security/PrivacySection/PrivacySection'

export const PrivacyPage = () => {
  return (
    <main className="page-bg">
      <MainContainer>
        <PrivacySection />
      </MainContainer>
    </main>
  )
}
