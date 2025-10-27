import { FormSection } from '@/modules/FormSection'
import { BplaHero, ResultsSection } from '@/modules/systems/bpla'
import { IntegrationSection } from '@/modules/systems/bpla/IntegrationSection'

export const BplaPage = () => {
  return (
    <main>
      <BplaHero />
      <ResultsSection />
      <IntegrationSection />
      <FormSection />
    </main>
  )
}
