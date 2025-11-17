import { cn } from '@/common/utils/cn'

export interface SectionTitleProps {
  title: string
  className?: string
}
export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <h3
      className={cn(
        'font-[Univermag] font-normal text-[48px]  tablet:text-[72px] desktop:text-[90px] text-[#FDFFFF] uppercase',
        className,
      )}
    >
      {title}
    </h3>
  )
}
