import { useState } from 'react'
import { Dialog } from 'radix-ui'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { NavItem } from '../NavItem'
import { LangSelect } from '@/components/select'

export interface MobileMenuProps {
  navItems: Array<{ label: string; href?: string; hash?: string }>
}

export const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* ТРИГЕР — бургер (НЕ хрестик) */}
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Відкрити меню"
          className="
            flex h-10 w-10 items-center justify-center md:hidden 
            hover:bg-white/10 transition-colors
          "
        >
          <div className="space-y-[5px]">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </Dialog.Trigger>

      {/* ПОРТАЛ — overlay + контент */}
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              {/* затемнення */}
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-40 bg-[#1C1C1C] backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </Dialog.Overlay>

              {/* КОНТЕНТ МЕНЮ */}
              <Dialog.Content asChild>
                <motion.div
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="
                    fixed inset-0 z-50 bg-[#101010]
                    p-4 flex flex-col gap-[42px]
                  "
                >
                  {/* LOGO + CLOSE */}
                  <div className="flex items-center justify-between">
                    <a href="/" className="block">
                      <img
                        src="/logo.png"
                        width={64}
                        height={64}
                        alt="Logo"
                        className="h-[54px] w-[54px]"
                      />
                    </a>

                    {/* Close button INSIDE the menu */}
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Закрити меню"
                        className="
                          flex h-12 w-12 items-center justify-center
                          
                          hover:bg-white/10 transition
                        "
                      >
                        <div className="relative h-5 w-5">
                          <span className="absolute inset-0 block h-[2px] w-full bg-white rotate-45" />
                          <span className="absolute inset-0 block h-[2px] w-full bg-white -rotate-45" />
                        </div>
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* NAVIGATION */}
                  <nav>
                    <ul className="flex flex-col gap-4 lg:gap-[42px]">
                      {navItems.map((item) => (
                        <li key={item.href ?? item.hash}>
                          <Dialog.Close asChild>
                            <NavItem
                              onClick={() => setOpen(false)}
                              label={t(`navMain.${item.label}`)}
                              href={item.href}
                              hash={item.hash}
                            />
                          </Dialog.Close>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="flex w-full justify-center">
                    {/* LANGUAGE SWITCHER */}
                    <LangSelect />
                  </div>
                </motion.div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
