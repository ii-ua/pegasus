import { Paragraph } from '@/components/text'
import { motion } from 'framer-motion'

import Management from '@/assets/icons/management.svg?react'
import Engineering from '@/assets/icons/engineering.svg?react'
import Production from '@/assets/icons/production.svg?react'
import Service from '@/assets/icons/service.svg?react'

export interface CareerCardItem {
  description: string
  title: string
  count: string
  icon: 'engineering' | 'production' | 'service' | 'management'
}
export interface CareerCardProps {
  item: CareerCardItem
  className?: string
}

export const CareerCard = ({ item }: CareerCardProps) => {
  const { description, title, count, icon } = item

  return (
    <motion.li
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="p-4 desktop:p-6 flex gap-6 tablet:gap-4 w-full justify-between"
      style={{
        border: '2px solid',
        borderImageSource:
          'linear-gradient(90.79deg, #F5F5F5 0.08%, #FDFFFF 100%)',
        borderImageSlice: 1,
        borderRadius: '8px',
      }}
    >
      <div className="flex flex-col gap-4 justify-between max-w-[229px] tablet:max-w-[138px]">
        <Paragraph variant="light" text={title} />
        <Paragraph variant="grey" text={description} />
        <Paragraph variant="grey" text={count} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
      >
        {icon === 'engineering' && (
          <Engineering
            preserveAspectRatio="none"
            className="w-[72px] h-[72px]"
          />
        )}
        {icon === 'production' && (
          <Production
            preserveAspectRatio="none"
            className="w-[72px] h-[72px]"
          />
        )}
        {icon === 'service' && (
          <Service preserveAspectRatio="none" className="w-[72px] h-[72px]" />
        )}
        {icon === 'management' && (
          <Management
            preserveAspectRatio="none"
            className="size-[72px] desktop:size-[100px]"
          />
        )}
      </motion.div>
    </motion.li>
  )
}
