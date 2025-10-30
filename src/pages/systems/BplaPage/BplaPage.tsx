import { FormSection } from '@/modules/common/FormSection'
import { BplaHero, ResultsSection } from '@/modules/systems/bpla'
import { IntegrationSection } from '@/modules/common/IntegrationSection'
import { MainContainer } from '@/components/container'

export const BplaPage = () => {
  return (
    <main className="page-bg bg-bpla">
      <MainContainer>
        <BplaHero />
        <ResultsSection />
        <IntegrationSection />
        <FormSection />
      </MainContainer>
    </main>
  )
}
