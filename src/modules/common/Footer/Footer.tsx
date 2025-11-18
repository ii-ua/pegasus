import { Menu } from '@/components/nav'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

import Tel from '@/assets/icons/tel.svg?react'
import Email from '@/assets/icons/email.svg?react'
import Facebook from '@/assets/icons/facebook.svg?react'
import Instagram from '@/assets/icons/instagram.svg?react'
import Youtube from '@/assets/icons/youtube.svg?react'
import Tiktok from '@/assets/icons/tiktok.svg?react'
import { useRef } from 'react'

const NAV_ITEMS = [
  { label: 'aboutUs', href: '/about-us' },
  { label: 'systems', href: '/systems' },
  { label: 'career', href: '/career' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/contact' },
]

// Локальна кнопка-обгортка з “spotlight” ефектом і мікро-анімацією
function GlowIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLAnchorElement | null>(null)

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
  }

  return (
    <motion.a
      ref={ref}
      target="_blank"
      rel="nofollow noopener"
      aria-label={label}
      href={href}
      onMouseMove={onMove}
      whileHover={{ scale: 1.05, rotate: 2, y: -2 }}
      whileTap={{ scale: 0.98, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        relative block rounded-[4px] border border-[#FDFFFF] p-[3px]
        overflow-hidden
        
        transition-[border-color,box-shadow] duration-300
        hover:border-[#FF6600]/60
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6600]
        [background:
          radial-gradient(140px_140px_at_var(--x,50%)_var(--y,50%),
          rgba(255,102,0,0.18),transparent 60%)
        ]
        hover:shadow-[0_0_0_1px_rgba(255,102,0,0.35),0_0_22px_rgba(255,102,0,0.25)]
      `}
      style={{
        ['--x' as any]: '50%',
        ['--y' as any]: '50%',
      }}
    >
      <div className="grid place-items-center">{children}</div>
    </motion.a>
  )
}

function SocialIcons() {
  return (
    <motion.ul
      className="text-white flex gap-3"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
    >
      <li>
        <GlowIcon
          href="https://www.facebook.com/profile.php?id=61559913531013&locale=uk_UA"
          label="facebook"
        >
          <Facebook />
        </GlowIcon>
      </li>
      <li>
        <GlowIcon
          href="https://www.instagram.com/drone.pegasusarms?igsh=MXVyYzV3aGVlbWRoNg%3D%3D&utm_source=qr"
          label="instagram"
        >
          <Instagram />
        </GlowIcon>
      </li>
      <li>
        <GlowIcon
          href="https://youtube.com/@pegasusarmsukraine?si=phZUjIuPs0lCvMd_"
          label="youtube"
        >
          <Youtube />
        </GlowIcon>
      </li>
      <li>
        <GlowIcon
          href="https://www.tiktok.com/@drone.pegasusarms?_t=ZM-8vlt5EPwJHD"
          label="tiktok"
        >
          <Tiktok />
        </GlowIcon>
      </li>
    </motion.ul>
  )
}

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="py-[54px] desktop:py-[82px] tablet:py-[64px] flex flex-col tablet:flex-row gap-[54px] tablet:gap-[65px]">
      {/* Ліва колонка: поява знизу */}
      <motion.div
        className="max-w-[610px] order-2 tablet:order-0 uppercase text-[#D9D9D9] font-normal text-[14px] desktop:text-[16px] flex gap-8 flex-col justify-between"
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
              className="inline-block underline decoration-[#FF6600] decoration-1 underline-offset-1 bg-gradient-to-r from-[#CE4906] via-[#FF6600] to-[#FF8B20] bg-clip-text text-transparent"
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
        className="flex gap-8 flex-col tablet:flex-row justify-between w-full"
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
