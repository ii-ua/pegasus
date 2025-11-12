export interface SectionTitleProps {
  title: string
  className?: string
}
export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <h3
      className={`font-[Univermag] font-normal text-[90px] text-[#FDFFFF] uppercase ${className}`}
    >
      {title}
    </h3>
  )
}
