import { StatCard } from '@/components/cards'
import SectionContainer from '@/components/container/SectionContainer'
import { Paragraph, SectionTitle, SubTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import Mina from '@/assets/icons/mina.svg?react'
import Munitions from '@/assets/icons/munitions.svg?react'
import Delivery from '@/assets/icons/delivery.svg?react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Bomb from '@/assets/icons/bomb.svg?react'
import { ClientOnly } from '@tanstack/react-router'

export const BplaHero = () => {
  const { t, i18n } = useTranslation()
  const imageRef = useRef(null)
  const [techChar, setTechChar] = useState({
    '1x': '/images/systems/bpla/d_bpla_specifications_en@1x.png',
    '2x': '/images/systems/bpla/d_bpla_specifications_en@2x.png',
  })

  const isUkr = i18n.language === 'uk'

  useEffect(() => {
    if (isUkr) {
      setTechChar({
        '1x': '/images/systems/bpla/d_bpla_specifications_ua@1x.png',
        '2x': '/images/systems/bpla/d_bpla_specifications_ua@2x.png',
      })
    } else {
      setTechChar({
        '1x': '/images/systems/bpla/d_bpla_specifications_en@1x.png',
        '2x': '/images/systems/bpla/d_bpla_specifications_en@2x.png',
      })
    }
  }, [isUkr])

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
      className="flex pt-[104px] tablet:pt-[122px] desktop:pt-[166px] flex-col justify-center items-center gap-[54px] tablet:gap-16 desktop:gap-[82px]"
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
            className="font-light uppercase"
            variant="grey"
            text={`${t('navMain.systems')} / ${t('navMain.bpla')}`}
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <SubTitle
            title={`${t('systems.bpla.hero.title')}`}
            className="text-left font-bold w-full block tablet:hidden"
          />
          <SectionTitle
            title={`${t('systems.bpla.hero.title')}`}
            className="text-left w-full hidden tablet:block"
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={2}>
          <Paragraph
            className="max-w-3xl desktop:max-w-[1011px]"
            variant="grey"
            text={t('systems.bpla.hero.description')}
          />
        </motion.div>

        <motion.video
          autoPlay
          loop
          muted
          preload="auto"
          className="w-full object-cover"
          src="/video/bpla.mp4"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.25,
          }}
          viewport={{ once: true, amount: 0.3 }}
        />
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
        <img
          src={techChar['1x']}
          srcSet={`${techChar['1x']} 1x, ${techChar['2x']} 2x`}
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
        <motion.div
          className="max-w-[798px] desktop:max-w-[1011px] flex flex-col gap-5"
          variants={fadeUp}
        >
          {t('systems.bpla.hero.paragraphs', { returnObjects: true }).map(
            (text: string, index: number) => (
              <Paragraph
                key={index}
                className=" w-full block text-left"
                variant="grey"
                text={text}
              />
            ),
          )}
        </motion.div>
      </motion.div>

      {/* ===== STAT CARDS WITH 3D + SVG ANIM ===== */}
      <motion.div
        className="flex flex-col tablet:flex-row gap-4 desktop:gap-6 items-center justify-between w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row gap-4 desktop:gap-6">
          <motion.div variants={fadeUp} custom={5}>
            <ArrowStat
              icon={
                <motion.div variants={svgAnim}>
                  <ClientOnly>
                    <Mina
                      className="size-[120px] tablet:size-[100px] desktop:size-[120px]"
                      preserveAspectRatio="none"
                    />
                  </ClientOnly>
                </motion.div>
              }
              text={t('systems.bpla.hero.cards.0')}
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={6}>
            <ArrowStat
              icon={
                <motion.div variants={svgAnim}>
                  <ClientOnly>
                    <Munitions
                      className="size-[120px] tablet:size-[100px] desktop:size-[120px]"
                      preserveAspectRatio="none"
                    />
                  </ClientOnly>
                </motion.div>
              }
              text={t('systems.bpla.hero.cards.1')}
            />
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 desktop:gap-6">
          <motion.div variants={fadeUp} custom={7}>
            <ArrowStat
              icon={
                <motion.div variants={svgAnim}>
                  <ClientOnly>
                    <Bomb
                      className="size-[120px]tablet:size-[100px] desktop:size-[120px]"
                      preserveAspectRatio="none"
                    />
                  </ClientOnly>
                </motion.div>
              }
              text={t('systems.bpla.hero.cards.2')}
            />
          </motion.div>

          <motion.div variants={fadeUp} custom={8}>
            <ArrowStat
              icon={
                <motion.div variants={svgAnim}>
                  <ClientOnly>
                    <Delivery
                      className="size-[120px] tablet:size-[100px] desktop:size-[120px]"
                      preserveAspectRatio="none"
                    />
                  </ClientOnly>
                </motion.div>
              }
              text={t('systems.bpla.hero.cards.3')}
            />
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}

const ArrowStat = ({ icon, text }: any) => (
  <StatCard
    className="gap-0 pt-0 tablet:pt-0"
    iconClassName="flex justify-center"
    descriptionClassName="text-[14px] tablet:text-[12px] desktop:text-[14px] text-center"
    value={icon}
    description={text}
    highlight={false}
  />
)
