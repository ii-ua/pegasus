import { SectionContainer } from '@/components/container'
import { ParagraphsList } from '@/components/lists/ParagraphsList'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const CareersHero = () => {
  const { t } = useTranslation()

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: 'easeOut',
        delay: i * 0.12,
      },
    }),
  }

  const imageReveal = {
    visible: {
      clipPath: 'inset(0 0 0 0)',
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  }

  return (
    <SectionContainer
      as="section"
      className="flex pt-[106px] tablet:pt-[122px] desktop:pt-[170px] flex-col justify-center items-left gap-[54px] tablet:gap-[64px] desktop:gap-6"
    >
      {/* TEXT BLOCK */}
      <motion.div
        className="flex flex-col gap-5 desktop:gap-6 max-w-[798px] desktop:max-w-[1011px] items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUp} custom={0}>
          <Paragraph
            variant="grey"
            className="font-light"
            text={t('navMain.career')}
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <SectionTitle
            title={`${t('career.hero.title')}`}
            className="text-left max-w-[600px] desktop:max-w-[760px]"
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <Paragraph variant="grey" text={t('career.hero.paragraphs.0')} />
        </motion.div>

        <motion.div variants={fadeUp} custom={3}>
          <Paragraph variant="light" text={t('career.hero.adventages.title')} />
        </motion.div>

        <motion.div variants={fadeUp} custom={4}>
          <ParagraphsList
            className="pl-2.5"
            classNameItem="border-none p-0 tablet:p-0 desktop:p-0"
            paragraphs={t('career.hero.adventages.items', {
              returnObjects: true,
            })}
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={5}>
          <Paragraph variant="grey" text={t('career.hero.paragraphs.1')} />
        </motion.div>
      </motion.div>

      {/* IMAGE REVEAL */}
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        variants={imageReveal}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          className="w-full"
          src="/plug.png"
          alt="Bpla pegasus arms 25"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </SectionContainer>
  )
}
