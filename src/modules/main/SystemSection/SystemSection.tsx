import { ImageCard } from '@/components/cards'
import SectionContainer from '@/components/container/SectionContainer'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

export const SystemSection = ({ id }: { id?: string }) => {
  const { t } = useTranslation()

  return (
    <SectionContainer id={id} as="section" className="flex gap-8 flex-col">
      <motion.div
        className="flex flex-col gap-4 sm:flex-row items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionTitle
          title={`${t('systemMain.title')}`}
          className="text-left flex-2"
        />
        <motion.p
          className=" text-[#D9D9D9] sm:max-w-[526px] desktop:max-w-[665px] text-[16px] tablet:text-[20px] first-letter:uppercase desktop:text-[24px]  flex-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {t('systemMain.description')}
        </motion.p>
      </motion.div>

      <motion.div
        className="flex gap-4 tablet:gap-6 flex-col justify-center items-center md:flex-row"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <ImageCard
            title={t('systemMain.cards.bpla.title')}
            image1x="/images/main/system/d_bpla@1x.avif"
            image2x="/images/main/system/d_bpla@2x.avif"
            description={t('systemMain.cards.bpla.description')}
            href="systems/bpla"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
        >
          <ImageCard
            title={t('systemMain.cards.bpak.title')}
            image1x="/images/main/system/d_bpka@1x.avif"
            image2x="/images/main/system/d_bpka@2x.avif"
            description={t('systemMain.cards.bpak.description')}
            href="systems/bpak"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <ImageCard
            title={t('systemMain.cards.education.title')}
            image1x="/images/main/system/d_education@1x.avif"
            image2x="/images/main/system/d_education@2x.avif"
            description={t('systemMain.cards.education.description')}
            href="systems/education"
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
