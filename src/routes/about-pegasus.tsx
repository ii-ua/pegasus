import { AboutPegasusPage } from '@/pages/AboutPegasusPage/AboutPegasusPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-pegasus')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutPegasusPage />
}
