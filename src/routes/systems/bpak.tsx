import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/bpak')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/systems/bpak"!</div>
}
