import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/systems/education')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/systems/education"!</div>
}
