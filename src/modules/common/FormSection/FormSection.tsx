import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { FormComponent } from './components/FormComponent'

export const FormSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer id="contacts" as="section" className="flex flex-col">
      <div className="flex flex-col tablet:flex-row items-center">
        <SectionTitle
          title={`${t('formSection.title')}`}
          className="text-left flex-2"
        />
        <p className="text-[#D9D9D9] font-normal text-[16px] tablet:text-[20px] desktop:text-[24px] uppercase flex-1">
          {t('formSection.description')}
        </p>
      </div>
      <div className="flex justify-between">
        <FormComponent />
      </div>
    </SectionContainer>
  )
}
