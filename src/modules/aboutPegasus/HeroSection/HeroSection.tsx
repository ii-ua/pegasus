import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SectionContainer from '@/components/container/SectionContainer'

export const HeroSection = () => {
  const { t } = useTranslation()

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
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

  return (
    <SectionContainer
      as="section"
      className="flex pt-[104px] tablet:pt-[122px] desktop:pt-[166px] flex-col justify-center gap-[54px] tablet:gap-[65px] desktop:gap-[82px] items-center"
    >
      {/* ======= ВЕРХНІ ТЕКСТОВІ БЛОКИ ======= */}
      <motion.div
        className="w-full flex flex-col gap-5 desktop:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUp} custom={0}>
          <Paragraph
            className="font-light"
            variant="grey"
            text={t('navMain.aboutUs')}
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <SectionTitle
            title={`${t('heroAboutPegasus.title')}`}
            className="text-left w-full"
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <Paragraph
            className="w-full max-w-[798px] desktop:max-w-[1011px]"
            variant="grey"
            text={t('heroAboutPegasus.paragraphs.0')}
          />
        </motion.div>
      </motion.div>

      {/* ======= КАРТИНКА ======= */}
      <motion.video
        autoPlay
        playsInline
        loop
        muted
        preload="auto"
        className="w-full object-cover"
        src="/video/about_us.mp4"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
          delay: 0.25,
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      {/* ======= НИЖНІЙ АБЗАЦ ======= */}
      <motion.div
        className="w-full flex justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp} custom={3}>
          <Paragraph
            className="w-full max-w-[798px] desktop:max-w-[1011px]"
            variant="grey"
            text={t('heroAboutPegasus.paragraphs.1')}
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
