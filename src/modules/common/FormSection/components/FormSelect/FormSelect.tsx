import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import * as Form from '@radix-ui/react-form'
import { cn } from '@/common/utils/cn'
import { useState } from 'react'
import { errorMessagesStyle } from '../FormComponent'
import { useTranslation } from 'react-i18next'

export interface FormSelectOption {
  label: string
  value: string
}

export interface FormSelectProps extends Form.FormControlProps {
  options: FormSelectOption[]
  placeholder?: string
  name: string
  required?: boolean
  className?: string
}

export default function FormSelect({
  options,
  placeholder,
  name,
  required,
  className,
}: FormSelectProps) {
  const { t } = useTranslation()

  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const handleValueChange = (val: string) => {
    setValue(val)
    setError('')
  }

  return (
    <div className={cn('w-full flex flex-col gap-3.5', className)}>

      <Form.Control asChild>
        <input
          className="hidden"
          name={name}
          required={required}
          value={value}
          onInvalid={() =>
            setError(t('career.form.validations.vacancy.valueMissing'))
          }
        />
      </Form.Control>

      <Select.Root value={value} onValueChange={handleValueChange}>
        <Select.Trigger
          className={cn(
            `
            flex items-center justify-between
            bg-transparent
            border-b p-3 w-full
            text-white text-[14px] tablet:text-[16px] desktop:text-[20px]
            outline-none
            data-[placeholder]:text-[#939393]
            cursor-pointer
          `,
            error && 'border-[#FF6600]'
          )}
          style={{
            borderImageSource:
              error
                ? 'none'
                : 'linear-gradient(90.79deg, #F5F5F5 0.08%, #FDFFFF 100%)',
            borderImageSlice: 1,
          }}
        >
          <Select.Value
            placeholder={placeholder}
          />
          <Select.Icon>
            <ChevronDown className="w-[24px] h-[24px] desktop:w-[32px] desktop:h-[32px]" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position='popper'
            side='bottom'
            align='start'
            className="
              z-50 bg-[#5A5A5A]
              w-[207px] tablet:w-[354px] desktop:w-[471px]
              border-2 border-[#FFFFFF]
            "
          >
            <Select.Viewport>
              {options.map(option => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="
                    px-4 py-2 cursor-pointer
                    text-white 
                    text-[14px] tablet:text-[16px] desktop:text-[20px]
                    hover:bg-[#1C1C1C]/20
                    data-[state=checked]:bg-[#1C1C1C]/40
                    outline-none
                  "
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {error && <Form.Message className={errorMessagesStyle}>
        {error}
    </Form.Message>}
    </div>
  )
}
