import { cn } from '@/common/utils/cn'
import { Form } from 'radix-ui'

export interface FormInputProps
  extends Form.FormControlProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = (props: FormInputProps) => {
  return (
    <Form.Control {...props} className={cn('flex-1', props.className)}>
      <input
        {...props}
        className="border-b text-white placeholder-[#939393] placeholder:uppercase text-[14px] tablet:text-[16px] desktop:text-[20px] font-normal p-3 outline-none bg-transparent"
        style={{
          borderImageSource:
            'linear-gradient(90.79deg, #F5F5F5 0.08%, #FDFFFF 100%)',
          borderImageSlice: 1,
        }}
      />
    </Form.Control>
  )
}
