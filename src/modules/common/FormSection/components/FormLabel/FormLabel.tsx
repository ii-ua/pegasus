import { cn } from '@/common/utils/cn'
import { Form } from 'radix-ui'

export const FormLabel = ({ children, ...props }: Form.FormLabelProps) => {
  return (
    <label
      {...props}
      className={cn(
        'font-[Tektur] min-w-[136px] font-normal text-[24px] text-white uppercase',
        props.className,
      )}
    >
      {children}
    </label>
  )
}
