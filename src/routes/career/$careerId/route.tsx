import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career/$careerId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/career/$careerId"!</div>
}
