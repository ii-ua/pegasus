import { cn } from '@/common/utils/cn'

export const MainContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[42px]',
        className,
      )}
    >
      {children}
    </div>
  )
}
