import SectionContainer from '@/components/container/SectionContainer'
import { ParagraphsList } from '@/components/lists/ParagraphsList'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const CompositionSection = () => {
  const { t } = useTranslation()

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.12 },
    }),
  }

  return (
    <SectionContainer as="section" className="flex gap-6 flex-col">
      {/* ===== TOP BLOCK ===== */}
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp} custom={0}>
          <SectionTitle
            title={t('systems.bpak.composition.title')}
            className="text-left max-w-[852px]"
          />
        </motion.div>

        <motion.div
          className="flex flex-col flex-1/3 justify-center gap-5"
          variants={fadeUp}
          custom={1}
        >
          {t('systems.bpak.composition.paragraphs', {
            returnObjects: true,
          }).map((paragraph: string, index: number) => (
            <Paragraph key={index} variant="grey" text={paragraph} />
          ))}
        </motion.div>
      </motion.div>

      {/* ===== LIST + IMAGE BLOCK ===== */}
      <motion.div
        className="flex flex-col lg:flex-row gap-6 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* LIST (всередині вже анімований через ParagraphsList) */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex-1 order-1 lg:order-0"
        >
          <ParagraphsList
            className="flex-1"
            paragraphs={t('systems.bpak.composition.items', {
              returnObjects: true,
            })}
          />
        </motion.div>

        {/* IMAGE */}
        <motion.img
          variants={fadeUp}
          custom={3}
          className="flex-1 w-max-[665px] h-max-[452px] object-contain order-0 tablet:order-1"
          src="/images/systems/bpka/d_bpka_composition@1x.jpg"
          alt={t('systems.bpak.composition.title')}
          srcSet="/images/systems/bpka/d_bpka_composition@1x.jpg 1x, /images/systems/bpka/d_bpka_composition@2x.jpg 2x"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </SectionContainer>
  )
}
