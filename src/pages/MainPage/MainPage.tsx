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
    </main>
  )
}
