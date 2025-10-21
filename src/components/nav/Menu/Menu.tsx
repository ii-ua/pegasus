import { useTranslation } from 'react-i18next'
import { NavItem } from '../NavItem'
import { cn } from '@/common/utils/cn'
export interface MenuProps {
  navItems?: Array<{ label: string; href: string }>
  ariaLabel?: string
  className?: string
}
export const Menu = ({ navItems, ariaLabel, className }: MenuProps) => {
  const { t } = useTranslation()
  return (
    <>
      <nav aria-label={ariaLabel ?? 'Основна навігація'}>
        <ul className={cn('flex gap-[42px]', className)}>
          {navItems?.map((item) => (
            <NavItem
              key={item.href}
              label={t(`navMain.${item.label}`)}
              href={item.href}
            />
          ))}
        </ul>
      </nav>
    </>
  )
}
