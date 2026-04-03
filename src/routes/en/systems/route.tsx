import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/en/systems')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
