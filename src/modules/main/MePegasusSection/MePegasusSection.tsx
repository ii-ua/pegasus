import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const MePegasusSection = () => {
  const { t } = useTranslation()
  const paragraphs = t('mePegasusMain.paragraphs', {
    returnObjects: true,
  }) as string[]

  return (
    <SectionContainer
      as="section"
      className="relative flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col tablet:max-w-[795px] desktop:max-w-[957px] gap-4 tablet:gap-6 desktop:gap-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title={t('mePegasusMain.title')}
            className="text-center"
          />
        </motion.div>

        <div className="flex flex-col gap-6 items-center">
          {paragraphs.map((text, i) => (
            <motion.p
              key={text}
              className="font-normal text-[#FDFFFF] text-[16px] tablet:text-[20px] desktop:text-[24px] uppercase text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}

          <motion.img
            src="/images/main/mePegasus/d_drone@1x.png"
            srcSet="/images/main/mePegasus/d_drone@1x.png 1x, /images/main/mePegasus/d_drone@2x.png 2x"
            alt="БпЛА"
            width={203}
            height={203}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.5,
              ease: [0.23, 1, 0.32, 1],
            }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </SectionContainer>
  )
}
