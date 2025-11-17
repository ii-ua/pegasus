import { MainContainer } from '@/components/container'
import { Menu } from '@/components/nav'
import { MobileMenu } from '@/components/nav/MobileMenu/MobileMenu'
import { LangSelect } from '@/components/select'

const NAV_ITEMS = [
  { label: 'systems', href: '/#systems', hash: 'systems' },
  { label: 'aboutUs', href: '/about-us' },
  { label: 'career', href: '/career' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/#contacts' },
]

export default function Header() {
  return (
    <>
      <header className="fixed top-[14px] tablet:top-[42px] left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 xl:px-[42px] ">
        <MainContainer className="flex items-center px-0 sm:px-0 lg:px-0 xl:px-0 justify-between backdrop-blur-sm ">
          <a href="/" className="p-1.5">
            <img
              className="w-[54px] h-[54px] desktop:w-[64px] desktop:h-[64px]"
              width={64}
              height={64}
              src="/logo.png"
              alt="Logo"
            />
          </a>
          <MobileMenu navItems={NAV_ITEMS} />
          <Menu navItems={NAV_ITEMS} />
          <LangSelect className="hidden tablet:block" />
        </MainContainer>
      </header>
    </>
  )
}
