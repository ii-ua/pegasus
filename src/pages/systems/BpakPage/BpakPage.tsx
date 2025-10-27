import { FormSection } from '@/modules/common/FormSection'
import { IntegrationSection } from '@/modules/common/IntegrationSection'
import { AdvantagesSection } from '@/modules/systems/bpak/AdvantagesSection'
import { BpakHero } from '@/modules/systems/bpak/BpakHero'
import { CompositionSection } from '@/modules/systems/bpak/CompositionSection'

export const BpakPage = () => {
  return (
    <main>
      <BpakHero />
      <AdvantagesSection />
      <CompositionSection />
      <IntegrationSection />
      <FormSection />
    </main>
  )
}
