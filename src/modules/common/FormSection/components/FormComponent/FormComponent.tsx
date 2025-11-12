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

export const FormComponent = () => {
  const { t } = useTranslation()
  return (
    <motion.div
      className="relative w-full p-8 flex flex-col gap-12"
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
        className="text-white font-medium text-[32px] uppercase z-50"
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
              <FormLabel>{t('formSection.form.inputs.name.label')}</FormLabel>
              <Form.Message match="valueMissing" className="text-white">
                Please enter your email
              </Form.Message>
              <Form.Message match="typeMismatch" className="text-white">
                Please provide a valid email
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
              <Form.Message match="valueMissing" className="text-white">
                Please enter your last name
              </Form.Message>
              <Form.Message match="typeMismatch" className="text-white">
                Please provide a valid last name
              </Form.Message>
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
              <FormLabel>{t('formSection.form.inputs.email.label')}</FormLabel>
              <Form.Message match="valueMissing" className="text-white">
                Please enter your email
              </Form.Message>
              <Form.Message match="typeMismatch" className="text-white">
                Please provide a valid email
              </Form.Message>
              <FormInput
                type="email"
                required
                asChild
                placeholder={t('formSection.form.inputs.email.placeholder')}
              />
            </FormField>
            <FormField name="tel">
              <FormLabel>{t('formSection.form.inputs.tel.label')}</FormLabel>
              <Form.Message match="valueMissing" className="text-white">
                Please enter your phone number
              </Form.Message>
              <Form.Message match="typeMismatch" className="text-white">
                Please provide a valid phone number
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
            <FormLabel>{t('formSection.form.inputs.message.label')}</FormLabel>
            <Form.Message match="valueMissing" className="text-white">
              Please enter your message
            </Form.Message>
            <Form.Message match="typeMismatch" className="text-white">
              Please provide a valid message
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
