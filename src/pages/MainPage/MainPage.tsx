import { GoalSection } from '@/modules/main/GoalSection'
import { HeroSection } from '@/modules/main/HeroSection'
import { MePegasusSection } from '@/modules/main/MePegasusSection'

export const MainPage = () => {
  return (
    <main>
      <HeroSection />
      <MePegasusSection />
      <GoalSection />
    </main>
  )
}
