import { Menu } from '@/components/nav'
import { useTranslation } from 'react-i18next'
import Tel from '@/assets/icons/tel.svg?react'
import Email from '@/assets/icons/email.svg?react'
import Facebook from '@/assets/icons/facebook.svg?react'
import Instagram from '@/assets/icons/instagram.svg?react'
import Youtube from '@/assets/icons/youtube.svg?react'
import Tiktok from '@/assets/icons/tiktok.svg?react'
const NAV_ITEMS = [
  { label: 'aboutPegasus', href: '/about-pegasus' },
  { label: 'systems', href: '/systems' },
  { label: 'career', href: '/career' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/contact' },
]

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="py-[82px] flex gap-[65px]">
      <div className="max-w-[667px] uppercase text-white font-light text-[16px]">
        <img
          className="mb-[42px]"
          width={124}
          height={124}
          src="/logo.png"
          alt="Logo"
        />
        <p className="">{t('footer.copyright')}</p>
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
      <div className="flex justify-between w-full">
        <Menu
          navItems={NAV_ITEMS}
          ariaLabel={t('footer.navigationAriaLabel')}
          className="flex-col gap-4"
        />
        <div className="flex flex-col justify-between">
          <ul className="text-white font-medium text-[20px] uppercase flex flex-col gap-6">
            <li>
              <a
                className="flex gap-3"
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
                className="flex gap-3"
                type="email"
                href="mailto:p.info@pegasusarms.com.ua"
              >
                <Email width={32} height={32} /> p.info@pegasusarms.com.ua
              </a>
            </li>
          </ul>
          <ul className="text-white flex gap-3">
            <li className="border rounded-[4px]">
              <a
                aria-label="facebook"
                target="_blank"
                rel="nofollow noopener"
                href="https://www.facebook.com/profile.php?id=61559913531013&locale=uk_UA"
              >
                <Facebook width={42} height={42} />
              </a>
            </li>
            <li className="border rounded-[4px]">
              <a
                aria-label="instagram"
                target="_blank"
                rel="nofollow noopener"
                href="https://www.instagram.com/drone.pegasusarms?igsh=MXVyYzV3aGVlbWRoNg%3D%3D&utm_source=qr"
              >
                <Instagram width={42} height={42} />
              </a>
            </li>
            <li className="border rounded-[4px]">
              <a
                aria-label="youtube"
                target="_blank"
                rel="nofollow noopener"
                href="https://youtube.com/@pegasusarmsukraine?si=phZUjIuPs0lCvMd_"
              >
                <Youtube width={42} height={42} />
              </a>
            </li>
            <li className="border rounded-[4px]">
              <a
                aria-label="tiktok"
                target="_blank"
                rel="nofollow noopener"
                href="https://www.tiktok.com/@drone.pegasusarms?_t=ZM-8vlt5EPwJHD"
              >
                <Tiktok width={42} height={42} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
