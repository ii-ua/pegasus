import { Paragraph } from '@/components/text'
import arrowDownRight from '@/assets/icons/arrow-down-right.svg'

export interface ContactListItemProps {
  title: string
  href: string
  description: string
}

export interface ContactListProps {
  items: ContactListItemProps[]
}

export const ContactList = ({ items }: ContactListProps) => {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((item, index) => (
        <ContactListItem
          key={index}
          title={item.title}
          href={item.href}
          description={item.description}
        />
      ))}
    </ul>
  )
}

const ContactListItem = ({
  title,
  href,
  description,
}: ContactListItemProps) => {
  return (
    <li className="flex justify-between items-center">
      <div className="flex flex-2 flex-col tablet:flex-row justify-between gap-3">
        <Paragraph variant="grey" text={title} />
        <a href={href}>
          <Paragraph
            className="font-medium text-[20px] text-left tablet:text-[24px] desktop:text-[32px]"
            variant="light"
            text={description}
          />
        </a>
      </div>
      <div className="flex-1 flex justify-end">
        <img
          className="size-[42px]"
          src={arrowDownRight}
          width={42}
          height={42}
          alt=""
        />
      </div>
    </li>
  )
}
