import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const EducationHero = () => {
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

  return (
    <SectionContainer
      as="section"
      className="flex pt-[106px] tablet:pt-[122px] desktop:pt-[170px] flex-col justify-center items-left gap-[54px] tablet:gap-[64px] desktop:gap-[82px]"
    >
      {/* === TEXT BLOCK === */}
      <motion.div
        className="flex flex-col gap-5 desktop:gap-6 max-w-[780px] desktop:max-w-[940px] items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp} custom={0}>
          <Paragraph
            className="font-ligh"
            variant="grey"
            text={`${t('navMain.systems')} / ${t('navMain.education')}`}
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <SectionTitle
            title={t('systems.education.hero.title')}
            className="text-left w-full"
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <Paragraph
            variant="grey"
            text={t('systems.education.hero.description')}
          />
        </motion.div>
      </motion.div>

      {/* === IMAGE — shutter reveal === */}
      <motion.div
        className="w-full"
        whileInView={{
          clipPath: 'inset(0 0% 0 0)',
          transition: { duration: 0.65, ease: 'easeOut' },
        }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img
          src="/plug.png"
          alt="Bpla pegasus arms 25"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </SectionContainer>
  )
}
