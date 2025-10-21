import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/bpla')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/systems/bpla"!</div>
}
