import { useState } from 'react'
import { motion } from 'framer-motion'
import { Paragraph } from '@/components/text'
import arrowDownRight from '@/assets/icons/arrow-down-right.svg'
import arrowDownRightActive from '@/assets/icons/arrow-down-right-active.svg'

export interface ContactListItemProps {
  title: string
  href: string
  hrefTel?: string
  description: string
  descriptionTel?: string
}

export interface ContactListProps {
  items: ContactListItemProps[]
}

export const ContactList = ({ items }: ContactListProps) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.12 },
    }),
  }

  return (
    <ul className="flex flex-col gap-6">
      {items.map((item, index) => (
        <ContactListItem key={index} index={index} fadeUp={fadeUp} {...item} />
      ))}
    </ul>
  )
}

const ContactListItem = ({
  title,
  href,
  hrefTel,
  descriptionTel,
  description,
  index,
  fadeUp,
}: ContactListItemProps & { index: number; fadeUp: any }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <motion.li
      className="flex justify-between items-center"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      // ❗ без scale
      whileHover={{
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <div className="flex flex-2 flex-col tablet:flex-row justify-between gap-3">
        <Paragraph variant="grey" className="flex-1" text={title} />

        {hrefTel && (
          <div className="flex flex-col flex-1">
            <motion.a href={href}>
              <Paragraph
                className="font-medium text-[20px] text-left tablet:text-[24px] desktop:text-[32px]"
                variant="light"
                text={description}
              />
            </motion.a>

            <motion.a href={hrefTel}>
              <Paragraph
                className="font-medium text-[20px] text-left tablet:text-[24px] desktop:text-[32px]"
                variant="light"
                text={descriptionTel ?? ''}
              />
            </motion.a>
          </div>
        )}

        {!hrefTel && (
          <div className="flex flex-col flex-1 items-start">
            <motion.a href={href}>
              <Paragraph
                className="font-medium text-[20px] text-left tablet:text-[24px] desktop:text-[32px]"
                variant="light"
                text={description}
              />
            </motion.a>
          </div>
        )}
      </div>

      {/* --- HOVER ARROW --- */}
      <motion.div
        className="flex-1 flex justify-end"
        whileHover={{
          transition: { duration: 0.25, ease: 'easeOut' },
        }}
      >
        <img
          className="size-[42px] transition-opacity duration-200"
          src={isHover ? arrowDownRightActive : arrowDownRight}
          width={42}
          height={42}
          alt="Arrow"
        />
      </motion.div>
    </motion.li>
  )
}
