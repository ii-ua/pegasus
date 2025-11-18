import { StatCard } from '@/components/cards'
import { SectionContainer } from '@/components/container'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import Mina from '@/assets/icons/mina.svg?react'
import Munitions from '@/assets/icons/munitions.svg?react'
import Delivery from '@/assets/icons/delivery.svg?react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const BplaHero = () => {
  const { t } = useTranslation()
  const imageRef = useRef(null)

  // ==== ПАРАЛАКС ДЛЯ КАРТИНКИ ====
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })

  // злегка піднімається / опускається
  const y = useTransform(scrollYProgress, [0, 1], ['-10px', '10px'])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1])

  // ==== ТЕКСТ FADE UP ====
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

  // ==== АНІМАЦІЯ SVG ІКОН ====
  const svgAnim = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <SectionContainer
      as="section"
      className="flex pt-[104px] tablet:pt-[122px] desktop:pt-[166px] flex-col justify-center items-center gap-[54px] tablet:gap-[64px] desktop:gap-[82px]"
    >
      {/* ===== TEXT BLOCK ===== */}
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
            text={`${t('navMain.systems')} / ${t('navMain.bpla')}`}
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <SectionTitle
            title={`${t('systems.bpla.hero.title')}`}
            className="text-left text-[37px] w-full"
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <Paragraph variant="grey" text={t('systems.bpla.hero.description')} />
        </motion.div>
      </motion.div>

      {/* ===== PARALLAX IMAGE ===== */}
      <motion.picture
        ref={imageRef}
        style={{ y, opacity }}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <source
          media="(max-width: 639px)"
          srcSet="
            /images/systems/bpla/m_bpla_specifications@1x.png 1x,
            /images/systems/bpla/m_bpla_specifications@2x.png 2x
          "
        />

        <source
          media="(max-width: 1133px)"
          srcSet="
            /images/systems/bpla/t_bpla_specifications@1x.png 1x,
            /images/systems/bpla/t_bpla_specifications@2x.png 2x
          "
        />

        <img
          src="/images/systems/bpla/d_bpla_specifications@1x.png"
          srcSet="/images/systems/bpla/d_bpla_specifications@2x.png 2x"
          alt="Bpla pegasus arms 25"
          loading="lazy"
          decoding="async"
          className="w-full"
        />
      </motion.picture>

      {/* ===== PARAGRAPHS ===== */}
      <motion.div
        className="w-full flex flex-col justify-end gap-5 items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {t('systems.bpla.hero.paragraphs', { returnObjects: true }).map(
          (text: string, index: number) => (
            <motion.div key={index} variants={fadeUp} custom={3 + index}>
              <Paragraph
                className="max-w-full tablet:max-w-[798px] desktop:max-w-[1011px]"
                variant="grey"
                text={text}
              />
            </motion.div>
          ),
        )}
      </motion.div>

      {/* ===== STAT CARDS WITH 3D + SVG ANIM ===== */}
      <motion.div
        className="flex flex-col tablet:flex-row gap-4 desktop:gap-6 justify-between w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col tablet:flex-row gap-4 desktop:gap-6">
          <motion.div variants={fadeUp} custom={5}>
            <ArrowStat
              icon={
                <motion.div variants={svgAnim}>
                  <Mina />
                </motion.div>
              }
              text={t('systems.bpla.hero.cards.0')}
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={6}>
            <ArrowStat
              icon={
                <motion.div variants={svgAnim}>
                  <Munitions />
                </motion.div>
              }
              text={t('systems.bpla.hero.cards.1')}
            />
          </motion.div>
        </div>

        <motion.div variants={fadeUp} custom={7}>
          <ArrowStat
            icon={
              <motion.div variants={svgAnim}>
                <Delivery />
              </motion.div>
            }
            text={t('systems.bpla.hero.cards.2')}
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}

const ArrowStat = ({ icon, text }: any) => (
  <StatCard
    className="gap-0 pt-0 tablet:pt-0 desktop:pt-0"
    iconClassName="flex justify-center"
    value={icon}
    description={text}
    highlight={false}
  />
)
