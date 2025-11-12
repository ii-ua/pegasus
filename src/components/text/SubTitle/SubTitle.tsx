export interface SubTitleProps {
  title: string
  className?: string
}
export const SubTitle = ({ title, className }: SubTitleProps) => {
  return (
    <h2
      className={`font-[Univermag] font-normal text-[36px] text-[#FDFFFF] uppercase ${className}`}
    >
      {title}
    </h2>
  )
}
