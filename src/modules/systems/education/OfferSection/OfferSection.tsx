import { SectionContainer } from '@/components/container'
import { ParagraphsList } from '@/components/lists/ParagraphsList'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const OfferSection = () => {
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
    <SectionContainer
      as="section"
      className="flex flex-col justify-center items-left gap-[24px]"
    >
      {/* === TITLE + SMALL PARAGRAPHS === */}
      <motion.div
        className="flex flex-col tablet:flex-row gap-6 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp} custom={0} className="w-full flex-2">
          <SectionTitle
            title={t('systems.education.offer.title')}
            className="text-left w-full flex-2"
          />
        </motion.div>

        <motion.ul
          variants={fadeUp}
          custom={1}
          className="flex flex-col gap-6 flex-1/8"
        >
          {t('systems.education.offer.paragraphs', {
            returnObjects: true,
          }).map((offer: string, index: number) => (
            <li key={index}>
              <Paragraph variant="grey" text={offer} />
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* === LIST + IMAGE === */}
      <motion.div
        className="flex flex-col tablet:flex-row gap-8 tablet:gap-4 desktop:gap-6 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex-1 order-1 tablet:order-0"
        >
          <ParagraphsList
            className="flex-1 order-1 tablet:order-0"
            paragraphs={t('systems.education.offer.items', {
              returnObjects: true,
            })}
          />
        </motion.div>

        <motion.img
          variants={fadeUp}
          custom={3}
          className="flex-1 w-max-[665px] h-max-[579px] object-contain order-0 tablet:order-1"
          src="/images/systems/education/d_@1x.jpg"
          alt={t('systems.education.offer.title')}
          srcSet="/images/systems/education/d_@1x.jpg 1x, /images/systems/education/d_@2x.jpg 2x"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </SectionContainer>
  )
}
