import { cn } from '@/common/utils/cn'

export interface ParagraphProps {
  text: string
  className?: string
}
export const Paragraph = ({ text, className }: ParagraphProps) => {
  return (
    <p
      className={cn(
        'font-light uppercase bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent text-[24px]',
        className,
      )}
    >
      {text}
    </p>
  )
}
