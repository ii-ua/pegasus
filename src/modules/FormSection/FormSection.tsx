import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { FormComponent } from './components/FormComponent'

export const FormSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer as="section" className="flex flex-col gap-[42px]">
      <div className="flex items-center">
        <SectionTitle
          title={`// ${t('formSection.title')}`}
          className="text-left flex-2"
        />
        <p className="text-white font[300] text-[24px] uppercase flex-1">
          {t('formSection.description')}
        </p>
      </div>
      <div className="flex justify-between">
        <FormComponent />
      </div>
    </SectionContainer>
  )
}
