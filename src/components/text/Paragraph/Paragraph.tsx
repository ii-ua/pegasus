import { cn } from '@/common/utils/cn'

export interface ParagraphProps {
  text: string
  className?: string
  variant?: 'grey' | 'light'
}

const variantStyles = {
  grey: 'text-[#D9D9D9]',
  light: 'text-[#FDFFFF]',
}

export const Paragraph = ({
  text,
  className,
  variant = 'light',
}: ParagraphProps) => {
  return (
    <p
      className={cn(
        'font-normal text-[14px] first-letter-cap tablet:text-[16px] desktop:text-[20px]',
        variantStyles[variant],
        className,
      )}
    >
      {text}
    </p>
  )
}
