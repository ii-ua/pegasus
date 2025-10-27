import { FormSection } from '@/modules/common/FormSection'
import { IntegrationSection } from '@/modules/common/IntegrationSection'
import { AdvantagesSection } from '@/modules/systems/bpak/AdvantagesSection'
import { BpakHero } from '@/modules/systems/bpak/BpakHero'

export const BpakPage = () => {
  return (
    <main>
      <BpakHero />
      <AdvantagesSection />
      <IntegrationSection />
      <FormSection />
    </main>
  )
}
