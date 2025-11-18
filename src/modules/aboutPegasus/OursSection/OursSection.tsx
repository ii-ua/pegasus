import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import Reliability from '@/assets/icons/reliability.svg?react'
import Fast from '@/assets/icons/fast.svg?react'
import Stability from '@/assets/icons/stability.svg?react'
import Locked from '@/assets/icons/locked.svg?react'
import { ArrowCard } from '@/components/cards'
import { motion } from 'framer-motion'

export const OursSection = () => {
  const { t } = useTranslation()

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.55,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <SectionContainer
      as="section"
      className="flex flex-col justify-center items-center"
    >
      {/* TITLE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        custom={0}
        className="w-full"
      >
        <SectionTitle
          title={`${t('oursAboutPegasus.title')}`}
          className="text-left w-full"
        />
      </motion.div>

      <div className="w-full flex flex-col gap-[60px] ">
        {/* FIRST ROW */}
        <motion.div
          className="flex flex-col tablet:flex-row gap-4 justify-between items-end w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} custom={1}>
            <ArrowCard
              title={t('oursAboutPegasus.cards.reliability.title')}
              description={t('oursAboutPegasus.cards.reliability.description')}
              arrowClassName="hidden tablet:block"
              icon={
                <Reliability
                  className="w-full h-full"
                  preserveAspectRatio="none"
                />
              }
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={2}>
            <ArrowCard
              title={t('oursAboutPegasus.cards.fast.title')}
              description={t('oursAboutPegasus.cards.fast.description')}
              arrowClassName=" max-tablet:rotate-[0deg] max-tablet:left-0 max-tablet:top-[100%]"
              arrowPosition="bottomLeft"
              className="ml-8 tablet:ml-0"
              icon={
                <Fast className="w-full h-full" preserveAspectRatio="none" />
              }
            />
          </motion.div>
        </motion.div>

        {/* BIG LOGO */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <img src="big_logo.svg" />
        </motion.div>

        {/* SECOND ROW */}
        <motion.div
          className="flex flex-col tablet:flex-row gap-4 justify-between w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeUp} custom={3}>
            <ArrowCard
              title={t('oursAboutPegasus.cards.stability.title')}
              className="ml-8 tablet:ml-0"
              description={t('oursAboutPegasus.cards.stability.description')}
              arrowClassName="max-tablet:rotate-[180deg] max-tablet:top-[-17] max-tablet:right-0"
              arrowPosition="topRight"
              icon={
                <Stability
                  className="w-full h-full"
                  preserveAspectRatio="none"
                />
              }
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={4}>
            <ArrowCard
              title={t('oursAboutPegasus.cards.locked.title')}
              description={t('oursAboutPegasus.cards.locked.description')}
              arrowClassName="hidden tablet:block"
              arrowPosition="topLeft"
              icon={
                <Locked className="w-full h-full" preserveAspectRatio="none" />
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
