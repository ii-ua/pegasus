import { Paragraph } from '@/components/text'
import { Link, useRouterState } from '@tanstack/react-router'
import { localeFromPathname, localizePath } from '@/common/localization/localePath'

export interface BlogCardProps {
  cover: string
  title: string
  description: string
  date: string
  slug: string
}
export const BlogCard = ({
  cover,
  title,
  description,
  date,
  slug,
}: BlogCardProps) => {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const locale = localeFromPathname(pathname)
  const blogPostPath = localizePath('/blog/$slug', locale)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={cover}
          crossOrigin="anonymous"
          decoding="async"
          alt={title}
          className="max-w-[321px] object-cover max-h-[370px]"
        />
        <div className="flex flex-col gap-6">
          <Paragraph variant="grey" className="text-[#939393]" text={date} />
          <Paragraph
            variant="light"
            className="font-semibold text-[20px] tablet:text-[24px] desktop:text-[32px] "
            text={title}
          />
          <div
            className="prose prose-invert [&_p]:!m-0 text-[16px] tablet:text-[20px] desktop:text-[24px] max-w-none text-[#d9d9d9] flex flex-col gap-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>

      <Link
        to={blogPostPath}
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
