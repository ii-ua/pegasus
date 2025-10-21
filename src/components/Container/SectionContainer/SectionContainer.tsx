type SectionContainerProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div'
  className?: string
  children: React.ReactNode
}

export const SectionContainer = ({
  children,
  className,
  id,
}: SectionContainerProps) => {
  return (
    <section id={id} className={`py-[82px] ${className}`}>
      {children}
    </section>
  )
}
