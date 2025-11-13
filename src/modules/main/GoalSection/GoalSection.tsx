import { StatCard } from '@/components/cards'
import { SectionContainer } from '@/components/container'
import { SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const GoalSection = () => {
  const { t } = useTranslation()
  const paragraphs = t('goalMain.paragraphs', {
    returnObjects: true,
  }) as string[]

  return (
    <SectionContainer as="section" className="flex flex-col">
      {/* верхній блок: заголовок + текст, вʼїзд зліва */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-4 tablet:gap-6 desktop:gap-8"
      >
        <SectionTitle title={`${t('goalMain.title')}`} className="text-left" />

        <div className="flex flex-col gap-6 items-end">
          {paragraphs.map((text, i) => (
            <motion.p
              key={text}
              className="font-normal text-[#FDFFFF] text-[16px] tablet:text-[20px] desktop:text-[24px] tablet:max-w-[526px] desktop:max-w-[665px] uppercase text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.12,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* нижній блок: картки з різним рухом */}
      <motion.div
        className="flex justify-between"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div transition={{ duration: 0.2 }}>
            <StatCard
              value={t('goalMain.cards.bpla.title')}
              description={t('goalMain.cards.bpla.description')}
            />
          </motion.div>

          <motion.div transition={{ duration: 0.2 }}>
            <StatCard
              value={t('goalMain.cards.defence.title')}
              description={t('goalMain.cards.defence.description')}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <StatCard
            value={t('goalMain.cards.team.title')}
            description={t('goalMain.cards.team.description')}
          />
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}
