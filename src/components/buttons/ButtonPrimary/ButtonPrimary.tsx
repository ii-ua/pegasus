import React from 'react'
import { cn } from '@/common/utils/cn'
import CutButton from '@/assets/shapes/cut-button.svg?react'
import { Link } from '@tanstack/react-router'

const baseStyles = `
  min-w-[148px] max-w-fit py-3 px-6 font-[500] uppercase text-[16px] desktop:text-[20px]
  cursor-pointer transition-transform duration-200 relative inline-flex justify-center items-center
  focus:outline-none clip-path-[polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]
`

const variants = {
  primary: `
    text-[#101010]
    bg-[linear-gradient(90deg,rgba(206,73,6,1)_0%,rgba(255,102,0,1)_50%,rgba(255,139,32,1)_100%)]
    hover:scale-[1.02] hover:bg-[#FF6600] focus:bg-[#FF6600]
  `,
  secondary: `
    text-[#FDFFFF] bg-transparent
    hover:scale-[1.02]
  `,
}

export interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  to?: string
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

export const ButtonPrimary = ({
  href,
  to,
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonPrimaryProps) => {
  const commonClasses = cn(baseStyles, variants[variant], className)

  const sharedContent = (
    <>
      {variant === 'secondary' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 block"
        >
          <CutButton
            className="block w-full h-full"
            preserveAspectRatio="none"
          />
        </span>
      )}
      {children}
    </>
  )

  // Якщо є `to` → TanStack Link
  if (to) {
    return (
      <Link
        to={to}
        className={commonClasses}
        style={{
          clipPath:
            variant === 'secondary'
              ? undefined
              : 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)',
        }}
      >
        {sharedContent}
      </Link>
    )
  }

  // Якщо є `href` → звичайне <a>
  if (href) {
    return (
      <a
        href={href}
        className={commonClasses}
        style={{
          clipPath:
            variant === 'secondary'
              ? undefined
              : 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)',
        }}
      >
        {sharedContent}
      </a>
    )
  }

  // Інакше → <button>
  return (
    <button
      {...rest}
      className={commonClasses}
      style={{
        clipPath:
          variant === 'secondary'
            ? undefined
            : 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)',
      }}
    >
      {sharedContent}
    </button>
  )
}
