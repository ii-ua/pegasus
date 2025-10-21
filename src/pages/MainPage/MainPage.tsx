import { FormSection } from '@/modules/FormSection'
import { DevelopSection } from '@/modules/main/DevelopSection'
import { FAQSection } from '@/modules/main/FAQSection'
import { GoalSection } from '@/modules/main/GoalSection'
import { HeroSection } from '@/modules/main/HeroSection'
import { MePegasusSection } from '@/modules/main/MePegasusSection'
import { SystemSection } from '@/modules/main/SystemSection'

export const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <MePegasusSection />
      <GoalSection />
      <SystemSection />
      <DevelopSection />
      <FAQSection />
      <FormSection />
    </main>
  )
}
