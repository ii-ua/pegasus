import { MainContainer } from '@/components/container'
import { FormSection } from '@/modules/common/FormSection'
import { EducationHero } from '@/modules/systems/education/EducationHero'
import { OfferSection } from '@/modules/systems/education/OfferSection'

export const EducationPage = () => {
  return (
    <main className="page-bg bg-edu">
      <MainContainer>
        <EducationHero />
        <OfferSection />
        <FormSection />
      </MainContainer>
    </main>
  )
}
