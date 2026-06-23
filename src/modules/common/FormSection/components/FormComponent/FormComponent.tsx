import { useCallback, useRef, useState } from 'react'
import FormRectangle from '@/assets/shapes/form-rectangle.svg?react'
import MFormRectangle from '@/assets/shapes/m-form-rectangle.svg?react'
import VacancyRectangle from '@/assets/shapes/vacancy-rectangle.svg?react'
import MVacancyRectangle from '@/assets/shapes/m-vacancy-rectangle.svg?react'
import { Form } from 'radix-ui'
import { useTranslation } from 'react-i18next'
import { FormLabel } from '../FormLabel'
import { FormInput } from '../FormInput'
import { FormField } from '../FormField'
import { FormWrapper } from '../FormWrapper'
import { FormTextarea } from '../FormTextarea'
import { ButtonPrimary } from '@/components/buttons/ButtonPrimary'
import { motion } from 'motion/react'
import FormSelect from '../FormSelect'
import { JOB_OPTIONS } from '@/common/constants/jobs'
import FileUploadField from '../FormFileUploadField'
import { ClientOnly } from '@tanstack/react-router'
import { TurnstileWidget } from '../TurnstileWidget'
import { LoaderCircle } from 'lucide-react'

export const errorMessagesStyle =
  'text-[#FF6600] text-[12px] tablet:text-[14px] desktop:text-[16px] font-normal'

