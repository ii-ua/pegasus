import MainContainer from '@/components/container/MainContainer'
import { FormSection } from '@/modules/common/FormSection'
import { HeroSection } from '@/modules/contacts/HeroSection/HeroSection'

export const ContactsPage = () => {
  return (
    <main className="page-bg bg-contacts">
      <MainContainer>
        <HeroSection />
        <FormSection />
      </MainContainer>
    </main>
  )
}
