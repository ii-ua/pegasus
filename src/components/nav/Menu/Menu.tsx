import { useTranslation } from 'react-i18next'
import { NavItem } from '../NavItem'
import { cn } from '@/common/utils/cn'
import { motion } from 'motion/react'

export interface MenuProps {
  navItems?: Array<{ label: string; href?: string; hash?: string }>
  ariaLabel?: string
  className?: string
  classNameContainer?: string
}

export const Menu = ({
  navItems,
  ariaLabel,
  className,
  classNameContainer,
}: MenuProps) => {
  const { t } = useTranslation()

  return (
    <nav
      className={cn('', classNameContainer)}
      aria-label={ariaLabel ?? 'Основна навігація'}
    >
      <motion.ul
        className={cn('flex gap-2.5 lg:gap-[42px]', className)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {navItems?.map((item, i) => (
          <motion.li
            key={item?.href ?? item?.hash}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
          >
            <li>
              <NavItem
                label={t(`navMain.${item.label}`)}
                href={item.href}
                hash={item.hash}
              />
            </li>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}
