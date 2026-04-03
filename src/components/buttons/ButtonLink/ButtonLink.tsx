import { Link, LinkProps } from '@tanstack/react-router'
import { useRouterState } from '@tanstack/react-router'
import { localeFromPathname, localizePath } from '@/common/localization/localePath'
// або з react-router-dom
// import { Link } from 'react-router-dom'

export interface ButtonLinkProps
  extends LinkProps,
    React.RefAttributes<HTMLAnchorElement> {
  className?: string
}

export const ButtonLink = ({ className = '', ...rest }: ButtonLinkProps) => {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const locale = localeFromPathname(pathname)
  const localizedTo =
    typeof rest.to === 'string' ? localizePath(rest.to, locale) : rest.to

  return (
    <Link
      {...rest}
      to={localizedTo}
      className={`
        min-w-[148px] max-w-fit py-3 px-6 font-medium uppercase text-[16px] desktop:text-[20px]
        text-[#101010] cursor-pointer transition-transform duration-200
        hover:scale-[1.02] focus:bg-none hover:bg-none
        hover:bg-[#FF6600] focus:bg-[#FF6600]
        bg-[linear-gradient(90deg,rgba(206,73,6,1)_0%,rgba(255,102,0,1)_50%,rgba(255,139,32,1)_100%)]
        ${className}
      `}
      style={{
        clipPath:
          'polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
      }}
    >
      {rest.children}
    </Link>
  )
}
