import CutCard from '@/assets/shapes/cut-card.svg?react'
import { cn } from '@/common/utils/cn'
import { ClientOnly } from '@tanstack/react-router'
import React from 'react'
export interface StatCardProps {
  value: string | React.ReactNode
  description: string
  highlight?: boolean
  highlightText?: string
  className?: string
  iconClassName?: string
  descriptionClassName?: string
}

export const StatCard = ({
  value,
  description,
  highlight = true,
  highlightText = '+',
  className,
  iconClassName,
  descriptionClassName,
}: StatCardProps) => {
  return (
    <div className=" relative h-fit max-w-[430px] tablet:max-w-[255px] desktop:max-w-[321px]">
      <ClientOnly>
        <CutCard className="w-full h-full" />
      </ClientOnly>

      <div
        className={cn(
          'absolute inset-0 flex flex-col p-4 gap-3.5 justify-between sm:justify-start',
          className,
        )}
      >
        <span
          className={cn(
            'font-[Namu] font-bold text-[64px]  tablet:text-[42px] desktop:text-[64px] text-[#FDFFFF] w-full text-center uppercase',
            iconClassName,
          )}
        >
          {value}
          {highlight && <span className="text-[#FF6600]">{highlightText}</span>}
        </span>
        <p
          className={cn(
            'text-[#D9D9D9] text-[14px] tablet:text-[16px] font-normal uppercase text-center',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
