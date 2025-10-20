import { MainContainer } from '@/components/container'
import { Menu } from '@/components/nav'
import { LangSelect } from '@/components/select'

const NAV_ITEMS = [
  { label: 'systems', href: '/systems' },
  { label: 'aboutPegasus', href: '/about-pegasus' },
  { label: 'blog', href: '/blog' },
  { label: 'career', href: '/career' },
  { label: 'contact', href: '/contact' },
]

export default function Header() {
  return (
    <>
      <header className="fixed top-[42px] left-0 right-0 z-50 px-8">
        <MainContainer className="flex items-center justify-between">
          <a href="/">
            <img width={64} height={64} src="/logo.png" alt="Logo" />
          </a>
          <Menu navItems={NAV_ITEMS} />
          <LangSelect />
        </MainContainer>
      </header>
    </>
  )
}
