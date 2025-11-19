import SectionContainer from '@/components/container/SectionContainer'
import { ContactList } from '@/components/lists/ContactList/ContactList'
import { Paragraph } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex pt-[104px] tablet:pt-[122px] desktop:pt-[170px] flex-col justify-center items-left gap-6"
    >
      <Paragraph
        className="font-light"
        variant="grey"
        text={t('navMain.contact')}
      />
      <ContactList items={t('contacts.items', { returnObjects: true })} />
    </SectionContainer>
  )
}
