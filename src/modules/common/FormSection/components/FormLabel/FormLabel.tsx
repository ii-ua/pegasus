import { cn } from '@/common/utils/cn'
import { Form } from 'radix-ui'

export const FormLabel = ({ children, ...props }: Form.FormLabelProps) => {
  return (
    <label
      {...props}
      className={cn(
        'min-w-[136px] font-normal text-[24px] text-white uppercase',
        props.className,
      )}
    >
      {children}
    </label>
  )
}
