import { CareerCard } from '@/components/cards'
import { Paragraph, SectionTitle } from '@/components/text'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SectionContainer from '@/components/container/SectionContainer'

export const CareersListSection = () => {
  const { t } = useTranslation()

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

  return (
    <SectionContainer
      as="section"
      className="flex flex-col justify-center items-left gap-[42px]"
    >
      {/* ==== TITLE + PARAGRAPH ==== */}
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeUp} custom={0}>
          <SectionTitle
            title={`${t('career.lookingFor.title')}`}
            className="text-left max-w-[600px] desktop:max-w-[760px]"
          />
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <Paragraph
            variant="grey"
            className="max-w-[960px]"
            text={t('career.lookingFor.paragraphs.0')}
          />
        </motion.div>
      </motion.div>

      {/* ==== CARDS ==== */}
      <motion.ul
        className="grid gap-4 
    mobile:grid-cols-1 
    sm:grid-cols-2 
    tablet:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {t('career.lookingFor.cards', { returnObjects: true }).map(
          (item, index) => (
            <CareerCard key={index} item={item} />
          ),
        )}
      </motion.ul>

      {/* ==== PARAGRAPH BOTTOM ==== */}
      <motion.div
        variants={fadeUp}
        custom={6}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Paragraph
          variant="grey"
          className="max-w-[1110px]"
          text={t('career.lookingFor.paragraphs.1')}
        />
      </motion.div>

      {/* ==== LINKS ==== */}
      <motion.ul
        className="flex gap-4 desktop:gap-6 items-center flex-col sm:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {[
          {
            href: 'https://jobs.dou.ua/companies/tov-pegas-arms/vacancies/',
            icon: '/images/career/dou.svg',
            alt: 'Dou.ua',
          },
          {
            href: 'https://www.work.ua/jobs/by-company/2514779/#jobs',
            icon: '/images/career/work.svg',
            alt: 'Work.ua',
          },
          {
            href: 'https://robota.ua/ru/company13561337',
            icon: '/images/career/robota.svg',
            alt: 'robota.ua',
          },
        ].map((link, index) => (
          <motion.li
            key={index}
            variants={fadeUp}
            custom={7 + index}
            whileHover={{ scale: 1.06, opacity: 1 }}
            whileTap={{ scale: 0.96 }}
          >
            <JobsLinks href={link.href} iconSrc={link.icon} alt={link.alt} />
          </motion.li>
        ))}
      </motion.ul>
    </SectionContainer>
  )
}

const JobsLinks = ({
  href,
  iconSrc,
  alt,
}: {
  href: string
  iconSrc: string
  alt: string
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="cursor-pointer"
      rel="noreferrer noopener"
    >
      <img src={iconSrc} alt={alt} />
    </a>
  )
}
