import MainContainer from '@/components/container/MainContainer'
import { Menu } from '@/components/nav'
import { MobileMenu } from '@/components/nav/MobileMenu/MobileMenu'
import { LangSelect } from '@/components/select'
import { useRouterState } from '@tanstack/react-router'
import { localeFromPathname, localizePath } from '@/common/localization/localePath'

const NAV_ITEMS = [
  { label: 'systems', href: '/#systems' },
  { label: 'aboutUs', href: '/about-us' },
  { label: 'career', href: '/career' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/contacts' },
]

export default function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const locale = localeFromPathname(pathname)

  return (
    <>
      <header className="fixed top-3.5 tablet:top-[42px] left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 xl:px-[42px] ">
        <MainContainer className="flex items-center px-0 sm:px-0 lg:px-0 xl:px-0 justify-between backdrop-blur-sm ">
          <a href={localizePath('/', locale)} className="p-1.5">
            <img
              className="w-[54px] h-[54px] desktop:w-16 desktop:h-16"
              width={64}
              height={64}
              decoding="async"
              src="/big_logo.svg"
              alt="Logo"
            />
          </a>
          <MobileMenu navItems={NAV_ITEMS} />
          <Menu classNameContainer="hidden md:block" navItems={NAV_ITEMS} />
          <LangSelect className="hidden md:block" />
        </MainContainer>
      </header>
    </>
  )
}
