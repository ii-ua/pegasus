export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const PrimaryButton = ({
  className = '',
  type = 'button',
  ...rest
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      {...rest}
      className={`
        min-w-[148px] max-w-fit py-3 px-6 font-[600] uppercase
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
    </button>
  )
}
