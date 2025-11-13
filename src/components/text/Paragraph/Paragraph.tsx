import { cn } from '@/common/utils/cn'

export interface ParagraphProps {
  text: string
  className?: string
}
export const Paragraph = ({ text, className }: ParagraphProps) => {
  return (
    <p
      className={cn(
        'font-normal uppercase text-[#FDFFFF] text-[16px] tablet:text-[20px] desktop:text-[24px]',
        className,
      )}
    >
      {text}
    </p>
  )
}
