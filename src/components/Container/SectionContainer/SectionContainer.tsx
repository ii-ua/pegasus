import { cn } from '@/common/utils/cn'

type SectionContainerProps = React.HTMLAttributes<HTMLElement> & {
  as?: 'section' | 'div'
  className?: string
  children: React.ReactNode
}

const SectionContainer = ({
  children,
  className,
  id,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-[54px] desktop:py-[82px] tablet:py-[64px] gap-4 tablet:gap-6 desktop:gap-8',
        className,
      )}
    >
      {children}
    </section>
  )
}

export default SectionContainer
