import { useTranslation } from 'react-i18next'
import { NavItem } from '../NavItem'
export interface MenuProps {
  navItems?: Array<{ label: string; href: string }>
}
export const Menu = ({ navItems }: MenuProps) => {
  const { t } = useTranslation()
  return (
    <>
      <nav aria-label="Основна навігація">
        <ul className="flex gap-[42px]">
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
