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
    <section
      id={id}
      className={`py-[54px] desktop:py-[82px] tablet:py-[64px] ${className}`}
    >
      {children}
    </section>
  )
}
