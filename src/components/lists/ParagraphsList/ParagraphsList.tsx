import { cn } from '@/common/utils/cn'
import { Paragraph } from '@/components/text'
export interface ParagraphsListProps {
  paragraphs: string[]
  className?: string
}

export const ParagraphsList = ({
  paragraphs,
  className,
}: ParagraphsListProps) => {
  return (
    <ul
      className={cn(
        `flex flex-col w-full text-[#D9D9D9] text-[16px]`,
        className,
      )}
    >
      {paragraphs.map((paragraph, index) => (
        <li
          className="py-3.5 tablet:py-4 desktop:py-5 flex gap-3.5  border-b-2 border-dashed items-center border-[#5A5A5A] last:border-none last:pb-0 first:pt-0"
          key={index}
        >
          <div className=" w-[4px] h-[4px] flex-shrink-0 rounded-full bg-[#D9D9D9]" />
          <Paragraph variant="grey" text={paragraph} />
        </li>
      ))}
    </ul>
  )
}
