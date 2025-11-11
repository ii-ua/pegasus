import { AboutPegasusPage } from '@/pages/AboutPegasusPage/AboutPegasusPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-us')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutPegasusPage />
}
