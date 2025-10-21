export interface SectionTitleProps {
  title: string
  className?: string
}
export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <h2
      className={`font-[Tektur] font-bold text-[90px] text-[#FDFFFF] uppercase ${className}`}
    >
      {title}
    </h2>
  )
}
