import SectionContainer from '@/components/container/SectionContainer'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { FormComponent } from './components/FormComponent'

export const FormSection = ({summary = false}: Readonly<{summary?: boolean}>) => {
  const { t } = useTranslation()
  return (
    <SectionContainer id="contacts" as="section" className="flex flex-col">
      {!summary && <div className="flex flex-col gap-4 sm:flex-row items-center">
        <SectionTitle
          title={t('formSection.title')}
          className="text-left flex-2"
        />
        <p className="text-[#D9D9D9] sm:max-w-[320px] font-normal text-[16px] tablet:text-[20px] desktop:text-[24px] first-letter:uppercase flex-1">
          {t('formSection.description')}
        </p>
      </div>}
      <div className="flex justify-between">
        <FormComponent summary={summary} />
      </div>
    </SectionContainer>
  )
}
