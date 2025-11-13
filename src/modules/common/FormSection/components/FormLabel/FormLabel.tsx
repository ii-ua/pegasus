import { cn } from '@/common/utils/cn'
import { Form } from 'radix-ui'
export interface FormLabelProps extends Form.FormLabelProps {
  isRequired?: boolean
}

export const FormLabel = ({
  children,
  isRequired,
  ...props
}: FormLabelProps) => {
  return (
    <label
      {...props}
      className={cn(
        'min-w-[91px] tablet:min-w-[113px] desktop:min-w-[136px] font-normal text-[16px] tablet:text-[20px] desktop:text-[24px] text-[#FDFFFF] uppercase',
        props.className,
      )}
    >
      {children}
      {isRequired && (
        <span
          className="bg-gradient-to-r from-[#CE4906] via-[#FF6600] to-[#FF8B20]
    bg-clip-text text-transparent"
        >
          *
        </span>
      )}
    </label>
  )
}
