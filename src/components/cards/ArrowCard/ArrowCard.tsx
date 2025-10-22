import Line from '@/assets/icons/line.svg?react'
export interface ArrowCardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  arrowPosition?: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft'
}

const variant = {
  bottomRight: 'bottom-[-69px] right-[-70px]',
  bottomLeft: 'bottom-[-69px] left-[-70px] rotate-90',
  topRight: 'top-[-69px] right-[-70px] rotate-270',
  topLeft: 'top-[-69px] left-[-70px] rotate-180',
}
export const ArrowCard = ({
  title,
  description,
  icon,
  arrowPosition = 'bottomRight',
}: ArrowCardProps) => {
  return (
    <div className="max-w-[448px] p-6 border-2 border-[#FDFFFF] relative">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-[32px] max-w-[300px] uppercase bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent">
          {title}
        </h3>
        {icon}
      </div>
      <p className="bg-[linear-gradient(90.79deg,#F5F5F5_0.08%,#FDFFFF_100%)] bg-clip-text text-transparent font-light uppercase text-[24px]">
        {description}
      </p>
      <Line className={`absolute ${variant[arrowPosition]}`} />
    </div>
  )
}
