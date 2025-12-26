import { cn } from '@/common/utils/cn'
import { useTranslation } from 'react-i18next'

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
  const { i18n } = useTranslation()

  return (
    <section
      data-lang={['uk', 'en'].includes(i18n.language) ? i18n.language : 'uk'}
      id={id}
      className={cn(
        'py-[54px] desktop:py-[82px] tablet:py-16 gap-4 tablet:gap-6 desktop:gap-8',
        className,
      )}
    >
      {children}
    </section>
  )
}

export default SectionContainer
