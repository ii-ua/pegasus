import { useState } from 'react'
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
import { sendFormEmail } from '@/server/sendFormEmail'

export const errorMessagesStyle =
  'text-[#FF6600] text-[12px] tablet:text-[14px] desktop:text-[16px] font-normal'

export const FormComponent = ({ summary = false }: { summary?: boolean }) => {
  const { t } = useTranslation()
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    formData.append('target', summary ? 'hr' : 'info')

    const vacancy = formData.get('vacancy')?.toString()
    if (vacancy) {
      const job = JOB_OPTIONS.find((opt) => opt.value === vacancy)
      if (job) {
        formData.set('vacancy', t(job.labelKey))
      }
    }

    try {
      await sendFormEmail({ data: formData })
      setIsSent(true)
    } catch (err) {
      console.error(err)
      alert('Помилка відправки форми')
    } finally {
      setIsLoading(false)
    }
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
        onSubmit={handleSubmit}
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
              asChild
              placeholder={t('formSection.form.inputs.name.placeholder')}
            />
          </FormField>

          <FormField name="lastName">
            <FormLabel isRequired={summary}>
              {t('formSection.form.inputs.lastName.label')}
            </FormLabel>
            <FormInput
              required={summary}
              asChild
              placeholder={t('formSection.form.inputs.lastName.placeholder')}
            />
          </FormField>
        </FormWrapper>

        {/* EMAIL + TEL */}
        <FormWrapper>
          <FormField name="email">
            <FormLabel isRequired>
              {t('formSection.form.inputs.email.label')}
            </FormLabel>
            <FormInput type="email" required asChild />
          </FormField>

          <FormField name="tel">
            <FormLabel isRequired={!summary}>
              {t('formSection.form.inputs.tel.label')}
            </FormLabel>
            <FormInput type="tel" required={!summary} asChild />
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
            </FormField>
          </FormWrapper>
        )}

        {/* MESSAGE */}
        <FormField name="message">
          <FormLabel isRequired>
            {t('formSection.form.inputs.message.label')}
          </FormLabel>
          <FormTextarea required />
        </FormField>

        {/* FILE */}
        {summary && (
          <FormWrapper>
            <FormField name="summary">
              <FormLabel isRequired>
                {t('career.form.inputs.summary.label')}
              </FormLabel>
              <FileUploadField />
            </FormField>
          </FormWrapper>
        )}

        <Form.Submit asChild>
          <div className="flex justify-center">
            <ButtonPrimary disabled={isLoading}>
              {isLoading
                ? 'Відправка…'
                : summary
                  ? t('career.form.button')
                  : t('formSection.form.button')}
            </ButtonPrimary>
          </div>
        </Form.Submit>
      </Form.Root>
    </motion.div>
  )
}
