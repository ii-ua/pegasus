import { MainContainer } from '@/components/container'
import { CareersHero } from '@/modules/careers/CareersHero'
import { CareersListSection } from '@/modules/careers/CareersListSection'

export const CareersPage = () => {
  return (
    <main className="page-bg bg-careers">
      <MainContainer>
        <CareersHero />
        <CareersListSection />
      </MainContainer>
    </main>
  )
}
