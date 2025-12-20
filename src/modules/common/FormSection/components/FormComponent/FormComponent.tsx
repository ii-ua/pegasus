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

export const errorMessagesStyle =
  'text-[#FF6600] text-[12px] tablet:text-[14px] desktop:text-[16px] font-normal'

export const FormComponent = ({summary = false}: Readonly<{summary?: boolean}>) => {
  const { t } = useTranslation()
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
        {summary ? (
        <>
          <VacancyRectangle
            className="w-full h-full bg-none hidden tablet:block"
            preserveAspectRatio="none"
          />
          <MVacancyRectangle
            className="block w-full h-full bg-none tablet:hidden"
            preserveAspectRatio="none"
          />
        </>
      ) : (
        <>
          <FormRectangle
            className="w-full h-full bg-none hidden tablet:block"
            preserveAspectRatio="none"
          />
          <MFormRectangle
            className="block w-full h-full bg-none tablet:hidden"
            preserveAspectRatio="none"
          />
        </>
      )}
      </motion.span>

      <motion.h3
        className="text-[#FDFFFF] font-normal text-[20px] tablet:text-[24px] desktop:text-[32px] uppercase z-50"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {summary ? t('career.form.title') : t('formSection.form.title')}
      </motion.h3>

      <Form.Root
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FormWrapper>
            <FormField name="name">
              <FormLabel isRequired>
                {t('formSection.form.inputs.name.label')}
              </FormLabel>
              <div className="flex flex-col gap-3.5 w-full">
                <FormInput
                  type="text"
                  required
                  asChild
                  placeholder={t('formSection.form.inputs.name.placeholder')}
                />
                <Form.Message
                  match="valueMissing"
                  className={errorMessagesStyle}
                >
                  {t('formSection.form.validations.name.valueMissing')}
                </Form.Message>
                <Form.Message
                  match="typeMismatch"
                  className={errorMessagesStyle}
                >
                  {t('formSection.form.validations.name.typeMismatch')}
                </Form.Message>
              </div>
            </FormField>
            <FormField name="lastName">
              <FormLabel isRequired={summary}>
                {t('formSection.form.inputs.lastName.label')}
              </FormLabel>
              <div className="flex flex-col gap-3.5 w-full">
                <FormInput
                  type="text"
                  required={summary}
                  asChild
                  placeholder={t('formSection.form.inputs.lastName.placeholder')}
                />
                <Form.Message
                  match="valueMissing"
                  className={errorMessagesStyle}
                >
                  {t('formSection.form.validations.lastName.valueMissing')}
                </Form.Message>
                <Form.Message
                  match="typeMismatch"
                  className={errorMessagesStyle}
                >
                  {t('formSection.form.validations.lastName.typeMismatch')}
                </Form.Message>
              </div>
            </FormField>
          </FormWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FormWrapper>
            <FormField name="email">
              <FormLabel isRequired>
                {t('formSection.form.inputs.email.label')}
              </FormLabel>
              <div className="flex flex-col gap-3.5 w-full">
                <FormInput
                  type="email"
                  required
                  asChild
                  placeholder={t('formSection.form.inputs.email.placeholder')}
                />
                <Form.Message
                  match="valueMissing"
                  className={errorMessagesStyle}
                >
                  {t('formSection.form.validations.email.valueMissing')}
                </Form.Message>
                <Form.Message
                  match="typeMismatch"
                  className={errorMessagesStyle}
                >
                  {t('formSection.form.validations.email.typeMismatch')}
                </Form.Message>
              </div>
            </FormField>
            <FormField name="tel">
              <FormLabel isRequired={!summary}>
                {t('formSection.form.inputs.tel.label')}
              </FormLabel>
              <div className="flex flex-col gap-3.5 w-full">
                <FormInput
                  type="tel"
                  required={!summary}
                  asChild
                  placeholder={t('formSection.form.inputs.tel.placeholder')}
                />
                <Form.Message
                  match="valueMissing"
                  className={errorMessagesStyle}
                >
                  {t('formSection.form.validations.tel.valueMissing')}
                </Form.Message>
                <Form.Message
                  match="typeMismatch"
                  className={errorMessagesStyle}
                >
                  {t('formSection.form.validations.tel.typeMismatch')}
                </Form.Message>
              </div>
            </FormField>
          </FormWrapper>
        </motion.div>

        {summary && <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FormWrapper>
            <FormField name="vacancy">
              <FormLabel isRequired>
                {t('career.form.inputs.vacancy.label')}
              </FormLabel>
                <FormSelect
                  name="vacancy"
                  required
                  placeholder={t('career.form.inputs.vacancy.placeholder')}
                  options={JOB_OPTIONS.map(opt => ({
                      label: t(opt.labelKey),
                      value: opt.value,
                    }))}
                />
            </FormField>
          </FormWrapper>
        </motion.div>}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <FormField name="message">
            <FormLabel isRequired>
              {t('formSection.form.inputs.message.label')}
            </FormLabel>
            <div className="flex flex-col gap-3.5 w-full">
              <FormTextarea
                required
                placeholder={summary ? t('career.form.inputs.message.placeholder') : t('formSection.form.inputs.message.placeholder')}
              />
              <Form.Message match="valueMissing" className={errorMessagesStyle}>
                {t('formSection.form.validations.message.valueMissing')}
              </Form.Message>
              <Form.Message match="typeMismatch" className={errorMessagesStyle}>
                {t('formSection.form.validations.message.typeMismatch')}
              </Form.Message>
            </div>
          </FormField>
        </motion.div>

        {summary && <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <FormWrapper>
            <FormField name="summary">
              <FormLabel isRequired>
                {t('career.form.inputs.summary.label')}
              </FormLabel>

              <FileUploadField />
              
            </FormField>
          </FormWrapper>
        </motion.div>}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Form.Submit asChild>
            <div className="flex justify-center">
              <ButtonPrimary>{summary ? t('career.form.button') : t('formSection.form.button')}</ButtonPrimary>
            </div>
          </Form.Submit>
        </motion.div>

        
      </Form.Root>
    </motion.div>
  )
}
