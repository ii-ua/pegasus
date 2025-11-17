import Line from '@/assets/icons/line.svg?react'
import { cn } from '@/common/utils/cn'
import { Paragraph } from '@/components/text'
export interface ArrowCardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  arrowPosition?: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft' | 'none'
  arrowClassName?: string
  className?: string
}

const variant = {
  bottomRight: 'bottom-[-69px] right-[-70px]',
  bottomLeft: 'bottom-[-69px] left-[-70px] rotate-90',
  topRight: 'top-[-69px] right-[-70px] rotate-270',
  topLeft: 'top-[-69px] left-[-70px] rotate-180',
  none: 'hidden',
}
export const ArrowCard = ({
  title,
  description,
  icon,
  arrowPosition = 'bottomRight',
  arrowClassName,
  className,
}: ArrowCardProps) => {
  return (
    <div
      className={cn(
        'max-w-[326px] tablet:max-w-[448px] flex flex-col gap-1.5 tablet:gap-3 desktop:gap-4 p-3 tablet:p-6 border-2 border-[#FDFFFF] relative',
        className,
      )}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-[20px] tablet:text-[24px] desktop:text-[32px] max-w-[300px] uppercase bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="w-[60px] h-[60px] tablet:w-[70px] tablet:h-[70px] desktop:w-[100px] desktop:h-[100px]">
          {icon}
        </div>
      </div>
      <Paragraph variant="light" text={description ?? ''} />
      <Line
        className={cn('absolute', variant[arrowPosition], arrowClassName)}
      />
    </div>
  )
}
