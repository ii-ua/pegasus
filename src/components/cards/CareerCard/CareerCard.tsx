import LocationIcon from '@/assets/icons/location.svg?react'
import { ButtonPrimary } from '@/components/buttons/ButtonPrimary'
import { Paragraph, SubTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
export interface CareerCardProps {
  location?: string
  title: string
}
export const CareerCard = ({ location, title }: CareerCardProps) => {
  const { t } = useTranslation()
  return (
    <li
      className="p-6 flex flex-col gap-6 w-full"
      style={{
        border: '2px solid',
        borderImageSource:
          'linear-gradient(90.79deg, #F5F5F5 0.08%, #FDFFFF 100%)',
        borderImageSlice: 1,
        borderRadius: '8px',
      }}
    >
      {location && (
        <div className="flex ">
          <LocationIcon className="w-[42px] h-[42px]" />
          <Paragraph text={location} />
        </div>
      )}
      <SubTitle title={title} />
      <div className="flex gap-6 w-full">
        <ButtonPrimary variant="secondary" className="flex-1  max-w-full">
          {t('career.buttons.more')}
        </ButtonPrimary>
        <ButtonPrimary className="flex-1 max-w-full">
          {t('career.buttons.apply')}
        </ButtonPrimary>
      </div>
    </li>
  )
}
