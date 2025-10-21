import { cn } from '@/common/utils/cn'
import { Form } from 'radix-ui'

export const FormField = (props: Form.FormFieldProps) => {
  return (
    <Form.Field
      {...props}
      className={cn('flex flex-1 gap-6 items-end', props.className)}
    >
      {props.children}
    </Form.Field>
  )
}
