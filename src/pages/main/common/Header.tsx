import { Menu } from '@/components/nav'
import { LangSelect } from '@/components/select'

const NAV_ITEMS = [
  { label: 'Системи', href: '/systems' },
  { label: 'Про PEGASUS', href: '/about-pegasus' },
  { label: 'Блог', href: '/blog' },
  { label: 'Карʼєра', href: '/career' },
  { label: 'Контакти', href: '/contact' },
]

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <a href="/">
          <img width={64} height={64} src="/logo.png" alt="Logo" />
        </a>
        <Menu navItems={NAV_ITEMS} />
        <LangSelect />
      </header>
    </>
  )
}
