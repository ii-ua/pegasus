import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const BpakHero = () => {
  const { t } = useTranslation()

  // Технічний fade-up
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

  // Картинка — shutter reveal (маска відкривається)
  const imageReveal = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <SectionContainer
      as="section"
      className="flex pt-[106px] tablet:pt-[122px] desktop:pt-[166px] flex-col justify-center items-left gap-[54px] tablet:gap-[64px] desktop:gap-[82px]"
    >
      {/* === TEXT TOP === */}
      <motion.div
        className="flex flex-col gap-5 desktop:gap-6 max-w-[811px] items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUp} custom={0}>
          <Paragraph
            className="font-light"
            variant="grey"
            text={`${t('navMain.systems')} / ${t('navMain.bpak')}`}
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <SectionTitle
            title={t('systems.bpak.hero.title')}
            className="text-left w-full"
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <Paragraph text={t('systems.bpak.hero.paragraphs.0')} />
        </motion.div>
      </motion.div>

      {/* === IMAGE (shutter reveal) === */}

      <motion.img
        variants={imageReveal}
        className="w-full"
        width={1069}
        src="/plug.png"
        alt="Bpla pegasus arms 25"
        loading="lazy"
        decoding="async"
      />

      {/* === BOTTOM PARAGRAPH === */}
      <motion.div
        className="w-full flex flex-col justify-end gap-5 items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUp} custom={3}>
          <Paragraph
            className="max-w-[798px] desktop:max-w-[1011px]"
            variant="grey"
            text={t('systems.bpak.hero.paragraphs.1')}
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
