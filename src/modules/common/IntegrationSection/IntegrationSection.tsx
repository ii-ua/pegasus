import { SectionContainer } from '@/components/container'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import Brave from '@/assets/logos/brave.svg?react'
import DotChain from '@/assets/logos/dot_chain.svg?react'
import { motion } from 'framer-motion'

export const IntegrationSection = () => {
  const { t } = useTranslation()

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.15 },
    }),
  }

  return (
    <SectionContainer
      as="section"
      className="flex flex-col tablet:flex-row justify-center items-center gap-[24px]"
    >
      <div className="flex flex-col w-full gap-4 tablet:gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
        >
          <SectionTitle
            title={`${t('systems.bpla.integration.title')}`}
            className="text-left max-w-[550px]"
          />
        </motion.div>

        <motion.div
          className="w-full flex justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={1}
        >
          <Paragraph
            text={t('systems.bpla.integration.description')}
            variant="grey"
            className="max-w-[540px] desktop:max-w-[665px] block"
          />
        </motion.div>
      </div>

      {/* === ЛОГОТИПИ (анімація додана, стилі НЕ чіпаю) === */}
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        custom={2}
      >
        {/* BRAVE — інтерактив + акцент + hover */}
        <motion.a
          href="https://market-brave1.delta.mil.gov.ua/pegasus-arms-25-bpla/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: 'pointer' }}
          initial={{ filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))' }} // ← базовий стан (без неону)
          whileHover={{
            scale: 1.06,
            filter: 'drop-shadow(0px 0px 12px rgba(255,102,0,0.45))', // ← неон тільки під час hover
            transition: { duration: 0.25, ease: 'easeOut' },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <Brave />
          </motion.div>
        </motion.a>

        {/* DOTCHAIN — просте fade-up, без акценту */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
        >
          <DotChain />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
