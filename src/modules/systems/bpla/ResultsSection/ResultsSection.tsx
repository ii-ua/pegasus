import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const ResultsSection = () => {
  const { t } = useTranslation()
  const paragraphs: string[] = t('systems.bpla.results.paragraphs', {
    returnObjects: true,
  })

  // TITLE — технічний slide-left
  const titleAnim = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  // TEXT — інженерний чистий fade (без руху)
  const textFade = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
        delay: i * 0.08,
      },
    }),
  }

  // IMAGE — shutter reveal (маска зліва → направо)
  const imageReveal = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  // MOBILE IMAGE — shutter bottom → top
  const imageRevealMobile = {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: {
      clipPath: 'inset(0 0 0 0)',
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  return (
    <SectionContainer
      as="section"
      className="flex flex-col justify-center items-center gap-6 tablet:gap-6 desktop:gap-6"
    >
      {/* === TITLE === */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleAnim}
        className="w-full"
      >
        <SectionTitle
          title={`${t('systems.bpla.results.title')}`}
          className="text-left w-full"
        />
      </motion.div>

      {/* === DESKTOP/TABLET === */}
      <motion.div
        className="hidden tablet:flex gap-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.ul className="flex flex-1 flex-col gap-6">
          {paragraphs.map((text, index) => (
            <motion.li key={index} variants={textFade} custom={index}>
              <Paragraph text={text} variant="grey" />
            </motion.li>
          ))}
        </motion.ul>

        <motion.img
          variants={imageReveal}
          className="flex-1"
          width={666}
          src="/images/systems/bpla/d_bpla_results@1x.jpg"
          alt={t('systems.bpla.results.title')}
          srcSet="/images/systems/bpla/d_bpla_results@1x.jpg 1x, /images/systems/bpla/d_bpla_results@2x.jpg 2x"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* === MOBILE === */}
      <motion.div
        className="flex tablet:hidden flex-col gap-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.ul className="flex flex-col gap-6">
          {paragraphs.map((text, index) => (
            <motion.li
              key={index}
              className="flex flex-col gap-6"
              variants={textFade}
              custom={index}
            >
              <Paragraph text={text} variant="grey" />

              {index === Math.floor(paragraphs.length / 2) - 1 && (
                <motion.img
                  variants={imageRevealMobile}
                  className="w-full"
                  src="/images/systems/bpla/d_bpla_results@1x.jpg"
                  alt={t('systems.bpla.results.title')}
                  srcSet="/images/systems/bpla/d_bpla_results@1x.jpg 1x, /images/systems/bpla/d_bpla_results@2x.jpg 2x"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </SectionContainer>
  )
}
