import { Paragraph } from '@/components/text'
import arrowDownRight from '@/assets/icons/arrow-down-right.svg'
import { motion } from 'framer-motion'

export interface ContactListItemProps {
  title: string
  href: string
  description: string
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
  description,
  index,
  fadeUp,
}: ContactListItemProps & { index: number; fadeUp: any }) => {
  return (
    <motion.li
      className="flex justify-between items-center"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.02,
        x: 4,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
    >
      <div className="flex flex-2 flex-col tablet:flex-row justify-between gap-3">
        <Paragraph variant="grey" text={title} />

        <motion.a
          href={href}
          whileHover={{
            opacity: 1,
            x: 2,
          }}
        >
          <Paragraph
            className="font-medium text-[20px] text-left tablet:text-[24px] desktop:text-[32px]"
            variant="light"
            text={description}
          />
        </motion.a>
      </div>

      <motion.div
        className="flex-1 flex justify-end"
        whileHover={{
          rotate: 18,
          x: 4,
          transition: { duration: 0.25, ease: 'easeOut' },
        }}
      >
        <img
          className="size-[42px]"
          src={arrowDownRight}
          width={42}
          height={42}
          alt=""
        />
      </motion.div>
    </motion.li>
  )
}
