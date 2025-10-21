import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-pegasus')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about-pegasus"!</div>
}
