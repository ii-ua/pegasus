import { BpakPage } from '@/pages/systems/BpakPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/bpak')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BpakPage />
}
