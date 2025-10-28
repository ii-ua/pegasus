import { CareersPage } from '@/pages/career'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CareersPage />
}
