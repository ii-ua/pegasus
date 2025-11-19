import MainContainer from '@/components/container/MainContainer'
import { EcosystemSection } from '@/modules/aboutPegasus/EcosystemSection'
import { HeroSection } from '@/modules/aboutPegasus/HeroSection'
import { OursSection } from '@/modules/aboutPegasus/OursSection'
import { DevelopSection } from '@/modules/common/DevelopSection'

export const AboutPegasusPage = () => {
  return (
    <main className="page-bg bg-about">
      <MainContainer>
        <HeroSection />
        <OursSection />
        <EcosystemSection />
        <DevelopSection />
      </MainContainer>
    </main>
  )
}
