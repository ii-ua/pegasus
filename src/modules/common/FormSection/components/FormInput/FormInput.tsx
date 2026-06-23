import { cn } from '@/common/utils/cn'
import { Form } from 'radix-ui'

export interface FormInputProps
  extends Form.FormControlProps, React.InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = ({
  asChild: _asChild,
  className,
  ...inputProps
}: FormInputProps) => {
  return (
    <Form.Control asChild className={cn('flex-1', className)}>
      <input
        {...inputProps}
        className={cn(
          'border-b text-white placeholder-[#939393] text-[14px] tablet:text-[16px] desktop:text-[20px] font-normal p-3 outline-none bg-transparent',
          className,
        )}
        style={{
          borderImageSource:
            'linear-gradient(90.79deg, #F5F5F5 0.08%, #FDFFFF 100%)',
          borderImageSlice: 1,
        }}
      />
    </Form.Control>
  )
}
