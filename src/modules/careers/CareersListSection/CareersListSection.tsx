import { CareerCard } from '@/components/cards'
import { SectionContainer } from '@/components/container'

export const CareersListSection = () => {
  return (
    <SectionContainer
      as="section"
      className="flex flex-col justify-center items-left gap-[82px]"
    >
      <ul className="flex gap-6">
        <CareerCard location="Kyiv, UA" title="Збиральник БпЛА" />
        <CareerCard location="Kyiv, UA" title="Монтажник РЕО" />
      </ul>
    </SectionContainer>
  )
}
