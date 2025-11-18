import { cn } from '@/common/utils/cn'
import { Paragraph } from '@/components/text'
import { motion } from 'framer-motion'

export interface ParagraphsListProps {
  paragraphs: string[]
  className?: string
  classNameItem?: string
}

export const ParagraphsList = ({
  paragraphs,
  className,
  classNameItem,
}: ParagraphsListProps) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
        delay: i * 0.08,
      },
    }),
  }

  return (
    <ul
      className={cn(
        `flex flex-col w-full text-[#D9D9D9] text-[16px]`,
        className,
      )}
    >
      {paragraphs.map((paragraph, index) => (
        <motion.li
          key={index}
          className={cn(
            'py-3.5 tablet:py-4 desktop:py-5 flex gap-3.5 border-b-2 border-dashed items-center border-[#5A5A5A] last:border-none last:pb-0 first:pt-0',
            classNameItem,
          )}
          variants={fadeUp}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="w-[4px] h-[4px] flex-shrink-0 rounded-full bg-[#D9D9D9]" />
          <Paragraph variant="grey" text={paragraph} />
        </motion.li>
      ))}
    </ul>
  )
}
