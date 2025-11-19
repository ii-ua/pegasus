import { ButtonLink } from '@/components/buttons/ButtonLink'
import { ButtonPrimary } from '@/components/buttons/ButtonPrimary'

import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import SectionContainer from '@/components/container/SectionContainer'

export const DevelopSection = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer
      as="section"
      className="flex flex-col gap-0 tablet:gap-0 desktop:gap-0 develop-bg relative"
    >
      {/* мʼякий чорний фейд для “проявлення” секції */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0.25 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <div className="flex flex-col gap-4 tablet:gap-6 desktop:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        >
          <SectionTitle
            title={`${t('developMain.title')}`}
            className="text-left max-w-[598px] desktop:max-w-[1000px]"
          />
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="flex max-w-[527px] desktop:max-w-[665px] flex-col gap-4 tablet:gap-6 desktop:gap-8">
            <motion.p
              className="text-[#D9D9D9] text-[16px] tablet:text-[20px] desktop:text-[24px] tablet:max-w-[527px] desktop:max-w-[665px]  uppercase text-left"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              {t('developMain.description')}
            </motion.p>

            <motion.div
              className="flex flex-col tablet:flex-row gap-3 tablet:gap-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <ButtonLink to="/career">
                {t('developMain.button.team')}
              </ButtonLink>

              <ButtonPrimary
                className="min-w-[247px]"
                variant="secondary"
                to="#contacts"
              >
                {t('developMain.button.partner')}
              </ButtonPrimary>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
