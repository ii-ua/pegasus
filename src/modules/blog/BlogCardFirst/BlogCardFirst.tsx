import { Paragraph } from '@/components/text'
import { Link } from '@tanstack/react-router'

export interface BlogCardFirstProps {
  cover: string
  title: string
  description: string
  date: string
  slug: string
}
export const BlogCardFirst = ({
  cover,
  title,
  description,
  date,
  slug,
}: BlogCardFirstProps) => {
  return (
    <div className="flex flex-col gap-6">
      <Paragraph variant="grey" className="text-[#939393]" text={date} />
      <img
        src={cover}
        crossOrigin="anonymous"
        decoding="async"
        alt={title}
        className="w-full h-auto"
      />
      <Paragraph
        variant="light"
        className="font-semibold text-[20px] tablet:text-[24px] desktop:text-[32px] "
        text={title}
      />
      <div
        className="prose prose-invert [&_p]:!m-0 text-[16px] tablet:text-[20px] desktop:text-[24px] max-w-none text-[#d9d9d9] flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Link
        to="/blog/$slug"
        params={{ slug }}
        className="decoration-[#FF6600] decoration-1 underline-offset-1 bg-gradient-to-r from-[#CE4906] via-[#FF6600] to-[#FF8B20] bg-clip-text text-transparent mt-2 inline-flex items-center gap-2  font-normal text-[16px] tablet:text-[20px] desktop:text-[24px] 
                   hover:opacity-80 transition"
      >
        Детальніше
        <span aria-hidden>→</span>
      </Link>
    </div>
  )
}
