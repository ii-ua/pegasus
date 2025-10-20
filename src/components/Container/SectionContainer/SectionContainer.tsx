type SectionContainerProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div'
  className?: string
  children: React.ReactNode
}

export const SectionContainer = ({
  children,
  className,
}: SectionContainerProps) => {
  return <section className={`py-[82px] ${className}`}>{children}</section>
}
