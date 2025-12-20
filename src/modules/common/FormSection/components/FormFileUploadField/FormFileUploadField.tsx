import * as Form from '@radix-ui/react-form'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'
import { errorMessagesStyle } from '../FormComponent'

type Props = {
  name?: string
  accept?: string
  required?: boolean
  maxSizeMb?: number
}

const FormFileUploadField = ({
  name = 'summary',
  accept = '.pdf,.doc,.docx',
  required = true,
  maxSizeMb = 10,
}: Props) => {
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)

  const [fileName, setFileName] = useState('')
  const [error, setError] = useState('')

  const maxSizeBytes = maxSizeMb * 1024 * 1024

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > maxSizeBytes) {
      setError(
        t('career.form.validations.summary.sizeExceeded', { size: maxSizeMb })
      )
      setFileName('')
      e.target.value = ''
      return
    }

    setError('')
    setFileName(file.name)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation() // ❗ не відкривати file picker
    setFileName('')
    setError('')
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
      <div className="w-full flex flex-col gap-3.5">
          
        <Form.Control asChild>
        <input
            ref={inputRef}
            type="file"
            name={name}
            accept={accept}
            required={required}
            className="hidden"
            onChange={handleChange}
            />
        </Form.Control>


        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="
              text-left
              text-[#FDFFFF] font-semibold
              text-[14px] tablet:text-[16px] desktop:text-[18px]
              cursor-pointer
              
            "
          >
            {fileName ? (
              <span className="font-normal">{fileName}</span>
            ) : (
              <>
                <span className="uppercase underline">
                  {t('career.form.inputs.summary.placeholder')}
                </span>{' '}
                <span className="font-normal">
                  {t('career.form.inputs.summary.placeholder2')}
                </span>
              </>
            )}
          </button>

          {fileName && (
            <button
              type="button"
              onClick={handleClear}
              aria-label={t('career.form.inputs.summary.clear')}
              className="
                text-[#FDFFFF]
                hover:text-[#FF6600]
                transition-colors
                cursor-pointer
              "
            >
              <X className='w-[24px] h-[24px] desktop:w-[32px] desktop:h-[32px]' size={24} />
            </button>
          )}
        </div>

        <Form.Message match="valueMissing" className={errorMessagesStyle}>
          {error || t('career.form.validations.summary.valueMissing')}
        </Form.Message>
      </div>
  )
}

export default FormFileUploadField
