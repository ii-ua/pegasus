import { MainContainer } from '@/components/container'
import { FormSection } from '@/modules/common/FormSection'
import { HeroSection } from '@/modules/contacts/HeroSection/HeroSection'

export const ContactsPage = () => {
  return (
    <main className="page-bg bg-about">
      <MainContainer>
        <HeroSection />
        <FormSection />
      </MainContainer>
    </main>
  )
}