const PHONE_PATTERN = String.raw`\+?(?:[0-9](?: |\(|\)|-)*){6,14}[0-9]`
const PHONE_REGEX = /^\+?(?:[0-9][ ()-]*){6,14}[0-9]$/
const NAME_PATTERN = String.raw`[\p{L}\p{M}][\p{L}\p{M}'’ \-]{1,49}`
const NAME_REGEX = /^[\p{L}\p{M}][\p{L}\p{M}'’ -]{1,49}$/u
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const fieldErrorClass = `${errorMessagesStyle} absolute right-0 top-full mt-1`

type FieldName =
  | 'name'
  | 'lastName'
  | 'email'
  | 'tel'
  | 'message'
  | 'vacancy'
  | 'summary'

type FieldErrors = Partial<Record<FieldName, string>>

export const FormComponent = ({ summary = false }: { summary?: boolean }) => {
  const { t, i18n } = useTranslation()
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [captchaError, setCaptchaError] = useState(false)
  const [captchaAttempt, setCaptchaAttempt] = useState(0)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const pendingFormData = useRef<FormData | null>(null)

  const sendForm = useCallback(async (token: string) => {
    const formData = pendingFormData.current
    if (!formData) return

    formData.set('cf-turnstile-response', token)
    setIsLoading(true)
    setCaptchaError(false)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as {
          error?: string
        } | null
        throw new Error(
          result?.error ?? `Form submission failed: ${response.status}`,
        )
      }

      pendingFormData.current = null
      setIsSent(true)
    } catch (err) {
      console.error(err)
      setCaptchaError(true)
      setShowCaptcha(false)
      setCaptchaAttempt((attempt) => attempt + 1)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleCaptchaError = useCallback(() => {
    setCaptchaError(true)
    setShowCaptcha(false)
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    formData.set('target', summary ? 'hr' : 'info')
    const errors: FieldErrors = {}

    const name = formData.get('name')?.toString().trim() ?? ''
    const lastName = formData.get('lastName')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const tel = formData.get('tel')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''
    const vacancy = formData.get('vacancy')?.toString() ?? ''
    const file = formData.get('summary')

    if (!name) {
      errors.name = t('formSection.form.validations.name.valueMissing')
    } else if (!NAME_REGEX.test(name)) {
      errors.name = t('formSection.form.validations.name.invalid')
    }

    if (summary && !lastName) {
      errors.lastName = t('formSection.form.validations.lastName.valueMissing')
    } else if (lastName && !NAME_REGEX.test(lastName)) {
      errors.lastName = t('formSection.form.validations.lastName.invalid')
    }

    if (!email) {
      errors.email = t('formSection.form.validations.email.valueMissing')
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = t('formSection.form.validations.email.typeMismatch')
    }

    if (!summary && !tel) {
      errors.tel = t('formSection.form.validations.tel.valueMissing')
    } else if (tel && !PHONE_REGEX.test(tel)) {
      errors.tel = t('formSection.form.validations.tel.patternMismatch')
    }

    if (!message) {
      errors.message = t('formSection.form.validations.message.valueMissing')
    } else if (message.length < 10) {
      errors.message = t('formSection.form.validations.message.tooShort')
    }

    if (summary && !vacancy) {
      errors.vacancy = t('career.form.validations.vacancy.valueMissing')
    }

    if (summary && (!(file instanceof File) || file.size === 0)) {
      errors.summary = t('career.form.validations.summary.valueMissing')
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setShowCaptcha(false)
      return
    }

    if (vacancy) {
      const job = JOB_OPTIONS.find((opt) => opt.value === vacancy)
      if (job) formData.set('vacancy', t(job.labelKey))
    }

    setFieldErrors({})
    pendingFormData.current = formData
    setCaptchaError(false)
    setShowCaptcha(true)
  }

  /* ================= SUCCESS STATE ================= */

  if (isSent) {
    return (
      <motion.div
        className="relative w-full p-8 flex flex-col items-center justify-center text-center gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h3 className="text-[#FDFFFF] text-[24px] tablet:text-[32px] uppercase">
          {summary
            ? t('formSection.form.messages.hr')
            : t('formSection.form.messages.info')}
        </h3>

        <p className="text-[#BFC5C7] max-w-[520px]">
          {summary
            ? t('formSection.form.submit.successHr')
            : t('formSection.form.submit.success')}
        </p>

        <ButtonPrimary onClick={() => setIsSent(false)}>
          {t('formSection.form.resend')}
        </ButtonPrimary>
      </motion.div>
    )
  }

  /* ================= FORM ================= */

  return (
    <motion.div
      className="relative w-full p-4 tablet:p-8 flex flex-col gap-6 tablet:gap-[43px] desktop:gap-[53px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
      >
        <ClientOnly>
          {summary ? (
            <>
              <VacancyRectangle
                className="hidden tablet:block w-full h-full"
                preserveAspectRatio="none"
              />
              <MVacancyRectangle
                className="tablet:hidden w-full h-full"
                preserveAspectRatio="none"
              />
            </>
          ) : (
            <>
              <FormRectangle
                className="hidden tablet:block w-full h-full"
                preserveAspectRatio="none"
              />
              <MFormRectangle
                className="tablet:hidden w-full h-full"
                preserveAspectRatio="none"
              />
            </>
          )}
        </ClientOnly>
      </motion.span>

      <motion.h3
        className="text-[#FDFFFF] font-normal text-[20px] tablet:text-[24px] desktop:text-[32px] uppercase z-50"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {summary ? t('career.form.title') : t('formSection.form.title')}
      </motion.h3>

      <Form.Root
        name="contact"
        noValidate
        onSubmit={handleSubmit}
        onChange={(event) => {
          const fieldName = (event.target as HTMLInputElement).name as FieldName
          if (!fieldName) return
          setFieldErrors((current) => {
            if (!current[fieldName]) return current
            const next = { ...current }
            delete next[fieldName]
            return next
          })
        }}
        className="flex flex-col gap-8"
      >
        {/* NAME + LAST NAME */}
        <FormWrapper>
          <FormField name="name">
            <FormLabel isRequired>
              {t('formSection.form.inputs.name.label')}
            </FormLabel>
            <FormInput
              required
              minLength={2}
              maxLength={50}
              pattern={NAME_PATTERN}
              autoComplete="given-name"
              asChild
              placeholder={t('formSection.form.inputs.name.placeholder')}
            />
            {fieldErrors.name && (
              <p className={fieldErrorClass}>{fieldErrors.name}</p>
            )}
          </FormField>

          <FormField name="lastName">
            <FormLabel isRequired={summary}>
              {t('formSection.form.inputs.lastName.label')}
            </FormLabel>
            <FormInput
              required={summary}
              minLength={2}
              maxLength={50}
              pattern={NAME_PATTERN}
              autoComplete="family-name"
              asChild
              placeholder={t('formSection.form.inputs.lastName.placeholder')}
            />
            {fieldErrors.lastName && (
              <p className={fieldErrorClass}>{fieldErrors.lastName}</p>
            )}
          </FormField>
        </FormWrapper>

        {/* EMAIL + TEL */}
        <FormWrapper>
          <FormField name="email">
            <FormLabel isRequired>
              {t('formSection.form.inputs.email.label')}
            </FormLabel>
            <FormInput
              type="email"
              required
              autoComplete="email"
              asChild
              placeholder={t('formSection.form.inputs.email.placeholder')}
            />
            {fieldErrors.email && (
              <p className={fieldErrorClass}>{fieldErrors.email}</p>
            )}
          </FormField>

          <FormField name="tel">
            <FormLabel isRequired={!summary}>
              {t('formSection.form.inputs.tel.label')}
            </FormLabel>
            <FormInput
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              pattern={PHONE_PATTERN}
              required={!summary}
              asChild
              placeholder={t('formSection.form.inputs.tel.placeholder')}
            />
            {fieldErrors.tel && (
              <p className={fieldErrorClass}>{fieldErrors.tel}</p>
            )}
          </FormField>
        </FormWrapper>

        {/* VACANCY */}
        {summary && (
          <FormWrapper>
            <FormField name="vacancy">
              <FormLabel isRequired>
                {t('career.form.inputs.vacancy.label')}
              </FormLabel>
              <FormSelect
                name="vacancy"
                required
                options={JOB_OPTIONS.map((opt) => ({
                  label: t(opt.labelKey),
                  value: opt.value,
                }))}
              />
              {fieldErrors.vacancy && (
                <p className={fieldErrorClass}>{fieldErrors.vacancy}</p>
              )}
            </FormField>
          </FormWrapper>
        )}

        {/* MESSAGE */}
        <FormField name="message">
          <FormLabel isRequired>
            {t('formSection.form.inputs.message.label')}
          </FormLabel>
          <FormTextarea
            required
            minLength={10}
            maxLength={2000}
            placeholder={
              summary
                ? t('career.form.inputs.message.placeholder')
                : t('formSection.form.inputs.message.placeholder')
            }
          />
          {fieldErrors.message && (
            <p className={fieldErrorClass}>{fieldErrors.message}</p>
          )}
        </FormField>

        {/* FILE */}
        {summary && (
          <FormWrapper>
            <FormField name="summary">
              <FormLabel isRequired>
                {t('career.form.inputs.summary.label')}
              </FormLabel>
              <FileUploadField />
              {fieldErrors.summary && (
                <p className={fieldErrorClass}>{fieldErrors.summary}</p>
              )}
            </FormField>
          </FormWrapper>
        )}

        {showCaptcha && (
          <div className="flex flex-col items-center">
            <TurnstileWidget
              key={captchaAttempt}
              action={summary ? 'career_form' : 'contact_form'}
              language={i18n.language?.startsWith('en') ? 'en' : 'uk'}
              onSuccess={sendForm}
              onError={handleCaptchaError}
            />
          </div>
        )}

        {captchaError && (
          <p className={`${errorMessagesStyle} text-center`}>
            {t('formSection.form.captcha.error')}
          </p>
        )}

        <Form.Submit asChild>
          <div className="flex justify-center">
            <ButtonPrimary disabled={isLoading || showCaptcha}>
              {isLoading || showCaptcha ? (
                <>
                  <LoaderCircle aria-hidden className="size-6 animate-spin" />
                  <span className="sr-only">
                    {t('formSection.form.captcha.checking')}
                  </span>
                </>
              ) : summary ? (
                t('career.form.button')
              ) : (
                t('formSection.form.button')
              )}
            </ButtonPrimary>
          </div>
        </Form.Submit>
      </Form.Root>
    </motion.div>
  )
}
