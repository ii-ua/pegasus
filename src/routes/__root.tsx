import {
  HeadContent,
  Scripts,
  createRootRoute,
  redirect,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import '../common/localization/i18n'

import Header from '../pages/common/Header'

import appCss from '../styles.css?url'
import { MainContainer } from '@/components/container'

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
        property: 'og:url',
        content: 'https://pegasusarms.com.ua',
      },
      {
        property: 'og:title',
        content: 'Ударний дрон Pegasus Arms 25 | Офіційний сайт виробника',
      },
      {
        property: 'og:description',
        content:
          'Придбати сертифіковані ударні дроні Pegasus Arms 25 для бойових завдань ЗСУ та Сил оборони. Пегас Армс - український виробник. Дрони сертифіковані Міністерством оборони.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    links: [
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
        href: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Tektur:wght@400..900&display=swap',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#150F08]">
        <MainContainer>
          <Header />
          {children}
        </MainContainer>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
