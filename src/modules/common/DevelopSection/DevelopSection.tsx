import { ButtonLink } from '@/components/buttons/ButtonLink'
import { ButtonPrimary } from '@/components/buttons/ButtonPrimary'
import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

export const DevelopSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex flex-col gap-[42px] develop-bg relative"
    >
      {/* мʼякий чорний фейд для “проявлення” секції */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        >
          <SectionTitle
            title={`${t('developMain.title')}`}
            className="text-left max-w-[1000px]"
          />
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-9">
            <motion.p
              className="font-[300] text-[#FDFFFF] max-w-[665px] text-2xl uppercase text-left"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              {t('developMain.description')}
            </motion.p>

            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <ButtonLink to="/career">
                {t('developMain.button.team')}
              </ButtonLink>

              <ButtonPrimary variant="secondary" to="#contacts">
                {t('developMain.button.partner')}
              </ButtonPrimary>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
