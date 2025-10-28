import { MainContainer } from '@/components/container'
import { EcosystemSection } from '@/modules/aboutPegasus/EcosystemSection'
import { HeroSection } from '@/modules/aboutPegasus/HeroSection'
import { OursSection } from '@/modules/aboutPegasus/OursSection'
import { DevelopSection } from '@/modules/common/DevelopSection'

export const AboutPegasusPage = () => {
  return (
    <main className="about-page-bg">
      <MainContainer>
        <HeroSection />
        <OursSection />
        <EcosystemSection />
        <DevelopSection />
      </MainContainer>
    </main>
  )
}
