import CutCard from '@/assets/shapes/cut-card.svg?react'
import { cn } from '@/common/utils/cn'
import React from 'react'
export interface StatCardProps {
  value: string | React.ReactNode
  description: string
  highlight?: boolean
  highlightText?: string
  className?: string
  iconClassName?: string
}

export const StatCard = ({
  value,
  description,
  highlight = true,
  highlightText = '+',
  className,
  iconClassName,
}: StatCardProps) => {
  return (
    <div className=" relative h-fit max-w-[430px]">
      <CutCard className="w-full h-full" />
      <div
        className={cn(
          'absolute inset-0 flex flex-col p-4 tablet:p-6  desktop:p-4 justify-between',
          className,
        )}
      >
        <span
          className={cn(
            'font-[Univermag] font-normal text-[64px] tablet:text-[48px] desktop:text-[64px] text-[#FDFFFF] w-full text-center uppercase',
            iconClassName,
          )}
        >
          {value}
          {highlight && <span className="text-[#FF6600]">{highlightText}</span>}
        </span>
        <p className="text-[#D9D9D9] font-normal text-[14px] uppercase">
          {description}
        </p>
      </div>
    </div>
  )
}
