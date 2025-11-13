import FormRectangle from '@/assets/shapes/form-rectangle.svg?react'
import { Form } from 'radix-ui'
import { useTranslation } from 'react-i18next'
import { FormLabel } from '../FormLabel'
import { FormInput } from '../FormInput'
import { FormField } from '../FormField'
import { FormWrapper } from '../FormWrapper'
import { FormTextarea } from '../FormTextarea'
import { ButtonPrimary } from '@/components/buttons/ButtonPrimary'
import { motion } from 'motion/react'

const errorMessagesStyle =
  'text-[#FF6600] text-[12px] tablet:text-[14px] desktop:text-[16px] font-normal'

export const FormComponent = () => {
  const { t } = useTranslation()
  return (
    <motion.div
      className="relative w-full p-8 flex flex-col gap-6 tablet:gap-[43px] desktop:gap-[53px]"
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
        <FormRectangle
          className="block w-full h-full bg-none"
          preserveAspectRatio="none"
        />
      </motion.span>

      <motion.h3
        className="text-[#FDFFFF] font-normal text-[20px] tablet:text-[24px] desktop:text-[32px] uppercase z-50"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {t('formSection.form.title')}
      </motion.h3>

      <Form.Root className="flex flex-col gap-8">
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
              <Form.Message match="valueMissing" className={errorMessagesStyle}>
                {t('formSection.form.validations.name.valueMissing')}
              </Form.Message>
              <Form.Message match="typeMismatch" className={errorMessagesStyle}>
                {t('formSection.form.validations.name.typeMismatch')}
              </Form.Message>
              <FormInput
                type="text"
                required
                asChild
                placeholder={t('formSection.form.inputs.name.placeholder')}
              />
            </FormField>
            <FormField name="lastName">
              <FormLabel>
                {t('formSection.form.inputs.lastName.label')}
              </FormLabel>

              <FormInput
                type="text"
                required
                asChild
                placeholder={t('formSection.form.inputs.lastName.placeholder')}
              />
            </FormField>
          </FormWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FormWrapper>
            <FormField name="email">
              <FormLabel isRequired>
                {t('formSection.form.inputs.email.label')}
              </FormLabel>
              <Form.Message match="valueMissing" className={errorMessagesStyle}>
                {t('formSection.form.validations.email.valueMissing')}
              </Form.Message>
              <Form.Message match="typeMismatch" className={errorMessagesStyle}>
                {t('formSection.form.validations.email.typeMismatch')}
              </Form.Message>
              <FormInput
                type="email"
                required
                asChild
                placeholder={t('formSection.form.inputs.email.placeholder')}
              />
            </FormField>
            <FormField name="tel">
              <FormLabel isRequired>
                {t('formSection.form.inputs.tel.label')}
              </FormLabel>
              <Form.Message match="valueMissing" className={errorMessagesStyle}>
                {t('formSection.form.validations.tel.valueMissing')}
              </Form.Message>
              <Form.Message match="typeMismatch" className={errorMessagesStyle}>
                {t('formSection.form.validations.tel.typeMismatch')}
              </Form.Message>
              <FormInput
                type="tel"
                required
                asChild
                placeholder={t('formSection.form.inputs.tel.placeholder')}
              />
            </FormField>
          </FormWrapper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FormField name="message">
            <FormLabel isRequired>
              {t('formSection.form.inputs.message.label')}
            </FormLabel>
            <Form.Message match="valueMissing" className={errorMessagesStyle}>
              {t('formSection.form.validations.message.valueMissing')}
            </Form.Message>
            <Form.Message match="typeMismatch" className={errorMessagesStyle}>
              {t('formSection.form.validations.message.typeMismatch')}
            </Form.Message>
            <FormTextarea
              required
              placeholder={t('formSection.form.inputs.message.placeholder')}
            />
          </FormField>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Form.Submit asChild>
            <div className="flex justify-center">
              <ButtonPrimary>{t('formSection.form.button')}</ButtonPrimary>
            </div>
          </Form.Submit>
        </motion.div>
      </Form.Root>
    </motion.div>
  )
}
