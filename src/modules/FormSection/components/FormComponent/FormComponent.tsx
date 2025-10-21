import FormRectangle from '@/assets/shapes/form-rectangle.svg?react'
import { Form } from 'radix-ui'
import { useTranslation } from 'react-i18next'
import { FormLabel } from '../FormLabel'
import { FormInput } from '../FormInput'
import { FormField } from '../FormField'
import { FormWrapper } from '../FormWrapper'
import { FormTextarea } from '../FormTextarea'
import { ButtonPrimary } from '@/components/buttons/ButtonPrimary'
export const FormComponent = () => {
  const { t } = useTranslation()
  return (
    <div className="relative w-full p-8 flex flex-col gap-12">
      <span
        aria-hidden
        className=" pointer-events-none absolute inset-0 -z-10 block"
      >
        <FormRectangle
          className="block w-full h-full bg-none"
          preserveAspectRatio="none" // <-- ключове!
        />
      </span>
      <h3 className="text-white font-medium text-[32px] uppercase z-50">
        {t('formSection.form.title')}
      </h3>
      <Form.Root className="flex flex-col gap-8">
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
            <FormLabel>{t('formSection.form.inputs.lastName.label')}</FormLabel>
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
        <FormWrapper>
          <FormField name="company">
            <FormLabel>{t('formSection.form.inputs.company.label')}</FormLabel>
            <Form.Message match="valueMissing" className="text-white">
              Please enter your company name
            </Form.Message>
            <Form.Message match="typeMismatch" className="text-white">
              Please provide a valid company name
            </Form.Message>
            <FormInput
              type="text"
              required
              asChild
              placeholder={t('formSection.form.inputs.company.placeholder')}
            />
          </FormField>
          <FormField name="position">
            <FormLabel>{t('formSection.form.inputs.position.label')}</FormLabel>
            <Form.Message match="valueMissing" className="text-white">
              Please enter your position
            </Form.Message>
            <Form.Message match="typeMismatch" className="text-white">
              Please provide a valid position
            </Form.Message>
            <FormInput
              type="text"
              required
              asChild
              placeholder={t('formSection.form.inputs.position.placeholder')}
            />
          </FormField>
        </FormWrapper>
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
        <Form.Submit asChild>
          <div className="flex justify-center">
            <ButtonPrimary className="text-white">
              {t('formSection.form.button')}
            </ButtonPrimary>
          </div>
        </Form.Submit>
      </Form.Root>
    </div>
  )
}
