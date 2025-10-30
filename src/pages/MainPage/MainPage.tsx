import { FormSection } from '@/modules/common/FormSection'
import { DevelopSection } from '@/modules/common/DevelopSection'
import { FAQSection } from '@/modules/main/FAQSection'
import { GoalSection } from '@/modules/main/GoalSection'
import { HeroSection } from '@/modules/main/HeroSection'
import { MePegasusSection } from '@/modules/main/MePegasusSection'
import { SystemSection } from '@/modules/main/SystemSection'
import { MainContainer } from '@/components/container'

export const MainPage = () => {
  return (
    <main>
      <MainContainer>
        <HeroSection />
      </MainContainer>

      <div className="page-bg bg-main">
        <MainContainer>
          <MePegasusSection />
          <GoalSection />
          <SystemSection id="systems" />
          <DevelopSection />
          <FAQSection />
          <FormSection />
        </MainContainer>
      </div>
    </main>
  )
}
