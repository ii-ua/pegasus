export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const PrimaryButton = ({
  className = '',
  type = 'button',
  ...rest
}: PrimaryButtonProps) => {
  return (
    <button
      className={`min-w-[148px] cursor-pointer hover:bg-[rgba(206,73,6,1)] focus:bg-[#FF6600] max-w-fit font-[600] text-[#101010] uppercase bg-[linear-gradient(90deg,rgba(206,73,6,1)_0%,rgba(255,102,0,1)_50%,rgba(255,139,32,1)_100%)] py-3 px-6 ${className}`}
      type={type}
      {...rest}
    >
      {rest.children}
    </button>
  )
}
