import CutCard from '@/assets/shapes/cut-card.svg?react'
export interface StatCardProps {
  value: string
  description: string
  highlight?: boolean
  highlightText?: string
}

export const StatCard = ({
  value,
  description,
  highlight = true,
  highlightText = '+',
}: StatCardProps) => {
  return (
    <div className="max-w-[321px] relative h-fit">
      <CutCard className="w-full h-full" />
      <div className="absolute inset-0 flex flex-col px-[21px] py-[5px] gap-[25px]">
        <span className="font-[Tektur] font-[900] text-[64px] text-[#FDFFFF] w-full text-center uppercase">
          {value}
          {highlight && <span className="text-[#FF6600]">{highlightText}</span>}
        </span>
        <p className="text-[#FDFFFF] font-medium text-[14px] max-w-[193px] uppercase">
          {description}
        </p>
      </div>
    </div>
  )
}
