import { Paragraph } from '@/components/text'
import { motion } from 'framer-motion'

import Management from '@/assets/icons/management.svg?react'
import Engineering from '@/assets/icons/engineering.svg?react'
import Production from '@/assets/icons/production.svg?react'
import Service from '@/assets/icons/service.svg?react'
import { ClientOnly } from '@tanstack/react-router'

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

  const descriptionList = description.split(', ')

  return (
    <motion.li
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="p-4 desktop:p-6 flex gap-4 tablet:gap-4 w-full justify-between"
      style={{
        border: '2px solid',
        borderImageSource:
          'linear-gradient(90.79deg, #F5F5F5 0.08%, #FDFFFF 100%)',
        borderImageSlice: 1,
        borderRadius: '8px',
      }}
    >
      <div className="w-full flex flex-col gap-4 justify-between">
        <Paragraph
          variant="light"
          text={title}
          className="uppercase flex items-center justify-between"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
          >
            {icon === 'engineering' && (
              <ClientOnly>
                <Engineering
                  preserveAspectRatio="none"
                  className="w-[56px] h-[54px] desktop:w-[72px] desktop:h-[72px]"
                />
              </ClientOnly>
            )}
            {icon === 'production' && (
              <ClientOnly>
                <Production
                  preserveAspectRatio="none"
                  className="w-[56px] h-[54px] desktop:w-[72px] desktop:h-[72px]"
                />
              </ClientOnly>
            )}
            {icon === 'service' && (
              <ClientOnly>
                <Service
                  preserveAspectRatio="none"
                  className="w-[56px] h-[54px] desktop:w-[72px] desktop:h-[72px]"
                />
              </ClientOnly>
            )}
            {icon === 'management' && (
              <ClientOnly>
                <Management
                  preserveAspectRatio="none"
                  className="w-[56px] h-[54px] desktop:w-[72px] desktop:h-[72px]"
                />
              </ClientOnly>
            )}
          </motion.div>
        </Paragraph>
        <Paragraph
          variant="grey"
          className="tablet:h-[272px] desktop:h-[328px] border-gradient pt-4 desktop:pt-6 pb-4 desktop:pb-6"
        >
          <ol className="list-disc pl-6 desktop:pl-8">
            {descriptionList.map((item) => (
              <li key={item} className="">
                {item}
              </li>
            ))}
          </ol>
        </Paragraph>
        <Paragraph variant="grey" text={count} className="text-[#FF6600]" />
      </div>
    </motion.li>
  )
}
