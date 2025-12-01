import { cn } from '@/common/utils/cn'

export interface ParagraphProps {
  text?: string
  className?: string
  variant?: 'grey' | 'light'
  children?: React.ReactNode
}

const variantStyles = {
  grey: 'text-[#D9D9D9]',
  light: 'text-[#FDFFFF]',
}

export const Paragraph = ({
  text,
  className,
  variant = 'light',
  children,
}: ParagraphProps) => {
  return (
    <p
      className={cn(
        'font-normal text-[16px] tablet:text-[20px] desktop:text-[24px]',
        variantStyles[variant],
        className,
      )}
    >
      {text}
      {children}
    </p>
  )
}
