import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/systems')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
