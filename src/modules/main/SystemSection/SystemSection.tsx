import { ImageCard } from '@/components/cards'
import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'

export const SystemSection = ({ id }: { id?: string }) => {
  const { t } = useTranslation()
  return (
    <SectionContainer id={id} as="section" className="flex flex-col gap-[42px]">
      <div className="flex">
        <SectionTitle
          title={`// ${t('systemMain.title')}`}
          className="text-left flex-2"
        />
        <p className="text-white font[300] text-[24px] uppercase flex-1">
          {t('systemMain.description')}
        </p>
      </div>
      <div className="flex justify-between">
        <ImageCard
          title={t('systemMain.cards.education.title')}
          image1x="/images/main/system/d_education@1x.jpg"
          image2x="/images/main/system/d_education@2x.jpg"
          description={t('systemMain.cards.education.description')}
          href="systems/education"
        />
        <div className="flex gap-6">
          <ImageCard
            title={t('systemMain.cards.bpla.title')}
            image1x="/images/main/system/d_bpla@1x.jpg"
            image2x="/images/main/system/d_bpla@2x.jpg"
            description={t('systemMain.cards.bpla.description')}
            href="systems/bpla"
          />
          <ImageCard
            title={t('systemMain.cards.bpak.title')}
            image1x="/images/main/system/d_bpka@1x.jpg"
            image2x="/images/main/system/d_bpka@2x.jpg"
            description={t('systemMain.cards.bpak.description')}
            href="systems/bpak"
          />
        </div>
      </div>
    </SectionContainer>
  )
}
