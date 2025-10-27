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
        `flex flex-col list-disc w-full text-white text-[14px]`,
        className,
      )}
    >
      {paragraphs.map((paragraph, index) => (
        <li
          className="py-5 border-b-2 border-dashed w-full border-[#939393] last:border-none first:pt-0"
          key={index}
        >
          <Paragraph className="font-medium" text={paragraph} />
        </li>
      ))}
    </ul>
  )
}
