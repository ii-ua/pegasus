import {
  HeadContent,
  Scripts,
  createRootRoute,
  redirect,
  useRouterState,
} from '@tanstack/react-router'
import '../common/localization/i18n'
import Header from '../modules/common/Header/Header'

import appCss from '../styles.css?url'
import { Footer } from '@/modules/common/Footer/Footer'
import MainContainer from '@/components/container/MainContainer'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { localeFromPathname } from '@/common/localization/localePath'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export const Route = createRootRoute({
  notFoundComponent: () => {
    // при будь-якому 404 одразу редіректить на головну
    throw redirect({ to: '/' })
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'google-site-verification',
        content: 'ZDMx6QNsAKVdSFtEPAVo_nGHIP_xgT7COSH4Lh4loKc',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Ударні дрони Pegasus Arms 25 | Офіційний сайт виробника',
      },
      {
        name: 'description',
        content:
          'Придбати сертифіковані ударні дроні Pegasus Arms 25 для бойових завдань ЗСУ та Сил оборони. Пегас Армс - український виробник. Дрони сертифіковані Міністерством оборони.',
      },
      {
        name: 'twitter:url',
        content: 'https://pegasusarms.com.ua/',
      },
    ],
    scripts: [
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-4G7FW4XSS2',
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4G7FW4XSS2');
        `,
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })
  const locale = localeFromPathname(pathname)
  const { i18n } = useTranslation()

  if (!i18n.language?.startsWith(locale)) {
    void i18n.changeLanguage(locale)
  }

  useEffect(() => {
    if (!i18n.language?.startsWith(locale)) return
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('i18nextLng', locale)
      document.cookie = `i18next=${locale}; path=/; max-age=31536000`
    }
  }, [i18n, locale])

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#150F08]">
        <MainContainer>
          <Header />
        </MainContainer>
        {children}
        <div className="bg-[#0E0B0B]">
          <MainContainer>
            <Footer />
          </MainContainer>
        </div>

        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{ position: 'bottom-left' }}
            plugins={[
              {
                name: 'TanStack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}

        <Scripts />
      </body>
    </html>
  )
}
