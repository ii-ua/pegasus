import MainContainer from '@/components/container/MainContainer'
import { CareersHero } from '@/modules/careers/CareersHero'
import { FormSection } from '@/modules/common/FormSection'
// import { CareersListSection } from '@/modules/careers/CareersListSection'

export const CareersPage = () => {
  return (
    <main className="page-bg bg-careers">
      <MainContainer>
        <CareersHero />
        {/* <CareersListSection /> */}
        <FormSection summary/>
      </MainContainer>
    </main>
  )
}
