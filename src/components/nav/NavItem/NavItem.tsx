import { Link } from '@tanstack/react-router'

export const NavItem = ({
  label,
  href,
  hash,
  onClick,
}: {
  label: string
  href?: string
  hash?: string
  onClick?: () => void
}) => {
  return (
    <>
      <Link
        to={href}
        onClick={onClick}
        hash={hash}
        activeOptions={{ includeHash: true }}
        className="group relative z-10 flex items-center gap-[3px] px-2.5 py-1.5 rounded-md
                   font-medium desktop:text-[20px] text-[16px] uppercase transition-colors duration-200 text-white"
        activeProps={{
          className: 'text-white [&_span]:opacity-100', // активний стан + показати ромб
        }}
      >
        {/* градієнтний ромб */}
        <span
          className={`
            w-[5px] h-[5px] rotate-45 bg-gradient-to-br
            from-[#CE4906] via-[#FF6600] to-[#FF8B20]
            transition-opacity duration-300
            opacity-0 group-hover:opacity-100
            [data-status=active]:opacity-100
          `}
        />
        {label}
      </Link>
    </>
  )
}
