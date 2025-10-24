import { BplaPage } from '@/pages/systems'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/bpla')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BplaPage />
}
