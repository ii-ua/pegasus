import { ImageCard } from '@/components/cards'
import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

export const SystemSection = ({ id }: { id?: string }) => {
  const { t } = useTranslation()

  return (
    <SectionContainer id={id} as="section" className="flex gap-8 flex-col">
      <motion.div
        className="flex flex-col gap-4 tablet:flex-row items-center"
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
          className=" text-[#D9D9D9] text-[16px] tablet:text-[20px] desktop:text-[24px] uppercase flex-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {t('systemMain.description')}
        </motion.p>
      </motion.div>

      <motion.div
        className="flex justify-between gap-4 flex-col tablet:flex-row"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
      >
        <div className="flex gap-4 tablet:gap-6 flex-col tablet:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <ImageCard
              title={t('systemMain.cards.bpla.title')}
              image1x="/images/main/system/d_bpla@1x.png"
              image2x="/images/main/system/d_bpla@2x.png"
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
              image1x="/images/main/system/d_bpka@1x.png"
              image2x="/images/main/system/d_bpka@2x.png"
              description={t('systemMain.cards.bpak.description')}
              href="systems/bpak"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <ImageCard
            title={t('systemMain.cards.education.title')}
            image1x="/images/main/system/d_education@1x.png"
            image2x="/images/main/system/d_education@2x.png"
            description={t('systemMain.cards.education.description')}
            href="systems/education"
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
