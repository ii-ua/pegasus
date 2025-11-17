import { ButtonLink } from '@/components/buttons/ButtonLink'
import { SectionContainer } from '@/components/container/SectionContainer/SectionContainer'
import { Paragraph } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer
      as="section"
      className="relative pt-[90px] tablet:pt-[64px] hero-bg h-svh overflow-hidden"
    >
      {/* чорний фейд як ефект вмикання */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black z-40 pointer-events-none"
      />

      <div className="flex flex-col justify-between h-full relative z-30">
        {/* заголовок */}
        <motion.h1
          className="font-[Univermag]  tracking-normal font-normal text-[64px] lg:text-[100px] [@media(min-width:1326px)]:text-[128px] text-white w-full text-center z-30"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {t('heroMain.title')}
        </motion.h1>

        {/* текст */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col max-w-[465px] gap-9"
        >
          <Paragraph
            className="font-normal text-[#D9D9D9] text-left"
            text={t('heroMain.description')}
          />

          {/* кнопка */}
          <motion.div whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
            <ButtonLink to="/systems/bpla">
              {t('heroMain.buttons.learnMore')}
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
