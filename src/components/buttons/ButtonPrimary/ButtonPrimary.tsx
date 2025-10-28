import React from 'react'
import { cn } from '@/common/utils/cn'
import CutButton from '@/assets/shapes/cut-button.svg?react'

const baseStyles = `
    min-w-[148px] max-w-fit py-3 px-6 font-[600] uppercase
    cursor-pointer transition-transform duration-200 relative
    focus:outline-none clip-path-[polygon(0_10px,10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]
  `

const variants = {
  primary: `
      text-[#101010]
      bg-[linear-gradient(90deg,rgba(206,73,6,1)_0%,rgba(255,102,0,1)_50%,rgba(255,139,32,1)_100%)]
      hover:scale-[1.02] hover:bg-[#FF6600] focus:bg-[#FF6600]
    `,
  secondary: `
      text-white bg-transparent
      hover:scale-[1.02]
    `,
}

export interface ButtonPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'primary' | 'secondary'
}

export const ButtonPrimary = ({
  className = '',
  variant = 'primary',
  ...rest
}: ButtonPrimaryProps) => {
  return (
    <button
      {...rest}
      className={cn(baseStyles, variants[variant], className)}
      style={{
        clipPath:
          variant === 'secondary'
            ? undefined
            : 'polygon(0 15px, 15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)',
      }}
    >
      <span aria-hidden className="pointer-events-none absolute inset-0 block">
        {variant === 'secondary' && (
          <CutButton
            className="block w-full h-full"
            preserveAspectRatio="none" // <-- ключове!
          />
        )}
      </span>
      {rest.children}
    </button>
  )
}
