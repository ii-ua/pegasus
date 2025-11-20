import { Menu } from '@/components/nav'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

import Tel from '@/assets/icons/tel.svg?react'
import Email from '@/assets/icons/email.svg?react'
import { SocialIcons } from '@/components/lists/SocialIcons/SocialIcons'

const NAV_ITEMS = [
  { label: 'aboutUs', href: '/about-us' },
  { label: 'systems', href: '/#systems' },
  { label: 'career', href: '/career' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/contacts' },
]

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="py-[54px] desktop:py-[82px] tablet:py-16 flex flex-col md:flex-row gap-[54px] tablet:gap-[65px]">
      {/* Ліва колонка: поява знизу */}
      <motion.div
        className="max-w-[610px] order-1 md:order-0 uppercase text-[#D9D9D9] font-normal text-[14px] desktop:text-[16px] flex gap-8 flex-col justify-between"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img
          width={124}
          height={124}
          className="mobile:w-[100px] mobile:h-[100px] tablet:w-[124px] tablet:h-[124px]"
          src="/big_logo.svg"
          alt="Logo"
        />
        <div>
          <p>{t('footer.copyright')}</p>
          <p>
            {t('footer.terms.text')}
            <a
              href="/terms"
              className="inline-block underline decoration-[#FF6600] decoration-1 underline-offset-1 bg-linear-to-r from-[#CE4906] via-[#FF6600] to-[#FF8B20] bg-clip-text text-transparent"
            >
              {t('footer.terms.links.terms')}
            </a>
            {t('footer.terms.and')}
            <a
              href="/privacy"
              className="inline-block underline decoration-[#FF6600] decoration-1 underline-offset-1 bg-gradient-to-r from-[#CE4906] via-[#FF6600] to-[#FF8B20] bg-clip-text text-transparent"
            >
              {t('footer.terms.links.privacy')}
            </a>
          </p>
        </div>
      </motion.div>

      {/* Права колонка: поява знизу з невеликою затримкою */}
      <motion.div
        className="flex gap-8 order-0 md:order-1 flex-col md:flex-row justify-between w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
      >
        <Menu
          navItems={NAV_ITEMS}
          ariaLabel={t('footer.navigationAriaLabel')}
          className="flex-col block gap-6 lg:gap-6"
        />

        <div className="flex flex-col justify-between gap-8">
          {/* Контакти: м'яка поява */}
          <motion.ul
            className="text-[#FDFFFF] font-normal text-[16px] desktop:text-[20px] uppercase flex flex-col gap-4 tablet:gap-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          >
            <li>
              <a
                className="flex gap-3 items-center"
                type="tel"
                target="_blank"
                href="tel:+380986146177"
                rel="nofollow"
              >
                <Tel width={32} height={32} /> +380 (98) 614 61 77
              </a>
            </li>
            <li>
              <a
                className="flex gap-3 items-center"
                type="email"
                href="mailto:p.info@pegasusarms.com.ua"
              >
                <Email width={32} height={32} /> p.info@pegasusarms.com.ua
              </a>
            </li>
          </motion.ul>

          {/* Соцмережі з анімацією */}
          <SocialIcons />
        </div>
      </motion.div>
    </footer>
  )
}
