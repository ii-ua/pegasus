import { cn } from '@/common/utils/cn'
import * as Form from '@radix-ui/react-form'
import React from 'react'

export interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  className,
  ...rest
}) => {
  return (
    <Form.Control asChild>
      <textarea
        {...rest}
        className={cn(
          'flex-1 bg-transparent outline-none',
          'border-b text-white placeholder-[#939393] placeholder:uppercase',
          'text-[20px] font-medium p-3',
          className,
        )}
        style={{
          // для border-image потрібні border-width і border-style
          borderImageSource:
            'linear-gradient(90.79deg, #F5F5F5 0.08%, #FDFFFF 100%)',
          borderImageSlice: 1,
          borderBottomWidth: 1,
          borderStyle: 'solid',
        }}
      />
    </Form.Control>
  )
}
