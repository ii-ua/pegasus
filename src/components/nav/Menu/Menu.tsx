import { NavItem } from '../NavItem'
export interface MenuProps {
  navItems?: Array<{ label: string; href: string }>
}
export const Menu = ({ navItems }: MenuProps) => {
  return (
    <>
      <nav aria-label="Основна навігація">
        <ul className="flex gap-[42px]">
          {navItems?.map((item) => (
            <NavItem key={item.href} label={item.label} href={item.href} />
          ))}
        </ul>
      </nav>
    </>
  )
}
